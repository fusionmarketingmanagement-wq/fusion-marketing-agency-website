import { createClient } from '@supabase/supabase-js'

const defaultSupabaseUrl = 'https://cgnrgaslopugdktkqbnj.supabase.co'
const defaultSupabasePublishableKey = 'sb_publishable_yWFAGMZvZ5zFOnrIM83JWA_C0AXFUo_'

// These values are frontend-safe public configuration. Environment variables
// can override them when the project is moved or its publishable key is rotated.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || defaultSupabaseUrl
const supabasePublishableKey =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || defaultSupabasePublishableKey

export const isSupabaseConfigured = Boolean(supabaseUrl && supabasePublishableKey)

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabasePublishableKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
    })
  : null
