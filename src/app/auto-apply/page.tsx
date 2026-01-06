"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import {
  Bot,
  Zap,
  Target,
  FileText,
  Settings,
  Play,
  Pause,
  CheckCircle2,
  Clock,
  AlertCircle,
} from "lucide-react";

interface ApplicationStatus {
  id: string;
  company: string;
  position: string;
  status: "applied" | "pending" | "failed";
  timestamp: string;
}

const mockApplications: ApplicationStatus[] = [
  { id: "1", company: "Microsoft", position: "Software Engineer", status: "applied", timestamp: "2 min ago" },
  { id: "2", company: "Amazon", position: "Data Scientist", status: "applied", timestamp: "5 min ago" },
  { id: "3", company: "Google", position: "Product Manager", status: "pending", timestamp: "Processing..." },
  { id: "4", company: "Meta", position: "UX Designer", status: "failed", timestamp: "Error: Login required" },
];

const statusIcons = {
  applied: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
  pending: <Clock className="w-5 h-5 text-cougar-gold animate-spin" />,
  failed: <AlertCircle className="w-5 h-5 text-red-500" />,
};

export default function AutoApplyPage() {
  const [isRunning, setIsRunning] = useState(false);
  const [dailyLimit, setDailyLimit] = useState(25);
  const [applications] = useState<ApplicationStatus[]>(mockApplications);

  return (
    <main className="min-h-screen pb-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-emerald-600/10 via-cougar-dark to-cougar-dark" />

      <div className="relative z-10 container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-display text-4xl font-bold">
                <span className="text-gradient">Auto Apply</span>
              </h1>
              <p className="text-cougar-cream/60">AI-powered job applications</p>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Control Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Status Card */}
            <div className="p-6 rounded-2xl glass">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-xl font-semibold">Agent Status</h2>
                <button
                  onClick={() => setIsRunning(!isRunning)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                    isRunning
                      ? "bg-red-500/20 text-red-400 hover:bg-red-500/30"
                      : "bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30"
                  }`}
                >
                  {isRunning ? (
                    <>
                      <Pause className="w-5 h-5" />
                      Stop Agent
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5" />
                      Start Agent
                    </>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white/5">
                  <div className="flex items-center gap-2 text-cougar-cream/60 mb-2">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm">Today</span>
                  </div>
                  <div className="font-display text-3xl font-bold">12</div>
                  <div className="text-xs text-cougar-cream/40">applications sent</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5">
                  <div className="flex items-center gap-2 text-cougar-cream/60 mb-2">
                    <Target className="w-4 h-4" />
                    <span className="text-sm">Success</span>
                  </div>
                  <div className="font-display text-3xl font-bold text-emerald-400">85%</div>
                  <div className="text-xs text-cougar-cream/40">completion rate</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5">
                  <div className="flex items-center gap-2 text-cougar-cream/60 mb-2">
                    <FileText className="w-4 h-4" />
                    <span className="text-sm">Total</span>
                  </div>
                  <div className="font-display text-3xl font-bold">247</div>
                  <div className="text-xs text-cougar-cream/40">all-time applications</div>
                </div>
              </div>
            </div>

            {/* Recent Applications */}
            <div className="p-6 rounded-2xl glass">
              <h2 className="font-display text-xl font-semibold mb-4">Recent Applications</h2>
              <div className="space-y-3">
                {applications.map((app) => (
                  <motion.div
                    key={app.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5"
                  >
                    <div className="flex items-center gap-4">
                      {statusIcons[app.status]}
                      <div>
                        <h3 className="font-medium">{app.position}</h3>
                        <p className="text-sm text-cougar-cream/50">{app.company}</p>
                      </div>
                    </div>
                    <span className="text-sm text-cougar-cream/40">{app.timestamp}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Settings Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl glass">
              <div className="flex items-center gap-2 mb-6">
                <Settings className="w-5 h-5 text-cougar-cream/60" />
                <h2 className="font-display text-xl font-semibold">Settings</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-cougar-cream/60 mb-2">
                    Daily Application Limit
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    value={dailyLimit}
                    onChange={(e) => setDailyLimit(Number(e.target.value))}
                    className="w-full accent-cougar-crimson"
                  />
                  <div className="flex justify-between text-sm text-cougar-cream/40 mt-1">
                    <span>5</span>
                    <span className="text-cougar-gold font-medium">{dailyLimit}</span>
                    <span>50</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-cougar-cream/60 mb-2">
                    Auto-fill Resume
                  </label>
                  <button className="w-full px-4 py-3 rounded-xl bg-white/5 border border-dashed border-white/20 text-cougar-cream/60 hover:bg-white/10 transition-colors">
                    Upload Resume (PDF)
                  </button>
                </div>

                <div>
                  <label className="block text-sm text-cougar-cream/60 mb-3">
                    Target Roles
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["Software Engineer", "Data Scientist", "Product Manager"].map((role) => (
                      <span
                        key={role}
                        className="px-3 py-1.5 rounded-full bg-cougar-crimson/20 text-cougar-crimson text-sm"
                      >
                        {role}
                      </span>
                    ))}
                    <button className="px-3 py-1.5 rounded-full border border-dashed border-white/20 text-cougar-cream/40 text-sm hover:border-white/40 transition-colors">
                      + Add
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* How it Works */}
            <div className="p-6 rounded-2xl glass">
              <h3 className="font-display text-lg font-semibold mb-4">How it works</h3>
              <ol className="space-y-3 text-sm text-cougar-cream/60">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-cougar-crimson/20 text-cougar-crimson flex items-center justify-center shrink-0 text-xs font-bold">
                    1
                  </span>
                  Upload your resume and set preferences
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-cougar-crimson/20 text-cougar-crimson flex items-center justify-center shrink-0 text-xs font-bold">
                    2
                  </span>
                  Our AI finds matching jobs from 100+ job boards
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-cougar-crimson/20 text-cougar-crimson flex items-center justify-center shrink-0 text-xs font-bold">
                    3
                  </span>
                  Automatically fills and submits applications
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-cougar-crimson/20 text-cougar-crimson flex items-center justify-center shrink-0 text-xs font-bold">
                    4
                  </span>
                  Track all applications in one dashboard
                </li>
              </ol>
            </div>
          </motion.div>
        </div>
      </div>

      <Navbar />
    </main>
  );
}
