import '../styles/admin.css'
import '../styles/globals.css'
import '../styles/components.css'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';

function MyApp({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient())

  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
      <CssBaseline />
      <Component {...pageProps} />
    </SessionContextProvider>
  )
}
export default MyApp
