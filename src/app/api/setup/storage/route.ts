import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    );

    // Create storage bucket
    const { error: bucketError } = await supabase.storage.createBucket('marina-prima-sukses-web', {
      public: false,
      fileSizeLimit: 10485760, // 10MB
    });

    if (bucketError && bucketError.message !== 'Bucket already exists') {
      throw bucketError;
    }

    // Update bucket to be public
    const { error: updateError } = await supabase.storage.updateBucket('marina-prima-sukses-web', {
      public: true,
      fileSizeLimit: 10485760, // 10MB
    });

    if (updateError) {
      throw updateError;
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Storage setup error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
} 