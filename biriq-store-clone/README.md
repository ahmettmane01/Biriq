# Biriq Store — production-ready foundation

Next.js App Router + React + TypeScript + Supabase, structured for local development and Vercel deployment.

## Run locally
1. `npm install`
2. Copy `.env.example` to `.env.local` and add Supabase values when backend features are enabled.
3. `npm run dev`
4. Open `http://localhost:3000`.

## Verification
- `npm run typecheck`
- `npm run test`
- `npm run build`

## Architecture
The project separates UI, domain validation, services, repositories, security, API routes, admin modules and database migrations. Do not add secrets to client components. Admin authorization must be enforced server-side and by Supabase RLS.

## Admin
`/admin` is the admin workspace foundation. Production authentication/role enforcement should use Supabase Auth plus the `profiles.role` value and server-side checks before mutations.
