# Portfolio Website

A modern, responsive portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. Features smooth animations powered by Framer Motion and Anime.js, with dark/light theme support.

## Features

- 🎨 **Modern UI/UX** - Clean, responsive design with Tailwind CSS
- 🌓 **Dark/Light Theme** - Toggle between themes with next-themes
- ✨ **Smooth Animations** - Powered by Framer Motion and Anime.js
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 📧 **Contact Form** - Integrated with EmailJS for direct email delivery
- 🎯 **Lucide Icons** - Beautiful, consistent iconography
- ♿ **Accessible** - Built with accessibility best practices

## Project Structure

```
portfolio/
├── app/                  # Next.js App Router pages
│   ├── contact/          # Contact page
│   ├── education/        # Education section
│   ├── home/             # Home page
│   ├── projects/         # Projects showcase
│   └── resume/           # Resume/CV section
├── components/           # Reusable React components
│   ├── header.tsx        # Navigation header
│   ├── sidebar.tsx       # Side navigation
│   ├── footer.tsx        # Page footer
│   ├── projectCard.tsx   # Project display card
│   ├── ProjectModal.tsx  # Project details modal
│   ├── educard.tsx       # Education card
│   ├── infoCard.tsx      # Information card
│   ├── infobar.tsx       # Info bar component
│   ├── tags.tsx          # Tag components
│   └── socialIcon.tsx    # Social media icons
├── data/                 # Static data files
│   └── projects.ts       # Projects data
├── lib/                  # Utility functions
│   └── utils.tsx         # Helper utilities
└── public/               # Static assets
```

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion, Anime.js
- **Icons:** Lucide React
- **Theme:** next-themes
- **Email:** EmailJS
- **Utilities:** clsx, tailwind-merge

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Set up environment variables (if needed):
   - Configure EmailJS keys for the contact form

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Adding Projects

Edit `data/projects.ts` to add or modify your projects:

```typescript
export const projects = [
  {
    title: "Project Name",
    description: "Project description",
    technologies: ["React", "TypeScript"],
    // ... other fields
  }
]
```

### Styling

Global styles are defined in `app/globals.css`. Modify Tailwind configuration as needed.

## Deployment

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app-readme):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

Or deploy to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Your own server

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## License

This project is open source and available under the [MIT License](LICENSE).
