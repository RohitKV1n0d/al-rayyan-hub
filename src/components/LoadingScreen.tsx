import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "@/assets/al-rayyan-logo.png";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-rayyan-dark overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-rayyan-red/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-rayyan-red/5 via-transparent to-transparent" />

      {/* Logo container */}
      <motion.div
        className="relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Pulsing rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 border border-rayyan-red/30 rounded-full"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{
              scale: [1, 2, 2.5],
              opacity: [0.5, 0.2, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeOut",
            }}
            style={{
              width: 160,
              height: 160,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}

        {/* Spinning border */}
        <motion.div
          className="absolute -inset-4 rounded-full"
          style={{
            background: `conic-gradient(from 0deg, transparent, hsl(var(--rayyan-red)), transparent)`,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* Logo background */}
        <motion.div
          className="relative w-32 h-32 bg-rayyan-dark rounded-full flex items-center justify-center shadow-2xl"
          animate={{
            boxShadow: [
              "0 0 20px rgba(200, 16, 46, 0.3)",
              "0 0 40px rgba(200, 16, 46, 0.5)",
              "0 0 20px rgba(200, 16, 46, 0.3)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.img
            src={logo}
            alt="Al Rayyan SC"
            className="w-20 h-20 object-contain"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
        </motion.div>
      </motion.div>

      {/* Loading text */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <motion.p
          className="text-white/60 text-sm tracking-[0.3em] uppercase mb-4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Loading
        </motion.p>

        {/* Progress bar */}
        <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-rayyan-red to-rayyan-red/80 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <motion.p
          className="mt-3 text-rayyan-red font-medium text-lg tabular-nums"
          key={progress}
        >
          {progress}%
        </motion.p>
      </motion.div>

      {/* Bottom decorative line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rayyan-red to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      />
    </motion.div>
  );
};

export default LoadingScreen;
