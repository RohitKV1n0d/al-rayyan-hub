import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [phase, setPhase] = useState<"intro" | "zoom" | "reveal">("intro");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const zoomTimer = setTimeout(() => setPhase("zoom"), 1200);
    const revealTimer = setTimeout(() => setPhase("reveal"), 2000);
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      onLoadingComplete();
    }, 2600);

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
      animate={{
        clipPath: phase === "reveal" 
          ? "circle(0% at 50% 50%)" 
          : "circle(150% at 50% 50%)",
      }}
      transition={{ 
        duration: phase === "reveal" ? 0.8 : 0, 
        ease: [0.76, 0, 0.24, 1] 
      }}
    >
      {/* Brand Text */}
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: phase === "intro" || phase === "zoom" ? 1 : 0,
          scale: phase === "zoom" ? 1.1 : 1,
        }}
        transition={{ 
          opacity: { duration: 0.3 },
          scale: { duration: 0.8, ease: "easeOut" }
        }}
      >
        <h1 className="text-[12vw] md:text-[10vw] font-black text-foreground uppercase leading-none tracking-tighter flex items-center">
          <span>AL RAYY</span>
          {/* Red Circle as "A" */}
          <motion.div
            className="w-[8vw] h-[8vw] md:w-[6vw] md:h-[6vw] bg-primary rounded-full mx-[0.5vw] flex-shrink-0"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3, ease: "backOut" }}
          />
          <span>N</span>
        </h1>
      </motion.div>

      {/* Subtle corner accents */}
      <motion.div
        className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-foreground/20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-foreground/20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      />
    </motion.div>
  );
};

export default LoadingScreen;
