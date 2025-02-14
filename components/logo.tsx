"use client"; // If using Next.js App Router

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  const pathname = usePathname(); // Get current route

  useEffect(() => {
    // If the route is '/', reload the page
    if (pathname === "/") {
      window.location.reload();
    }
  }, [pathname]);

  const handleClick = () => {
    router.push("/"); // Navigate to home
  };

  return (
    <button onClick={handleClick}>
      <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#99E39E] to-[#41B3A3]">
          SubFlow
        </span>
    </button>
  );
};

export default Logo;
