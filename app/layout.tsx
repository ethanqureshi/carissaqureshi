import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Self-hosted font files (SIL OFL, see app/fonts/*-OFL.txt) so builds never fetch from Google.
const cormorant = localFont({
  src: [
    { path: "./fonts/CormorantGaramond-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/CormorantGaramond-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/CormorantGaramond-SemiBold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-cormorant",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

const inter = localFont({
  src: [{ path: "./fonts/Inter-Regular.woff2", weight: "400", style: "normal" }],
  variable: "--font-inter",
  display: "swap",
});

const description =
  "Political science and criminology student at North Central College (4.0 GPA), two-time U.S. U20 World Team member, seeking policy and legal internship roles.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.carissaqureshi.com"),
  alternates: {
    canonical: "/",
  },
  title: "Carissa Qureshi",
  description,
  openGraph: {
    title: "Carissa Qureshi",
    description,
    url: "https://www.carissaqureshi.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carissa Qureshi",
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
