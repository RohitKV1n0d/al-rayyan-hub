import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import news1 from '@/assets/news-1.jpg';
import news2 from '@/assets/news-2.jpg';
import news3 from '@/assets/news-3.jpg';

const newsItems = [
  {
    id: 1,
    image: news1,
    category: ['Football', 'News'],
    title: 'Qatar Derby Ends in a Draw',
    excerpt: 'An intense match between the two rivals ended with both teams sharing points.',
    date: 'September 21, 2025',
  },
  {
    id: 2,
    image: news2,
    category: ['Football', 'Interview'],
    title: 'Roger Guedes: We Are Ready for the Match Against Al-Arabi',
    excerpt: 'Our goal is the three points and we are fully prepared.',
    date: 'September 20, 2025',
  },
  {
    id: 3,
    image: news3,
    category: ['Football', 'Press'],
    title: 'Artur Jorge: We Missed Playing in the League',
    excerpt: 'We aim to end the year with a victory and build momentum.',
    date: 'September 19, 2025',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function NewsSection() {
  return (
    <section id="news" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Latest Updates</p>
            <h2 className="text-4xl md:text-5xl font-extrabold">
              RECENT{' '}
              <span className="text-primary relative inline-block">
                CLUB
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary/30" />
              </span>{' '}
              NEWS
            </h2>
          </div>
          <Button variant="outline" className="hidden md:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            More News <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>

        {/* News Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {newsItems.map((item) => (
            <motion.article
              key={item.id}
              variants={itemVariants}
              className="group relative rounded-xl overflow-hidden bg-foreground shadow-strong hover:shadow-red-glow transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/20 to-transparent" />
                
                {/* Category Tags */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {item.category.map((cat) => (
                    <span
                      key={cat}
                      className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase rounded"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-primary-foreground/60 text-sm mb-2">{item.date}</p>
                <h3 className="text-primary-foreground text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm line-clamp-2">{item.excerpt}</p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-xl transition-colors duration-300 pointer-events-none" />
            </motion.article>
          ))}
        </motion.div>

        {/* Mobile More Button */}
        <div className="md:hidden mt-8 text-center">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            More News <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
