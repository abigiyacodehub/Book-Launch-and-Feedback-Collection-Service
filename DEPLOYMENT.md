# Deployment Guide

## Recommended Setup

Use Vercel or Netlify for the React frontend and a separate Node host for the Express API. Render is the simplest default for the backend.

## Vercel Frontend

- Root directory: repository root
- Framework preset: Vite
- Install command: `npm install`
- Build command: `npm run build --workspace client`
- Output directory: `client/dist`
- Environment variables: copy the values from `client/.env.production.example`

The included `vercel.json` adds single-page app routing and baseline security headers.

## Netlify Frontend

- Base directory: repository root
- Build command: `npm run build --workspace client`
- Publish directory: `client/dist`
- Environment variables: copy the values from `client/.env.production.example`

The included `netlify.toml` adds single-page app routing and baseline security headers.

## Backend API

Deploy the `server` folder to a Node host such as Render.

- Build command: `npm install`
- Start command: `npm start`
- Environment variables: copy the values from `server/.env.production.example`

Set `CORS_ORIGIN` to the deployed frontend domains, separated by commas.

## Before Launch

- Replace every placeholder secret in the hosting provider dashboard.
- Confirm local `.env` files are ignored with `git check-ignore -v .env client/.env server/.env`.
- Add Clerk/Auth0 production redirect URLs.
- Test registration, feedback submission, admin login, and gallery loading against the deployed API.
