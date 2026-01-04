import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Calendar, Trophy, Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroPlayer from '@/assets/hero-player.jpg';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[85vh] overflow-hidden bg-foreground">
      {/* Full Screen Background with Parallax */}
      <motion.div 
        style={{ y, scale }} 
        className="absolute inset-0"
      >
        <img
          src={heroPlayer}
          alt="Al-Rayyan Player"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-foreground/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/60 to-transparent" />
      </motion.div>

      {/* Main Content */}
      <motion.div style={{ opacity }} className="relative flex flex-col min-h-[85vh] justify-center">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16">
            
            {/* Left - Brand Statement */}
            <div className="flex-1 max-w-2xl">
              {/* Since Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-5"
              >
                <span className="text-primary font-bold text-sm md:text-base tracking-widest uppercase">
                  Since 1967
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-[0.95] tracking-tight uppercase"
              >
                A Tradition of
                <br />
                <span className="relative inline-block">
                  <span className="text-primary italic">Sporting</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-primary origin-left"
                  />
                </span>
                <span className="italic"> Excellence</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-5 text-primary-foreground/70 text-sm md:text-base max-w-lg leading-relaxed"
              >
                With decades of experience across various sports, Al-Rayyan SC continues to compete, develop talent, and contribute to Qatar's sporting ecosystem.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-6 flex flex-wrap items-center gap-3"
              >
                <Button variant="hero" size="lg" className="group">
                  Join the Team
                  <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
                <Button variant="heroOutline" size="lg" className="group">
                  View Schedule
                  <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </motion.div>
            </div>

            {/* Right - Info Panel */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="w-full lg:w-[320px] flex-shrink-0"
            >
              <div className="bg-foreground/70 backdrop-blur-md rounded-xl border border-primary-foreground/10 overflow-hidden">
                
                {/* Next Match */}
                <div className="p-4 border-b border-primary-foreground/10 bg-gradient-to-r from-primary/20 to-transparent">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-primary-foreground/60 text-[10px] font-bold uppercase tracking-wide">Next Match</span>
                  </div>
                  <p className="text-primary-foreground font-bold text-sm">Al Rayyan vs Al Arabi</p>
                  <p className="text-primary-foreground/50 text-xs mt-1">Sep 23, 2025 • 19:30</p>
                </div>

                {/* Last Result */}
                <div className="p-4 border-b border-primary-foreground/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="w-4 h-4 text-primary" />
                    <span className="text-primary-foreground/60 text-[10px] font-bold uppercase tracking-wide">Last Result</span>
                  </div>
                  <p className="text-primary-foreground font-bold text-sm">Al Rayyan 3 - 0 Al Sadd</p>
                  <p className="text-primary-foreground/50 text-xs mt-1">Qatar Stars League</p>
                </div>

                {/* Latest News */}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Newspaper className="w-4 h-4 text-primary" />
                    <span className="text-primary-foreground/60 text-[10px] font-bold uppercase tracking-wide">Latest News</span>
                  </div>
                  <a href="#news" className="text-primary-foreground font-medium text-sm hover:text-primary transition-colors line-clamp-2 leading-snug">
                    Youth Academy Players Called Up to National Team
                  </a>
                  <span className="text-primary-foreground/50 text-xs mt-1 block">Sep 19, 2025</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-5 h-8 border-2 border-primary-foreground/40 rounded-full flex items-start justify-center p-1.5"
          >
            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-1.5 bg-primary-foreground rounded-full" 
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
