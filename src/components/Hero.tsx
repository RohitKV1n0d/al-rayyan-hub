import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Calendar, Trophy, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-stadium.jpg';
import logo from '@/assets/al-rayyan-logo.png';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="Stadium"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Main Content */}
          <div className="text-primary-foreground">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-semibold mb-4 flex items-center gap-2"
            >
              <span className="w-12 h-0.5 bg-primary" />
              WELCOME TO
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
            >
              A TRADITION OF{' '}
              <span className="text-primary relative">
                SPORTING
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/50" />
              </span>{' '}
              EXCELLENCE
              EXCELLENCE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl"
            >
              A leading multi-sport club in Qatar—built on heritage, driven by excellence. Representing the pride of Al-Rayyan since 1967.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button variant="hero" size="lg" className="group">
                Read Latest News
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="lg">
                Buy Tickets
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6 text-sm"
            >
              <a href="#fixtures" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary transition-colors">
                <Calendar className="w-4 h-4" />
                View Fixtures
              </a>
              <a href="#table" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary transition-colors">
                <Trophy className="w-4 h-4" />
                League Table
              </a>
              <a href="#shop" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary transition-colors">
                Shop Merchandise
                <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right: Quick Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            {/* Next Match Card */}
            <div className="bg-background/95 backdrop-blur-sm rounded-lg p-6 border-2 border-transparent hover:border-primary transition-all duration-300 shadow-strong hover:shadow-red-glow">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Next Match</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded font-medium">QSL</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={logo} alt="Al-Rayyan" className="w-12 h-12" />
                  <span className="font-bold">Al-Rayyan</span>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-muted-foreground">VS</div>
                  <div className="text-xs text-muted-foreground">20:00</div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold">Al-Arabi</span>
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-xs font-bold">ARB</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-sm text-muted-foreground">September 23, 2025</span>
                <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Buy Tickets
                </Button>
              </div>
            </div>

            {/* Last Result Card */}
            <div className="bg-background/95 backdrop-blur-sm rounded-lg p-6 border-2 border-transparent hover:border-primary transition-all duration-300 shadow-strong hover:shadow-red-glow">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Last Result</span>
                <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded font-medium">QSL</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={logo} alt="Al-Rayyan" className="w-10 h-10" />
                  <span className="font-semibold">Al-Rayyan</span>
                </div>
                <div className="text-3xl font-extrabold">
                  <span className="text-foreground">1</span>
                  <span className="text-muted-foreground mx-2">-</span>
                  <span className="text-foreground">1</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold">Qatar SC</span>
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-xs font-bold">QSC</div>
                </div>
              </div>
              <div className="mt-4 text-sm text-muted-foreground text-center">
                September 21, 2025 • Qatar Derby
              </div>
            </div>

            {/* League Position Card */}
            <div className="bg-background/95 backdrop-blur-sm rounded-lg p-6 border-2 border-transparent hover:border-primary transition-all duration-300 shadow-strong hover:shadow-red-glow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">League Position</span>
                <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded font-medium">2024/25</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-extrabold text-primary">5th</span>
                  <div className="text-left">
                    <div className="text-xl font-bold">10 pts</div>
                    <div className="text-sm text-muted-foreground">6 matches played</div>
                  </div>
                </div>
                <a href="#table" className="text-primary hover:underline text-sm font-medium flex items-center gap-1">
                  View Full Table <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 bg-primary-foreground rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
