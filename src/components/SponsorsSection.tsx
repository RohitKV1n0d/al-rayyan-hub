import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import heroImage from '@/assets/hero-stadium.jpg';

const sponsors = [
  { name: 'QNB', logo: 'QNB' },
  { name: 'Ooredoo', logo: 'Ooredoo' },
  { name: 'Qatar Airways', logo: 'QA' },
  { name: 'Applab', logo: 'AppLab' },
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
              className="w-32 h-20 bg-primary-foreground/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-primary-foreground font-bold text-xl hover:bg-primary-foreground/20 transition-colors border border-primary-foreground/20 hover:border-primary"
            >
              {sponsor.logo}
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
