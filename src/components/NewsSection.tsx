import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
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

export function NewsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="news" ref={containerRef} className="section-padding bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-end justify-between mb-12"
        >
          <div>
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
              Latest Updates
            </motion.p>
            <h2 className="text-4xl md:text-5xl font-extrabold">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block"
              >
                RECENT
              </motion.span>{' '}
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-primary relative inline-block"
              >
                CLUB
                <motion.span 
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute -bottom-1 left-0 w-full h-1 bg-primary/30 origin-left" 
                />
              </motion.span>{' '}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-block"
              >
                NEWS
              </motion.span>
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button variant="outline" className="hidden md:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground group">
              More News 
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.3 + index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -8 }}
              className="group relative rounded-xl overflow-hidden bg-foreground shadow-strong hover:shadow-red-glow transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/20 to-transparent" />
                
                {/* Category Tags */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {item.category.map((cat, i) => (
                    <motion.span
                      key={cat}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 + i * 0.1 }}
                      className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase rounded"
                    >
                      {cat}
                    </motion.span>
                  ))}
                </div>

                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-primary-foreground/60 text-sm mb-2">{item.date}</p>
                <h3 className="text-primary-foreground text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm line-clamp-2">{item.excerpt}</p>
              </div>

              {/* Hover Border Effect */}
              <motion.div 
                className="absolute inset-0 border-2 border-primary rounded-xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.article>
          ))}
        </div>

        {/* Mobile More Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="md:hidden mt-8 text-center"
        >
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            More News <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
