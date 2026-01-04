import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Users, Calendar } from 'lucide-react';
import heroStadium from '@/assets/hero-stadium.jpg';

const sidelineNews = [
  { category: 'Football', title: 'Roger Guedes: Ready for Al-Arabi Match', time: '2h ago' },
  { category: 'Football', title: 'Artur Jorge: Aim to End Year with Victory', time: '4h ago' },
  { category: 'Club', title: 'Youth Academy Players Called Up', time: '6h ago' },
];

const stats = [
  { icon: Trophy, value: '15+', label: 'Championships' },
  { icon: Users, value: '50K+', label: 'Members' },
  { icon: Calendar, value: '57', label: 'Years of Glory' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
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

export function HeroAbout() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-foreground">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroStadium}
          alt="Al Rayyan Stadium"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-foreground/50" />
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative container mx-auto px-4 pt-32 pb-12 min-h-screen flex"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          
          {/* Left Column - About Content (Priority) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div variants={itemVariants}>
              <span className="inline-block bg-primary/20 text-primary text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6">
                Since 1967
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground uppercase leading-[0.9] tracking-tight"
            >
              A Tradition of
              <br />
              <span className="text-primary">Sporting</span>
              <br />
              Excellence
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="mt-6 text-primary-foreground/70 text-lg md:text-xl max-w-xl leading-relaxed"
            >
              Al Rayyan Sports Club stands as a beacon of athletic achievement in Qatar, 
              nurturing champions and inspiring generations through dedication, passion, 
              and an unwavering commitment to excellence.
            </motion.p>

            {/* Stats Row */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-6 mt-10"
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-3 bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl px-5 py-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                  <div>
                    <span className="text-2xl md:text-3xl font-black text-primary-foreground block">{stat.value}</span>
                    <span className="text-primary-foreground/50 text-xs uppercase tracking-wide">{stat.label}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 mt-10"
            >
              <a 
                href="#about" 
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-lg uppercase tracking-wide hover:bg-primary/90 transition-colors group"
              >
                Discover Our Story
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#news" 
                className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground font-bold px-8 py-4 rounded-lg uppercase tracking-wide hover:border-primary hover:text-primary transition-colors"
              >
                Latest News
              </a>
            </motion.div>
          </div>

          {/* Right Column - Sideline News */}
          <div className="lg:col-span-5">
            <motion.div 
              variants={itemVariants}
              className="bg-foreground/80 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-primary-foreground font-bold uppercase tracking-wide">Latest Updates</h3>
                <a href="#news" className="text-primary text-sm font-semibold hover:underline">View All</a>
              </div>

              <div className="space-y-4">
                {sidelineNews.map((news, i) => (
                  <a 
                    key={i} 
                    href="#" 
                    className="block p-4 bg-primary-foreground/5 rounded-xl border border-transparent hover:border-primary/30 transition-colors group"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-primary text-[10px] font-bold uppercase tracking-wide">{news.category}</span>
                      <span className="text-primary-foreground/40 text-[10px]">•</span>
                      <span className="text-primary-foreground/40 text-[10px]">{news.time}</span>
                    </div>
                    <p className="text-primary-foreground font-medium group-hover:text-primary transition-colors">
                      {news.title}
                    </p>
                  </a>
                ))}
              </div>

              {/* Quick Links */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <a href="#shop" className="bg-primary text-primary-foreground text-center font-bold py-3 rounded-lg text-sm uppercase tracking-wide hover:bg-primary/90 transition-colors">
                  Shop
                </a>
                <a href="#" className="bg-primary-foreground/10 text-primary-foreground text-center font-bold py-3 rounded-lg text-sm uppercase tracking-wide hover:bg-primary-foreground/20 transition-colors">
                  Tickets
                </a>
              </div>
            </motion.div>

            {/* Next Match Mini Card */}
            <motion.div 
              variants={itemVariants}
              className="mt-4 bg-primary rounded-xl p-5 flex items-center justify-between"
            >
              <div>
                <span className="text-primary-foreground/70 text-[10px] font-bold uppercase tracking-wide">Next Match</span>
                <p className="text-primary-foreground font-black text-lg mt-1">Al Rayyan vs Al Arabi</p>
                <span className="text-primary-foreground/60 text-xs">Sep 23, 2025 • Qatar Stars League</span>
              </div>
              <a href="#" className="w-12 h-12 bg-primary-foreground rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <ArrowRight className="w-5 h-5 text-foreground" />
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Ticker */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 bg-primary py-3 overflow-hidden"
      >
        <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, j) => (
            ['SINCE 1967', 'HOME OF CHAMPIONS', 'AL RAYYAN SC', 'THE LIONS', 'QATAR STARS LEAGUE'].map((text, i) => (
              <span key={`${j}-${i}`} className="text-primary-foreground text-sm font-bold uppercase tracking-wide mx-8 flex items-center gap-3">
                <span className="text-primary-foreground/60">◆</span>
                {text}
              </span>
            ))
          ))}
        </div>
      </motion.div>
    </section>
  );
}
