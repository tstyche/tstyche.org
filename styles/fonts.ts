import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

export const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
});

export const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
});
