import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, Trophy, Award, CheckCircle2, Users, Star } from 'lucide-react';
import { portfolioData, LeadershipItem } from '../data/portfolioData';

const Experience: React.FC = () => {
  const { leadership, awards } = portfolioData;
  const [activeTab, setActiveTab] = useState(leadership[0]?.id || 'lead-aws');

  const activeRole = leadership.find((item) => item.id === activeTab) || leadership[0];

  const revealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const renderLeadershipContent = (item: LeadershipItem) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-6 glass-card p-6 sm:p-8 rounded-2xl border border-white/10"
    >
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <h3 className="text-xl sm:text-2xl font-bold text-white font-poppins leading-snug break-words">
            {item.role}
          </h3>

          {item.isCurrent ? (
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Active Role
            </span>
          ) : (
            item.badge && (
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-moonstone">
                {item.badge}
              </span>
            )
          )}
        </div>

        <p className="text-sm font-semibold text-moonstone mb-3">
          {item.organization}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#aaa]">
          <span className="inline-flex items-center gap-1.5 text-moonstone">
            <Calendar className="w-3.5 h-3.5" />
            {item.period}
          </span>
          {item.location && (
            <span className="inline-flex items-center gap-1.5 text-white/60">
              <MapPin className="w-3.5 h-3.5" />
              {item.location}
            </span>
          )}
        </div>
      </div>

      <div className="h-px bg-white/10" />

      {item.description && (
        <div className="flex items-start gap-3 text-white/90 text-sm sm:text-base leading-relaxed">
          <CheckCircle2 className="w-4 h-4 text-moonstone mt-1 flex-shrink-0" />
          <span className="break-words">{item.description}</span>
        </div>
      )}
    </motion.div>
  );

  return (
    <section id="journey" className="py-12 sm:py-16 lg:py-24 max-w-6xl mx-auto px-0 lg:px-6 min-w-0">
      {/* Section Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="mb-10 sm:mb-12 lg:mb-16 border-b border-white/10 pb-4 flex items-center justify-between"
      >
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[#aaa] uppercase font-poppins">
          LEADERSHIP & VOLUNTEERING
        </h2>
        <span className="text-xs text-white/30 tracking-widest uppercase font-mono">
          / COMMUNITY
        </span>
      </motion.div>

      {/* Mobile Stacked View */}
      <div className="lg:hidden flex flex-col gap-4 mb-16">
        {leadership.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <div className="rounded-2xl border border-white/10 bg-moonstone-dim backdrop-blur-sm p-5 transition-all duration-300 hover:border-moonstone/30">
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-base font-bold text-white leading-snug break-words">
                  {item.role}
                </span>
                <span className="text-[11px] font-mono text-moonstone bg-white/5 border border-white/10 rounded-full px-2.5 py-0.5 whitespace-nowrap">
                  {item.period}
                </span>
              </div>

              <p className="text-sm font-semibold text-moonstone mb-2">
                {item.organization}
              </p>

              {item.description && (
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-3">
                  {item.description}
                </p>
              )}

              <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] font-mono text-[#aaa]">
                {item.location && <span>{item.location}</span>}
                {item.isCurrent && (
                  <span className="text-emerald-400 font-semibold">● Active Role</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop Tabbed View */}
      <div className="hidden lg:flex lg:gap-8 xl:gap-12 items-start mb-20">
        <div className="flex flex-col w-1/3 gap-3">
          {leadership.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`text-left px-6 py-4 rounded-xl border transition-all duration-300 group flex items-center justify-between ${
                activeTab === item.id
                  ? 'bg-moonstone text-zinc-950 font-bold border-moonstone shadow-[0_0_20px_rgba(224,231,255,0.25)]'
                  : 'bg-white/[0.02] border-white/10 text-white/80 hover:bg-white/[0.05] hover:border-moonstone/40'
              }`}
            >
              <div className="truncate">
                <div className="font-semibold text-sm truncate">{item.role}</div>
                <div className={`text-xs mt-0.5 font-mono truncate ${activeTab === item.id ? 'text-zinc-800' : 'text-[#aaa]'}`}>
                  {item.organization}
                </div>
              </div>

              {item.isCurrent && (
                <span className={`w-2 h-2 rounded-full shrink-0 ${activeTab === item.id ? 'bg-zinc-900' : 'bg-emerald-400 animate-pulse'}`} />
              )}
            </button>
          ))}
        </div>

        <div className="w-2/3 min-h-[220px]">
          <AnimatePresence mode="wait">
            {renderLeadershipContent(activeRole)}
          </AnimatePresence>
        </div>
      </div>

      {/* Awards & Hackathon Honors Subsection */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
      >
        <div className="flex items-center gap-2 mb-8 pt-6 border-t border-white/10">
          <Trophy className="w-5 h-5 text-moonstone" />
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide font-poppins">
            Awards & Hackathon Honors
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {awards.map((award, i) => (
            <div
              key={i}
              className="glass-card p-5 sm:p-6 rounded-2xl border border-white/10 hover:border-moonstone/40 transition-all duration-300 relative overflow-hidden group hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-moonstone/30 to-transparent group-hover:via-moonstone transition-all duration-500" />
              
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-moonstone-dim border border-moonstone-border/20 flex items-center justify-center text-moonstone group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
                <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${
                  award.placement.includes('3rd')
                    ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                    : 'bg-moonstone-dim text-moonstone border-moonstone-border/30'
                }`}>
                  {award.placement}
                </span>
              </div>

              <h4 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-moonstone transition-colors font-poppins">
                {award.title}
              </h4>
              <p className="text-xs sm:text-sm text-white/60">
                {award.institution}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
