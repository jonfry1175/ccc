# Meta Solusi Digital Website

This is the official website for Meta Solusi Digital, built with Next.js and deployed on Vercel.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Motion
- Lucide Icons

## Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## Deployment

This project is deployed on VPS. The production site is live at [metasolusidigital.com](https://metasolusidigital.com).

### Deployment Steps

1. SSH into VPS and navigate to project directory:
```bash
cd /var/www/metasolusidigital-web
```

2. Pull latest changes and install dependencies:
```bash
git pull origin main
npm install
```

3. Build and restart:
```bash
# Build the project
npm run build

# Restart PM2 process
pm2 restart meta-solusi-digital
```

### Environment Variables

Required environment variables should be set in your .env file:

```env
PORT=3001
```

## Project Structure

```
src/
├── app/                   # Next.js app router pages
├── components/           # React components
│   ├── layout/          # Layout components
│   └── sections/        # Page sections
├── lib/                 # Utilities and constants
└── styles/             # Global styles
```

## Contributing

1. Create a new branch from `main`
2. Make your changes
3. Create a pull request
4. Wait for review and approval

## License

Copyright © 2024 Meta Solusi Digital. All rights reserved.
