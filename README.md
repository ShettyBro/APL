# APL — Auction Player League App

A React frontend for running a cricket-style player auction event: browsing a player roster, running a live auction (search a player by ID, place a bid, assign them to a team or mark unsold), viewing teams, and a photo gallery.

## Tech stack

- React 19 + Vite 8 (beta), React Router 7
- Plain CSS per component/page (`App.css`, `PlayerCard.css`) — no CSS framework
- Custom font assets bundled locally (AKONY, Larken Serif Trial)
- ESLint (flat config) for linting

## Pages / routes

- `/` — Home
- `/auction` — live auction console: search a player by ID (`APL11_XX`), enter a bid amount, assign to a team or mark "Not Sold"
- `/gallery` — image gallery
- `/players` — player roster listing
- `/teams` — team listing

## Current state

This is an early-stage frontend prototype. Player data (`src/services/playerApi.js`, and the mock arrays inside `src/pages/Auction.jsx`) is **hardcoded mock data** with an explicit comment noting it is meant to be replaced by a MongoDB-backed API later — no backend currently exists in this repository. The player-image URLs are placeholder images.

## Running it

```bash
npm install
npm run dev      # start Vite dev server
npm run build    # production build
npm run lint      # eslint
npm run preview   # preview the production build
```

## Status

Early prototype (tagged commits `0.01` → `0.2`). UI flow and page structure are in place; data layer is mocked and no backend integration has been built yet.
