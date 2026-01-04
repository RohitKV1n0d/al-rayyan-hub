import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Clock, Play, ChevronRight } from 'lucide-react';
import heroPlayer from '@/assets/hero-player.jpg';
import news1 from '@/assets/news-1.jpg';
import news2 from '@/assets/news-2.jpg';
import news3 from '@/assets/news-3.jpg';

const featuredNews = [
  {
    id: 1,
    image: news1,
    title: "HIGHLIGHTS | Al-Rayyan v Qatar SC",
    category: "FIRST TEAM",
    time: "03:03",
    isVideo: true,
  },
  {
    id: 2,
    image: news2,
    title: "Roger Guedes: Ready to Claim All Three Points",
    category: "FIRST TEAM",
    date: "28 Dec 25",
    isVideo: false,
  },
  {
    id: 3,
    image: news3,
    title: "Artur Jorge: 'We Aim to End the Year with Victory'",
    category: "FIRST TEAM",
    time: "2 hrs ago",
    isVideo: false,
  },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] max-h-[1000px] overflow-hidden">
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
        {/* Dark gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
      </motion.div>

      {/* Main Hero Content */}
      <motion.div style={{ opacity }} className="relative h-full flex flex-col justify-end pb-8 md:pb-12">
        {/* Center Content - Match Result / Headline */}
        <div className="flex-1 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-5xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-primary-foreground leading-[0.95] tracking-tight uppercase"
              style={{ fontStyle: 'italic' }}
            >
              Qatar Derby Ends
              <br />
              <span className="text-primary">In a Draw</span>
            </motion.h1>

            {/* Category & Time Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 flex items-center justify-center gap-4"
            >
              <span className="inline-flex items-center gap-2">
                <span className="w-3 h-3 bg-primary rounded-sm" />
                <span className="text-primary font-bold text-sm tracking-wide">FIRST TEAM</span>
              </span>
              <span className="flex items-center gap-1.5 text-primary-foreground/70 text-sm">
                <Clock className="w-4 h-4" />
                2 hrs ago
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Featured News Cards */}
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4"
          >
            {featuredNews.map((news, index) => (
              <motion.a
                key={news.id}
                href="#news"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="group relative bg-foreground/80 backdrop-blur-md rounded-lg overflow-hidden flex flex-col md:flex-row hover:bg-foreground/90 transition-all duration-300 border border-primary-foreground/10 hover:border-primary/50"
              >
                {/* Image */}
                <div className="relative w-full md:w-32 lg:w-40 h-32 md:h-full flex-shrink-0 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {news.isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center bg-foreground/30">
                      <div className="w-10 h-10 bg-primary-foreground/90 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                        <Play className="w-5 h-5 text-foreground fill-foreground group-hover:text-primary-foreground group-hover:fill-primary-foreground" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 p-4 flex flex-col justify-center">
                  <h3 className="text-primary-foreground font-bold text-sm lg:text-base leading-tight group-hover:text-primary transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-3 text-xs">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-primary rounded-sm" />
                      <span className="text-primary font-semibold">{news.category}</span>
                    </span>
                    <span className="text-primary-foreground/60">
                      {news.isVideo ? (
                        <span className="flex items-center gap-1">
                          <Play className="w-3 h-3" /> {news.time}
                        </span>
                      ) : (
                        news.date || news.time
                      )}
                    </span>
                  </div>
                </div>

                {/* Arrow indicator */}
                <div className="hidden md:flex items-center pr-4">
                  <ChevronRight className="w-5 h-5 text-primary-foreground/30 group-hover:text-primary transition-colors" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:block"
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
