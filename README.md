# Book-Launch-and-Feedback-Collection-Service
Book Launch and Feedback Collection Service 

## Project Structure

```text
.
├── client/          # React + Tailwind frontend
│   ├── .env.example # Public frontend placeholders
│   └── src/pages/   # Home, About, Register, Gallery, Contact
├── server/          # Node.js + Express backend
│   ├── .env.example # Private backend placeholders
│   ├── models/      # MongoDB schemas
│   ├── routes/      # API endpoints
│   └── services/    # Integrations such as Telegram
└── .env.example     # Shared setup reference
```

Local `.env` files are intentionally ignored by Git. Copy values from the `.env.example` files and replace the placeholders with real MongoDB, auth, Cloudinary, and Telegram credentials.

## Hosting Direction

Recommended default: deploy the frontend to Vercel and the backend API to Render. This keeps the React app fast to ship, gives the Express server a managed runtime, and avoids VPS maintenance until the project has enough traffic or custom infrastructure needs to justify it.

## Deployment

This repo includes `vercel.json` and `netlify.toml` for frontend deployment. Use `client/.env.production.example` for public frontend variables and `server/.env.production.example` for private backend variables.

Do not put backend secrets in Vercel or Netlify frontend variables. MongoDB, Clerk/Auth0 secrets, Cloudinary secrets, and Telegram bot tokens belong only in the backend hosting environment.

See `DEPLOYMENT.md` and `SECURITY.md` before launching.
