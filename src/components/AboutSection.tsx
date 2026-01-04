import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion';
import { Trophy, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/al-rayyan-logo.png';

const achievements = [
  { label: 'League Champions', count: 8 },
  { label: 'Prince Cup', count: 6 },
  { label: 'Crown Prince Cup', count: 4 },
  { label: 'Sheikh Jassim Cup', count: 5 },
];

function AnimatedCounter({ value, isInView }: { value: number; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, isInView]);

  return <span>{count}</span>;
}

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const logoRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const logoScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const bgY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <section id="about" ref={containerRef} className="section-padding bg-muted relative overflow-hidden">
      {/* Animated Decorative Elements */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" 
      />
      <motion.div 
        style={{ y: bgY }}
        className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" 
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 flex items-center gap-2"
            >
              <motion.span 
                initial={{ width: 0 }}
                animate={isInView ? { width: 32 } : {}}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="h-0.5 bg-primary"
              />
              Our Heritage
            </motion.p>
            
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block"
              >
                ABOUT
              </motion.span>{' '}
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-primary relative inline-block"
              >
                THE CLUB
                <motion.span 
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute -bottom-1 left-0 w-full h-1 bg-primary/30 origin-left" 
                />
              </motion.span>
            </h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground mb-6 leading-relaxed"
            >
              Al-Rayyan Sports Club is a prestigious sports, cultural, and social institution representing the Al-Rayyan area in Qatar. Formed after the merger of the original Al-Rayyan team with Al-Nasr team, the club was officially founded in 1967.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              With decades of achievements and one of the largest fan bases in Qatar, Al-Rayyan continues to uphold its legacy of excellence across multiple sports disciplines.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-red-glow group">
                Learn More About Us 
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Logo Background - Animated */}
            <motion.div 
              style={{ rotate: logoRotate, scale: logoScale }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5"
            >
              <img src={logo} alt="" className="w-80 h-80" />
            </motion.div>

            <div className="grid grid-cols-2 gap-4 relative z-10">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.4 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="bg-background rounded-xl p-6 text-center border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-red-glow group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Trophy className="w-8 h-8 text-primary mx-auto mb-3" />
                  </motion.div>
                  <div className="text-4xl font-extrabold text-foreground mb-1 group-hover:text-primary transition-colors">
                    <AnimatedCounter value={achievement.count} isInView={isInView} />
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
