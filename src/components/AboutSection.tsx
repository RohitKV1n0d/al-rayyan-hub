import { motion } from 'framer-motion';
import { Trophy, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/al-rayyan-logo.png';

const achievements = [
  { label: 'League Champions', count: 8 },
  { label: 'Prince Cup', count: 6 },
  { label: 'Crown Prince Cup', count: 4 },
  { label: 'Sheikh Jassim Cup', count: 5 },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-muted relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Our Heritage</p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              ABOUT{' '}
              <span className="text-primary relative inline-block">
                THE CLUB
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary/30" />
              </span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Al-Rayyan Sports Club is a prestigious sports, cultural, and social institution representing the Al-Rayyan area in Qatar. Formed after the merger of the original Al-Rayyan team with Al-Nasr team, the club was officially founded in 1967.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With decades of achievements and one of the largest fan bases in Qatar, Al-Rayyan continues to uphold its legacy of excellence across multiple sports disciplines.
            </p>

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-red-glow">
              Learn More About Us <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>

          {/* Right: Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Logo Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5">
              <img src={logo} alt="" className="w-80 h-80" />
            </div>

            <div className="grid grid-cols-2 gap-4 relative z-10">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background rounded-xl p-6 text-center border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-red-glow group"
                >
                  <Trophy className="w-8 h-8 text-primary mx-auto mb-3 transition-transform duration-300 group-hover:scale-110" />
                  <div className="text-4xl font-extrabold text-foreground mb-1">
                    {achievement.count}
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
