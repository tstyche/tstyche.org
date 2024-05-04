import { ibmPlexMono, ibmPlexSans } from "@/styles/fonts";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main className={`${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
