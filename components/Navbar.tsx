
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { DR_NAME, PHONE_VOICE } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'موقعنا', href: '#location' },
    { name: 'حجز موعد', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="text-xl md:text-2xl font-extrabold text-teal-600 hover:text-teal-700 transition-colors">
              د. يوسف بولعيش
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm lg:text-base font-bold text-gray-700 transition-all duration-300 hover:text-teal-600 relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
            <a
              href={`tel:${PHONE_VOICE}`}
              className="flex items-center gap-2 bg-teal-600 text-white px-6 py-2.5 rounded-full hover:bg-teal-700 transition-all hover:shadow-lg active:scale-95 font-bold"
            >
              <Phone size={18} />
              <span>{PHONE_VOICE}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-600 hover:text-teal-600 hover:bg-teal-50 focus:outline-none transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl transition-all duration-300 ease-in-out transform ${
        isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
      }`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="block px-4 py-4 rounded-xl text-lg font-bold text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all"
            >
              {link.name}
            </a>
          ))}
          <a
            href={`tel:${PHONE_VOICE}`}
            className="flex items-center justify-center gap-3 w-full bg-teal-600 text-white px-4 py-4 rounded-xl font-bold text-lg mt-4 shadow-lg active:scale-95 transition-transform"
          >
            <Phone size={22} />
            اتصل الآن
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
