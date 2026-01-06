"use client";

import { motion } from "framer-motion";
import { ExternalLink, Clock, DollarSign, BarChart3 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { certifications } from "@/lib/data";
import { useState } from "react";

const levelColors = {
  Beginner: "from-emerald-500 to-teal-500",
  Intermediate: "from-cougar-gold to-amber-500",
  Advanced: "from-cougar-crimson to-rose-500",
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 },
};

export default function CertificationsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  const categories = [...new Set(certifications.map((c) => c.category))];
  const levels = ["Beginner", "Intermediate", "Advanced"];

  const filteredCerts = certifications.filter((cert) => {
    if (selectedCategory && cert.category !== selectedCategory) return false;
    if (selectedLevel && cert.level !== selectedLevel) return false;
    return true;
  });

  return (
    <main className="min-h-screen pb-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cougar-gold/10 via-cougar-dark to-cougar-dark" />

      <div className="relative z-10 container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="font-display text-5xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h1>
          <p className="text-cougar-cream/60 text-lg">
            Boost your career with industry-recognized certifications
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8 space-y-4"
        >
          <div>
            <h3 className="text-sm text-cougar-cream/40 uppercase tracking-wider mb-3">
              Category
            </h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  selectedCategory === null
                    ? "bg-cougar-crimson text-white"
                    : "glass text-cougar-cream/60 hover:text-cougar-cream"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    selectedCategory === cat
                      ? "bg-cougar-crimson text-white"
                      : "glass text-cougar-cream/60 hover:text-cougar-cream"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm text-cougar-cream/40 uppercase tracking-wider mb-3">
              Level
            </h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedLevel(null)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  selectedLevel === null
                    ? "bg-cougar-gold text-white"
                    : "glass text-cougar-cream/60 hover:text-cougar-cream"
                }`}
              >
                All Levels
              </button>
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    selectedLevel === level
                      ? "bg-cougar-gold text-white"
                      : "glass text-cougar-cream/60 hover:text-cougar-cream"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCerts.map((cert) => (
            <motion.a
              key={cert.id}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              className="group p-6 rounded-2xl glass card-hover block relative overflow-hidden"
            >
              {/* Level Badge */}
              <div
                className={`absolute top-0 right-0 px-4 py-1 rounded-bl-xl bg-gradient-to-r ${levelColors[cert.level]} text-white text-xs font-medium`}
              >
                {cert.level}
              </div>

              <div className="mb-4">
                <h3 className="font-display text-xl font-semibold mb-1 pr-20 group-hover:text-cougar-gold transition-colors">
                  {cert.name}
                </h3>
                <p className="text-cougar-cream/40 text-sm">{cert.provider}</p>
              </div>

              <p className="text-cougar-cream/60 text-sm mb-4 line-clamp-2">
                {cert.description}
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-cougar-cream/50">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {cert.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <DollarSign className="w-4 h-4" />
                  {cert.cost}
                </span>
                <span className="flex items-center gap-1.5">
                  <BarChart3 className="w-4 h-4" />
                  {cert.category}
                </span>
              </div>

              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-cougar-cream/30">Click to learn more</span>
                <ExternalLink className="w-4 h-4 text-cougar-cream/30 group-hover:text-cougar-gold transition-colors" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {filteredCerts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-cougar-cream/40 text-lg">No certifications match your filters</p>
          </motion.div>
        )}
      </div>

      <Navbar />
    </main>
  );
}
