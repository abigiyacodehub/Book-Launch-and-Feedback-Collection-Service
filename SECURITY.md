# Security Checklist

## Secrets

- Never commit `.env`, `.env.local`, or `.env.production` files.
- Store production variables only in Vercel, Netlify, or the backend host environment settings.
- Rotate any MongoDB, Clerk/Auth0, Cloudinary, or Telegram token that was ever committed or shared.
- Use separate development and production credentials.

## Frontend Hosting

- Only expose variables prefixed with `VITE_` to the React app.
- Do not place MongoDB strings, API secrets, Auth0 client secrets, Cloudinary secrets, or Telegram tokens in frontend variables.
- Configure allowed callback/logout URLs in Clerk or Auth0 for the deployed Vercel/Netlify domain.

## Backend API

- Restrict CORS to the deployed frontend domains through `CORS_ORIGIN`.
- Require auth middleware for admin routes.
- Validate request bodies before writing to MongoDB.
- Rate-limit public forms such as registration and feedback submission.
- Moderate feedback before publishing it publicly.

## MongoDB Atlas

- Use a least-privilege database user for this app.
- Restrict network access to trusted hosts where possible.
- Enable backups before production launch.

## Deployment

- Vercel or Netlify should host only the frontend unless the backend is adapted for serverless functions.
- Host the Express API separately on Render, Railway, Fly.io, or a VPS.
- Set `NODE_ENV=production` for the backend.
