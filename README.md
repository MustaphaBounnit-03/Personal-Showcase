# Mustapha Bounnit — Portfolio

Personal developer portfolio built with React + Vite + TypeScript + Tailwind CSS.

## Quick Start (VS Code / Local)

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- [pnpm](https://pnpm.io/) v9 or later — install with:
  ```bash
  npm install -g pnpm
  ```

### 1. Install dependencies

From the project root:

```bash
pnpm install
```

### 2. Run the portfolio

```bash
pnpm --filter @workspace/portfolio run dev:local
```

Then open **http://localhost:3000** in your browser.

> The `dev:local` script uses default values (`PORT=3000`, `BASE_PATH=/`).  
> To use a different port, copy `.env.example` to `.env.local` and edit it:
> ```bash
> cp artifacts/portfolio/.env.example artifacts/portfolio/.env.local
> ```

### 3. Build for production

```bash
pnpm --filter @workspace/portfolio run build
```

Output goes to `artifacts/portfolio/dist/public/`.

---

## Project Structure

```
artifacts/
  portfolio/          ← React + Vite portfolio app
    src/
      components/     ← Section components (Hero, About, Skills, …)
      index.css       ← Global styles & Tailwind theme
    public/           ← Static assets (photo, CV PDF)
lib/                  ← Shared workspace libraries
```

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 7**
- **Tailwind CSS v4**
- **Framer Motion** — scroll animations & typewriter effect
- **react-icons** — tech skill icons
- **pnpm workspaces** — monorepo management

## Links

- GitHub: https://github.com/MustaphaBounnit-03
- LinkedIn: https://www.linkedin.com/in/mustapha-bounnit-3407b2421/
