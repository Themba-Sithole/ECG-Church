import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Ministries', path: '/ministries' },
    { name: 'Stewardship & Tribes', path: '/stewardship' },
    { name: 'Watch Live', path: '/watch-live' },
    { name: 'Events', path: '/events' },
    { name: 'Visit Us', path: '/visit' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/98 backdrop-blur-md shadow-lg shadow-black/50' 
          : 'bg-black/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="relative">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Ecg-logo_refixed.png" 
                alt="ECG Logo" 
                className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-['Montserrat'] font-black text-xl text-white tracking-tight leading-tight">
                ECG TJNC
              </span>
              <span className="font-['Montserrat'] font-black text-xl text-white tracking-tight leading-tight">
                CAPE TOWN
              </span>
              <span className="font-['Inter'] text-[10px] text-accent uppercase tracking-[0.15em] mt-0.5">
                The Jesus Nation Church
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 font-['Montserrat'] font-semibold text-sm uppercase tracking-wide transition-all duration-300 group ${
                  isActive(item.path)
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></span>
                )}
                {!isActive(item.path) && (
                  <span className="absolute bottom-0 left-1/2 right-1/2 h-0.5 bg-primary transition-all duration-300 group-hover:left-0 group-hover:right-0"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-5">
              <span
                className={`absolute left-0 w-5 h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? 'top-[9px] rotate-45' : 'top-1'
                }`}
              ></span>
              <span
                className={`absolute left-0 top-[9px] w-5 h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`absolute left-0 w-5 h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? 'top-[9px] -rotate-45' : 'top-[17px]'
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-6 space-y-1 border-t border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg font-['Montserrat'] font-semibold text-sm uppercase tracking-wide transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-white bg-primary/20 border-l-4 border-primary'
                    : 'text-white/70 hover:text-white hover:bg-white/5 border-l-4 border-transparent'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
