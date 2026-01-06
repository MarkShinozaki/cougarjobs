"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Briefcase, Award, Sparkles, ArrowRight, GraduationCap } from "lucide-react";
import { Navbar } from "@/components/Navbar";

const features = [
  {
    icon: Briefcase,
    title: "Job Resources",
    description: "Curated resources for your profession",
    href: "/resources",
    color: "from-cougar-crimson to-rose-600",
  },
  {
    icon: Award,
    title: "Certifications",
    description: "Essential certifications to boost your career",
    href: "/certifications",
    color: "from-cougar-gold to-amber-500",
  },
  {
    icon: Sparkles,
    title: "Job Swipe",
    description: "Swipe on jobs like Tinder",
    href: "/swipe",
    color: "from-violet-600 to-purple-500",
  },
  {
    icon: GraduationCap,
    title: "Auto Apply",
    description: "AI-powered automatic job applications",
    href: "/auto-apply",
    color: "from-emerald-500 to-teal-500",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden pb-24 md:pb-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cougar-crimson/20 via-cougar-dark to-cougar-dark" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NCAwLTE4IDguMDYtMTggMThzOC4wNiAxOCAxOCAxOCAxOC04LjA2IDE4LTE4LTguMDYtMTgtMTgtMTh6bTAgMmMtOC44NCAwLTE2IDcuMTYtMTYgMTZzNy4xNiAxNiAxNiAxNiAxNi03LjE2IDE2LTE2LTcuMTYtMTYtMTYtMTZ6IiBzdHJva2U9IiM5ODFlMzIiIHN0cm9rZS1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-30" />

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="w-2 h-2 bg-cougar-crimson rounded-full animate-pulse" />
            <span className="text-sm text-cougar-cream/80">For WSU Cougars</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl font-bold mb-4 md:mb-6 tracking-tight">
            <span className="text-gradient">Cougar</span>
            <span className="text-cougar-cream">Jobs</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-cougar-cream/60 max-w-2xl mx-auto mb-6 md:mb-8 font-body px-4">
            Your AI-powered career companion. Find jobs, get certified, and land your dream position with smart automation.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/swipe"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cougar-crimson to-cougar-crimson/80 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-cougar-crimson/25 transition-all duration-300 group"
            >
              Start Swiping
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-6xl mx-auto"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={item}>
              <Link href={feature.href} className="block h-full">
                <div className="h-full p-4 md:p-6 rounded-2xl glass card-hover group cursor-pointer">
                  <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                  </div>
                  <h3 className="font-display text-base md:text-xl font-semibold mb-1 md:mb-2">{feature.title}</h3>
                  <p className="text-cougar-cream/50 text-xs md:text-sm hidden sm:block">{feature.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 md:mt-24 grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto text-center"
        >
          {[
            { value: "10K+", label: "Jobs Listed" },
            { value: "500+", label: "Certifications" },
            { value: "95%", label: "Success Rate" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-2xl md:text-4xl font-bold text-gradient">{stat.value}</div>
              <div className="text-cougar-cream/40 text-xs md:text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <Navbar />
    </main>
  );
}
