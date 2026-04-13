import { createClient } from '@supabase/supabase-js'

// These should be set in your .env.local file
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Safe storage adapter: guards against SSR (window undefined) and Next.js 15's
// broken experimental localStorage (exists but methods aren't callable)
const safeStorage = {
  getItem: (key) => {
    if (typeof window === 'undefined') return null
    try { return window.localStorage.getItem(key) } catch { return null }
  },
  setItem: (key, value) => {
    if (typeof window === 'undefined') return
    try { window.localStorage.setItem(key, value) } catch {}
  },
  removeItem: (key) => {
    if (typeof window === 'undefined') return
    try { window.localStorage.removeItem(key) } catch {}
  },
}

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
    storage: safeStorage,
  },
})
