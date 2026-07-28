"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const startRef = useRef(Date.now());
  const duration = 2000;

  useEffect(() => {
    let rafId: number;
    const tick = () => {
      const elapsed = Date.now() - startRef.current;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        rafId = requestAnimationFrame(tick);
      } else {
        rafId = requestAnimationFrame(() => {
          setTimeout(() => setIsComplete(true), 400);
        });
      }
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative flex flex-col items-center">
            <div className="text-[100px] sm:text-[160px] lg:text-[200px] font-black leading-none text-white/[0.03] select-none">
              {Math.round(progress)}
            </div>
            <span className="text-5xl sm:text-6xl lg:text-7xl font-black text-primary -mt-10 sm:-mt-16 lg:-mt-20">
              {Math.round(progress)}<span className="text-2xl sm:text-3xl lg:text-4xl">%</span>
            </span>
          </div>
          <div className="w-24 h-[2px] bg-white/10 rounded-full overflow-hidden mt-10 relative">
            <div
              className="h-full bg-primary rounded-full transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-[10px] text-text-muted uppercase tracking-[0.3em] font-black mt-8">
            Loading
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
