import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Calendar, Ticket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/al-rayyan-logo.png';

export function MatchesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section ref={containerRef} className="section-padding bg-muted relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-foreground rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-foreground rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-foreground rounded-full" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Last Match */}
          <motion.div
            initial={{ opacity: 0, x: -60, rotateY: -5 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="bg-background rounded-2xl p-8 border-2 border-border hover:border-primary transition-all duration-300 shadow-soft hover:shadow-red-glow"
          >
            <div className="flex items-center justify-between mb-6">
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="px-4 py-1.5 bg-muted text-foreground text-sm font-bold rounded-full"
              >
                LAST MATCH
              </motion.span>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-muted-foreground text-sm"
              >
                September 21, 2025
              </motion.span>
            </div>

            <div className="flex items-center justify-between gap-4">
              {/* Home Team */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex-1 text-center"
              >
                <motion.img 
                  src={logo} 
                  alt="Al-Rayyan" 
                  className="w-20 h-20 mx-auto mb-3"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
                <p className="font-bold text-lg">Al-Rayyan</p>
              </motion.div>

              {/* Score */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.5, type: "spring", stiffness: 100 }}
                className="flex items-center gap-4 px-6"
              >
                <span className="text-5xl font-extrabold text-primary">3</span>
                <span className="text-3xl font-bold text-muted-foreground">-</span>
                <span className="text-5xl font-extrabold">0</span>
              </motion.div>

              {/* Away Team */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex-1 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-3 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-muted-foreground">WAK</span>
                </div>
                <p className="font-bold text-lg">Al-Wakrah</p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 pt-6 border-t border-border text-center"
            >
              <span className="text-sm text-muted-foreground">Qatar Stars League • Matchday 6</span>
            </motion.div>
          </motion.div>

          {/* Next Match */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: 5 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="bg-foreground text-primary-foreground rounded-2xl p-8 border-2 border-primary shadow-red-glow relative overflow-hidden"
          >
            {/* Animated Decorative Pattern */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.15, 0.1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full -translate-y-1/2 translate-x-1/2" 
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.05, 0.1, 0.05]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-0 left-0 w-32 h-32 bg-primary rounded-full translate-y-1/2 -translate-x-1/2" 
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="px-4 py-1.5 bg-primary text-primary-foreground text-sm font-bold rounded-full"
                >
                  <motion.span
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="inline-flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-primary-foreground rounded-full" />
                    NEXT MATCH
                  </motion.span>
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-primary-foreground/70 text-sm"
                >
                  September 23, 2025 • 20:00
                </motion.span>
              </div>

              <div className="flex items-center justify-between gap-4">
                {/* Home Team */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex-1 text-center"
                >
                  <motion.img 
                    src={logo} 
                    alt="Al-Rayyan" 
                    className="w-20 h-20 mx-auto mb-3"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  />
                  <p className="font-bold text-lg">Al-Rayyan</p>
                </motion.div>

                {/* VS */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.7, delay: 0.6, type: "spring", stiffness: 100 }}
                  className="text-center px-6"
                >
                  <motion.span 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-4xl font-extrabold text-primary inline-block"
                  >
                    VS
                  </motion.span>
                </motion.div>

                {/* Away Team */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex-1 text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-3 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary-foreground/70">ARB</span>
                  </div>
                  <p className="font-bold text-lg">Al-Arabi</p>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-6 pt-6 border-t border-primary-foreground/20 flex flex-wrap gap-4 justify-center"
              >
                <Button variant="hero" size="lg" className="group">
                  <Ticket className="mr-2 w-5 h-5" />
                  Buy Tickets
                </Button>
                <Button variant="heroOutline" size="lg" className="group">
                  <Calendar className="mr-2 w-5 h-5" />
                  All Matches
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
