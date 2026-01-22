# My SPA (React + Vite)

Single-page React app scaffolded with Vite that demonstrates client-side routing, basic state management, a theme toggle, API fetching, and a simple contact form.

## Features
- React 19 with React Router for fast, reload-free navigation
- Light/dark toggle persisted on the page header
- Home page counter with live state updates
- About page fetching sample users from JSONPlaceholder
- Contact form with basic validation feedback and auto-reset
- Shared layout components (header, nav, footer) and container styling

## Tech Stack
- React 19, React Router 7
- Vite (rolldown build) with HMR
- ESLint 9 for linting

## Getting Started
1) Install dependencies: `npm install`
2) Start dev server: `npm run dev` (opens Vite dev server)
3) Lint code: `npm run lint`
4) Build for production: `npm run build`
5) Preview production build locally: `npm run preview`

## Project Structure
- [src/main.jsx](src/main.jsx): App bootstrap and React DOM mounting
- [src/App.jsx](src/App.jsx): Router setup, shared navigation, layout shell
- [src/components/Header.jsx](src/components/Header.jsx): Title and light/dark toggle
- [src/components/Footer.jsx](src/components/Footer.jsx): Footer content
- [src/pages/Home.jsx](src/pages/Home.jsx): Counter demo and feature highlights
- [src/pages/About.jsx](src/pages/About.jsx): Fetches sample users from JSONPlaceholder
- [src/pages/Contact.jsx](src/pages/Contact.jsx): Contact form with success message
- [src/App.css](src/App.css) and [src/index.css](src/index.css): Global and layout styles

## Routes
- `/` Home: counter demo and quick feature list
- `/about` About: loads users from https://jsonplaceholder.typicode.com/users
- `/contact` Contact: basic contact form with success feedback

## API Notes
- Uses JSONPlaceholder for demo data; no API keys required
- Network failures are surfaced with a simple error message on the About page

## Development Tips
- Keep components small and focused; pages live under `src/pages` and shared UI under `src/components`
- Update styles in `src/App.css` and `src/index.css` to adjust theme, layout, or spacing
- When adding routes, register them in [src/App.jsx](src/App.jsx) and add corresponding links in the nav
