import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ShoppingCart, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import productScarf from '@/assets/product-scarf.jpg';
import productKeychain from '@/assets/product-keychain.jpg';
import productCap from '@/assets/product-cap.jpg';
import productRing from '@/assets/product-ring.jpg';

const products = [
  {
    id: 1,
    name: 'Al Rayyan Keychain',
    price: 25,
    image: productKeychain,
    soldOut: false,
  },
  {
    id: 2,
    name: 'Al Rayyan Scarf',
    price: 35,
    image: productScarf,
    soldOut: false,
  },
  {
    id: 3,
    name: 'F.C White Cap with Logo',
    price: 100,
    image: productCap,
    soldOut: true,
  },
  {
    id: 4,
    name: 'Phone Ring Holder',
    price: 10,
    image: productRing,
    soldOut: false,
  },
];

export function ShopSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <section id="shop" ref={containerRef} className="section-padding bg-muted relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: bgY }}
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-primary font-semibold text-sm uppercase tracking-wider mb-2"
          >
            Official Store
          </motion.p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block"
            >
              SHOP
            </motion.span>{' '}
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-primary relative inline-block"
            >
              MERCHANDISE
              <motion.span 
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-1 left-0 w-full h-1 bg-primary/30 origin-left" 
              />
            </motion.span>
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            Show your support with official Al-Rayyan SC merchandise. Quality products for true fans.
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: 0.3 + index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group bg-background rounded-xl overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-red-glow"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-muted">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                />
                {product.soldOut && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-foreground/70 flex items-center justify-center"
                  >
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1, type: "spring" }}
                      className="bg-primary text-primary-foreground px-4 py-2 font-bold text-sm uppercase rounded"
                    >
                      Sold Out
                    </motion.span>
                  </motion.div>
                )}
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                />
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">QAR {product.price}.00</span>
                  <motion.button
                    disabled={product.soldOut}
                    whileHover={!product.soldOut ? { scale: 1.2, rotate: 10 } : {}}
                    whileTap={!product.soldOut ? { scale: 0.9 } : {}}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      product.soldOut
                        ? 'bg-muted text-muted-foreground cursor-not-allowed'
                        : 'bg-primary text-primary-foreground hover:shadow-red-glow'
                    }`}
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-red-glow group" size="lg">
            Go to Shop 
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group">
            View Accessories
          </Button>
        </motion.div>

        {/* Help Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-sm text-muted-foreground"
        >
          <p className="flex flex-wrap items-center justify-center gap-4">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              Store: +974 5208 4424
            </motion.span>
            <span className="text-muted-foreground/50">|</span>
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              Outdoor Booking: +974 6612 9081
            </motion.span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
