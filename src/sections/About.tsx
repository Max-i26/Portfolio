import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Brain, Database, LineChart, Sparkles, FileText, Download } from 'lucide-react';
// Profile photo path from src/assets/images
import profilePhoto from '../assets/images/profile-photo.jpg';
import { portfolioData } from '../data/portfolioData';

const getAssetPath = (path: string) => {
  if (path.startsWith('http')) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
};

const About: React.FC = () => {
  const { personal, techStack } = portfolioData;

  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    },
  };

  const getFocusIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Brain className="w-5 h-5 text-moonstone" />;
      case 1:
        return <LineChart className="w-5 h-5 text-moonstone" />;
      default:
        return <Database className="w-5 h-5 text-moonstone" />;
    }
  };

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 max-w-6xl mx-auto px-0 lg:px-6 min-w-0">
      {/* Section Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="mb-10 sm:mb-12 lg:mb-16 border-b border-white/10 pb-4 flex items-center justify-between"
      >
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[#aaa] uppercase font-poppins">
          ABOUT ME
        </h2>
        <span className="text-xs text-white/30 tracking-widest uppercase font-mono">
          / PROFILE
        </span>
      </motion.div>

      {/* Main Profile Info Row */}
      <div className="flex flex-col md:flex-row-reverse items-center md:items-start justify-between gap-10 sm:gap-12 lg:gap-16 mb-12 sm:mb-16">
        {/* Profile Photo */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="md:w-2/5 flex justify-center w-full"
        >
          <div className="relative group w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px]">
            {/* Outer Cyber Neon Accent Ring */}
            <div className="absolute -inset-3 rounded-3xl border border-moonstone/25 group-hover:border-moonstone/60 group-hover:shadow-[0_0_35px_rgba(224,231,255,0.25)] transition-all duration-700 pointer-events-none" />

            {/* Corner Bracket Accents for High-Tech Cyber Look */}
            <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-moonstone rounded-tl-lg z-20 pointer-events-none" />
            <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-moonstone rounded-br-lg z-20 pointer-events-none" />

            {/* Image Container with Natural Portrait Aspect Ratio (4/5) */}
            <div className="relative z-10 w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-zinc-900/40 border border-white/10 group-hover:border-moonstone/40 transition-all duration-500">
              <img
                src={profilePhoto}
                alt={personal.name}
                className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />

              {/* Subtle Gradient Vignette at Bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />

              {/* Status Badge Tag at bottom of photo */}
              <div className="absolute bottom-3 left-3 right-3 z-20 backdrop-blur-md bg-black/60 border border-white/10 rounded-xl px-3 py-1.5 flex items-center justify-between text-[11px] font-mono text-moonstone">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Harol Maxilan
                </span>
                <span className="text-white/50 text-[10px]">AI / ML</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bio Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="w-full md:w-3/5 space-y-4 sm:space-y-5 min-w-0"
        >
          {personal.bioParagraphs.map((paragraph, idx) => (
            <p
              key={idx}
              className={`text-base sm:text-lg lg:text-xl leading-relaxed break-words ${
                idx === 0 ? 'text-white font-medium' : 'text-white/80'
              }`}
            >
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>

      {/* High-Impact Stat Metrics Grid (Replacing Plain Text) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
      >
        {personal.stats.map((stat, idx) => (
          <div
            key={idx}
            className="glass-card p-4 sm:p-6 rounded-xl border border-moonstone-border/20 hover:border-moonstone/40 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-moonstone/40 to-transparent group-hover:via-moonstone transition-all duration-500" />
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white group-hover:text-moonstone transition-colors font-poppins">
              {stat.value}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-white/90 uppercase tracking-wider mt-2">
              {stat.label}
            </div>
            {stat.subtext && (
              <div className="text-[11px] sm:text-xs text-[#aaa] mt-1 font-mono">
                {stat.subtext}
              </div>
            )}
          </div>
        ))}
      </motion.div>

      {/* Core Specialization Pillars */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="mb-12 sm:mb-16"
      >
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-moonstone" />
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
            Core Specializations
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {personal.focusAreas.map((focus, index) => (
            <div
              key={focus.title}
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-moonstone/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-moonstone-dim border border-moonstone-border/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {getFocusIcon(index)}
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-moonstone transition-colors">
                  {focus.title}
                </h4>
                <p className="text-sm text-white/70 leading-relaxed mb-4">
                  {focus.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                {focus.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-white/5 text-moonstone/90 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Education & Background Card */}
      {personal.education && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 mb-12 sm:mb-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-moonstone-dim border border-moonstone-border/30 flex items-center justify-center shrink-0 mt-1">
              <GraduationCap className="w-6 h-6 text-moonstone" />
            </div>
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#aaa]">
                Academic Foundation
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white mt-1">
                {personal.education.degree}
              </h4>
              <p className="text-sm text-moonstone font-medium mt-0.5">
                {personal.education.institution}
              </p>
              {personal.education.description && (
                <p className="text-xs sm:text-sm text-white/60 mt-2 max-w-2xl">
                  {personal.education.description}
                </p>
              )}
            </div>
          </div>
          {personal.education.period && (
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 whitespace-nowrap">
              {personal.education.period}
            </span>
          )}
        </motion.div>
      )}

      {/* Curriculum Vitae / Resume Card */}
      {personal.cvUrl && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 mb-12 sm:mb-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden group hover:border-moonstone/40 transition-all duration-300"
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-moonstone/40 to-transparent group-hover:via-moonstone transition-all duration-500" />
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-moonstone-dim border border-moonstone-border/30 flex items-center justify-center shrink-0 mt-1 text-moonstone group-hover:scale-110 transition-transform">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#aaa]">
                Curriculum Vitae
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white mt-1 group-hover:text-moonstone transition-colors font-poppins">
                {personal.cvName || 'Data Engineering CV'}
              </h4>
              <p className="text-xs sm:text-sm text-white/60 mt-1 max-w-xl">
                Comprehensive technical resume detailing machine learning models, ETL pipelines, automated testing suites, and data engineering projects.
              </p>
            </div>
          </div>

          <a
            href={getAssetPath(personal.cvUrl)}
            target="_blank"
            rel="noopener noreferrer"
            download="Maxilan_Data_Engineering_CV.pdf"
            className="btn-shine inline-flex items-center gap-2 px-6 py-3 rounded-full border border-moonstone text-zinc-950 font-bold text-sm bg-moonstone hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(224,231,255,0.25)] shrink-0"
          >
            <Download className="w-4 h-4" />
            Download Data Engineering CV
          </a>
        </motion.div>
      )}

      {/* Tech Stack Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="glass-card p-6 sm:p-8 lg:p-10 xl:p-12 rounded-2xl sm:rounded-[2rem] min-w-0"
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-white">
          Technical Arsenal
        </h3>
        <div className="flex flex-col gap-6 sm:gap-8">
          {techStack.map((stack) => (
            <div key={stack.category} className="flex flex-col md:flex-row md:items-start gap-3 sm:gap-4 min-w-0">
              <h4 className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold text-[#aaa] md:w-56 shrink-0 pt-0 md:pt-2 break-words">
                {stack.category}
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {stack.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{
                      scale: 1.05,
                      zIndex: 20,
                      borderColor: "rgba(224, 231, 255, 0.4)",
                      boxShadow: "0 0 12px rgba(224, 231, 255, 0.2)"
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                    className="px-3.5 py-1.5 rounded-lg bg-moonstone-dim border border-moonstone-border/20 text-moonstone text-xs sm:text-sm font-medium cursor-default relative transition-colors duration-300"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
