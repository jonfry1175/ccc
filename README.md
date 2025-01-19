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

This project is deployed on [Vercel](https://vercel.com). The production site is live at [metasolusidigital.com](https://metasolusidigital.com).

### Automatic Deployments

- Main branch is automatically deployed to production
- Preview deployments are created for all pull requests
- Changes are automatically deployed when merged to main

### Environment Variables

Required environment variables should be set in your Vercel project settings:

```env
NEXT_PUBLIC_SITE_URL=https://metasolusidigital.com
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
