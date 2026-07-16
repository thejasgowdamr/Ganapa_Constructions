import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://zqglzmmejrxzxjatlspc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxZ2x6bW1lanJ4enhqYXRsc3BjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyMjY5OTksImV4cCI6MjA5NDgwMjk5OX0.Xqg_JCW6OyoC3y_LDCcBMOvQ_h2S0JNREx-UTC2As7k';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);