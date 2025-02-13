import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Darkmode from "@/components/dark-color";
import Footer from "@/components/footer";
const DMSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "SubFlow: Crypto Subscriptions Made Simple",
  description: "SubFlow is the easiest way to manage recurring payments in crypto. Accept subscriptions in USDC, ETH, and more with zero gas fees. Perfect for Web3 startups, creators, and freelancers. Start earning in minutes—no intermediaries, no borders. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={DMSans.className}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Darkmode>
              <Navbar />
              {children}
              <Footer />
            </Darkmode>
           
          </ThemeProvider>
        
      </body>
    </html>
  );
}
