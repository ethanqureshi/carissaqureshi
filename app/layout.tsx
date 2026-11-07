import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
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
    card: "summary",
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
