import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GeneralContextProvider } from '../context/appContext'

function MyApp({ Component, pageProps }: AppProps) {
  return <GeneralContextProvider>
    <Component {...pageProps} />
  </GeneralContextProvider>
}

export default MyApp
