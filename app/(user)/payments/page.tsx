import { auth } from '@clerk/nextjs/server';
import { db } from '@/db';
import { subscriptions } from '@/db/schema';
import { eq } from 'drizzle-orm';

const page = async () => {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const subscription = await db.query.subscriptions.findFirst({
    where: eq(subscriptions.userId, userId)
  });

  return (
    <div>
      <h1>Subscription Details</h1>
    </div>
  )
};

export default page;
