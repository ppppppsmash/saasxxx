
import { stripe } from "@/lib/stripe";
import { auth } from "@clerk/nextjs/server";

import { eq } from 'drizzle-orm';
import { db } from '@/db';
import { subscriptions } from '@/db/schema';

export async function POST(req: Request) {
  const { price, quantity = 1 } = await req.json();

  const { userId } = auth();

  if (!userId) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const userSubscription = await db.query.subscriptions.findFirst({
    where: eq(subscriptions.userId, userId),
  });

  let customer;
  if (userSubscription) {
    customer = {
      id: userSubscription.stripeCustomerId,
    };
  } else {
    const customerData: {
      metadata: {
        dbId: string;
      }
    } = {
      metadata: {
        dbId: userId,
      },
    };

    const response = await stripe.customers.create(customerData);

    customer = { id: response.id };

    await db.insert(subscriptions).values({
      userId,
      stripeCustomerId: customer.id,
    });
  }
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  if (!customer.id) {
    return new Response(JSON.stringify({ error: 'Failed to get customer id' }), { status: 500 });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      success_url: `${baseUrl}/payments/checkout-success`,
      customer: customer?.id,
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [
        {
          price,
          quantity,
        }
      ]
    });

    if (session) {
      return new Response(JSON.stringify({ sessionId: session.id }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}