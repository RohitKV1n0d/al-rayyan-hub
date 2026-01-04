import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroPlayer from '@/assets/hero-player.jpg';

const stats = [
  { label: 'Founded', value: '1967', sub: 'Club Heritage' },
  { label: 'League Titles', value: '8', sub: 'Champions' },
  { label: 'Prince Cup', value: '6', sub: 'Winners' },
  { label: 'Crown Prince', value: '4', sub: 'Winners' },
  { label: 'Sheikh Jassim', value: '5', sub: 'Winners' },
  { label: 'Primary Sport', value: 'Football', sub: 'Soccer' },
];

const quickLinks = ['View Fixtures', 'League Table', 'Shop Merchandise'];

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
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-foreground">
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
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/70 to-foreground/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/60 to-transparent" />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Main Content */}
      <motion.div style={{ opacity }} className="relative flex flex-col min-h-screen">
        <div className="flex-1 container mx-auto px-4 pt-28 pb-8 flex flex-col">
          
          {/* Top Section */}
          <div className="flex-1 flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Left - Brand Statement */}
            <div className="flex-1 flex flex-col justify-center">
              {/* Category Badge */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-8 h-0.5 bg-primary" />
                <span className="text-primary-foreground/80 text-xs md:text-sm font-medium tracking-[0.2em] uppercase">
                  Al Rayyan • Football First • Multi-Sport
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-[0.9] tracking-tight uppercase"
              >
                A Tradition of
                <br />
                <motion.span 
                  className="text-primary inline-block"
                  style={{ fontStyle: 'italic' }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Sporting
                </motion.span>
                <br />
                <span style={{ fontStyle: 'italic' }}>Excellence</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-6 text-primary-foreground/70 text-sm md:text-base max-w-xl leading-relaxed"
              >
                Al-Rayyan Sports Club is a leading multi-sport club in Qatar—built on heritage, 
                driven by excellence. Stay updated with the latest football news, fixtures, results, 
                standings, and official merchandise.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-6 flex flex-wrap items-center gap-3"
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
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mt-5 flex flex-wrap items-center gap-5"
              >
                {quickLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-primary-foreground/60 text-sm font-medium hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    {link}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Right - Quick Panel */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: -5 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-full lg:w-[380px] flex-shrink-0 self-center"
            >
              <div className="relative">
                {/* Decorative corner */}
                <div className="absolute -top-3 -right-3 w-24 h-24 bg-gradient-to-br from-primary/40 to-primary/10 rounded-tr-2xl rounded-bl-[60px] -z-10" />
                
                <div className="bg-foreground/80 backdrop-blur-xl rounded-2xl border border-primary-foreground/10 overflow-hidden shadow-2xl shadow-black/20">
                  {/* Panel Header */}
                  <div className="px-5 py-4 border-b border-primary-foreground/10 flex items-center justify-between">
                    <span className="text-primary-foreground font-bold text-sm tracking-wide">QUICK PANEL</span>
                    <span className="text-[10px] bg-primary/20 text-primary px-3 py-1.5 rounded-full font-semibold tracking-wide">
                      Official • Live-ready
                    </span>
                  </div>

                  {/* Next Match */}
                  <div className="relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/30 to-transparent rounded-bl-[80px]" />
                    <div className="px-5 py-4 relative z-10 border-b border-primary-foreground/10">
                      <span className="text-primary-foreground/50 text-[10px] font-bold tracking-[0.15em] uppercase">Next Match</span>
                      <p className="text-primary-foreground font-bold text-base mt-2">
                        Sep 23, 2025 • <span className="text-primary">Al Rayyan vs Al Arabi</span>
                      </p>
                      <p className="text-primary-foreground/50 text-xs mt-1">Kickoff: 19:30 • Competition: League</p>
                    </div>
                  </div>

                  {/* Last Result */}
                  <div className="px-5 py-4 border-b border-primary-foreground/10">
                    <span className="text-primary-foreground/50 text-[10px] font-bold tracking-[0.15em] uppercase">Last Result</span>
                    <p className="text-primary-foreground font-bold text-base mt-2">
                      Sep 21, 2025 • Al Rayyan <span className="text-primary">3 - 0</span> Al Sadd
                    </p>
                    <div className="flex items-center gap-3 mt-1">
                      <a href="#" className="text-primary-foreground/50 text-xs hover:text-primary transition-colors">Highlights</a>
                      <span className="text-primary-foreground/30">•</span>
                      <a href="#" className="text-primary-foreground/50 text-xs hover:text-primary transition-colors">Match Report</a>
                    </div>
                  </div>

                  {/* League Position */}
                  <div className="px-5 py-4">
                    <span className="text-primary-foreground/50 text-[10px] font-bold tracking-[0.15em] uppercase">League Position</span>
                    <div className="mt-2 flex items-center justify-between">
                      <p className="text-primary-foreground font-bold text-base">
                        <span className="text-2xl">5th</span> • 10 pts
                      </p>
                      <a href="#table" className="text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all group">
                        View full table
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8"
          >
            <div className="bg-primary-foreground/95 rounded-xl p-1 overflow-hidden">
              <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.1 + index * 0.05 }}
                    className="bg-muted/50 hover:bg-muted transition-colors rounded-lg px-4 py-4 text-center group cursor-default"
                  >
                    <span className="text-muted-foreground/60 text-[9px] md:text-[10px] font-bold tracking-wider uppercase block">
                      {stat.label}
                    </span>
                    <span className="text-foreground text-2xl md:text-3xl font-black block mt-1 group-hover:text-primary transition-colors">
                      {stat.value}
                    </span>
                    <span className="text-muted-foreground/50 text-[10px] block mt-0.5">
                      {stat.sub}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
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
