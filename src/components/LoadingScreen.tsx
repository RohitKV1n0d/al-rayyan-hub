import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "@/assets/al-rayyan-logo.png";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [phase, setPhase] = useState<"loading" | "split" | "done">("loading");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setPhase("split"), 300);
          return 100;
        }
        return prev + 3;
      });
    }, 25);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (phase === "split") {
      setTimeout(() => {
        setPhase("done");
        onLoadingComplete();
      }, 1200);
    }
  }, [phase, onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] pointer-events-none"
      animate={{ opacity: phase === "done" ? 0 : 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Top half */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1/2 bg-rayyan-dark origin-top overflow-hidden"
        animate={{
          y: phase === "split" ? "-100%" : 0,
        }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-rayyan-dark to-rayyan-dark/95" />
      </motion.div>

      {/* Bottom half */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-rayyan-dark origin-bottom overflow-hidden"
        animate={{
          y: phase === "split" ? "100%" : 0,
        }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-rayyan-dark to-rayyan-dark/95" />
      </motion.div>

      {/* Center line that expands */}
      <motion.div
        className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === "split" ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-rayyan-red to-transparent"
          initial={{ width: 0 }}
          animate={{ 
            width: progress >= 100 ? "100vw" : `${progress * 0.6}%`,
          }}
          transition={{ duration: 0.1 }}
        />
      </motion.div>

      {/* Loading content - centered */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center"
        animate={{ 
          opacity: phase === "split" ? 0 : 1,
          scale: phase === "split" ? 0.8 : 1,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {/* Logo */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 blur-2xl bg-rayyan-red/20 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          <motion.img
            src={logo}
            alt="Al Rayyan SC"
            className="w-24 h-24 object-contain relative z-10"
            animate={{
              filter: [
                "drop-shadow(0 0 10px rgba(200, 16, 46, 0.3))",
                "drop-shadow(0 0 20px rgba(200, 16, 46, 0.5))",
                "drop-shadow(0 0 10px rgba(200, 16, 46, 0.3))",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Progress indicator */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          {/* Progress bar container */}
          <div className="relative w-32 h-0.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-rayyan-red rounded-full"
              style={{ width: `${progress}%` }}
            />
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Percentage */}
          <motion.span 
            className="text-white/40 text-xs tracking-[0.4em] uppercase font-light"
          >
            {progress}%
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Corner accents */}
      <motion.div
        className="absolute top-8 left-8 w-12 h-px bg-gradient-to-r from-rayyan-red/50 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: phase === "split" ? 0 : 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{ transformOrigin: "left" }}
      />
      <motion.div
        className="absolute top-8 left-8 w-px h-12 bg-gradient-to-b from-rayyan-red/50 to-transparent"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: phase === "split" ? 0 : 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{ transformOrigin: "top" }}
      />
      
      <motion.div
        className="absolute bottom-8 right-8 w-12 h-px bg-gradient-to-l from-rayyan-red/50 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: phase === "split" ? 0 : 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{ transformOrigin: "right" }}
      />
      <motion.div
        className="absolute bottom-8 right-8 w-px h-12 bg-gradient-to-t from-rayyan-red/50 to-transparent"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: phase === "split" ? 0 : 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{ transformOrigin: "bottom" }}
      />
    </motion.div>
  );
};

export default LoadingScreen;
