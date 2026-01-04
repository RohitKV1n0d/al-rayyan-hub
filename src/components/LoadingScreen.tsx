import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "@/assets/al-rayyan-logo.png";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [phase, setPhase] = useState<"intro" | "reveal">("intro");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const introTimer = setTimeout(() => setPhase("reveal"), 1400);
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      onLoadingComplete();
    }, 2200);

    return () => {
      clearTimeout(introTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <motion.div className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none">
      {/* Top curtain */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1/2 bg-rayyan-dark origin-top"
        animate={{
          scaleY: phase === "reveal" ? 0 : 1,
        }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* Bottom curtain */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-rayyan-dark origin-bottom"
        animate={{
          scaleY: phase === "reveal" ? 0 : 1,
        }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* Center content */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center"
        animate={{
          opacity: phase === "reveal" ? 0 : 1,
          scale: phase === "reveal" ? 0.95 : 1,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Decorative lines - left */}
        <motion.div
          className="absolute left-[10%] top-1/2 -translate-y-1/2 flex flex-col gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="w-16 h-px bg-white/30" />
          <div className="w-10 h-px bg-rayyan-red/50" />
          <div className="w-6 h-px bg-white/20" />
        </motion.div>

        {/* Decorative lines - right */}
        <motion.div
          className="absolute right-[10%] top-1/2 -translate-y-1/2 flex flex-col gap-2 items-end"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="w-16 h-px bg-white/30" />
          <div className="w-10 h-px bg-rayyan-red/50" />
          <div className="w-6 h-px bg-white/20" />
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6"
        >
          <motion.img
            src={logo}
            alt="Al Rayyan SC"
            className="w-16 h-16 object-contain"
            animate={{
              filter: [
                "drop-shadow(0 0 0px rgba(200,16,46,0))",
                "drop-shadow(0 0 15px rgba(200,16,46,0.4))",
                "drop-shadow(0 0 0px rgba(200,16,46,0))",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Club name with letter stagger */}
        <div className="overflow-hidden">
          <motion.div
            className="flex items-center justify-center gap-1"
            initial="hidden"
            animate="visible"
          >
            {"AL RAYYAN".split("").map((letter, i) => (
              <motion.span
                key={i}
                className={`text-4xl md:text-5xl font-bold tracking-wider ${
                  letter === " " ? "w-3" : "text-white"
                }`}
                variants={{
                  hidden: { y: 40, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.4,
                      delay: 0.2 + i * 0.04,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  },
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-white/40 text-xs tracking-[0.4em] uppercase mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Sports Club
        </motion.p>

        {/* Animated line */}
        <motion.div
          className="mt-6 h-px bg-gradient-to-r from-transparent via-rayyan-red to-transparent"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 120, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        />

        {/* Loading indicator */}
        <motion.div
          className="mt-6 flex items-center gap-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-rayyan-red"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Center line that expands on reveal */}
      <motion.div
        className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{
          scaleX: phase === "reveal" ? 1 : 0,
          opacity: phase === "reveal" ? 1 : 0,
          background: "linear-gradient(90deg, transparent, hsl(var(--rayyan-red)), transparent)",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default LoadingScreen;
