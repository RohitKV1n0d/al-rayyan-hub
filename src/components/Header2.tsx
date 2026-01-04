import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Search, X, ChevronDown, User, Ticket, ShoppingBag, Users } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '@/assets/al-rayyan-logo.png';

const homeOptions = [
  { label: 'Home 1', href: '/' },
  { label: 'Home 2', href: '/home-2' },
];

const leftNavItems = [
  { 
    label: 'First Team', 
    href: '#players',
    hasDropdown: true,
    items: [
      { label: 'Squad', href: '#players' },
      { label: 'Matches', href: '#matches' },
      { label: 'Stats', href: '#stats' },
    ]
  },
  { 
    label: 'Club', 
    href: '#about',
    hasDropdown: true,
    items: [
      { label: 'About Us', href: '#about' },
      { label: 'History', href: '#history' },
      { label: 'Stadium', href: '#stadium' },
    ]
  },
  { label: 'News', href: '#news' },
  { label: 'Strategy', href: '#strategy' },
];

const rightNavItems = [
  { label: 'Tickets', href: '#', icon: Ticket },
  { label: 'Shop', href: '#shop', icon: ShoppingBag },
  { label: 'Fans', href: '#', icon: Users },
];

export function Header2() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const currentHome = homeOptions.find(opt => opt.href === location.pathname) || homeOptions[0];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Utility Bar - Dark with centered promo */}
      <div className="bg-[#0a0a14] text-primary-foreground py-2 px-4 hidden md:block">
        <div className="container mx-auto flex items-center justify-between">
          {/* Left: Empty for balance */}
          <div className="w-32" />
          
          {/* Center: Promo Banner */}
          <div className="flex items-center gap-3">
            <span className="text-yellow-400">⚽</span>
            <span className="text-sm font-medium">Join Al Rayyan Membership!</span>
            <a href="#" className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-bold px-4 py-1.5 rounded uppercase tracking-wide transition-colors">
              Join Now
            </a>
          </div>

          {/* Right: Login & Language */}
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
              <User className="w-4 h-4" />
              <span>Login</span>
            </a>
            <a href="#" className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-bold px-4 py-2 rounded transition-colors">
              View Plans
            </a>
            <button className="text-sm font-medium border border-primary-foreground/30 px-2 py-1 rounded hover:border-primary-foreground transition-colors">
              EN
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Navy Blue */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 bg-[#14213d] ${
          isScrolled ? 'shadow-lg' : ''
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            
            {/* Left: Logo + Nav Items */}
            <div className="flex items-center gap-8">
              {/* Logo - extends below */}
              <a 
                href="#" 
                className="relative z-20 flex-shrink-0"
              >
                <img
                  src={logo}
                  alt="Al-Rayyan SC"
                  className={`transition-all duration-300 ${
                    isScrolled ? 'h-12' : 'h-20 -mb-4'
                  }`}
                />
              </a>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center gap-1">
                {/* Home Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => setIsHomeDropdownOpen(true)}
                  onMouseLeave={() => setIsHomeDropdownOpen(false)}
                >
                  <button className="flex items-center gap-1 px-4 py-5 text-sm font-semibold text-primary-foreground uppercase tracking-wide hover:text-primary transition-colors">
                    {currentHome.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isHomeDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isHomeDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 bg-[#1a2744] border border-white/10 rounded-lg shadow-2xl overflow-hidden min-w-[160px] z-50"
                      >
                        {homeOptions.map((option) => (
                          <button
                            key={option.href}
                            onClick={() => {
                              navigate(option.href);
                              setIsHomeDropdownOpen(false);
                            }}
                            className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                              location.pathname === option.href 
                                ? 'bg-primary text-primary-foreground' 
                                : 'text-primary-foreground/80 hover:bg-white/10 hover:text-primary-foreground'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Other Nav Items */}
                {leftNavItems.map((item) => (
                  <div 
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <a 
                      href={item.href}
                      className="flex items-center gap-1 px-4 py-5 text-sm font-semibold text-primary-foreground uppercase tracking-wide hover:text-primary transition-colors"
                    >
                      {item.label}
                      {item.hasDropdown && (
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                      )}
                    </a>
                    
                    {/* Dropdown */}
                    <AnimatePresence>
                      {item.hasDropdown && activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 bg-[#1a2744] border border-white/10 rounded-lg shadow-2xl overflow-hidden min-w-[180px] z-50"
                        >
                          {item.items?.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              className="block px-4 py-3 text-sm font-medium text-primary-foreground/80 hover:bg-white/10 hover:text-primary-foreground transition-colors"
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>
            </div>

            {/* Right: Actions + Nav */}
            <div className="flex items-center gap-2">
              {/* Desktop Right Nav */}
              <nav className="hidden lg:flex items-center gap-1">
                {rightNavItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-2 px-4 py-5 text-sm font-semibold text-primary-foreground uppercase tracking-wide hover:text-primary transition-colors"
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-3 text-primary-foreground hover:text-primary transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Mobile Menu */}
              <button
                className="lg:hidden p-2 text-primary-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Red accent line */}
        <div className="h-1 bg-primary" />
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed left-0 top-0 bottom-0 w-80 bg-[#14213d] z-50 shadow-2xl overflow-y-auto"
            >
              <div className="p-4 border-b border-white/10 flex items-center justify-between">
                <img src={logo} alt="Al-Rayyan SC" className="h-12" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-primary-foreground hover:text-primary transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <nav className="p-4">
                {/* Home Options */}
                <div className="mb-4">
                  <span className="block py-2 px-2 text-xs font-bold text-primary-foreground/50 uppercase tracking-wide">Home Versions</span>
                  {homeOptions.map((option) => (
                    <button
                      key={option.href}
                      onClick={() => {
                        navigate(option.href);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full text-left py-3 px-2 text-base font-medium transition-colors ${
                        location.pathname === option.href 
                          ? 'text-primary' 
                          : 'text-primary-foreground hover:text-primary'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>

                <div className="h-px bg-white/10 my-4" />

                {/* Nav Links */}
                {leftNavItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block py-3 px-2 text-base font-medium text-primary-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                
                <div className="h-px bg-white/10 my-4" />

                {rightNavItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 py-3 px-2 text-base font-medium text-primary-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Bottom CTA */}
              <div className="p-4 border-t border-white/10">
                <a href="#" className="block w-full bg-primary hover:bg-primary/90 text-primary-foreground text-center font-bold py-3 rounded-lg transition-colors">
                  Join Membership
                </a>
              </div>
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
            className="fixed inset-0 bg-[#14213d]/95 z-50 flex items-start justify-center pt-32"
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
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-primary-foreground/50" />
                <input
                  type="text"
                  placeholder="Search Al Rayyan..."
                  className="w-full bg-white/10 text-primary-foreground text-xl py-4 pl-14 pr-14 rounded-lg border border-white/20 focus:outline-none focus:border-primary placeholder:text-primary-foreground/40"
                  autoFocus
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-primary-foreground/50 hover:text-primary-foreground transition-colors"
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
