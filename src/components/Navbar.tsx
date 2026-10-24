import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Linkedin, Instagram, Github, Mail, Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Navbar: React.FC = () => {
  const { socials } = portfolioData;
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'About', href: '/about', id: 'about' },
    { name: 'Leadership', href: '/leadership', id: 'journey' },
    { name: 'Projects', href: '/projects', id: 'works' },
    { name: 'Contact', href: '/contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string, _href: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
    setIsMobileMenuOpen(false);
  };

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: socials.linkedin },
    ...(socials.instagram ? [{ icon: <Instagram size={20} />, href: socials.instagram }] : []),
    { icon: <Github size={20} />, href: socials.github },
    { icon: <Mail size={20} />, href: `mailto:${socials.email}` },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      navLinks.forEach((link) => {
        const element = document.getElementById(link.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(link.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-[80px] xl:w-[120px] z-50 hidden lg:flex flex-col items-start pl-4 xl:pl-6 justify-center">
        <div className="flex flex-col items-start space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.id, link.href)}
              className={`relative group text-[13px] tracking-[0.2em] transition-colors duration-300 min-h-[44px] flex items-center whitespace-nowrap ${
                activeSection === link.id ? 'text-white font-semibold' : 'text-[#aaa] hover:text-white'
              }`}
            >
              {link.name}
              <span
                className={`absolute left-0 bottom-[-4px] h-[1px] bg-white transition-transform duration-300 ease-out origin-left ${
                  activeSection === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
                style={{ width: '100%' }}
              />
            </a>
          ))}
        </div>
      </aside>

      {/* Mobile Nav Top Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 lg:hidden px-4 sm:px-6 py-3 sm:py-4 flex justify-end items-center pointer-events-none">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white min-h-[44px] min-w-[44px] flex items-center justify-center pointer-events-auto"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 sm:gap-8 px-6 lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id, link.href)}
                className={`text-xl sm:text-2xl tracking-[0.2em] sm:tracking-[0.3em] min-h-11 flex items-center transition-colors duration-300 ${
                  activeSection === link.id ? 'text-white font-bold' : 'text-[#aaa]'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-8 sm:mt-12 text-[#aaa]">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors min-h-11 min-w-11 flex items-center justify-center"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
