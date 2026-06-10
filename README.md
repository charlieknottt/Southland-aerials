# Andrew Rentz - Aviation Excel Tools

A clean, single-page website for selling Excel business plan tools for aviation enthusiasts.

**Live site:** https://southland-aerials.vercel.app

## Features

- Circular profile photo at the top
- Subtle background pattern with logo
- Two product cards displayed side by side
- Pricing with sale discount display
- Responsive design for mobile and desktop
- Ready for Stripe Payment Links integration

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Adding Your Stripe Payment Links

1. Create products in your Stripe Dashboard:
   - Go to Products → Create Product
   - Add "Excel Business plan - Cirrus SR22 G6" at $9.99
   - Add "Excel Business plan - General Airplane Cost" at $9.99
   - Generate Payment Links for each product

2. Update the links in `app/page.tsx`:
   - Find the two `<a href="#">` tags with "Download Now" text
   - Replace `#` with your Stripe Payment Links
   - Example: `<a href="https://buy.stripe.com/your-link-here">`

3. Configure Stripe to redirect to a thank-you page after purchase where customers can download the PDFs

## Deploy to Vercel

1. Push your code to GitHub (if not already done):
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

2. Go to [Vercel](https://vercel.com) and sign in

3. Click "Add New Project"

4. Import your GitHub repository

5. Vercel will auto-detect Next.js and configure everything

6. Click "Deploy"

Your site will be live in minutes!

## File Structure

- `/app/page.tsx` - Main landing page
- `/app/layout.tsx` - Site metadata and layout
- `/public/` - Images (profile photo, product images, logo)

## Updating Content

To update product descriptions or pricing:
1. Edit `/app/page.tsx`
2. Changes will auto-deploy when you push to your main branch
