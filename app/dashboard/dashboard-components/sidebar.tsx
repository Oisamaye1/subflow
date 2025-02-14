/* eslint-disable @next/next/no-html-link-for-pages */
'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { ChevronDown,  LayoutDashboard, LifeBuoy,  ReceiptIcon, Settings, Wallet } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Subscriptions",
    href: "/dashboard/subscriptions",
    icon: Wallet,
  },
  {
    name: "Billing",
    href: "/dashboard/billing",
    icon: ReceiptIcon,
    hasDropdown: true,
  },
  {
    name: "Help",
    href: "/dashboard/help",
    icon: LifeBuoy,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="border-r bg-background/50 backdrop-blur" role="navigation" aria-label="Main navigation">
      <div className="flex h-16 items-center gap-2 border-b border-gray-800 px-6">
        <a href="/" className="font-bold">
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#99E39E] to-[#41B3A3]">
          SubFlow
        </span> 
        </a>
      </div>
      <div className="px-4 py-4">
        <Input placeholder="Search" className="bg-background/50 rounded" aria-label="Search" />
      </div>
      <nav className="space-y-2 px-2">
        {navigation.map((item) => (
          <Button
            key={item.href}
            variant="ghost"
            asChild
            className={cn("w-full justify-start gap-2 hover:bg-gray-800", pathname === item.href && "bg-secondary")}
          >
            <Link href={item.href}>
              <item.icon className="h-4 w-4" aria-hidden="true" />
              {item.name}
              {item.hasDropdown && <ChevronDown className="ml-auto h-4 w-4" aria-hidden="true" />}
            </Link>
          </Button>
        ))}
      </nav>
    </aside>
  )
}

