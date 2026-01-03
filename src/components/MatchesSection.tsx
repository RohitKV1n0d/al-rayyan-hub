import { motion } from 'framer-motion';
import { Calendar, Ticket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/al-rayyan-logo.png';

export function MatchesSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Last Match */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-background rounded-2xl p-8 border-2 border-border hover:border-primary transition-all duration-300 shadow-soft hover:shadow-red-glow"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="px-4 py-1.5 bg-muted text-foreground text-sm font-bold rounded-full">
                LAST MATCH
              </span>
              <span className="text-muted-foreground text-sm">September 21, 2025</span>
            </div>

            <div className="flex items-center justify-between gap-4">
              {/* Home Team */}
              <div className="flex-1 text-center">
                <img src={logo} alt="Al-Rayyan" className="w-20 h-20 mx-auto mb-3" />
                <p className="font-bold text-lg">Al-Rayyan</p>
              </div>

              {/* Score */}
              <div className="flex items-center gap-4 px-6">
                <span className="text-5xl font-extrabold">3</span>
                <span className="text-3xl font-bold text-muted-foreground">-</span>
                <span className="text-5xl font-extrabold">0</span>
              </div>

              {/* Away Team */}
              <div className="flex-1 text-center">
                <div className="w-20 h-20 mx-auto mb-3 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-muted-foreground">WAK</span>
                </div>
                <p className="font-bold text-lg">Al-Wakrah</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border text-center">
              <span className="text-sm text-muted-foreground">Qatar Stars League • Matchday 6</span>
            </div>
          </motion.div>

          {/* Next Match */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-foreground text-primary-foreground rounded-2xl p-8 border-2 border-primary shadow-red-glow relative overflow-hidden"
          >
            {/* Decorative Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="px-4 py-1.5 bg-primary text-primary-foreground text-sm font-bold rounded-full pulse-glow">
                  NEXT MATCH
                </span>
                <span className="text-primary-foreground/70 text-sm">September 23, 2025 • 20:00</span>
              </div>

              <div className="flex items-center justify-between gap-4">
                {/* Home Team */}
                <div className="flex-1 text-center">
                  <img src={logo} alt="Al-Rayyan" className="w-20 h-20 mx-auto mb-3" />
                  <p className="font-bold text-lg">Al-Rayyan</p>
                </div>

                {/* VS */}
                <div className="text-center px-6">
                  <span className="text-4xl font-extrabold text-primary">VS</span>
                </div>

                {/* Away Team */}
                <div className="flex-1 text-center">
                  <div className="w-20 h-20 mx-auto mb-3 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary-foreground/70">ARB</span>
                  </div>
                  <p className="font-bold text-lg">Al-Arabi</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-primary-foreground/20 flex flex-wrap gap-4 justify-center">
                <Button variant="hero" size="lg" className="group">
                  <Ticket className="mr-2 w-5 h-5" />
                  Buy Tickets
                </Button>
                <Button variant="heroOutline" size="lg">
                  <Calendar className="mr-2 w-5 h-5" />
                  All Matches
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
