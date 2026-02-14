# Portrait Royale - AI Portrait Business MVP

Royal Renaissance-style AI portraits for pets and people.

## 🎨 Features

- **Photo Upload**: Drag & drop interface
- **Renaissance Royal Style**: Premium artistic transformation
- **Digital Downloads**: High-quality AI-generated portraits
- **Secure Payments**: Stripe integration

## 🚀 Tech Stack

- **Frontend**: Next.js 15 + TypeScript + Tailwind CSS
- **AI Processing**: Replicate API (Stable Diffusion)
- **Payments**: Stripe
- **Storage**: AWS S3
- **Database**: PlanetScale (MySQL)

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx           # Landing page
│   ├── upload/            # Photo upload flow
│   ├── gallery/           # Sample gallery
│   └── checkout/          # Payment flow
├── components/
│   ├── ui/                # Reusable UI components
│   ├── UploadZone.tsx     # Photo upload
│   ├── StyleSelector.tsx  # Renaissance style options
│   └── PricingCard.tsx    # Pricing display
└── lib/
    ├── stripe.ts          # Stripe configuration
    ├── replicate.ts       # AI generation
    └── storage.ts         # AWS S3 handling
```

## 🎯 MVP Scope

**Phase 1** (2-3 weeks):
- Landing page with gallery
- Photo upload & preview
- Single Renaissance style
- Digital download delivery
- Basic Stripe payment

**Future Phases**:
- Multiple art styles
- Print-on-demand
- User accounts
- Order tracking

---

*Building the royal portrait experience* 👑