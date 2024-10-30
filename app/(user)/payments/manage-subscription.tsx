'use client';
import { useState } from 'react';
import { getStripe } from '@/lib/stripe-client';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

const ManageSubscription = () => {
  return (
    <div>
      <h1 className="text-4xl mb-3">Manage Subscription</h1>
    </div>
  )
};

export default ManageSubscription;
