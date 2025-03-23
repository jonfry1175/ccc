import { createClient } from '@supabase/supabase-js';

export async function setupStorage() {
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

  try {
    // Create storage bucket
    const { error: bucketError } = await supabase.storage.createBucket('marina-prima-sukses-web', {
      public: false,
      fileSizeLimit: 10485760, // 10MB in bytes
    });

    // Ignore if bucket already exists
    if (bucketError && bucketError.message !== 'Bucket already exists') {
      throw bucketError;
    }

    return { success: true };
  } catch (error: any) {
    console.error('Storage setup error:', error);
    return { success: false, error: error.message };
  }
} 