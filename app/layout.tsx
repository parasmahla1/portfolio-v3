import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const saira = Saira({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Paras Mahla",
  description: "Paras Mahla's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <Providers>
        {children}
        </Providers>
        </body>
    </html>
  );
}
