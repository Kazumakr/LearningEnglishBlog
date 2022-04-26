import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MyProvider } from '../context/state'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MyProvider>
      <Component {...pageProps} />
    </MyProvider>
  )
}

export default MyApp
