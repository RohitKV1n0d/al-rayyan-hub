import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [phase, setPhase] = useState<"text" | "reveal">("text");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const textTimer = setTimeout(() => setPhase("reveal"), 1000);
    const revealTimer = setTimeout(() => {
      setIsVisible(false);
      onLoadingComplete();
    }, 1800);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(revealTimer);
    };
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <motion.div className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none">
      {/* Dark overlay that slides up */}
      <motion.div
        className="absolute inset-0 bg-rayyan-dark flex items-center justify-center"
        animate={{
          y: phase === "reveal" ? "-100%" : "0%",
        }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Club name */}
        <div className="text-center overflow-hidden">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white tracking-wider"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            AL RAYYAN
          </motion.h1>
          
          <motion.div
            className="h-0.5 bg-rayyan-red mx-auto mt-3"
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
