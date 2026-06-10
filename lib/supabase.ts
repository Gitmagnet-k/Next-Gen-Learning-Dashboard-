import { createClient } from "@supabase/supabase-js";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { Course } from "@/types/course";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Safe stub for build/CI environments where env vars are not set.
// Provides a minimal API used by the app to avoid build-time failures.
const stub = {
  from: () => ({
    select: () => Promise.resolve({ data: [] as Course[], error: null }),
  }),
} as const;

export const supabase: SupabaseClient | typeof stub =
  url && key ? createClient(url, key) : stub;