import { useState, useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import logo from '@/assets/al-rayyan-logo.png';
interface Match {
  id: number;
  status: string;
  homeTeam: string;
  homeScore: number;
  awayTeam: string;
  awayScore: number;
  competition: string;
}
const matches: Match[] = [{
  id: 1,
  status: 'FULL TIME',
  homeTeam: 'AL RAYYAN',
  homeScore: 3,
  awayTeam: 'AL SADD',
  awayScore: 1,
  competition: 'QATAR STARS LEAGUE'
}, {
  id: 2,
  status: 'FULL TIME',
  homeTeam: 'AL DUHAIL',
  homeScore: 2,
  awayTeam: 'AL RAYYAN',
  awayScore: 2,
  competition: 'QATAR STARS LEAGUE'
}, {
  id: 3,
  status: 'FULL TIME',
  homeTeam: 'AL RAYYAN',
  homeScore: 1,
  awayTeam: 'QATAR SC',
  awayScore: 0,
  competition: 'QATAR STARS LEAGUE'
}, {
  id: 4,
  status: 'FULL TIME',
  homeTeam: 'AL GHARAFA',
  homeScore: 0,
  awayTeam: 'AL RAYYAN',
  awayScore: 2,
  competition: 'QATAR STARS LEAGUE'
}, {
  id: 5,
  status: 'FULL TIME',
  homeTeam: 'AL RAYYAN',
  homeScore: 4,
  awayTeam: 'AL WAKRAH',
  awayScore: 1,
  competition: 'QATAR STARS LEAGUE'
}, {
  id: 6,
  status: 'FULL TIME',
  homeTeam: 'AL ARABI',
  homeScore: 1,
  awayTeam: 'AL RAYYAN',
  awayScore: 3,
  competition: 'QATAR STARS LEAGUE'
}];
export function MatchTicker() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "-100px"
  });
  const controls = useAnimation();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  const checkScroll = () => {
    if (scrollRef.current) {
      const {
        scrollLeft,
        scrollWidth,
        clientWidth
      } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  const labelVariants = {
    hidden: {
      opacity: 0,
      x: -50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };
  const lineVariants = {
    hidden: {
      scaleX: 0
    },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        delay: 0.3
      }
    }
  };
  return <section ref={containerRef} className="py-6 overflow-hidden relative bg-primary-foreground">
      {/* Animated decorative lines */}
      <motion.div variants={lineVariants} initial="hidden" animate={controls} className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent origin-left" />
      <motion.div variants={lineVariants} initial="hidden" animate={controls} className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent origin-right" />

      <motion.div variants={containerVariants} initial="hidden" animate={controls} className="container mx-auto px-4">
        <div className="flex items-center gap-6">
          {/* Competition Label */}
          <motion.div variants={labelVariants} className="flex-shrink-0 w-24 md:w-32">
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} animate={isInView ? {
            opacity: 1,
            scale: 1
          } : {}} transition={{
            duration: 0.5,
            delay: 0.1
          }} className="text-xs md:text-sm font-bold text-foreground leading-tight tracking-wider">
              <span className="block">QATAR</span>
              <span className="block">STARS</span>
              <span className="block text-primary">LEAGUE</span>
            </motion.div>
          </motion.div>

          {/* Scrollable Match Cards */}
          <div ref={scrollRef} onScroll={checkScroll} className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth flex-1" style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}>
            {matches.map((match, index) => <motion.div key={match.id} variants={cardVariants} custom={index} whileHover={{
            scale: 1.02,
            y: -4,
            transition: {
              duration: 0.2
            }
          }} className="flex-shrink-0 w-[180px] md:w-[200px] bg-background rounded-lg border border-border shadow-soft hover:shadow-medium hover:border-primary/50 transition-all duration-300 overflow-hidden group">
                {/* Status Header */}
                <motion.div className="bg-muted/50 px-3 py-1.5 text-center border-b border-border relative overflow-hidden">
                  <motion.div initial={{
                x: '-100%'
              }} animate={isInView ? {
                x: '200%'
              } : {}} transition={{
                duration: 1,
                delay: 0.5 + index * 0.1
              }} className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                  <span className="text-[10px] md:text-xs font-semibold text-muted-foreground relative z-10">
                    {match.status}
                  </span>
                </motion.div>

                {/* Match Content */}
                <div className="p-3 space-y-2">
                  {/* Home Team */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <motion.div whileHover={{
                    rotate: 360
                  }} transition={{
                    duration: 0.5
                  }} className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        {match.homeTeam === 'AL RAYYAN' ? <img src={logo} alt="Al Rayyan" className="w-5 h-5 object-contain" /> : <div className="w-4 h-4 rounded-full bg-foreground/20" />}
                      </motion.div>
                      <span className={`text-xs font-medium truncate ${match.homeTeam === 'AL RAYYAN' ? 'text-primary font-bold' : 'text-foreground'}`}>
                        {match.homeTeam.substring(0, 3)}
                      </span>
                    </div>
                    <motion.span initial={{
                  scale: 0
                }} animate={isInView ? {
                  scale: 1
                } : {}} transition={{
                  delay: 0.6 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }} className={`text-sm font-bold w-6 text-right ${match.homeScore > match.awayScore ? 'text-primary' : 'text-foreground'}`}>
                      {match.homeScore}
                    </motion.span>
                  </div>

                  {/* Decorative divider */}
                  <div className="relative h-px">
                    <motion.div initial={{
                  scaleX: 0
                }} animate={isInView ? {
                  scaleX: 1
                } : {}} transition={{
                  duration: 0.4,
                  delay: 0.4 + index * 0.1
                }} className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent origin-center" />
                    <motion.div animate={{
                  x: ['-100%', '100%']
                }} transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.2
                }} className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Away Team */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <motion.div whileHover={{
                    rotate: 360
                  }} transition={{
                    duration: 0.5
                  }} className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        {match.awayTeam === 'AL RAYYAN' ? <img src={logo} alt="Al Rayyan" className="w-5 h-5 object-contain" /> : <div className="w-4 h-4 rounded-full bg-foreground/20" />}
                      </motion.div>
                      <span className={`text-xs font-medium truncate ${match.awayTeam === 'AL RAYYAN' ? 'text-primary font-bold' : 'text-foreground'}`}>
                        {match.awayTeam.substring(0, 3)}
                      </span>
                    </div>
                    <motion.span initial={{
                  scale: 0
                }} animate={isInView ? {
                  scale: 1
                } : {}} transition={{
                  delay: 0.7 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }} className={`text-sm font-bold w-6 text-right ${match.awayScore > match.homeScore ? 'text-primary' : 'text-foreground'}`}>
                      {match.awayScore}
                    </motion.span>
                  </div>
                </div>
              </motion.div>)}
          </div>

          {/* Navigation Arrows */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.5,
          delay: 0.5
        }} className="flex-shrink-0 flex flex-col gap-2">
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.95
          }} onClick={() => scroll('left')} disabled={!canScrollLeft} className={`p-2 border border-border rounded-lg transition-all duration-300 ${canScrollLeft ? 'hover:border-primary hover:bg-primary hover:text-primary-foreground' : 'opacity-30 cursor-not-allowed'}`}>
              <ChevronLeft className="w-4 h-4" />
            </motion.button>
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.95
          }} onClick={() => scroll('right')} disabled={!canScrollRight} className={`p-2 border border-border rounded-lg transition-all duration-300 ${canScrollRight ? 'hover:border-primary hover:bg-primary hover:text-primary-foreground' : 'opacity-30 cursor-not-allowed'}`}>
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>;
}