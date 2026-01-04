import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Search, User, ShoppingCart, X, Mail, Phone, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';
import logo from '@/assets/al-rayyan-logo.png';

const leftNavLinks = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#about' },
  { label: 'Club Strategy', href: '#strategy' },
];

const rightNavLinks = [
  { label: 'News', href: '#news' },
  { label: 'Shop', href: '#shop' },
  { label: 'Contact Us', href: '#contact' },
];

const allNavLinks = [...leftNavLinks, ...rightNavLinks];

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
      {/* Top mini bar - Black background */}
      <div className="bg-foreground text-primary-foreground py-2 px-4 hidden md:block">
        <div className="container mx-auto flex items-center justify-between">
          {/* Left: Contact info */}
          <div className="flex items-center gap-6">
            <a href="mailto:contact@alrayyansc.com" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span>contact@alrayyansc.com</span>
            </a>
            <a href="tel:+97452084424" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>+974 5208 4424</span>
            </a>
          </div>
          {/* Right: Social icons */}
          <div className="flex items-center gap-3">
            <a href="#" className="p-1.5 hover:text-primary transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="p-1.5 hover:text-primary transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="p-1.5 hover:text-primary transition-colors" aria-label="Youtube">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="#" className="p-1.5 hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header - Red background with centered logo */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 bg-primary ${
          isScrolled ? 'shadow-medium py-2' : 'py-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between lg:justify-center relative">
            {/* Mobile: hamburger + actions */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                className="p-2 text-primary-foreground hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Desktop: Left nav links */}
            <nav className="hidden lg:flex items-center gap-1">
              {leftNavLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative px-5 py-6 text-sm font-semibold text-primary-foreground uppercase tracking-wider hover:bg-white/10 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Center: Logo - extends above navbar */}
            <a 
              href="#" 
              className={`relative z-10 mx-8 flex-shrink-0 transition-all duration-300 ${
                isScrolled ? 'py-1' : 'py-0'
              }`}
            >
              <div className="relative">
                {/* Logo with background shape */}
                <div className={`absolute inset-0 bg-primary -top-4 -bottom-2 -left-4 -right-4 ${isScrolled ? 'hidden' : ''}`} 
                  style={{ clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)' }} 
                />
                <img
                  src={logo}
                  alt="Al-Rayyan SC"
                  className={`relative z-10 transition-all duration-300 ${
                    isScrolled ? 'h-12' : 'h-20 -mt-4'
                  }`}
                />
              </div>
            </a>

            {/* Desktop: Right nav links */}
            <nav className="hidden lg:flex items-center gap-1">
              {rightNavLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative px-5 py-6 text-sm font-semibold text-primary-foreground uppercase tracking-wider hover:bg-white/10 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile: Right actions */}
            <div className="flex items-center gap-1 lg:absolute lg:right-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-primary-foreground hover:bg-white/10 rounded-lg transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-primary-foreground hover:bg-white/10 rounded-lg transition-colors hidden sm:block">
                <User className="w-5 h-5" />
              </button>
              <button className="p-2 text-primary-foreground hover:bg-white/10 rounded-lg transition-colors relative">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-foreground text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
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
              <div className="p-4 border-b border-border flex items-center justify-between bg-primary">
                <img src={logo} alt="Al-Rayyan SC" className="h-12" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-primary-foreground hover:bg-white/10 rounded-lg"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="p-4">
                {allNavLinks.map((link) => (
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
