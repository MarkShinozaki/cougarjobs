"use client";

import { motion } from "framer-motion";
import { ExternalLink, FileText, Video, BookOpen, Wrench } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { resources, professions } from "@/lib/data";
import { useState } from "react";

const typeIcons = {
  Article: FileText,
  Video: Video,
  Course: BookOpen,
  Tool: Wrench,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ResourcesPage() {
  const [selectedProfession, setSelectedProfession] = useState<string | null>(null);

  const categories = [...new Set(resources.map((r) => r.category))];

  return (
    <main className="min-h-screen pb-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cougar-crimson/10 via-cougar-dark to-cougar-dark" />

      <div className="relative z-10 container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="font-display text-5xl font-bold mb-4">
            <span className="text-gradient">Job Resources</span>
          </h1>
          <p className="text-cougar-cream/60 text-lg">
            Curated resources to help you land your dream job
          </p>
        </motion.div>

        {/* Profession Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h3 className="text-sm text-cougar-cream/40 uppercase tracking-wider mb-3">
            Filter by Profession
          </h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedProfession(null)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                selectedProfession === null
                  ? "bg-cougar-crimson text-white"
                  : "glass text-cougar-cream/60 hover:text-cougar-cream"
              }`}
            >
              All
            </button>
            {professions.slice(0, 6).map((prof) => (
              <button
                key={prof}
                onClick={() => setSelectedProfession(prof)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  selectedProfession === prof
                    ? "bg-cougar-crimson text-white"
                    : "glass text-cougar-cream/60 hover:text-cougar-cream"
                }`}
              >
                {prof}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Resources by Category */}
        {categories.map((category, categoryIndex) => (
          <motion.section
            key={category}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * categoryIndex }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-cougar-crimson rounded-full" />
              {category}
            </h2>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {resources
                .filter((r) => r.category === category)
                .map((resource) => {
                  const Icon = typeIcons[resource.type];
                  return (
                    <motion.a
                      key={resource.id}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={item}
                      className="group p-6 rounded-2xl glass card-hover block"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-cougar-crimson/20 flex items-center justify-center shrink-0 group-hover:bg-cougar-crimson/30 transition-colors">
                          <Icon className="w-6 h-6 text-cougar-crimson" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-display text-lg font-semibold mb-1 flex items-center gap-2">
                            {resource.title}
                            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </h3>
                          <p className="text-cougar-cream/50 text-sm line-clamp-2">
                            {resource.description}
                          </p>
                          <span className="inline-block mt-2 px-2 py-0.5 rounded text-xs bg-white/5 text-cougar-cream/40">
                            {resource.type}
                          </span>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
            </motion.div>
          </motion.section>
        ))}
      </div>

      <Navbar />
    </main>
  );
}
