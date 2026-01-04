import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [phase, setPhase] = useState<"text" | "zoom" | "reveal">("text");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Phase 1: Text appears (already visible)
    // Phase 2: Zoom in text after 1s
    const zoomTimer = setTimeout(() => setPhase("zoom"), 1000);
    // Phase 3: Circle shrinks to reveal after zoom
    const revealTimer = setTimeout(() => setPhase("reveal"), 1800);
    // Complete and hide
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      onLoadingComplete();
    }, 3200);

    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(revealTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-white flex items-center justify-center overflow-hidden"
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
        ease: [0.87, 0, 0.13, 1], // expo.inOut equivalent
      }}
    >
      {/* Brand Text Container */}
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: 1,
          scale: phase === "zoom" || phase === "reveal" ? 1.15 : 1,
        }}
        transition={{ 
          opacity: { duration: 0.4 },
          scale: { duration: 0.8, ease: "easeOut" }
        }}
      >
        <h1 className="text-[15vw] md:text-[12vw] font-black text-foreground uppercase leading-none tracking-tighter flex items-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            AL RAYY
          </motion.span>
          {/* Red Circle as "A" */}
          <motion.div
            className="w-[10vw] h-[10vw] md:w-[8vw] md:h-[8vw] bg-primary rounded-full mx-[0.3vw] flex-shrink-0"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "backOut" }}
          />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            N
          </motion.span>
        </h1>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
