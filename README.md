# RestaurantPro - Complete Restaurant Growth Agency Platform

A comprehensive, production-ready multi-service consultancy and digital solutions agency website for restaurants, cafés, cloud kitchens, and hospitality businesses.

## Features

### Complete Service Suite
- **Restaurant Consultancy** - Menu engineering, cost optimization, recipe refinement
- **Digital Transformation** - Website development, SEO, social media, marketing automation
- **AR 3D Menu System** - Augmented reality food visualization using Google AR Viewer
- **Free Micro-Influencer Marketing** - Zero-cost verified local influencer campaigns

### Pages
1. **Home** - Hero section, services overview, testimonials, CTAs
2. **About Us** - Company story, mission, values
3. **Services** - Detailed breakdown of all service offerings
4. **AR Menu** - Interactive AR model viewer with Google AR integration
5. **Pricing** - Transparent pricing packages with comparison
6. **Contact** - Full contact form with Supabase integration
7. **Clients** - Case studies and testimonials
8. **FAQ** - Comprehensive frequently asked questions
9. **Terms of Service** - Legal terms and conditions
10. **Privacy Policy** - Data privacy and protection policy

### Technical Features
- **React 18** with TypeScript
- **React Router** for client-side routing
- **Tailwind CSS** for modern, responsive styling
- **Supabase** for backend (database, forms, data management)
- **Lucide React** for beautiful icons
- **Mobile-first responsive design**
- **SEO optimized** with meta tags
- **Production-ready build**

## Database Schema

### Tables
- `contacts` - Inquiry form submissions
- `ar_models` - 3D AR food models
- `testimonials` - Client reviews and ratings
- `case_studies` - Detailed success stories

All tables include Row Level Security (RLS) policies.

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file with:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── FloatingContact.tsx
│   ├── ServiceCard.tsx
│   ├── TestimonialCard.tsx
│   ├── PricingCard.tsx
│   └── ARModelCard.tsx
├── pages/              # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── ARMenu.tsx
│   ├── Pricing.tsx
│   ├── Contact.tsx
│   ├── Clients.tsx
│   ├── FAQ.tsx
│   ├── Terms.tsx
│   └── Privacy.tsx
├── lib/                # Utilities
│   └── supabase.ts     # Supabase client & types
├── App.tsx             # Main app with routing
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## Key Components

### Navbar
- Responsive navigation
- Mobile menu
- Active route highlighting
- Quick call-to-action

### FloatingContact
- Fixed position contact button
- Hover tooltip
- Direct phone link

### ServiceCard
- Icon-based service display
- Feature lists
- Gradient backgrounds
- Hover animations

### TestimonialCard
- Star ratings
- Client results
- Avatar placeholders

### PricingCard
- Feature comparisons
- Highlighted plans
- Clear CTAs

### ARModelCard
- 3D model preview
- Google AR Viewer integration
- Category badges
- Price display

## Contact Information

- **Phone**: 9096500303
- **Email**: INAMKEPRATEEK@gmail.com
- **UPI**: PRATIKINAMKE3635@okaxis

## License

© 2024 RestaurantPro Agency. All rights reserved.
