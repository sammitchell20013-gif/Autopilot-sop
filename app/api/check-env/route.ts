import { NextResponse } from 'next/server';

export async function GET() {
  const hasUrl = !!process.env.NEXT_PUBLIC_SUPABASE_URL;
  const hasKey = !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  // Show partial values for debugging (first 10 chars only)
  const urlPreview = hasUrl 
    ? process.env.NEXT_PUBLIC_SUPABASE_URL!.substring(0, 20) + '...' 
    : 'MISSING';
  const keyPreview = hasKey 
    ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!.substring(0, 20) + '...' 
    : 'MISSING';

  return NextResponse.json({
    configured: hasUrl && hasKey,
    details: {
      NEXT_PUBLIC_SUPABASE_URL: urlPreview,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: keyPreview,
    },
    timestamp: new Date().toISOString(),
  });
}

