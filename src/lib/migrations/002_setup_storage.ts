import { SupabaseClient } from '@supabase/supabase-js';

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

    // Create storage policies using SQL
    const { error: policiesError } = await supabase.rpc('exec_sql', {
      sql_string: `
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
      `
    });

    if (policiesError) {
      console.error('Error creating storage policies:', policiesError);
      
      // Try to create policies one by one with alternative approach
      // This part is more complex as there's no direct REST API for policies
      // It's best to handle this through Supabase UI if the migration fails
    }
  },
  
  down: async (supabase: SupabaseClient) => {
    // Remove policies and bucket on rollback
    const { error: policiesError } = await supabase.rpc('exec_sql', {
      sql_string: `
        DROP POLICY IF EXISTS "Allow authenticated users to view files" ON storage.objects;
        DROP POLICY IF EXISTS "Allow service role to upload files" ON storage.objects;
      `
    });
    
    if (policiesError) {
      console.error('Error removing storage policies:', policiesError);
    }
    
    // Delete bucket
    const { error: bucketError } = await supabase.storage.deleteBucket('marina-prima-sukses-web');
    if (bucketError) {
      console.error('Error deleting bucket:', bucketError);
    }
  }
}; 