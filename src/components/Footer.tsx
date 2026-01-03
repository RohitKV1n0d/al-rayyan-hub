import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
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
  { icon: 'YT', label: 'YouTube', href: '#' },
  { icon: 'IG', label: 'Instagram', href: '#' },
  { icon: 'X', label: 'X', href: '#' },
  { icon: 'FB', label: 'Facebook', href: '#' },
  { icon: 'SC', label: 'Snapchat', href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-background border-t-4 border-primary">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="#" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Al-Rayyan SC" className="h-16" />
              <div>
                <h3 className="font-bold text-lg">Al-Rayyan</h3>
                <p className="text-sm text-muted-foreground">Sports Club</p>
              </div>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              A leading multi-sport club in Qatar, built on heritage and driven by excellence since 1967.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-sm font-bold text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary transition-all group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <p className="font-medium text-foreground">Address</p>
                <p>Al-Rayyan, Qatar</p>
              </li>
              <li>
                <p className="font-medium text-foreground">Store</p>
                <p>+974 5208 4424</p>
              </li>
              <li>
                <p className="font-medium text-foreground">Outdoor Booking</p>
                <p>+974 6612 9081</p>
              </li>
              <li>
                <p className="font-medium text-foreground">Email</p>
                <p>info@alrayyansc.com</p>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to receive the latest news, match updates, and exclusive offers.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-muted border border-border rounded-lg py-3 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Subscribe <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>Al Rayyan Club all rights reserved © 2025/2026</p>
            <p>Designed by <span className="text-primary font-medium">PaPaYa</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
