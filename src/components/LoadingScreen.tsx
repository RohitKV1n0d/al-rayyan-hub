import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [phase, setPhase] = useState<"strobe" | "blocks" | "text" | "zoom" | "done">("strobe");
  const [strobeCount, setStrobeCount] = useState(0);
  const [blockIndex, setBlockIndex] = useState(0);

  // Phase timing
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // Strobe phase - rapid white/dark flashes
    const strobeInterval = setInterval(() => {
      setStrobeCount((prev) => {
        if (prev >= 6) {
          clearInterval(strobeInterval);
          setPhase("blocks");
          return prev;
        }
        return prev + 1;
      });
    }, 80);
    timers.push(strobeInterval);

    return () => timers.forEach(clearTimeout);
  }, []);

  // Blocks phase
  useEffect(() => {
    if (phase !== "blocks") return;

    const blockInterval = setInterval(() => {
      setBlockIndex((prev) => {
        if (prev >= 5) {
          clearInterval(blockInterval);
          setTimeout(() => setPhase("text"), 100);
          return prev;
        }
        return prev + 1;
      });
    }, 60);

    return () => clearInterval(blockInterval);
  }, [phase]);

  // Text phase
  useEffect(() => {
    if (phase !== "text") return;
    const timer = setTimeout(() => setPhase("zoom"), 600);
    return () => clearTimeout(timer);
  }, [phase]);

  // Zoom phase
  useEffect(() => {
    if (phase !== "zoom") return;
    const timer = setTimeout(() => {
      setPhase("done");
      onLoadingComplete();
    }, 800);
    return () => clearTimeout(timer);
  }, [phase, onLoadingComplete]);

  const blocks = [
    { width: "15%", left: "10%", delay: 0 },
    { width: "25%", left: "30%", delay: 1 },
    { width: "20%", left: "60%", delay: 2 },
    { width: "10%", left: "85%", delay: 3 },
    { width: "30%", left: "5%", delay: 4 },
  ];

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[9999] overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          {/* Base layer - switches between white and dark */}
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundColor: phase === "strobe" 
                ? strobeCount % 2 === 0 ? "#ffffff" : "#0a0a0a"
                : phase === "blocks" ? "#ffffff"
                : phase === "text" ? "#0a0a0a"
                : "#0a0a0a"
            }}
            transition={{ duration: 0.05 }}
          />

          {/* Geometric blocks phase */}
          {phase === "blocks" && (
            <div className="absolute inset-0 flex items-center">
              {blocks.map((block, i) => (
                <motion.div
                  key={i}
                  className="absolute h-4 bg-black"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{
                    scaleX: blockIndex >= i ? 1 : 0,
                    opacity: blockIndex >= i ? 1 : 0,
                  }}
                  style={{
                    width: block.width,
                    left: block.left,
                    top: `${30 + i * 10}%`,
                    transformOrigin: "left",
                  }}
                  transition={{ duration: 0.05 }}
                />
              ))}
              
              {/* Vertical accent blocks */}
              {blockIndex >= 3 && (
                <>
                  <motion.div
                    className="absolute w-2 bg-rayyan-red"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    style={{ height: "40%", left: "20%", top: "30%", transformOrigin: "top" }}
                    transition={{ duration: 0.08 }}
                  />
                  <motion.div
                    className="absolute w-2 bg-rayyan-red"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    style={{ height: "30%", right: "25%", top: "35%", transformOrigin: "top" }}
                    transition={{ duration: 0.08, delay: 0.04 }}
                  />
                </>
              )}
            </div>
          )}

          {/* Text flash phase */}
          {phase === "text" && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.05 }}
            >
              {/* Background flash */}
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              />
              
              {/* Club name - massive and bold */}
              <motion.div
                className="relative text-center"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                <motion.h1
                  className="text-[15vw] md:text-[12vw] font-black text-white tracking-tighter leading-none"
                  style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(200,16,46,0)",
                      "0 0 30px rgba(200,16,46,0.8)",
                      "0 0 0px rgba(200,16,46,0)",
                    ],
                  }}
                  transition={{ duration: 0.4 }}
                >
                  AL RAYYAN
                </motion.h1>
                
                {/* Accent line under text */}
                <motion.div
                  className="h-1 bg-rayyan-red mx-auto mt-2"
                  initial={{ width: 0 }}
                  animate={{ width: "60%" }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                />
              </motion.div>

              {/* Flash overlay */}
              <motion.div
                className="absolute inset-0 bg-rayyan-red mix-blend-overlay"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          )}

          {/* Zoom through phase - football/O shape */}
          {phase === "zoom" && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-rayyan-dark"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            >
              {/* The expanding circle/football shape mask */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: "radial-gradient(circle at center, transparent 0%, #0a0a0a 0%)",
                }}
                animate={{
                  background: [
                    "radial-gradient(circle at center, transparent 0%, #0a0a0a 0%)",
                    "radial-gradient(circle at center, transparent 50%, #0a0a0a 51%)",
                    "radial-gradient(circle at center, transparent 100%, #0a0a0a 101%)",
                  ],
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Center ring that expands */}
              <motion.div
                className="absolute border-4 border-rayyan-red rounded-full"
                initial={{ width: 100, height: 100, opacity: 1 }}
                animate={{ 
                  width: "300vmax", 
                  height: "300vmax", 
                  opacity: 0,
                  borderWidth: 2,
                }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Inner accent ring */}
              <motion.div
                className="absolute border-2 border-white/30 rounded-full"
                initial={{ width: 60, height: 60, opacity: 1 }}
                animate={{ 
                  width: "250vmax", 
                  height: "250vmax", 
                  opacity: 0,
                }}
                transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Football stitching lines */}
              <motion.div
                className="absolute w-px h-20 bg-white/50"
                initial={{ scaleY: 1, opacity: 1 }}
                animate={{ scaleY: 20, opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
              <motion.div
                className="absolute w-20 h-px bg-white/50"
                initial={{ scaleX: 1, opacity: 1 }}
                animate={{ scaleX: 20, opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          )}

          {/* Scanlines overlay for texture */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
