import { SupabaseClient } from '@supabase/supabase-js';

async function executeSql(query: string): Promise<void> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/rpc/raw_sql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': process.env.SUPABASE_SERVICE_ROLE_KEY!,
      'Authorization': `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
      'Prefer': 'return=minimal'
    },
    body: JSON.stringify({
      query: query
    })
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `SQL execution failed with status ${response.status}`);
  }
}

export const migration = {
  name: '002_setup_storage',
  up: async (supabase: SupabaseClient) => {
    // Create storage bucket
    const { error: bucketError } = await supabase.storage.createBucket('marina-prima-sukses-web', {
      public: false,
      fileSizeLimit: 10485760, // 10MB in bytes
    });

    // Ignore the error if bucket already exists
    if (bucketError && bucketError.message !== 'Bucket already exists') {
      console.error('Error creating bucket:', bucketError);
    }

    try {
      // Create storage policies using SQL
      await executeSql(`
        -- Create policy for authenticated users to view files
        CREATE POLICY IF NOT EXISTS "Allow authenticated users to view files"
        ON storage.objects
        FOR SELECT
        TO authenticated
        USING (bucket_id = 'marina-prima-sukses-web');

        -- Create policy for service role to upload files
        CREATE POLICY IF NOT EXISTS "Allow service role to upload files"
        ON storage.objects
        FOR INSERT
        TO service_role
        WITH CHECK (bucket_id = 'marina-prima-sukses-web');
      `);
    } catch (error: any) {
      console.error('Error creating storage policies:', error.message);
    }
  },
  
  down: async (supabase: SupabaseClient) => {
    try {
      // Remove policies using SQL
      await executeSql(`
        DROP POLICY IF EXISTS "Allow authenticated users to view files" ON storage.objects;
        DROP POLICY IF EXISTS "Allow service role to upload files" ON storage.objects;
      `);
    } catch (error: any) {
      console.error('Error removing storage policies:', error.message);
    }
    
    // Delete bucket
    const { error: bucketError } = await supabase.storage.deleteBucket('marina-prima-sukses-web');
    if (bucketError) {
      console.error('Error deleting bucket:', bucketError);
    }
  }
}; 