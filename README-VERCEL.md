# Sehat Singh Coaching Website — Vercel

This is the original React + TypeScript + TanStack Start website adapted for Vercel. It is **not** a WordPress plugin.

## Deploy to Vercel

1. Extract this ZIP and push the `sehat-singh-main` folder contents to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import that repository.
3. Use the default Node.js build environment.
4. Build command: `npm run build` (also configured in `vercel.json`).
5. Deploy. The Vercel Nitro preset is configured in `vite.config.ts`.

## Before publishing

- The Community programme currently displays the existing source offer of ₹2,999 for three months. Confirm the current price, inclusions and terms before taking payments.
- The Personal Coaching CTA currently opens the public Instagram profile so visitors can enquire. Replace it with your preferred WhatsApp/application link when you provide the correct contact URL.
- Payment processing is not integrated. The Community CTA currently points visitors to the membership FAQ rather than a checkout.
- The current photos are general fitness imagery, not verified before/after client evidence. Add authentic transformation photos and testimonials only with client permission; no results or testimonials have been invented.
- Confirm that the existing claims (209K+ Instagram followers, 20 years of experience, and the live session schedule) are still accurate before launch.
- Review the membership FAQ, support response times, cancellation/refund terms and health disclaimer before launch.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
