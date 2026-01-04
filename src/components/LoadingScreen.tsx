import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "@/assets/al-rayyan-logo.png";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [phase, setPhase] = useState<"logo" | "zoom" | "reveal">("logo");
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Phase 2: Zoom in after 1s
    const zoomTimer = setTimeout(() => setPhase("zoom"), 1000);
    // Phase 3: Circle shrinks to reveal after zoom
    const revealTimer = setTimeout(() => setPhase("reveal"), 1800);
    // Complete and hide
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      onLoadingComplete();
    }, 3200);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(zoomTimer);
      clearTimeout(revealTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <motion.div className="fixed inset-0 z-[9999] overflow-hidden">
      {/* Black background layer - revealed when white shrinks */}
      <div className="absolute inset-0 bg-black" />
      
      {/* White loader that shrinks to reveal black */}
      <motion.div
        className="absolute inset-0 bg-white flex items-center justify-center"
        style={{
          clipPath: "circle(150% at 50% 50%)",
        }}
        animate={{
          clipPath: phase === "reveal" 
            ? "circle(0% at 50% 50%)" 
            : "circle(150% at 50% 50%)",
        }}
        transition={{ 
          duration: 1.2, 
          ease: [0.87, 0, 0.13, 1],
        }}
      >
        {/* Logo and Loading Bar Container */}
        <motion.div
          className="flex flex-col items-center justify-center gap-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: 1,
            scale: phase === "zoom" || phase === "reveal" ? 1.1 : 1,
          }}
          transition={{ 
            opacity: { duration: 0.4 },
            scale: { duration: 0.8, ease: "easeOut" }
          }}
        >
          {/* Logo */}
          <motion.img
            src={logo}
            alt="Al-Rayyan SC"
            className="h-32 md:h-40 w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          />
          
          {/* Loading Bar */}
          <div className="w-48 md:w-64 h-1 bg-black/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
