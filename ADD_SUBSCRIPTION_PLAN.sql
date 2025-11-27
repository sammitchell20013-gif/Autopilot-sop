-- Add subscription plan fields to profiles table
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS subscription_plan TEXT DEFAULT 'free',
ADD COLUMN IF NOT EXISTS subscription_status TEXT DEFAULT 'active',
ADD COLUMN IF NOT EXISTS subscription_started_at TIMESTAMPTZ,
ADD COLUMN IF NOT EXISTS subscription_ends_at TIMESTAMPTZ;

-- Update your account to Pro plan (replace with your user email)
UPDATE profiles 
SET 
  subscription_plan = 'pro',
  subscription_status = 'active',
  subscription_started_at = NOW(),
  subscription_ends_at = NOW() + INTERVAL '1 year'
WHERE id IN (
  SELECT id FROM auth.users WHERE email = 'your-email@example.com'
);

-- Verify the update
SELECT 
  id,
  full_name,
  email,
  subscription_plan,
  subscription_status,
  subscription_started_at,
  subscription_ends_at
FROM profiles
JOIN auth.users ON profiles.id = auth.users.id;

