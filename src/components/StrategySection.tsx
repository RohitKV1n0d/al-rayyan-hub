import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Eye, Heart, Target, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const values = [
  'Sporting Excellence',
  'Social Engagement',
  'Consistency',
  'Player Development',
  'Creativity',
  'Respect',
  'Transparency',
];

const missions = [
  'Sporting Excellence',
  'Consistency',
  'Fans & Community Engagement',
  'Financial Sustainability',
  'Governance',
];

export function StrategySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const patternY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const patternRotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <section id="strategy" ref={containerRef} className="section-padding bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Animated Decorative Pattern */}
      <motion.div 
        style={{ y: patternY, rotate: patternRotate }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            currentColor 10px,
            currentColor 11px
          )`,
        }} />
      </motion.div>

      {/* Floating orbs */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          x: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 left-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-primary font-semibold text-sm uppercase tracking-wider mb-2"
          >
            Our Direction
          </motion.p>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block"
            >
              CLUB
            </motion.span>{' '}
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-primary relative inline-block"
            >
              STRATEGY
              <motion.span 
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-1 left-0 w-full h-1 bg-primary/30 origin-left" 
              />
            </motion.span>
          </h2>
        </motion.div>

        {/* Three Columns */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 10 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:border-primary transition-all duration-300 group"
          >
            <motion.div 
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6"
            >
              <Eye className="w-7 h-7 text-primary-foreground" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Our Vision</h3>
            <p className="text-primary-foreground/70 leading-relaxed">
              Building on Al-Rayyan Sports Club's heritage and Qatar's rich culture to create a consistently excellent multi-sport club, recognized regionally and internationally for sporting achievement and community impact.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 10 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:border-primary transition-all duration-300 group"
          >
            <motion.div 
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6"
            >
              <Heart className="w-7 h-7 text-primary-foreground" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Our Values</h3>
            <div className="flex flex-wrap gap-2">
              {values.map((value, index) => (
                <motion.span
                  key={value}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  whileHover={{ scale: 1.1, backgroundColor: 'hsl(var(--primary))' }}
                  className="px-3 py-1.5 bg-primary/20 text-primary text-sm font-medium rounded-full border border-primary/30 cursor-default transition-colors hover:text-primary-foreground"
                >
                  {value}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 10 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:border-primary transition-all duration-300 group"
          >
            <motion.div 
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6"
            >
              <Target className="w-7 h-7 text-primary-foreground" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Our Mission</h3>
            <ul className="space-y-3">
              {missions.map((mission, index) => (
                <motion.li 
                  key={mission}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.08 }}
                  className="flex items-center gap-3 group/item"
                >
                  <motion.span 
                    whileHover={{ scale: 1.5 }}
                    className="w-2 h-2 bg-primary rounded-full flex-shrink-0" 
                  />
                  <span className="text-primary-foreground/70 group-hover/item:text-primary transition-colors">{mission}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <Button variant="hero" size="lg" className="group">
            Explore Club Strategy 
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
