import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'FOUNDED', value: '1967', subtitle: 'Club heritage' },
  { label: 'LEAGUE TITLES', value: '8', subtitle: 'Champions' },
  { label: 'PRINCE CUP', value: '6', subtitle: 'Winners' },
  { label: 'CROWN PRINCE', value: '4', subtitle: 'Winners' },
  { label: 'SHEIKH JASSIM', value: '5', subtitle: 'Winners' },
  { label: 'PRIMARY SPORT', value: 'Football', subtitle: 'Soccer' },
];

export function Hero4() {
  return (
    <section className="relative min-h-screen bg-foreground overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 via-primary/5 to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Tagline */}
            <div className="flex items-center gap-2 text-sm tracking-widest">
              <span className="w-6 h-0.5 bg-primary" />
              <span className="text-muted-foreground">AL RAYYAN • FOOTBALL FIRST • MULTI-SPORT</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none">
              <span className="text-white">A TRADITION OF</span>
              <br />
              <span className="text-primary">SPORTING</span>
              <br />
              <span className="text-white">EXCELLENCE</span>
            </h1>

            {/* Description */}
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              Al-Rayyan Sports Club is a leading multi-sport club in Qatar—built on heritage, driven by excellence. Stay updated with the latest football news, fixtures, results, standings, and official merchandise.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/news"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Read Latest News
              </Link>
              <Link
                to="/tickets"
                className="border border-muted-foreground/30 hover:border-muted-foreground text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Buy Tickets
              </Link>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              <Link to="/fixtures" className="text-white hover:text-primary transition-colors underline underline-offset-4">
                View Fixtures
              </Link>
              <Link to="/table" className="text-white hover:text-primary transition-colors underline underline-offset-4">
                League Table
              </Link>
              <Link to="/shop" className="text-white hover:text-primary transition-colors underline underline-offset-4">
                Shop Merchandise
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Quick Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-foreground/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-4"
          >
            {/* Panel Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-white font-bold text-lg">QUICK PANEL</h3>
              <span className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full">
                Official • Live-ready
              </span>
            </div>

            {/* Next Match */}
            <div className="bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/20 rounded-xl p-4">
              <p className="text-muted-foreground text-xs uppercase tracking-wide mb-1">NEXT MATCH</p>
              <p className="text-white font-bold">Sep 23, 2025 • Al Rayyan vs (Opponent)</p>
              <p className="text-muted-foreground text-sm mt-1">Kickoff: 19:30 • Competition: League</p>
            </div>

            {/* Last Result */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-muted-foreground text-xs uppercase tracking-wide mb-1">LAST RESULT</p>
              <p className="text-white font-bold">Sep 21, 2025 • Al Rayyan 3 - 0 (Opponent)</p>
              <p className="text-muted-foreground text-sm mt-1">Highlights • Match Report</p>
            </div>

            {/* League Position */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-muted-foreground text-xs uppercase tracking-wide mb-1">LEAGUE POSITION</p>
              <p className="text-white font-bold text-xl">5th • 10 pts</p>
              <Link to="/table" className="text-white text-sm mt-2 inline-flex items-center gap-1 hover:text-primary transition-colors">
                View full table <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 bg-secondary/80 backdrop-blur-sm rounded-2xl p-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center p-4 ${index < stats.length - 1 ? 'lg:border-r border-border' : ''}`}
              >
                <p className="text-muted-foreground text-xs uppercase tracking-wide mb-1">{stat.label}</p>
                <p className="text-foreground font-black text-2xl">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
