import { useState, useEffect } from 'react';
import { getUserSubscription, type Subscription, type SubscriptionPlan } from '@/lib/supabase/subscriptions';
import { useAuth } from './useAuth';

export function useSubscription() {
  const { user } = useAuth();
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubscription = async () => {
      if (!user?.id) {
        setLoading(false);
        return;
      }

      const { data, error } = await getUserSubscription(user.id);
      
      if (error) {
        console.error('Error fetching subscription:', error);
      }
      
      setSubscription(data);
      setLoading(false);
    };

    fetchSubscription();
  }, [user?.id]);

  return { subscription, loading };
}

