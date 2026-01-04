import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import playerHero from '@/assets/player-hero-transparent.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

export function Hero3() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-foreground">
      {/* Background with geometric shapes */}
      <div className="absolute inset-0">
        {/* Stadium background */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1920')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/95 to-foreground/80" />
        
        {/* Red geometric shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full">
          {/* Large arrow shape */}
          <svg className="absolute top-1/4 right-20 w-96 h-96 text-primary opacity-90" viewBox="0 0 100 100" fill="currentColor">
            <polygon points="20,0 100,50 20,100 40,50" />
          </svg>
          {/* Second arrow shape */}
          <svg className="absolute top-1/3 right-40 w-64 h-64 text-primary opacity-70" viewBox="0 0 100 100" fill="currentColor">
            <polygon points="20,0 100,50 20,100 40,50" />
          </svg>
          {/* Accent lines */}
          <div className="absolute top-20 right-10 w-32 h-1 bg-primary rotate-45" />
          <div className="absolute bottom-40 right-60 w-24 h-1 bg-primary -rotate-12" />
        </div>
      </div>

      {/* Player Image - Cutout */}
      <div className="absolute right-0 bottom-0 w-1/2 h-full hidden lg:flex items-end justify-center pointer-events-none">
        <img
          src={playerHero}
          alt="Featured Player"
          className="h-[85%] w-auto object-contain object-bottom drop-shadow-2xl"
          style={{ 
            filter: 'drop-shadow(0 0 40px rgba(0,0,0,0.5))',
            mixBlendMode: 'normal'
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative container mx-auto px-4 pt-32 pb-20 min-h-screen flex items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-2xl">
          <motion.span 
            variants={itemVariants}
            className="inline-block text-primary text-sm font-bold uppercase tracking-[0.3em] mb-6"
          >
            Since 1967
          </motion.span>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.85] tracking-tight"
          >
            <span className="text-primary-foreground">A Tradition of</span>
            <br />
            <span 
              className="text-transparent bg-clip-text"
              style={{
                WebkitTextStroke: '2px hsl(var(--primary))',
              }}
            >
              Sporting
            </span>
            {' '}
            <span className="text-primary-foreground">Excellence</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="mt-8 text-primary-foreground/70 text-sm md:text-base uppercase tracking-wide leading-relaxed max-w-lg"
          >
            With decades of experience across various sports, Al-Rayyan SC continues to compete, develop talent, and contribute to Qatar's sporting ecosystem.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 mt-10"
          >
            <a 
              href="#about" 
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded transition-colors uppercase tracking-wide group"
            >
              Join the Team
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a 
              href="#matches" 
              className="inline-flex items-center gap-3 border-2 border-primary-foreground text-primary-foreground font-bold px-8 py-4 rounded hover:bg-primary-foreground hover:text-foreground transition-colors uppercase tracking-wide group"
            >
              View Match Schedule
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary to-transparent" />
    </section>
  );
}
