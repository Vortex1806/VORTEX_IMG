import type { Metadata } from "next";
import localFont from "next/font/local";
import { IBM_Plex_Sans, Inter } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const IBMPlex = IBM_Plex_Sans({ subsets: ["latin"], weight: ['400', '500', '600', '700'], variable: '--font-ibm-plex' })


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Imaginify",
  description: "Ai powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl='/' appearance={
      { variables: { colorPrimary: '#624cf5' } }
    }>
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
