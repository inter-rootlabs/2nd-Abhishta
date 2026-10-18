import type { Metadata, Viewport } from "next";
import { preconnect } from "react-dom";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.abhishtaagrifarmstay.com"),
  title: "Abhishta Agri Farm Stay — a farm stay 90 km from Bangalore",
  description:
    "Cottages and group dormitories on a working farm near Kunigal: nature walks, Gau Seva cow cuddling, fruit picking, farm-to-table meals, a pool and bonfire evenings, 90 km from Bangalore.",
  openGraph: {
    title: "Abhishta Agri Farm Stay",
    description: "Escape the urban chaos and embrace serenity, 90 km from Bangalore.",
    images: ["/images/og.jpg"],
    locale: "en_IN",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#183520",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  preconnect("https://www.turiya.co");
  preconnect("https://www.youtube-nocookie.com");
  return (
    <html
      lang="en-IN"
      className={bricolage.variable}
      suppressHydrationWarning
    >
      <head>
        {/* Marks JS as available before paint so split headings can wait for their reveal without a flash. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
