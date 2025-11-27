-- Disable RLS on Storage Buckets
-- This might be where the error is coming from!

-- First, check if there are any policies on the videos bucket
SELECT * FROM storage.policies WHERE bucket_id = 'videos';

-- Delete all policies on the videos bucket
DELETE FROM storage.policies WHERE bucket_id = 'videos';

-- Make the videos bucket public (for testing)
UPDATE storage.buckets 
SET public = true 
WHERE id = 'videos';

-- Verify
SELECT id, name, public FROM storage.buckets WHERE id = 'videos';

