

import { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import 'react-quill/dist/quill.snow.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ITAKI ",
    template: "%s | ITAKI",
  },
  icons: {
    icon: "/favicon.ico",
  },

};

    console.log = () => {};
    console.warn = () => {};
    console.error = () => {};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
