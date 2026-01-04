import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import playerCutout from '@/assets/hero-player-cutout.png';
import heroGraphic from '@/assets/hero-graphic.png';

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
      {/* Background with stadium */}
      <div className="absolute inset-0">
        {/* Stadium background */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1920')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70" />
      </div>

      {/* Red Geometric Graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block pointer-events-none">
        <img
          src={heroGraphic}
          alt=""
          className="absolute top-1/2 right-0 -translate-y-1/2 h-[90%] w-auto object-contain"
        />
      </div>

      {/* Player Image - PNG Cutout */}
      <div className="absolute right-0 bottom-0 w-1/2 h-full hidden lg:flex items-end justify-center pointer-events-none z-10">
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          src={playerCutout}
          alt="Featured Player"
          className="h-[85%] w-auto object-contain object-bottom"
          style={{ 
            filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.4))',
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
