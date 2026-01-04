import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Calendar, Trophy, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroPlayer from '@/assets/hero-player.jpg';

const stats = [
  { label: 'Founded', value: '1967' },
  { label: 'League Titles', value: '8' },
  { label: 'Prince Cup', value: '6' },
  { label: 'Crown Prince', value: '4' },
  { label: 'Sheikh Jassim', value: '5' },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[70vh] overflow-hidden bg-foreground">
      {/* Full Screen Background with Parallax */}
      <motion.div 
        style={{ y, scale }} 
        className="absolute inset-0"
      >
        <img
          src={heroPlayer}
          alt="Al-Rayyan Player Celebrating"
          className="w-full h-full object-cover object-top"
        />
        {/* Dark gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-foreground/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/40 to-transparent" />
      </motion.div>

      {/* Main Content */}
      <motion.div style={{ opacity }} className="relative flex flex-col">
        <div className="flex-1 container mx-auto px-4 pt-28 pb-6 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 lg:gap-10">
          
          {/* Left Side - Main Content */}
          <div className="flex-1 max-w-2xl">
            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-primary-foreground/80 text-sm font-medium tracking-widest uppercase">
                AL RAYYAN • FOOTBALL FIRST • MULTI-SPORT
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
              <span className="text-primary" style={{ fontStyle: 'italic' }}>Sporting</span>
              <span style={{ fontStyle: 'italic' }}> Excellence</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-4 text-primary-foreground/70 text-sm md:text-base max-w-lg leading-relaxed"
            >
              Al-Rayyan Sports Club is a leading multi-sport club in Qatar—built on heritage, 
              driven by excellence. Stay updated with the latest football news, fixtures, results, 
              standings, and official merchandise.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-5 flex flex-wrap items-center gap-3"
            >
              <Button variant="hero" size="lg" className="group">
                Read Latest News
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="lg">
                Buy Tickets
              </Button>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-4 flex flex-wrap items-center gap-4"
            >
              {['View Fixtures', 'League Table', 'Shop Merchandise'].map((link, i) => (
                <a
                  key={link}
                  href="#"
                  className="text-primary-foreground/60 text-sm font-medium hover:text-primary transition-colors flex items-center gap-1 group"
                >
                  {link}
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Quick Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="w-full lg:w-[340px] flex-shrink-0"
          >
            <div className="bg-foreground/80 backdrop-blur-md rounded-xl border border-primary-foreground/10 overflow-hidden">
              {/* Panel Header */}
              <div className="px-4 py-3 border-b border-primary-foreground/10 flex items-center justify-between">
                <span className="text-primary-foreground font-bold text-sm tracking-wide">QUICK PANEL</span>
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-medium">
                  Official • Live-ready
                </span>
              </div>

              {/* Next Match */}
              <div className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-bl-[100px] -z-0" />
                <div className="px-4 py-3 relative z-10 bg-gradient-to-r from-primary/30 to-primary/10 border-b border-primary-foreground/10">
                  <span className="text-primary-foreground/60 text-xs font-semibold tracking-wide">NEXT MATCH</span>
                  <div className="mt-2">
                    <p className="text-primary-foreground font-bold text-sm flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      Sep 23, 2025 • Al Rayyan vs Al Arabi
                    </p>
                    <p className="text-primary-foreground/50 text-xs mt-1">Kickoff: 19:30 • Competition: League</p>
                  </div>
                </div>
              </div>

              {/* Last Result */}
              <div className="px-4 py-3 border-b border-primary-foreground/10">
                <span className="text-primary-foreground/60 text-xs font-semibold tracking-wide">LAST RESULT</span>
                <div className="mt-2">
                  <p className="text-primary-foreground font-bold text-sm flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-primary" />
                    Sep 21, 2025 • Al Rayyan 3 - 0 Al Sadd
                  </p>
                  <p className="text-primary-foreground/50 text-xs mt-1">
                    <a href="#" className="hover:text-primary transition-colors">Highlights</a> • 
                    <a href="#" className="hover:text-primary transition-colors ml-1">Match Report</a>
                  </p>
                </div>
              </div>

              {/* League Position */}
              <div className="px-4 py-3">
                <span className="text-primary-foreground/60 text-xs font-semibold tracking-wide">LEAGUE POSITION</span>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-primary-foreground font-bold text-lg">5th</span>
                    <span className="text-primary-foreground/60 text-sm">• 10 pts</span>
                  </div>
                  <a href="#table" className="text-primary text-sm font-medium flex items-center gap-1 hover:underline">
                    View full table
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="container mx-auto px-4 pb-6"
        >
          <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.08 }}
                className="flex items-center gap-2 group"
              >
                <span className="text-2xl md:text-3xl font-black text-primary">
                  {stat.value}
                </span>
                <span className="text-primary-foreground/70 text-xs md:text-sm font-medium">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:block z-10"
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
    </section>
  );
}
