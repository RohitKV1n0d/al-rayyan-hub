import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Search, User, ShoppingCart, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/al-rayyan-logo.png';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#about' },
  { label: 'Club Strategy', href: '#strategy' },
  { label: 'News', href: '#news' },
  { label: 'Shop', href: '#shop' },
  { label: 'Buy Tickets', href: '#tickets' },
];

const socialLinks = [
  { icon: 'youtube', href: '#' },
  { icon: 'instagram', href: '#' },
  { icon: 'twitter', href: '#' },
  { icon: 'snapchat', href: '#' },
  { icon: 'facebook', href: '#' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartCount] = useState(2);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top mini bar */}
      <div className="bg-foreground text-primary-foreground py-2 px-4 hidden md:block">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
              <Globe className="w-4 h-4" />
              <span>English</span>
            </button>
            <span className="text-primary-foreground/50">|</span>
            <button className="text-sm hover:text-primary transition-colors">العربية</button>
          </div>
          <div className="flex items-center gap-4">
            {['youtube', 'instagram', 'twitter', 'facebook'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-primary transition-colors"
              >
                <span className="sr-only">{social}</span>
                <div className="w-3.5 h-3.5 bg-current rounded-sm opacity-80" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-medium py-2'
            : 'bg-background py-4'
        } border-b-2 border-primary`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Left: Mobile menu + Logo */}
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <a href="#" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Al-Rayyan SC"
                className={`transition-all duration-300 ${
                  isScrolled ? 'h-10' : 'h-14'
                }`}
              />
              <span className="hidden sm:block font-bold text-lg">Al-Rayyan SC</span>
            </a>
          </div>

          {/* Center: Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4" />
              </a>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-muted rounded-lg transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-foreground/50 z-50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed left-0 top-0 bottom-0 w-80 bg-background z-50 shadow-strong"
            >
              <div className="p-4 border-b border-border flex items-center justify-between">
                <img src={logo} alt="Al-Rayyan SC" className="h-12" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-muted rounded-lg"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="p-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block py-3 px-4 text-lg font-medium border-b border-border hover:bg-muted hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/90 z-50 flex items-start justify-center pt-32"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="w-full max-w-2xl px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-background text-foreground text-xl py-4 pl-14 pr-14 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  autoFocus
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
