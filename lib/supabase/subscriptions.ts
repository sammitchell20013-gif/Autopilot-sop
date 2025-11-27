import { supabase } from "./client";

export type SubscriptionPlan = 'free' | 'pro' | 'business' | 'enterprise';
export type SubscriptionStatus = 'active' | 'cancelled' | 'expired' | 'trial';

export interface Subscription {
  plan: SubscriptionPlan;
  status: SubscriptionStatus;
  started_at?: string;
  ends_at?: string;
}

/**
 * Get user's subscription details
 */
export async function getUserSubscription(userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('subscription_plan, subscription_status, subscription_started_at, subscription_ends_at')
    .eq('id', userId)
    .single();

  if (error) {
    console.error('Error fetching subscription:', error);
    return { 
      data: { 
        plan: 'free' as SubscriptionPlan, 
        status: 'active' as SubscriptionStatus 
      }, 
      error 
    };
  }

  return {
    data: {
      plan: (data?.subscription_plan || 'free') as SubscriptionPlan,
      status: (data?.subscription_status || 'active') as SubscriptionStatus,
      started_at: data?.subscription_started_at,
      ends_at: data?.subscription_ends_at,
    },
    error: null,
  };
}

/**
 * Update user's subscription plan (admin function for now)
 */
export async function updateUserSubscription(
  userId: string,
  plan: SubscriptionPlan,
  status: SubscriptionStatus = 'active'
) {
  const started_at = new Date().toISOString();
  const ends_at = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(); // 1 year from now

  const { data, error } = await supabase
    .from('profiles')
    .update({
      subscription_plan: plan,
      subscription_status: status,
      subscription_started_at: started_at,
      subscription_ends_at: ends_at,
    })
    .eq('id', userId)
    .select()
    .single();

  if (error) {
    console.error('Error updating subscription:', error);
    return { data: null, error };
  }

  return { data, error: null };
}

/**
 * Check if user has access to a feature based on their plan
 */
export function hasFeatureAccess(plan: SubscriptionPlan, feature: string): boolean {
  const planFeatures = {
    free: ['basic_sops', 'limited_tasks'],
    pro: ['basic_sops', 'unlimited_sops', 'unlimited_tasks', 'video_upload', 'team_5'],
    business: ['basic_sops', 'unlimited_sops', 'unlimited_tasks', 'video_upload', 'team_20', 'analytics', 'custom_branding', 'priority_support'],
    enterprise: ['all_features'],
  };

  const features = planFeatures[plan] || planFeatures.free;
  return features.includes(feature) || features.includes('all_features');
}

/**
 * Get plan limits
 */
export function getPlanLimits(plan: SubscriptionPlan) {
  const limits = {
    free: {
      sops: 1,
      tasks: 5,
      team_members: 1,
      video_uploads: 0,
      storage_gb: 0.5,
    },
    pro: {
      sops: -1, // unlimited
      tasks: -1,
      team_members: 5,
      video_uploads: -1,
      storage_gb: 10,
    },
    business: {
      sops: -1,
      tasks: -1,
      team_members: 20,
      video_uploads: -1,
      storage_gb: 50,
    },
    enterprise: {
      sops: -1,
      tasks: -1,
      team_members: -1,
      video_uploads: -1,
      storage_gb: -1,
    },
  };

  return limits[plan] || limits.free;
}

