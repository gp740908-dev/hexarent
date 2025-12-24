# Prismic CMS Setup Guide

This document explains how to set up and configure Prismic CMS for the HEXA Rent website.

## Prerequisites

- Node.js 18+ installed
- A Prismic account (free at [prismic.io](https://prismic.io))
- This project cloned locally

## Step 1: Create a Prismic Repository

1. Go to [prismic.io](https://prismic.io) and sign up/login
2. Click "Create Repository"
3. Name it `hexarent` (or your preferred name)
4. Select "Next.js" as your framework
5. Choose the free plan

## Step 2: Configure Environment Variables

Create a `.env.local` file in the project root:

```bash
# Copy the example file
cp env.example .env.local
```

Then edit `.env.local`:

```env
# Replace 'hexarent' with your actual repository name
NEXT_PUBLIC_PRISMIC_ENVIRONMENT=your-repository-name

# Optional: If your repository is private
PRISMIC_ACCESS_TOKEN=your-access-token
```

## Step 3: Push Custom Types to Prismic

The custom types are defined in the `/customtypes` folder. You can push them using either:

### Option A: Manual Upload (Recommended for first setup)

1. Go to your Prismic dashboard
2. Navigate to "Custom Types"
3. Click "Create new" for each type
4. Copy the JSON content from each file in `/customtypes/[type]/index.json`

The custom types are:
- **equipment** - Equipment listings (repeatable)
- **project** - Case studies/projects (repeatable)
- **homepage** - Homepage content (single)
- **settings** - Site settings (single)
- **services_page** - Services page (single)

### Option B: Using Slice Machine (Recommended for ongoing development)

Install Slice Machine:

```bash
npm install --save-dev @slicemachine/adapter-next
npx @slicemachine/init
```

Then run:

```bash
npx slice-machine
```

This opens a local UI at `http://localhost:9999` where you can:
- Create and edit custom types
- Push changes to Prismic
- Preview slices

## Step 4: Add Content in Prismic

1. Go to your Prismic dashboard
2. Click "Documents"
3. Create documents for each type:

### Required Single Documents:
- **Settings** - Site-wide settings (navigation, contact info, social links)
- **Homepage** - Homepage content

### Repeatable Documents:
- **Equipment** - Add your equipment listings
- **Project** - Add case studies/projects

## Step 5: Configure Webhooks (Optional but Recommended)

For automatic cache revalidation when content changes:

1. In Prismic, go to Settings → Webhooks
2. Add a new webhook:
   - **URL**: `https://your-domain.com/api/revalidate`
   - **Secret**: Add a secure secret
3. Add the secret to your environment variables:
   ```env
   PRISMIC_WEBHOOK_SECRET=your-webhook-secret
   ```

## Step 6: Configure Preview

Prismic Preview is already configured. To enable it:

1. In Prismic, go to Settings → Previews
2. Add a new preview:
   - **Site Name**: Development
   - **Domain**: `http://localhost:3000`
   - **Link Resolver**: `/api/preview`

For production:
   - **Site Name**: Production
   - **Domain**: `https://your-domain.com`
   - **Link Resolver**: `/api/preview`

## File Structure

```
/customtypes
  /equipment         # Equipment custom type
  /project           # Project/Case Study custom type
  /homepage          # Homepage (single type)
  /settings          # Site Settings (single type)
  /services_page     # Services Page (single type)

/src
  /prismicio.ts      # Prismic client configuration
  /slices            # Slice components
    /HeroSection
    /index.ts
  /components/prismic
    /PrismicProvider.tsx
    /PrismicImage.tsx
    /PrismicText.tsx
  /lib
    /prismic.ts      # Helper functions for fetching
  /types
    /prismic.ts      # TypeScript type definitions
  /app/api
    /preview         # Preview endpoint
    /exit-preview    # Exit preview endpoint
    /revalidate      # Webhook revalidation endpoint
```

## Usage Examples

### Fetching Equipment

```typescript
import { getAllEquipment, getEquipmentByUID } from '@/lib/prismic';

// Get all equipment
const equipment = await getAllEquipment();

// Get single equipment
const excavator = await getEquipmentByUID('cat-320-excavator');
```

### Fetching Homepage

```typescript
import { getHomepage } from '@/lib/prismic';

const homepage = await getHomepage();
console.log(homepage?.data.hero_headline);
```

### Rendering Rich Text

```tsx
import { PrismicText } from '@/components/prismic';

<PrismicText field={document.data.description} />
```

### Rendering Images

```tsx
import { PrismicImage } from '@/components/prismic';

<PrismicImage 
  field={document.data.hero_image} 
  aspectRatio="video"
/>
```

## Troubleshooting

### "Repository not found" Error
- Check your `NEXT_PUBLIC_PRISMIC_ENVIRONMENT` in `.env.local`
- Make sure the repository name matches exactly

### Preview Not Working
- Verify preview settings in Prismic dashboard
- Check that the preview URL is correct
- Clear browser cookies and try again

### Types Not Matching
- Re-run `npx prismic-ts-codegen` to regenerate types
- Or manually update `/src/types/prismic.ts`

## Resources

- [Prismic Documentation](https://prismic.io/docs)
- [Next.js + Prismic Guide](https://prismic.io/docs/technologies/nextjs)
- [Slice Machine Documentation](https://prismic.io/docs/slice-machine)
