// Script to create an admin user in Supabase
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing required environment variables. Please check your .env.local file.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function createAdmin() {
  try {
    const { data, error } = await supabase.auth.admin.createUser({
      email: 'admin@mpsjakarta.com',
      password: 'mps2025',
      email_confirm: true
    });

    if (error) throw error;
    console.log('Admin user created successfully:', data);
  } catch (error) {
    console.error('Error creating admin user:', error.message);
  }
}

createAdmin(); 