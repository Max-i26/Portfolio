import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, FileText, ArrowRight, Sparkles, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const getAssetPath = (path: string) => {
  if (path.startsWith('http')) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
};

const Hero: React.FC = () => {
  const { personal, socials } = portfolioData;
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);

  useEffect(() => {
    if (!personal.rotatingKeywords.length) return;
    const interval = setInterval(() => {
      setCurrentKeywordIndex((prev) => (prev + 1) % personal.rotatingKeywords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [personal.rotatingKeywords.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-20 pb-12 px-0 flex flex-col items-center justify-center lg:h-screen lg:min-h-0 lg:pt-0 lg:pb-0 lg:px-6"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 w-full max-w-4xl min-w-0 px-2 lg:px-0"
      >
        {/* Availability Status Badge */}
        {personal.availability.status && (
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-wider mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{personal.availability.text}</span>
          </motion.div>
        )}

        <motion.p
          variants={itemVariants}
          className="text-[#aaa] text-sm sm:text-base lg:text-base uppercase tracking-[0.25em] mb-3 sm:mb-4 font-inter font-medium"
        >
          Hello, this is
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-8xl xl:text-9xl mb-4 sm:mb-6 font-bold tracking-tight text-white leading-tight lg:leading-none break-words font-poppins"
        >
          {personal.name}
        </motion.h1>

        {/* Dynamic Rotating Subtitle with AnimatePresence */}
        <motion.p
          variants={itemVariants}
          className="text-white text-base sm:text-xl md:text-2xl font-inter mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed flex flex-col sm:flex-row items-center justify-center gap-2"
        >
          <span className="opacity-80">{personal.rolePrefix}</span>
          <span
            className="text-moonstone font-mono font-semibold bg-moonstone-dim px-3 py-1 rounded border border-moonstone-border/20 inline-flex items-center justify-center min-w-[220px] sm:min-w-[260px] h-[1.7em] overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentKeywordIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block whitespace-nowrap text-moonstone"
              >
                {personal.rotatingKeywords[currentKeywordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 w-full max-w-md sm:max-w-none mx-auto"
        >
          <a
            href="#works"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-shine inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-moonstone-border text-moonstone font-bold text-base sm:text-lg bg-transparent hover:bg-white hover:text-zinc-950 transition-all duration-300 shadow-[0_0_20px_rgba(224,231,255,0.15)]"
          >
            Explore My Projects
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white/90 font-bold text-base sm:text-lg bg-white/5 hover:bg-white hover:text-zinc-950 transition-all duration-300"
          >
            <Terminal className="w-4 h-4" />
            View GitHub
          </a>

          <a
            href={getAssetPath(personal.cvUrl)}
            target="_blank"
            rel="noopener noreferrer"
            download="Maxilan_Data_Engineering_CV.pdf"
            className="btn-shine inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white/90 font-bold text-base sm:text-lg bg-white/5 hover:bg-white hover:text-zinc-950 transition-all duration-300"
          >
            <FileText className="w-4 h-4" />
            {personal.cvName || 'Data Engineering CV'}
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[11px] font-mono tracking-widest text-white/40 group-hover:text-moonstone transition-colors uppercase">
          Explore
        </span>
        <ChevronDown className="w-5 h-5 text-white/40 group-hover:text-moonstone animate-bounce transition-colors" />
      </motion.div>
    </section>
  );
};

export default Hero;
