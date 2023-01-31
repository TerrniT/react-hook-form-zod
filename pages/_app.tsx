import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <Component {...pageProps} />
    </div>
  );
}
