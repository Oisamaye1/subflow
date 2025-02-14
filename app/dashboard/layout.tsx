
import { DM_Sans } from "next/font/google";
import { Sidebar } from "@/app/dashboard/dashboard-components/sidebar"
import type { Metadata } from "next"
import type React from "react" // Added import for React

const DMSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "SubFlow - Dashboard",
  description: "SubFlow is the easiest way to manage recurring payments in crypto. Accept subscriptions in USDC, ETH, and more with zero gas fees. Perfect for Web3 startups, creators, and freelancers. Start earning in minutes—no intermediaries, no borders.",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={DMSans.className}>
        <div className="min-h-screen bg-[#020914] text-white">
          <div className="grid lg:grid-cols-[280px_1fr]">
            
            <Sidebar />
            {children}
            
            
          </div>
        </div>
      </body>
    </html>
  )
}

