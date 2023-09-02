// These styles apply to every route in the application
import '@/pages/global.css'
import AuthProvider from '@/components/authProvider/AuthProvider'

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>

    <Component {...pageProps} />
    </AuthProvider>
  )
}