import Link from "next/link"
import { Twitter, Github, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="text-gray-300 py-12 mt-24 relative overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br  from-[#99E39E]/0 via-[#66C2A5]/20 to-[#41B3A3]/5 opacity-60"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-3 gap-8">

            {/* Logo and Quote */}
          <div className="space-y-4 max-md:col-span-3 col-span-1">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#99E39E] to-[#41B3A3] rounded-lg"></div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#99E39E] to-[#41B3A3]">
                SubFlow
              </span>
            </div>
            <p className="text-sm italic text-[#A7D7AC]">&quot;Empowering the future of decentralized subscriptions&quot;</p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4 max-md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#99E39E] to-[#41B3A3]">
              Navigation
            </h3>
            <ul className="space-y-2">
              {["Dashboard", "Help/FAQ", "Privacy Policy", "Terms of Service"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-[#99E39E] transition- text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          

          {/* Social Media Icons */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#99E39E] to-[#41B3A3]">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-[#A7D7AC] hover:text-[#99E39E] transition-colors">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-[#A7D7AC] hover:text-[#99E39E] transition-colors">
                <MessageCircle size={24} />
                <span className="sr-only">Discord</span>
              </a>
              <a href="#" className="text-[#A7D7AC] hover:text-[#99E39E] transition-colors">
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-12 pt-8 border-t border-[#41B3A3]/30 text-center">
          <p className="text-sm text-[#A7D7AC]">&copy; 2025 SubFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

