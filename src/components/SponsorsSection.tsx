import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import heroImage from '@/assets/hero-stadium.jpg';
import sponsorBaladna from '@/assets/sponsor-baladna.png';
import sponsorQib from '@/assets/sponsor-qib.png';
import sponsorAlkhattiya from '@/assets/sponsor-alkhattiya.png';
import sponsorApplab from '@/assets/sponsor-applab.png';
import sponsorQtire from '@/assets/sponsor-qtire.png';
import sponsorDallah from '@/assets/sponsor-dallah.png';

const sponsors = [
  { name: 'Baladna', logo: sponsorBaladna },
  { name: 'QIB', logo: sponsorQib },
  { name: 'Al Khattiya', logo: sponsorAlkhattiya },
  { name: 'AppLab', logo: sponsorApplab },
  { name: 'Q-Tire', logo: sponsorQtire },
  { name: 'Dallah Holding', logo: sponsorDallah },
];

export function SponsorsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={containerRef} className="relative py-24 overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt=""
          className="w-full h-[150%] object-cover"
        />
        <div className="absolute inset-0 bg-foreground/90" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Our Partners</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary-foreground">
            OFFICIAL PARTNERS &{' '}
            <span className="text-primary relative inline-block">
              CENTER
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary/30" />
            </span>{' '}
            SPONSORS
          </h2>
        </motion.div>

        {/* Sponsors Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-36 h-24 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center p-4 hover:bg-white transition-colors border border-primary-foreground/10 hover:border-primary hover:scale-105 transition-all duration-300"
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Follow Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Follow Our Social Network</p>
          <div className="flex items-center justify-center gap-4">
            {['YT', 'X', 'IG', 'FB', 'SC', 'TT'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 border border-primary-foreground/20"
              >
                {platform}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
