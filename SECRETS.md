Repository secrets (GitHub Actions)

Required secrets

- `NEXT_PUBLIC_SUPABASE_URL` — your Supabase project URL (e.g. `https://xxxx.supabase.co`).
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — your Supabase anon/public API key.

Why these are needed

- The CI workflow runs build, lint and tests. If your tests or runtime expect a real Supabase backend, these secrets must be available to the Actions environment.
- The workflow will fail early if those secrets are not present (by design).

How to add secrets (GitHub UI)

1. Open your repository on GitHub.
2. Go to Settings → Secrets and variables → Actions.
3. Click **New repository secret**.
4. Add a secret named `NEXT_PUBLIC_SUPABASE_URL` with the value of your Supabase URL.
5. Add a secret named `NEXT_PUBLIC_SUPABASE_ANON_KEY` with the anon/public key.

Local development

- For local development, create a `.env.local` file at the project root with the same variables (do NOT commit this file):

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6...
```

Security notes

- Never commit secrets to the repository.
- Limit access to repository settings to trusted collaborators.
- Rotate keys if you suspect they were exposed.
