import React from 'react';
import { Linkedin, Instagram, Github, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import CursorGlow from './components/CursorGlow';
import BackgroundEffects from './components/BackgroundEffects';
import ThemeToggle from './theme/ThemeToggle';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Showcase from './sections/Showcase';
import Contact from './sections/Contact';
import { portfolioData } from './data/portfolioData';

const App: React.FC = () => {
  const { personal, socials } = portfolioData;

  return (
    <div className="relative min-h-screen selection:bg-moonstone/30 selection:text-moonstone-light">
      <BackgroundEffects />
      <CursorGlow />
      <ThemeToggle />

      <div className="flex flex-col lg:flex-row min-h-screen">
        <Navbar />

        <main className="flex-1 lg:ml-[80px] xl:ml-[120px] lg:mr-[80px] xl:mr-[120px] px-6 lg:pl-5 lg:pr-5">
          <Hero />
          <About />
          <Experience />
          <Showcase />
          <Contact />

          <footer className="py-12 text-center opacity-40">
            <p className="text-[#aaa] text-xs sm:text-sm tracking-widest uppercase font-mono">
              © {new Date().getFullYear()} {personal.name}. All rights reserved.
            </p>
          </footer>
        </main>

        <aside className="fixed right-0 top-1/2 -translate-y-1/2 w-[80px] xl:w-[120px] z-50 hidden lg:flex flex-col items-end space-y-6 text-[#aaa] pr-6 xl:pr-8">
          {socials.linkedin && (
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 min-h-[44px] flex items-center" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          )}
          {socials.instagram && (
            <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 min-h-[44px] flex items-center" aria-label="Instagram">
              <Instagram size={20} />
            </a>
          )}
          {socials.github && (
            <a href={socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 min-h-[44px] flex items-center" aria-label="GitHub">
              <Github size={20} />
            </a>
          )}
          {socials.email && (
            <a href={`mailto:${socials.email}`} className="hover:text-white transition-colors duration-300 min-h-[44px] flex items-center" aria-label="Email">
              <Mail size={20} />
            </a>
          )}
        </aside>
      </div>
    </div>
  );
};

export default App;
