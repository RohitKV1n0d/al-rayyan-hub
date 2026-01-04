import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '@/assets/al-rayyan-logo.png';

const homeOptions = [
  { label: 'Home 1', href: '/' },
  { label: 'Home 2', href: '/home-2' },
  { label: 'Home 3', href: '/home-3' },
];

const navItems = [
  { label: 'Home', href: '#', isHomeDropdown: true },
  { label: 'About Us', href: '#about' },
  { label: 'Club Strategy', href: '#strategy' },
  { label: 'News', href: '#news' },
  { label: 'Shop', href: '#shop' },
];

export function Header3() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const currentHome = homeOptions.find(opt => opt.href === location.pathname) || homeOptions[2];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Red Bar */}
      <div className="bg-primary py-2 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <button className="flex items-center gap-2 text-primary-foreground text-sm font-medium hover:opacity-80 transition-opacity">
            <Globe className="w-4 h-4" />
            <span>ENG</span>
            <ChevronDown className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-4">
            <a href="#" className="text-primary-foreground hover:opacity-80 transition-opacity">
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 bg-foreground ${
          isScrolled ? 'shadow-lg py-2' : 'py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex-shrink-0">
              <img
                src={logo}
                alt="Al-Rayyan SC"
                className={`transition-all duration-300 ${isScrolled ? 'h-12' : 'h-16'}`}
              />
            </a>

            {/* Desktop Nav - Centered */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                item.isHomeDropdown ? (
                  <div 
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setIsHomeDropdownOpen(true)}
                    onMouseLeave={() => setIsHomeDropdownOpen(false)}
                  >
                    <button className="flex items-center gap-1 text-sm font-semibold text-primary-foreground uppercase tracking-wide hover:text-primary transition-colors">
                      {currentHome.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isHomeDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {isHomeDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-2 bg-foreground border border-primary-foreground/10 rounded-lg shadow-2xl overflow-hidden min-w-[140px] z-50"
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
                                  : 'text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground'
                              }`}
                            >
                              {option.label}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-sm font-semibold text-primary-foreground uppercase tracking-wide hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                )
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* Language - Desktop */}
              <button className="hidden lg:flex items-center gap-2 text-primary-foreground text-sm font-medium hover:text-primary transition-colors">
                <Globe className="w-4 h-4" />
                <span>ENG</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {/* Buy Tickets Button */}
              <a
                href="#"
                className="hidden sm:flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm px-6 py-3 rounded transition-colors uppercase tracking-wide"
              >
                Buy Tickets
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>

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
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-foreground z-50 shadow-2xl overflow-y-auto"
            >
              <div className="p-4 border-b border-primary-foreground/10 flex items-center justify-between">
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
                  <span className="block py-2 text-xs font-bold text-primary-foreground/50 uppercase tracking-wide">Home Versions</span>
                  {homeOptions.map((option) => (
                    <button
                      key={option.href}
                      onClick={() => {
                        navigate(option.href);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full text-left py-3 text-base font-medium transition-colors ${
                        location.pathname === option.href 
                          ? 'text-primary' 
                          : 'text-primary-foreground hover:text-primary'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>

                <div className="h-px bg-primary-foreground/10 my-4" />

                {navItems.filter(i => !i.isHomeDropdown).map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block py-3 text-base font-medium text-primary-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="p-4 border-t border-primary-foreground/10">
                <a href="#" className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white text-center font-bold py-3 rounded-lg transition-colors uppercase">
                  Buy Tickets
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
