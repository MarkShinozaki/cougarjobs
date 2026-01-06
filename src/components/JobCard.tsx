"use client";

import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { MapPin, DollarSign, Clock, Building2, Wifi, X, Heart, Star } from "lucide-react";
import type { Job } from "@/types";

interface JobCardProps {
  job: Job;
  onSwipe: (direction: "left" | "right" | "up") => void;
  isTop: boolean;
  index: number;
}

export function JobCard({ job, onSwipe, isTop, index }: JobCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateZ = useTransform(x, [-200, 200], [-15, 15]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0.5, 1, 1, 1, 0.5]);

  const likeOpacity = useTransform(x, [0, 100], [0, 1]);
  const nopeOpacity = useTransform(x, [-100, 0], [1, 0]);
  const superOpacity = useTransform(y, [-100, 0], [1, 0]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x > 100) {
      onSwipe("right");
    } else if (info.offset.x < -100) {
      onSwipe("left");
    } else if (info.offset.y < -100) {
      onSwipe("up");
    }
  };

  return (
    <motion.div
      className="absolute w-full cursor-grab active:cursor-grabbing touch-manipulation"
      style={{ 
        x, 
        y, 
        rotateZ, 
        opacity,
        zIndex: 10 - index,
        scale: 1 - index * 0.05,
        translateY: index * 8,
      }}
      drag={isTop}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={1}
      onDragEnd={handleDragEnd}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ 
        scale: 1 - index * 0.05, 
        opacity: 1 - index * 0.2,
        y: index * 8,
      }}
      exit={{ x: 300, opacity: 0 }}
      whileTap={{ scale: isTop ? 1.02 : 1 - index * 0.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <div className="relative bg-gradient-to-br from-cougar-dark to-cougar-dark/80 rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-full">
        {/* Swipe Indicators */}
        <motion.div
          className="absolute top-4 md:top-8 right-4 md:right-8 px-4 md:px-6 py-1.5 md:py-2 bg-green-500 rounded-xl text-white font-bold text-lg md:text-2xl rotate-12 border-4 border-green-400 z-20"
          style={{ opacity: likeOpacity }}
        >
          LIKE
        </motion.div>
        <motion.div
          className="absolute top-4 md:top-8 left-4 md:left-8 px-4 md:px-6 py-1.5 md:py-2 bg-red-500 rounded-xl text-white font-bold text-lg md:text-2xl -rotate-12 border-4 border-red-400 z-20"
          style={{ opacity: nopeOpacity }}
        >
          NOPE
        </motion.div>
        <motion.div
          className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2 px-4 md:px-6 py-1.5 md:py-2 bg-cougar-gold rounded-xl text-white font-bold text-lg md:text-2xl border-4 border-yellow-400 z-20"
          style={{ opacity: superOpacity }}
        >
          SUPER
        </motion.div>

        {/* Card Header */}
        <div className="p-4 md:p-8 pb-2 md:pb-4">
          <div className="flex items-start justify-between mb-3 md:mb-4">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-cougar-crimson to-rose-600 flex items-center justify-center">
              <Building2 className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            {job.remote && (
              <span className="flex items-center gap-1 md:gap-1.5 px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs md:text-sm">
                <Wifi className="w-3 h-3 md:w-4 md:h-4" />
                Remote
              </span>
            )}
          </div>

          <h2 className="font-display text-xl md:text-3xl font-bold text-cougar-cream mb-1 md:mb-2">
            {job.title}
          </h2>
          <p className="text-cougar-gold text-base md:text-lg font-medium">{job.company}</p>
        </div>

        {/* Card Body */}
        <div className="px-4 md:px-8 py-2 md:py-4 space-y-3 md:space-y-4">
          <div className="flex flex-wrap gap-2 md:gap-3 text-xs md:text-base">
            <span className="flex items-center gap-1 md:gap-2 text-cougar-cream/60">
              <MapPin className="w-3 h-3 md:w-4 md:h-4" />
              {job.location}
            </span>
            <span className="flex items-center gap-1 md:gap-2 text-cougar-cream/60">
              <DollarSign className="w-3 h-3 md:w-4 md:h-4" />
              {job.salary}
            </span>
            <span className="flex items-center gap-1 md:gap-2 text-cougar-cream/60">
              <Clock className="w-3 h-3 md:w-4 md:h-4" />
              {job.posted}
            </span>
          </div>

          <p className="text-cougar-cream/70 leading-relaxed text-sm md:text-base line-clamp-2 md:line-clamp-none">{job.description}</p>

          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {job.requirements.slice(0, 4).map((req, i) => (
              <span
                key={i}
                className="px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-white/5 text-cougar-cream/60 text-xs md:text-sm border border-white/10"
              >
                {req}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer */}
        <div className="p-4 md:p-8 pt-2 md:pt-4 flex items-center justify-center gap-3 md:gap-4">
          <button
            onClick={() => onSwipe("left")}
            className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-red-500/10 border-2 border-red-500/30 flex items-center justify-center hover:bg-red-500/20 active:bg-red-500/30 transition-colors touch-manipulation"
          >
            <X className="w-6 h-6 md:w-8 md:h-8 text-red-500" />
          </button>
          <button
            onClick={() => onSwipe("up")}
            className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-cougar-gold/10 border-2 border-cougar-gold/30 flex items-center justify-center hover:bg-cougar-gold/20 active:bg-cougar-gold/30 transition-colors touch-manipulation"
          >
            <Star className="w-5 h-5 md:w-6 md:h-6 text-cougar-gold" />
          </button>
          <button
            onClick={() => onSwipe("right")}
            className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-500/10 border-2 border-green-500/30 flex items-center justify-center hover:bg-green-500/20 active:bg-green-500/30 transition-colors touch-manipulation"
          >
            <Heart className="w-6 h-6 md:w-8 md:h-8 text-green-500" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
