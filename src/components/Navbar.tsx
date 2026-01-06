"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Briefcase, Award, Sparkles, GraduationCap, Home } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/resources", label: "Resources", icon: Briefcase },
  { href: "/certifications", label: "Certs", icon: Award },
  { href: "/swipe", label: "Swipe", icon: Sparkles },
  { href: "/auto-apply", label: "Auto", icon: GraduationCap },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-[max(env(safe-area-inset-bottom),16px)] pt-2 md:bottom-6 md:left-1/2 md:-translate-x-1/2 md:right-auto md:px-0 md:pb-0 md:pt-0">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        className="flex items-center justify-around md:justify-center md:gap-1 lg:gap-2 px-2 md:px-4 py-2 md:py-3 rounded-2xl md:rounded-full glass w-full md:w-auto"
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex flex-col md:flex-row items-center gap-1 md:gap-2 px-3 md:px-4 py-2 rounded-xl md:rounded-full transition-all duration-300 touch-manipulation ${
                isActive
                  ? "text-white"
                  : "text-cougar-cream/50 hover:text-cougar-cream/80 active:text-cougar-cream/90"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="navbar-active"
                  className="absolute inset-0 bg-gradient-to-r from-cougar-crimson to-cougar-crimson/80 rounded-xl md:rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                <item.icon className="w-5 h-5 md:w-5 md:h-5" />
              </span>
              <span className="relative z-10 text-[10px] md:text-sm font-medium md:hidden lg:block">
                {item.label}
              </span>
            </Link>
          );
        })}
      </motion.div>
    </nav>
  );
}
