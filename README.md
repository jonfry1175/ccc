# Marina Prima Sukses Web Application.

Website for company Marina Prima Sukses company with candidate and partner application forms.

## Features

- Candidate job application with file uploads (CV and certificates)
- Partner application form for business partnerships
- Admin dashboard to view submissions
- Secure authentication for admin access

## Tech Stack

- Next.js 15.x (React 19.x)
- TypeScript
- Tailwind CSS
- Supabase (Authentication, Database, Storage)
- Shadcn UI Components

## Local Development

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Set up environment variables by creating a `.env.local` file:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Supabase Setup

### Database Schema

**candidate**

- id (integer, primary key)
- created_at (timestamp with time zone)
- first_name (text)
- last_name (text)
- date_of_birth (timestamp with time zone)
- gender (text)
- passport_id (text)
- email (text)
- whatsapp_number (text)
- department (text)
- position (text)
- cv_url (text)
- certificate_url (text)

**partner**

- id (integer, primary key)
- created_at (timestamp with time zone)
- first_name (text)
- last_name (text)
- email (text)
- phone_number (text)
- company_name (text)
- company_website (text)
- country (text)
- message (text)

### Storage Setup

1. Create a bucket named `marina-prima-sukses-web` in Supabase Storage
2. Set bucket access level to "private"
3. Create a storage policy for secure file uploads:

Navigate to Supabase Dashboard > Storage > Policies and add these policies:

**For authenticated uploads (Admin)**

- Type: `INSERT`
- Allowed roles: `authenticated`
- Policy definition: `true`

**For viewing files (Admin)**

- Type: `SELECT`
- Allowed roles: `authenticated`
- Policy definition: `true`

**API server uploads (for form submissions)**
Service role key is used in the API route to handle uploads from unauthenticated users

### Authentication Setup

1. Enable Email/Password authentication in your Supabase project
2. Create the admin user by running:

```bash
npm run create-admin
```

This will create a static admin user with the following credentials:

- Email: `admin@mpsjakarta.com`
- Password: `mps2025`

## Deployment

1. Deploy to Vercel or your preferred hosting service
2. Set the environment variables in your hosting platform:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

3. After deployment, create the admin user by running the create-admin script:

```bash
npm run create-admin
```

## Admin Access

Access the admin dashboard at `/admin/login` with these credentials:

- Email: `admin@mpsjakarta.com`
- Password: `mps2025`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
