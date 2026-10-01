# Xtopher Graphic

A bold, minimal portfolio website for **Xtopher Graphic** — a creative graphic design studio specializing in visual identities, branding, print, and digital experiences.

## Features

- **Multi-page portfolio** — Work, Services, About, Blog, and Contact pages
- **Dark / light mode** — theme toggle persisted across sessions
- **Responsive design** — mobile-friendly navigation and layouts
- **Smooth animations** — fade-in and scale transitions throughout
- **SEO-ready** — page title, meta description, and Open Graph tags

## Tech Stack

- [React 18](https://react.dev) — UI library
- [TypeScript](https://www.typescriptlang.org) — type safety
- [Vite](https://vitejs.dev) — build tool & dev server
- [Tailwind CSS](https://tailwindcss.com) — utility-first styling with a semantic design-token system
- [shadcn/ui](https://ui.shadcn.com) — accessible UI components

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (v18 or later recommended)

### Install & run

```sh
# Clone the repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The site runs at `http://localhost:8080` with hot reloading enabled.

### Build for production

```sh
npm run build
npm run preview   # locally preview the production build
```

## Project Structure

```
src/
├── components/     # Shared UI (Navigation, Hero, Services, ThemeToggle…)
├── pages/          # Route pages (Index, Work, Services, About, Blog, Contact)
├── data/           # Static content (blog posts)
├── hooks/          # Custom React hooks
└── index.css       # Design tokens & global styles
```

## Deployment

This project is built with [Lovable](https://lovable.dev/projects/09a14ae7-bd4a-415b-b22e-66bbeb1a9240). To deploy, open the project in Lovable and go to **Share → Publish**. You can connect a custom domain under **Project Settings → Domains**.

## Contact

Have a project in mind? Reach out at **hello@xtophergraphic.com** or via the [contact page](/contact).
