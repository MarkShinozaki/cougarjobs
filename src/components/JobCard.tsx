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
      className="absolute w-full cursor-grab active:cursor-grabbing"
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
      <div className="relative bg-gradient-to-br from-cougar-dark to-cougar-dark/80 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        {/* Swipe Indicators */}
        <motion.div
          className="absolute top-8 right-8 px-6 py-2 bg-green-500 rounded-xl text-white font-bold text-2xl rotate-12 border-4 border-green-400 z-20"
          style={{ opacity: likeOpacity }}
        >
          LIKE
        </motion.div>
        <motion.div
          className="absolute top-8 left-8 px-6 py-2 bg-red-500 rounded-xl text-white font-bold text-2xl -rotate-12 border-4 border-red-400 z-20"
          style={{ opacity: nopeOpacity }}
        >
          NOPE
        </motion.div>
        <motion.div
          className="absolute top-8 left-1/2 -translate-x-1/2 px-6 py-2 bg-cougar-gold rounded-xl text-white font-bold text-2xl border-4 border-yellow-400 z-20"
          style={{ opacity: superOpacity }}
        >
          SUPER
        </motion.div>

        {/* Card Header */}
        <div className="p-8 pb-4">
          <div className="flex items-start justify-between mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cougar-crimson to-rose-600 flex items-center justify-center">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            {job.remote && (
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-sm">
                <Wifi className="w-4 h-4" />
                Remote
              </span>
            )}
          </div>

          <h2 className="font-display text-3xl font-bold text-cougar-cream mb-2">
            {job.title}
          </h2>
          <p className="text-cougar-gold text-lg font-medium">{job.company}</p>
        </div>

        {/* Card Body */}
        <div className="px-8 py-4 space-y-4">
          <div className="flex flex-wrap gap-3">
            <span className="flex items-center gap-2 text-cougar-cream/60">
              <MapPin className="w-4 h-4" />
              {job.location}
            </span>
            <span className="flex items-center gap-2 text-cougar-cream/60">
              <DollarSign className="w-4 h-4" />
              {job.salary}
            </span>
            <span className="flex items-center gap-2 text-cougar-cream/60">
              <Clock className="w-4 h-4" />
              {job.posted}
            </span>
          </div>

          <p className="text-cougar-cream/70 leading-relaxed">{job.description}</p>

          <div className="flex flex-wrap gap-2">
            {job.requirements.slice(0, 4).map((req, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-full bg-white/5 text-cougar-cream/60 text-sm border border-white/10"
              >
                {req}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer */}
        <div className="p-8 pt-4 flex items-center justify-center gap-4">
          <button
            onClick={() => onSwipe("left")}
            className="w-16 h-16 rounded-full bg-red-500/10 border-2 border-red-500/30 flex items-center justify-center hover:bg-red-500/20 transition-colors"
          >
            <X className="w-8 h-8 text-red-500" />
          </button>
          <button
            onClick={() => onSwipe("up")}
            className="w-14 h-14 rounded-full bg-cougar-gold/10 border-2 border-cougar-gold/30 flex items-center justify-center hover:bg-cougar-gold/20 transition-colors"
          >
            <Star className="w-6 h-6 text-cougar-gold" />
          </button>
          <button
            onClick={() => onSwipe("right")}
            className="w-16 h-16 rounded-full bg-green-500/10 border-2 border-green-500/30 flex items-center justify-center hover:bg-green-500/20 transition-colors"
          >
            <Heart className="w-8 h-8 text-green-500" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
