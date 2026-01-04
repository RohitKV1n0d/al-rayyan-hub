import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroPlayer from '@/assets/hero-player.jpg';
import playerFeatured from '@/assets/player-featured.jpg';

const tickerNews = [
  "TICKETS FOR AL GHARAFA MATCH ALMOST SOLD OUT",
  "ROGER GUEDES NAMED PLAYER OF THE WEEK",
  "NEW KIT LAUNCH SCHEDULED FOR FRIDAY",
  "YOUTH ACADEMY PLAYERS CALLED UP TO NATIONAL TEAM",
  "AL RAYYAN SECURES 3-0 VICTORY OVER AL SADD",
];

const latestHeadlines = [
  "Official: New kit launch scheduled for Friday",
  "Training Gallery: Preparation for the Clasico",
];

// Staggered animation variants for bento grid items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.98,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

export function Hero() {
  // Countdown timer state
  const [countdown, setCountdown] = useState({ days: 4, hours: 12, mins: 30, secs: 5 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        let { days, hours, mins, secs } = prev;
        if (secs > 0) {
          secs--;
        } else {
          secs = 59;
          if (mins > 0) {
            mins--;
          } else {
            mins = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, mins, secs };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-foreground">
      {/* Main Content */}
      <div className="relative min-h-screen flex flex-col">
        
        {/* Main Grid with staggered animation */}
        <motion.div 
          className="flex-1 container mx-auto px-4 pt-24 pb-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-full min-h-[70vh]">
            
            {/* Left Column - Main News */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {/* Main Hero Card */}
              <motion.div
                variants={itemVariants}
                className="relative flex-1 rounded-2xl overflow-hidden bg-foreground/50 border border-primary-foreground/10 min-h-[400px] group cursor-pointer hover:border-primary/30 transition-colors"
              >
                {/* Background Image */}
                <img
                  src={heroPlayer}
                  alt="Stadium Atmosphere"
                  className="absolute inset-0 w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/70 to-foreground/30" />
                
                {/* Stadium Tag */}
                <div className="absolute top-4 left-4">
                  <span className="text-primary-foreground/60 text-xs font-medium">🏟️ Stadium Atmosphere</span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  {/* Breaking Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-wide animate-pulse">
                      Breaking
                    </span>
                    <span className="text-primary-foreground/50 text-xs uppercase tracking-wide">2 Hours Ago</span>
                  </div>

                  {/* Headline */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-[0.95] uppercase tracking-tight">
                    Lions Roar in
                    <br />
                    <span className="text-primary">5-3 Thriller</span>
                  </h1>

                  {/* Description */}
                  <p className="mt-4 text-primary-foreground/70 text-sm md:text-base max-w-md leading-relaxed">
                    An incredible comeback victory at home. See the highlights, player ratings, and post-match interviews from the QSL Cup spectacle.
                  </p>
                </div>
              </motion.div>

              {/* Latest Headlines */}
              <motion.div
                variants={itemVariants}
                className="bg-foreground/50 border border-primary-foreground/10 rounded-xl p-5 hover:border-primary/20 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-primary-foreground/50 text-[10px] font-bold uppercase tracking-[0.15em]">Latest Headlines</span>
                  <button className="w-8 h-8 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors group">
                    <ArrowRight className="w-4 h-4 text-primary-foreground/60 group-hover:text-primary transition-colors" />
                  </button>
                </div>
                <div className="space-y-3">
                  {latestHeadlines.map((headline, i) => (
                    <a key={i} href="#" className="flex items-start gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span className="text-primary-foreground/80 text-sm font-medium group-hover:text-primary transition-colors">
                        {headline}
                      </span>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Fixture & Player */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {/* Next Fixture Card */}
              <motion.div
                variants={itemVariants}
                className="bg-primary rounded-2xl p-6 text-center hover:shadow-red-glow transition-shadow"
              >
                <span className="text-primary-foreground/80 text-[10px] font-bold uppercase tracking-[0.2em]">Next Fixture</span>
                
                {/* Teams */}
                <div className="flex items-center justify-center gap-6 mt-5">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-14 h-14 rounded-full bg-primary-foreground flex items-center justify-center">
                      <span className="text-foreground font-black text-sm">RAY</span>
                    </div>
                    <span className="text-primary-foreground text-xs font-bold uppercase tracking-wide">Al Rayyan</span>
                  </div>
                  <span className="text-primary-foreground/60 text-lg font-medium">VS</span>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-14 h-14 rounded-full bg-foreground flex items-center justify-center">
                      <span className="text-primary-foreground font-black text-sm">GHA</span>
                    </div>
                    <span className="text-primary-foreground text-xs font-bold uppercase tracking-wide">Al Gharafa</span>
                  </div>
                </div>

                {/* Competition */}
                <div className="mt-5">
                  <span className="inline-block bg-primary-foreground/20 text-primary-foreground text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-wide">
                    Qatar Stars League
                  </span>
                </div>

                {/* Countdown */}
                <div className="flex items-center justify-center gap-2 mt-5">
                  {[
                    { value: countdown.days.toString().padStart(2, '0'), label: 'DAYS' },
                    { value: countdown.hours.toString().padStart(2, '0'), label: 'HRS' },
                    { value: countdown.mins.toString().padStart(2, '0'), label: 'MIN' },
                    { value: countdown.secs.toString().padStart(2, '0'), label: 'SEC' },
                  ].map((item, i) => (
                    <div key={i} className="bg-foreground/30 rounded-lg px-4 py-2 min-w-[60px]">
                      <span className="text-primary-foreground text-xl md:text-2xl font-black block">{item.value}</span>
                      <span className="text-primary-foreground/60 text-[8px] font-bold uppercase">{item.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Player of the Month */}
              <motion.div
                variants={itemVariants}
                className="relative flex-1 rounded-2xl overflow-hidden min-h-[280px] group cursor-pointer border border-transparent hover:border-primary/30 transition-colors"
              >
                <img
                  src={playerFeatured}
                  alt="Player of the Month"
                  className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-primary text-[10px] font-bold uppercase tracking-[0.15em]">Player of the Month</span>
                  <div className="flex items-baseline gap-2 mt-2">
                    <h3 className="text-primary-foreground text-2xl md:text-3xl font-black uppercase">Guedes</h3>
                    <span className="text-primary text-2xl md:text-3xl font-black italic">10</span>
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-primary-foreground/60 text-xs">
                      <span className="font-bold text-primary-foreground">GOALS:</span> 13
                    </span>
                    <span className="text-primary-foreground/60 text-xs">
                      <span className="font-bold text-primary-foreground">ASSISTS:</span> 5
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Breaking News Ticker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-primary py-3 overflow-hidden"
        >
          <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
            {[...tickerNews, ...tickerNews].map((news, i) => (
              <span key={i} className="text-primary-foreground text-sm font-bold uppercase tracking-wide mx-8 flex items-center gap-3">
                <span className="text-primary-foreground/60">+++</span>
                {news}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
