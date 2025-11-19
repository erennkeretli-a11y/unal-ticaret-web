import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Ünal Ticaret - Tüp ve Su Sipariş",
  description:
    "Alanya Kızlar Pınarı Caddesi ve çevresine en hızlı tüp ve damacana su teslimatı. IG KONGAZ bayii Ünal Ticaret ile dakikalar içinde siparişinizi verin.",
  openGraph: {
    title: "Ünal Ticaret - Tüp ve Su Sipariş",
    description:
      "Alanya'nın en hızlı tüp ve damacana su servisi. WhatsApp'tan kolay sipariş verin.",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${inter.className} min-h-screen bg-brandWhite`}>
        {children}
      </body>
    </html>
  );
}
