import React from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { Github, Sparkles } from 'lucide-react';
import { portfolioData, ProjectItem } from '../data/portfolioData';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const getImagePath = (path: string | null) => {
  if (!path) return null;
  if (path.startsWith('http')) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
};

const Showcase: React.FC = () => {
  const { projects } = portfolioData;
  const [activeProject, setActiveProject] = React.useState(0);
  const project: ProjectItem = projects[activeProject] || projects[0];

  const rightColRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: rightColRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const index = Math.min(
      projects.length - 1,
      Math.max(0, Math.floor(latest * projects.length))
    );
    setActiveProject((prev) => (prev === index ? prev : index));
  });

  return (
    <section
      id="works"
      className="max-w-6xl mx-auto px-0 lg:px-6 py-12 sm:py-16 lg:py-0 min-w-0"
      style={{ overflowX: 'clip', overflowY: 'visible' }}
    >
      {/* DESKTOP */}
      <div className="hidden lg:flex" style={{ alignItems: 'flex-start' }}>
        {/* LEFT — Sticky Info Panel */}
        <div
          className="w-[45%] relative flex flex-col"
          style={{ position: 'sticky', top: 0, height: '100svh' }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: EASE,
                },
              },
            }}
            className="absolute top-0 left-0 right-0 pt-16 pb-4 border-b border-white/10 z-10"
          >
            <div className="flex items-center justify-between pr-8">
              <h2 className="text-xl md:text-2xl font-bold tracking-[0.3em] text-[#aaa] uppercase font-poppins">
                FEATURED WORK
              </h2>
              <span className="text-xs text-white/30 tracking-widest uppercase font-mono">
                / SHOWCASE
              </span>
            </div>
          </motion.div>

          <div className="flex-1 flex flex-col justify-center pr-12">
            <div className="flex flex-col">
              {/* Ticker Counter */}
              <div className="flex items-center text-sm tracking-[0.3em] text-white/40 font-mono mb-3">
                <span>[</span>
                <div className="overflow-hidden flex items-center justify-center px-3" style={{ height: '1.4em' }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProject}
                      initial={{ y: 24 }}
                      animate={{
                        y: 0,
                        transition: {
                          duration: 0.3,
                          ease: EASE,
                        },
                      }}
                      exit={{ y: -24, transition: { duration: 0.15, ease: 'easeIn' } }}
                      className="whitespace-nowrap"
                    >
                      {String(activeProject + 1).padStart(2, '0')}
                    </motion.div>
                  </AnimatePresence>
                </div>
                <span>/</span>
                <span className="px-3">{String(projects.length).padStart(2, '0')}</span>
                <span>]</span>
              </div>

              {/* Title */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`title-${activeProject}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } }}
                  exit={{ opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } }}
                >
                  <h3 className="mb-2 text-2xl xl:text-3xl font-bold text-white tracking-tight uppercase leading-tight max-w-[90%] break-words">
                    {project.name}
                  </h3>
                  {project.tagline && (
                    <p className="text-xs font-mono text-moonstone uppercase tracking-wider mb-3">
                      {project.tagline}
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Description */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`desc-${activeProject}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }}
                  exit={{ opacity: 0, transition: { duration: 0.25, ease: 'easeIn' } }}
                >
                  <p className="mb-4 text-sm text-white/70 leading-relaxed max-w-[90%]">
                    {project.description}
                  </p>

                  {/* Highlights if provided */}
                  {project.keyHighlights && project.keyHighlights.length > 0 && (
                    <div className="space-y-1.5 mb-5">
                      {project.keyHighlights.map((hl, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-white/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-moonstone" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Stack Tags */}
              <div className="pt-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`tags-${activeProject}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.4,
                        ease: EASE,
                      },
                    }}
                    exit={{ opacity: 0, y: -6, transition: { duration: 0.2 } }}
                    className="flex flex-wrap gap-2"
                  >
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] tracking-widest text-white/60 border border-white/20 px-3 py-1 uppercase rounded-full font-medium hover:-translate-y-0.5 hover:border-moonstone/40 hover:text-moonstone transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Image Column */}
        <div className="w-[55%]" ref={rightColRef}>
          {projects.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-end px-8"
              style={{ minHeight: '100svh' }}
            >
              <div className="relative w-full max-w-full">
                <div className="absolute -inset-3 border border-moonstone/20 rounded-2xl" />
                <div className="relative z-10 w-full rounded-xl overflow-hidden shadow-2xl bg-zinc-900/20 backdrop-blur-3xl border border-white/5 flex items-center justify-center">
                  {item.image ? (
                    <img src={getImagePath(item.image) || ''} alt={item.name} className="w-full h-auto block" />
                  ) : (
                    <div className="w-full h-64 bg-neutral-900/50 flex flex-col items-center justify-center gap-2">
                      <Sparkles className="w-6 h-6 text-moonstone/40" />
                      <span className="text-white/40 text-[11px] tracking-widest uppercase">Screenshot Placeholder</span>
                    </div>
                  )}

                  {/* Desktop Hover Overlay */}
                  <div className="absolute inset-0 z-30 flex items-center justify-center gap-3 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-md transform translate-y-2 hover:translate-y-0 hover:bg-white hover:text-zinc-950 transition-all duration-300 shadow-xl"
                      >
                        <Github size={18} />
                        <span className="text-xs font-bold tracking-[0.2em] uppercase">View on GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE */}
      <div className="flex lg:hidden flex-col items-center w-full min-w-0 text-center">
        {/* Heading */}
        <div className="w-full pb-4 border-b border-white/10">
          <div className="flex items-center justify-between gap-3 min-w-0">
            <h2 className="text-lg sm:text-xl font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[#aaa] uppercase font-poppins truncate">
              FEATURED WORK
            </h2>
            <span className="text-[10px] sm:text-xs text-white/30 tracking-widest uppercase font-mono flex-shrink-0">
              / SHOWCASE
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col items-center gap-12 sm:gap-16 pt-10 sm:pt-12 w-full">
          {projects.map((item, index) => (
            <article key={item.id} className="flex flex-col items-center gap-5 sm:gap-6 min-w-0 w-full max-w-lg mx-auto">
              <div className="flex flex-col items-center gap-2">
                <div className="text-xs tracking-[0.2em] sm:tracking-[0.3em] text-white/40 font-mono">
                  [ 0{index + 1} / 0{projects.length} ]
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight uppercase leading-snug break-words">
                  {item.name}
                </h3>
                {item.tagline && (
                  <p className="text-xs font-mono text-moonstone uppercase tracking-wider">
                    {item.tagline}
                  </p>
                )}
              </div>

              {item.image && (
                <div className="relative w-full min-w-0 max-w-full mx-auto">
                  <div className="absolute -inset-1.5 sm:-inset-2 border border-moonstone/10 rounded-xl pointer-events-none" />
                  <div className="relative z-10 w-full rounded-lg overflow-hidden shadow-xl bg-zinc-900/20 backdrop-blur-3xl border border-white/5">
                    <img
                      src={getImagePath(item.image) || ''}
                      alt={item.name}
                      className="w-full h-auto max-w-full block object-contain"
                    />
                  </div>
                </div>
              )}

              <p className="text-sm sm:text-base text-white/70 leading-relaxed break-words">
                {item.description}
              </p>

              {item.keyHighlights && (
                <div className="flex flex-col items-center gap-1 text-xs text-white/80">
                  {item.keyHighlights.map((hl, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-moonstone" />
                      {hl}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap justify-center gap-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] tracking-widest text-white/50 border border-white/20 px-3 py-1.5 uppercase rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {item.github && (
                <div className="flex flex-wrap justify-center gap-3 pt-1">
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 min-h-11 px-6 rounded-full bg-white/10 border border-white/20 text-white/90 hover:text-white hover:bg-white/20 transition-colors duration-300"
                  >
                    <Github size={18} aria-hidden="true" />
                    <span className="text-xs font-bold tracking-[0.2em] uppercase">View on GitHub</span>
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
