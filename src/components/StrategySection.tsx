import { motion } from 'framer-motion';
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
  return (
    <section id="strategy" className="section-padding bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            currentColor 10px,
            currentColor 11px
          )`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Our Direction</p>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            CLUB{' '}
            <span className="text-primary relative inline-block">
              STRATEGY
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary/30" />
            </span>
          </h2>
        </motion.div>

        {/* Three Columns */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:border-primary transition-colors duration-300"
          >
            <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-primary-foreground/70 leading-relaxed">
              Building on Al-Rayyan Sports Club's heritage and Qatar's rich culture to create a consistently excellent multi-sport club, recognized regionally and internationally for sporting achievement and community impact.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:border-primary transition-colors duration-300"
          >
            <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <div className="flex flex-wrap gap-2">
              {values.map((value) => (
                <span
                  key={value}
                  className="px-3 py-1.5 bg-primary/20 text-primary text-sm font-medium rounded-full border border-primary/30"
                >
                  {value}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:border-primary transition-colors duration-300"
          >
            <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <ul className="space-y-3">
              {missions.map((mission) => (
                <li key={mission} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-primary-foreground/70">{mission}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="hero" size="lg">
            Explore Club Strategy <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
