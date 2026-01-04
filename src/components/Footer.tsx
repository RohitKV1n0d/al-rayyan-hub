import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Mail, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/al-rayyan-logo.png';

const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#about' },
  { label: 'News', href: '#news' },
  { label: 'Shop', href: '#shop' },
  { label: 'Buy Tickets', href: '#tickets' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'X', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
];

export function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <footer ref={containerRef} className="bg-background border-t-4 border-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.a 
              href="#" 
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <motion.img 
                src={logo} 
                alt="Al-Rayyan SC" 
                className="h-16"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
              <div>
                <h3 className="font-bold text-lg">Al-Rayyan</h3>
                <p className="text-sm text-muted-foreground">Sports Club</p>
              </div>
            </motion.a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              A leading multi-sport club in Qatar, built on heritage and driven by excellence since 1967.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1, type: "spring" }}
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <motion.span 
                      className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300" 
                    />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              {[
                { title: 'Address', value: 'Al-Rayyan, Qatar' },
                { title: 'Store', value: '+974 5208 4424' },
                { title: 'Outdoor Booking', value: '+974 6612 9081' },
                { title: 'Email', value: 'info@alrayyansc.com' },
              ].map((item, index) => (
                <motion.li 
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
                  className="group"
                >
                  <p className="font-medium text-foreground">{item.title}</p>
                  <p className="group-hover:text-primary transition-colors cursor-pointer">{item.value}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to receive the latest news, match updates, and exclusive offers.
            </p>
            <form className="space-y-3">
              <motion.div 
                className="relative"
                whileFocus={{ scale: 1.02 }}
              >
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-muted border border-border rounded-lg py-3 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </motion.div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group">
                Subscribe 
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="border-t border-border"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>Al Rayyan Club all rights reserved © 2025/2026</p>
            <p>Designed by <span className="text-primary font-medium hover:underline cursor-pointer">PaPaYa</span></p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
