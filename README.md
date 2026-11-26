# Valima E-Invitation – K.M. Mohamed Sajid & S. Thasin Taj

Vite + React + TypeScript single-page invitation.
Flow: gate-opening intro → invitation card → scratch-the-heart date reveal → countdown → event details → compliments → RSVP pass → thank-you → footer.

## Run

```bash
npm install
npm run dev        # local dev
npm run build      # type-check + production build into dist/
```

## RSVP setup (important)

RSVP opens WhatsApp with the guest's reply pre-filled. Copy `.env.example` to `.env`
and set the family's WhatsApp number (country code + number, digits only):

```
VITE_RSVP_WHATSAPP=91XXXXXXXXXX
```

On Vercel add the same variable under Project Settings → Environment Variables.

## Editing content

All text lives in `src/config/invitation.ts`.

## Structure

```
src/
  config/       invitation content
  types/        shared TypeScript types
  hooks/        countdown, scroll lock, in-view, scratch canvas
  utils/        time, heart path, RSVP message builder
  validation/   RSVP form validation
  components/
    hero/       night scene, gates, ribbon, intro
    sections/   invite, scratch, countdown, event, compliments, thank-you, footer
    rsvp/       RSVP form hook, boarding-pass UI, section
    ui/         Reveal, Divider, SectionTitle, Confetti, WaxSeal
  styles/       base, hero, sections, rsvp
```

## Deploy

Vercel: framework preset Vite, build command `npm run build`, output `dist`.
