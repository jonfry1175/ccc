# Panduan Deployment - Christianity Crisis Center Platform

## 🚀 Overview Deployment

Platform Christianity Crisis Center dapat di-deploy ke berbagai hosting provider. Panduan ini mencakup deployment ke **Vercel** (recommended), **Netlify**, dan **Self-hosted** options.

---

## 📋 Pre-requisites

### 1. Account Requirements

- ✅ **GitHub Account** (untuk source code management)
- ✅ **Supabase Account** (untuk database dan storage)
- ✅ **Vercel Account** (untuk hosting - recommended)
- ✅ **Domain** (opsional, bisa gunakan subdomain gratis)

### 2. Local Development Setup

```bash
# Clone repository
git clone [repository-url]
cd christianity-crisis-center-platform

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local
```

### 3. Environment Variables Required

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Optional: Custom domain configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## 🗄️ Database Setup (Supabase)

### Step 1: Create Supabase Project

1. Login ke [supabase.com](https://supabase.com)
2. Click **"New Project"**
3. Fill project details:
   - **Name**: Christianity Crisis Center DB
   - **Database Password**: [Strong password]
   - **Region**: Singapore (recommended untuk Indonesia)

### Step 2: Database Schema Setup

```sql
-- Create candidates table
CREATE TABLE candidate (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  date_of_birth DATE,
  gender TEXT CHECK (gender IN ('male', 'female')),
  passport_id TEXT,
  email TEXT UNIQUE NOT NULL,
  whatsapp_number TEXT,
  department TEXT,
  position TEXT,
  cv_url TEXT,
  certificate_url TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'matched', 'hired', 'rejected'))
);

-- Create partners table
CREATE TABLE partner (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone_number TEXT,
  company_name TEXT NOT NULL,
  company_website TEXT,
  country TEXT DEFAULT 'Indonesia',
  message TEXT,
  verified BOOLEAN DEFAULT FALSE,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'verified', 'active', 'suspended'))
);

-- Enable Row Level Security
ALTER TABLE candidate ENABLE ROW LEVEL SECURITY;
ALTER TABLE partner ENABLE ROW LEVEL SECURITY;

-- Create policies for admin access
CREATE POLICY "Admin can manage candidates" ON candidate
  FOR ALL USING (
    auth.jwt() ->> 'email' = 'admin@christianitycrisis.com'
  );

CREATE POLICY "Admin can manage partners" ON partner
  FOR ALL USING (
    auth.jwt() ->> 'email' = 'admin@christianitycrisis.com'
  );

-- Allow public to insert (for form submissions)
CREATE POLICY "Public can insert candidates" ON candidate
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Public can insert partners" ON partner
  FOR INSERT WITH CHECK (true);
```

### Step 3: Storage Setup

```sql
-- Create storage bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('christianity-crisis-center-files', 'christianity-crisis-center-files', false);

-- Storage policies
CREATE POLICY "Authenticated can upload files" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'christianity-crisis-center-files' AND
    auth.role() = 'authenticated'
  );

CREATE POLICY "Authenticated can view files" ON storage.objects
  FOR SELECT USING (
    bucket_id = 'christianity-crisis-center-files' AND
    auth.role() = 'authenticated'
  );

-- Policy for API uploads (using service role)
CREATE POLICY "Service role can manage files" ON storage.objects
  FOR ALL USING (
    bucket_id = 'christianity-crisis-center-files'
  );
```

### Step 4: Authentication Setup

```sql
-- Enable email authentication
-- (Done via Supabase Dashboard > Authentication > Settings)

-- Create admin user (run via SQL editor after auth is enabled)
-- Note: Password will be sent via email
INSERT INTO auth.users (
  email,
  email_confirmed_at,
  role
) VALUES (
  'admin@christianitycrisis.com',
  NOW(),
  'authenticated'
);
```

---

## 🌐 Deployment ke Vercel (Recommended)

### Step 1: Connect Repository

1. Login ke [vercel.com](https://vercel.com)
2. Click **"New Project"**
3. Import dari GitHub repository
4. Select repository: `christianity-crisis-center-platform`

### Step 2: Configure Build Settings

```bash
# Build Command (default)
npm run build

# Output Directory (default)
.next

# Install Command (default)
npm install

# Development Command
npm run dev
```

### Step 3: Environment Variables

Di Vercel Dashboard > Settings > Environment Variables:

```bash
# Production Environment
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Optional
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

### Step 4: Custom Domain (Optional)

1. Vercel Dashboard > Domains
2. Add domain: `jobs.christianitycrisis.com`
3. Update DNS records sesuai instruksi Vercel
4. Wait for SSL certificate provisioning

### Step 5: Deploy

```bash
# Auto deploy dari GitHub push
git push origin main

# Manual deploy via CLI
npx vercel --prod
```

---

## 🏗️ Alternative Deployment Options

### A. Netlify Deployment

```bash
# Build settings
Build command: npm run build && npm run export
Publish directory: out
```

**netlify.toml**:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200

[build.environment]
  NEXT_PRIVATE_TARGET = "server"
```

### B. Self-Hosted (VPS/Cloud Server)

**Requirements**:

- Ubuntu 20.04+ atau CentOS 8+
- Node.js 18+
- PM2 untuk process management
- Nginx untuk reverse proxy

```bash
# Server setup
sudo apt update
sudo apt install nodejs npm nginx

# Install PM2
npm install -g pm2

# Clone dan setup project
git clone [repository-url]
cd christianity-crisis-center-platform
npm install
npm run build

# Start dengan PM2
pm2 start npm --name "ccc-platform" -- start
pm2 save
pm2 startup
```

**Nginx Configuration** (`/etc/nginx/sites-available/ccc-platform`):

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 🔧 Post-Deployment Setup

### 1. Create Admin User

```bash
# Via terminal di server atau Vercel CLI
npm run create-admin

# Atau manual via Supabase dashboard
# Auth > Users > Invite User
# Email: admin@christianitycrisis.com
```

### 2. Test Core Functionality

- ✅ Homepage loading correctly
- ✅ Candidate form submission
- ✅ Partner form submission
- ✅ File upload working
- ✅ Admin login functional
- ✅ Database connections working

### 3. Configure Domain & SSL

```bash
# Jika self-hosted, setup Let's Encrypt
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

### 4. Setup Monitoring

```bash
# Basic monitoring dengan PM2 (self-hosted)
pm2 install pm2-server-monit

# Atau gunakan services seperti:
# - Vercel Analytics (untuk Vercel deployment)
# - Google Analytics
# - Sentry untuk error tracking
```

---

## 📊 Environment-Specific Configurations

### Development Environment

```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=local-anon-key
SUPABASE_SERVICE_ROLE_KEY=local-service-role-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Staging Environment

```bash
# .env.staging
NEXT_PUBLIC_SUPABASE_URL=https://staging-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=staging-anon-key
SUPABASE_SERVICE_ROLE_KEY=staging-service-role-key
NEXT_PUBLIC_SITE_URL=https://staging.christianitycrisis.com
```

### Production Environment

```bash
# .env.production
NEXT_PUBLIC_SUPABASE_URL=https://prod-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=prod-anon-key
SUPABASE_SERVICE_ROLE_KEY=prod-service-role-key
NEXT_PUBLIC_SITE_URL=https://jobs.christianitycrisis.com
```

---

## 🔒 Security Checklist

### Pre-Deployment Security

- ✅ **Environment Variables**: Semua sensitive data di environment variables
- ✅ **API Keys**: Service role key tidak exposed di client-side
- ✅ **Database Policies**: RLS enabled dan policies configured
- ✅ **File Upload**: Validation untuk file type dan size
- ✅ **CORS**: Configured untuk domain yang benar

### Post-Deployment Security

- ✅ **HTTPS**: SSL certificate active
- ✅ **Headers**: Security headers configured
- ✅ **Admin Access**: Strong password dan 2FA enabled
- ✅ **Database Backup**: Regular backups scheduled
- ✅ **Monitoring**: Error tracking dan performance monitoring

---

## 🚨 Troubleshooting

### Common Issues

**1. Build Errors**

```bash
# Clear cache dan reinstall
rm -rf .next node_modules
npm install
npm run build
```

**2. Database Connection Errors**

- Cek environment variables
- Verify Supabase project status
- Check RLS policies

**3. File Upload Issues**

- Verify storage bucket exists
- Check storage policies
- Confirm service role key permissions

**4. Authentication Problems**

```bash
# Reset admin user
# Via Supabase dashboard: Auth > Users
# Delete existing admin dan create new
```

### Performance Issues

```bash
# Check build output
npm run build --verbose

# Analyze bundle size
npm install -g @next/bundle-analyzer
ANALYZE=true npm run build
```

---

## 📈 Monitoring & Maintenance

### Daily Monitoring

- ✅ Platform accessibility
- ✅ Form submissions working
- ✅ File uploads functional
- ✅ Database performance

### Weekly Tasks

- ✅ Review new candidate applications
- ✅ Check partner registrations
- ✅ Monitor error logs
- ✅ Performance metrics review

### Monthly Maintenance

- ✅ Database cleanup dan optimization
- ✅ Security updates
- ✅ Backup verification
- ✅ User feedback review
- ✅ Feature planning

---

## 📞 Support & Escalation

### Technical Issues

- **Level 1**: Check troubleshooting guide
- **Level 2**: Community support forum
- **Level 3**: Contact technical team
- **Level 4**: Vendor support (Vercel/Supabase)

### Contact Information

- **Technical Lead**: tech@christianitycrisis.com
- **DevOps Team**: devops@christianitycrisis.com
- **Emergency**: +62 812-xxxx-xxxx (24/7)

---

**Deployment Checklist** ✅

- [ ] Repository connected
- [ ] Environment variables configured
- [ ] Database schema deployed
- [ ] Storage bucket created
- [ ] Admin user created
- [ ] Domain configured
- [ ] SSL certificate active
- [ ] Monitoring setup
- [ ] Backup strategy implemented
- [ ] Documentation updated

**Status**: Ready for Production 🚀  
**Last Updated**: September 2025  
**Maintainer**: Christianity Crisis Center Tech Team
