Local environment variables

Create a file named `.env.local` at the project root (next.js will load it automatically).

Example `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6...
```

Notes:
- Use your Supabase project's URL and anon public key.
- Do NOT commit `.env.local` to source control. Add it to `.gitignore` if necessary.

Deployment:
- On Vercel/Netlify, add the two variables in the project's environment settings.
- Ensure the variables are available to the server and client; `NEXT_PUBLIC_` prefix exposes them to the browser.

GitHub Actions / Repository Secrets:

- To surface these values in GitHub Actions (for builds or deploys), add the following repository secrets in your GitHub repository settings:
	- `NEXT_PUBLIC_SUPABASE_URL`
	- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

- The included CI workflow will run even if the secrets are not configured (the app uses a build-time stub when env vars are missing), but setting the secrets allows integration tests or deployments that depend on real data.

Setting secrets:

1. Open your repository on GitHub.
2. Go to Settings → Secrets and variables → Actions → New repository secret.
3. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` with their respective values.

CI notes:

- The workflow `.github/workflows/ci.yml` checks for the presence of those secrets and logs a non-fatal warning if they are missing.
- If you want the workflow to fail when secrets are missing, edit the workflow and change the warning step to exit non-zero when values are absent.

Quick commands

```powershell
# install deps
npm ci
# run dev server
npm run dev
```
