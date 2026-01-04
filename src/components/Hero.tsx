import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Calendar, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroPlayer from '@/assets/hero-player.jpg';
import news1 from '@/assets/news-1.jpg';
import news2 from '@/assets/news-2.jpg';

const featuredNews = {
  image: news1,
  category: 'MATCH REPORT',
  title: 'Al Rayyan Secures Dominant 3-0 Victory Over Al Sadd',
  excerpt: 'A commanding performance sees the Lions claim all three points in the Qatar Stars League.',
  date: 'Sep 21, 2025',
};

const sideNews = [
  {
    image: news2,
    category: 'TRANSFERS',
    title: 'New Signing Announced for Upcoming Season',
    date: 'Sep 20, 2025',
  },
  {
    category: 'CLUB NEWS',
    title: 'Youth Academy Players Called Up to National Team',
    date: 'Sep 19, 2025',
  },
];

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
          alt="Al-Rayyan Player Celebrating"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/70 to-foreground/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/50 to-transparent" />
      </motion.div>

      {/* Main Content */}
      <motion.div style={{ opacity }} className="relative flex flex-col min-h-[85vh]">
        <div className="flex-1 container mx-auto px-4 pt-28 pb-8 flex flex-col justify-center">
          
          {/* Top Section - Branding + Match Info */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-8">
            {/* Brand Tagline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-0.5 bg-primary" />
                <span className="text-primary text-sm font-bold tracking-widest uppercase">
                  Latest News
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-black text-primary-foreground uppercase tracking-tight">
                Stay Updated with <span className="text-primary">Al Rayyan</span>
              </h1>
            </motion.div>

            {/* Compact Match Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4 bg-foreground/60 backdrop-blur-sm rounded-lg px-4 py-3 border border-primary-foreground/10"
            >
              <div className="flex items-center gap-2 pr-4 border-r border-primary-foreground/20">
                <Calendar className="w-4 h-4 text-primary" />
                <div>
                  <p className="text-primary-foreground/60 text-[10px] font-semibold uppercase">Next Match</p>
                  <p className="text-primary-foreground text-xs font-bold">Sep 23 • vs Al Arabi</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-primary" />
                <div>
                  <p className="text-primary-foreground/60 text-[10px] font-semibold uppercase">Last Result</p>
                  <p className="text-primary-foreground text-xs font-bold">Al Rayyan 3-0 Al Sadd</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            
            {/* Featured News - Large */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="lg:col-span-2 group cursor-pointer"
            >
              <div className="relative h-[320px] md:h-[380px] rounded-xl overflow-hidden">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <span className="inline-block bg-primary text-primary-foreground text-[10px] font-bold px-2.5 py-1 rounded-full mb-3 uppercase tracking-wide">
                    {featuredNews.category}
                  </span>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-primary-foreground leading-tight mb-2 group-hover:text-primary transition-colors">
                    {featuredNews.title}
                  </h2>
                  <p className="text-primary-foreground/70 text-sm md:text-base mb-3 max-w-xl line-clamp-2">
                    {featuredNews.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-foreground/50 text-xs">{featuredNews.date}</span>
                    <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Side News Stack */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col gap-4"
            >
              {/* Side News 1 - With Image */}
              <article className="group cursor-pointer flex-1">
                <div className="relative h-[160px] md:h-[180px] rounded-xl overflow-hidden">
                  <img
                    src={sideNews[0].image}
                    alt={sideNews[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-primary text-[10px] font-bold uppercase tracking-wide">
                      {sideNews[0].category}
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-primary-foreground leading-snug mt-1 group-hover:text-primary transition-colors line-clamp-2">
                      {sideNews[0].title}
                    </h3>
                    <span className="text-primary-foreground/50 text-[10px] mt-1 block">{sideNews[0].date}</span>
                  </div>
                </div>
              </article>

              {/* Side News 2 - Text Only */}
              <article className="group cursor-pointer flex-1 bg-foreground/60 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/10 hover:border-primary/30 transition-colors flex flex-col justify-center">
                <span className="text-primary text-[10px] font-bold uppercase tracking-wide">
                  {sideNews[1].category}
                </span>
                <h3 className="text-sm md:text-base font-bold text-primary-foreground leading-snug mt-2 group-hover:text-primary transition-colors">
                  {sideNews[1].title}
                </h3>
                <span className="text-primary-foreground/50 text-[10px] mt-2 block">{sideNews[1].date}</span>
              </article>

              {/* View All News Button */}
              <Button variant="heroOutline" size="sm" className="w-full group">
                View All News
                <ArrowRight className="w-3 h-3 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
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
      </motion.div>
    </section>
  );
}
