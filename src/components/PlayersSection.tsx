import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import playerFeatured from '@/assets/player-featured.jpg';
import player2 from '@/assets/player-2.jpg';
import player3 from '@/assets/player-3.jpg';
import player4 from '@/assets/player-4.jpg';
import player5 from '@/assets/player-5.jpg';

const players = [
  { name: 'Roger Guedes', position: 'Forward', number: 10, image: playerFeatured, featured: true },
  { name: 'Ahmed Ali', position: 'Midfielder', number: 8, image: player2 },
  { name: 'Paulo Soares', position: 'Goalkeeper', number: 1, image: player3 },
  { name: 'Youssef Msakni', position: 'Defender', number: 4, image: player4 },
  { name: 'Lucas Mendes', position: 'Midfielder', number: 7, image: player5 },
];

export function PlayersSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const featuredPlayer = players.find((p) => p.featured);
  const otherPlayers = players.filter((p) => !p.featured);

  const numberY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="section-padding bg-background relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 flex items-center gap-2"
          >
            <motion.span 
              initial={{ width: 0 }}
              animate={isInView ? { width: 32 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="h-0.5 bg-primary"
            />
            The Squad
          </motion.p>
          <div className="flex items-end justify-between">
            <h2 className="text-4xl md:text-5xl font-extrabold">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block"
              >
                KEY
              </motion.span>{' '}
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-primary relative inline-block"
              >
                PLAYERS
                <motion.span 
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute -bottom-1 left-0 w-full h-1 bg-primary/30 origin-left" 
                />
              </motion.span>
            </h2>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button variant="outline" className="hidden md:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground group">
                View Full Squad 
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Players Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Player */}
          {featuredPlayer && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02 }}
              className="group relative rounded-2xl overflow-hidden bg-foreground aspect-[3/4] lg:aspect-auto cursor-pointer"
            >
              <motion.img
                src={featuredPlayer.image}
                alt={featuredPlayer.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.8 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/30 to-transparent" />
              
              {/* Player Number - Parallax */}
              <motion.div 
                style={{ y: numberY }}
                className="absolute top-6 right-6"
              >
                <motion.span 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 0.3, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-8xl font-extrabold text-primary"
                >
                  {featuredPlayer.number}
                </motion.span>
              </motion.div>

              {/* Player Info */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase rounded mb-3"
                >
                  {featuredPlayer.position}
                </motion.span>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-primary-foreground text-3xl md:text-4xl font-extrabold mb-2"
                >
                  {featuredPlayer.name}
                </motion.h3>
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  href="#"
                  className="inline-flex items-center text-primary hover:text-primary-foreground transition-colors group/link"
                >
                  View Profile
                  <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </motion.a>
              </div>

              {/* Hover Border */}
              <motion.div 
                className="absolute inset-0 border-4 border-primary rounded-2xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          )}

          {/* Other Players Grid */}
          <div className="grid grid-cols-2 gap-4">
            {otherPlayers.map((player, index) => (
              <motion.div
                key={player.name}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.7, 
                  delay: 0.4 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative rounded-xl overflow-hidden bg-foreground aspect-[3/4] cursor-pointer"
              >
                <motion.img
                  src={player.image}
                  alt={player.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/20 to-transparent" />

                {/* Player Number */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 0.4, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="absolute top-3 right-3"
                >
                  <span className="text-4xl font-extrabold text-primary">{player.number}</span>
                </motion.div>

                {/* Player Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block px-2 py-0.5 bg-primary/80 text-primary-foreground text-xs font-semibold uppercase rounded mb-2">
                    {player.position}
                  </span>
                  <h3 className="text-primary-foreground text-lg font-bold line-clamp-1 group-hover:text-primary transition-colors duration-300">
                    {player.name}
                  </h3>
                </div>

                {/* Hover Border */}
                <motion.div 
                  className="absolute inset-0 border-2 border-primary rounded-xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="md:hidden mt-8 text-center"
        >
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View Full Squad <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
