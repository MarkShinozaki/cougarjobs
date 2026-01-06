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
  { href: "/auto-apply", label: "Auto Apply", icon: GraduationCap },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        className="flex items-center gap-2 px-4 py-3 rounded-full glass"
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                isActive
                  ? "text-white"
                  : "text-cougar-cream/50 hover:text-cougar-cream/80"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="navbar-active"
                  className="absolute inset-0 bg-gradient-to-r from-cougar-crimson to-cougar-crimson/80 rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                <item.icon className="w-5 h-5" />
              </span>
              <span className="relative z-10 text-sm font-medium hidden md:block">
                {item.label}
              </span>
            </Link>
          );
        })}
      </motion.div>
    </nav>
  );
}
