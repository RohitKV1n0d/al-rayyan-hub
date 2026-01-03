import { motion } from 'framer-motion';
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
  return (
    <section id="shop" className="section-padding bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Official Store</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            SHOP{' '}
            <span className="text-primary relative inline-block">
              MERCHANDISE
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary/30" />
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Show your support with official Al-Rayyan SC merchandise. Quality products for true fans.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-background rounded-xl overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-red-glow"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {product.soldOut && (
                  <div className="absolute inset-0 bg-foreground/70 flex items-center justify-center">
                    <span className="bg-primary text-primary-foreground px-4 py-2 font-bold text-sm uppercase rounded">
                      Sold Out
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">QAR {product.price}.00</span>
                  <button
                    disabled={product.soldOut}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      product.soldOut
                        ? 'bg-muted text-muted-foreground cursor-not-allowed'
                        : 'bg-primary text-primary-foreground hover:scale-110 hover:shadow-red-glow'
                    }`}
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-red-glow" size="lg">
            Go to Shop <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View Accessories
          </Button>
        </motion.div>

        {/* Help Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground"
        >
          <p className="flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Store: +974 5208 4424
            </span>
            <span className="text-muted-foreground/50">|</span>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Outdoor Booking: +974 6612 9081
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
