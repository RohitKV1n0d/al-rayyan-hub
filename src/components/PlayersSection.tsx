import { motion } from 'framer-motion';
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
  const featuredPlayer = players.find((p) => p.featured);
  const otherPlayers = players.filter((p) => !p.featured);

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">The Squad</p>
          <div className="flex items-end justify-between">
            <h2 className="text-4xl md:text-5xl font-extrabold">
              KEY{' '}
              <span className="text-primary relative inline-block">
                PLAYERS
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary/30" />
              </span>
            </h2>
            <Button variant="outline" className="hidden md:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View Full Squad <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Players Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Player */}
          {featuredPlayer && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden bg-foreground aspect-[3/4] lg:aspect-auto"
            >
              <img
                src={featuredPlayer.image}
                alt={featuredPlayer.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/30 to-transparent" />
              
              {/* Player Number */}
              <div className="absolute top-6 right-6">
                <span className="text-8xl font-extrabold text-primary/30">{featuredPlayer.number}</span>
              </div>

              {/* Player Info */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase rounded mb-3">
                  {featuredPlayer.position}
                </span>
                <h3 className="text-primary-foreground text-3xl md:text-4xl font-extrabold mb-2">
                  {featuredPlayer.name}
                </h3>
                <a
                  href="#"
                  className="inline-flex items-center text-primary hover:text-primary-foreground transition-colors group/link"
                >
                  View Profile
                  <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-primary rounded-2xl transition-colors duration-300 pointer-events-none" />
            </motion.div>
          )}

          {/* Other Players Grid */}
          <div className="grid grid-cols-2 gap-4">
            {otherPlayers.map((player, index) => (
              <motion.div
                key={player.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-xl overflow-hidden bg-foreground aspect-[3/4]"
              >
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/20 to-transparent" />

                {/* Player Number */}
                <div className="absolute top-3 right-3">
                  <span className="text-4xl font-extrabold text-primary/40">{player.number}</span>
                </div>

                {/* Player Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block px-2 py-0.5 bg-primary/80 text-primary-foreground text-xs font-semibold uppercase rounded mb-2">
                    {player.position}
                  </span>
                  <h3 className="text-primary-foreground text-lg font-bold line-clamp-1">
                    {player.name}
                  </h3>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-xl transition-colors duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden mt-8 text-center">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View Full Squad <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
