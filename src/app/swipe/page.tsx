"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { JobCard } from "@/components/JobCard";
import { jobs } from "@/lib/data";
import { Undo2, Filter, Flame } from "lucide-react";

export default function SwipePage() {
  const [jobStack, setJobStack] = useState(jobs);
  const [likedJobs, setLikedJobs] = useState<string[]>([]);
  const [history, setHistory] = useState<typeof jobs>([]);

  const handleSwipe = useCallback((direction: "left" | "right" | "up") => {
    const currentJob = jobStack[0];
    if (!currentJob) return;

    setHistory((prev) => [currentJob, ...prev]);
    setJobStack((prev) => prev.slice(1));

    if (direction === "right" || direction === "up") {
      setLikedJobs((prev) => [...prev, currentJob.id]);
    }
  }, [jobStack]);

  const handleUndo = useCallback(() => {
    if (history.length === 0) return;

    const lastJob = history[0];
    setHistory((prev) => prev.slice(1));
    setJobStack((prev) => [lastJob, ...prev]);
    setLikedJobs((prev) => prev.filter((id) => id !== lastJob.id));
  }, [history]);

  const resetStack = useCallback(() => {
    setJobStack(jobs);
    setHistory([]);
    setLikedJobs([]);
  }, []);

  return (
    <main className="min-h-screen pb-24 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-600/10 via-cougar-dark to-cougar-dark" />

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-1 md:mb-2">
            <span className="text-gradient">Job Swipe</span>
          </h1>
            <p className="text-cougar-cream/60">
              {jobStack.length} jobs remaining · {likedJobs.length} liked
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleUndo}
              disabled={history.length === 0}
              className="p-3 rounded-full glass disabled:opacity-30 hover:bg-white/10 transition-colors"
            >
              <Undo2 className="w-5 h-5" />
            </button>
            <button className="p-3 rounded-full glass hover:bg-white/10 transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Card Stack */}
        <div className="relative h-[calc(100vh-220px)] md:h-[600px] max-w-lg mx-auto">
          <AnimatePresence>
            {jobStack.length > 0 ? (
              jobStack.slice(0, 3).map((job, index) => (
                <JobCard
                  key={job.id}
                  job={job}
                  onSwipe={handleSwipe}
                  isTop={index === 0}
                  index={index}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cougar-crimson to-cougar-gold flex items-center justify-center mb-6">
                  <Flame className="w-12 h-12 text-white" />
                </div>
                <h2 className="font-display text-2xl font-bold mb-2">
                  You&apos;ve seen all jobs!
                </h2>
                <p className="text-cougar-cream/50 mb-6">
                  You liked {likedJobs.length} jobs
                </p>
                <button
                  onClick={resetStack}
                  className="px-6 py-3 bg-cougar-crimson rounded-full font-semibold hover:bg-cougar-crimson/80 transition-colors"
                >
                  Start Over
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Instructions */}
        {jobStack.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-cougar-cream/40 text-sm">
              Swipe right to like · Swipe left to pass · Swipe up to super like
            </p>
          </motion.div>
        )}
      </div>

      <Navbar />
    </main>
  );
}
