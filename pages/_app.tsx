import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <Component {...pageProps} />
    </div>
  )
}
