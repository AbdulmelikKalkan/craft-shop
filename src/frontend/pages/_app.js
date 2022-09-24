// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider>
      <ThemeProvider defaultTheme='system' enableSystem={true}>
        <Component {...pageProps} />
      </ThemeProvider>
    </NextUIProvider>
  )
}

export default MyApp
