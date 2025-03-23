// Script to create an admin user in Supabase
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = 'https://nrxfjvpjxlzamlgbfqqg.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Service role key is required to create users from the server
const supabase = createClient(supabaseUrl, supabaseKey);

async function createAdminUser() {
  const adminEmail = 'admin@mpsjakarta.com';
  const adminPassword = 'mps2025';

  console.log('Creating admin user...');

  try {
    // First, check if the user already exists
    const { data: existingUser, error: lookupError } = await supabase.auth.admin.listUsers();
    
    if (lookupError) {
      throw lookupError;
    }

    const userExists = existingUser.users.some(user => user.email === adminEmail);
    
    if (userExists) {
      console.log('Admin user already exists. Updating password...');
      
      // Get the user by email
      const adminUser = existingUser.users.find(user => user.email === adminEmail);
      
      // Update password for existing user
      const { error: updateError } = await supabase.auth.admin.updateUserById(
        adminUser.id,
        { password: adminPassword }
      );
      
      if (updateError) {
        throw updateError;
      }
      
      console.log('Admin password updated successfully.');
    } else {
      // Create new admin user
      const { data, error } = await supabase.auth.admin.createUser({
        email: adminEmail,
        password: adminPassword,
        email_confirm: true, // Auto-confirm the email
        user_metadata: { role: 'admin' }
      });

      if (error) {
        throw error;
      }

      console.log('Admin user created successfully:', data);
    }
  } catch (error) {
    console.error('Error creating admin user:', error.message);
  }
}

createAdminUser(); 