import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Clock, MapPin, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact: React.FC = () => {
  const { socials } = portfolioData;

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 max-w-6xl mx-auto px-0 lg:px-6 min-w-0">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
        }}
        className="mb-10 sm:mb-12 lg:mb-16 border-b border-white/10 pb-4 flex items-center justify-between"
      >
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[#aaa] uppercase font-poppins">
          GET IN TOUCH
        </h2>
        <span className="text-xs text-white/30 tracking-widest uppercase font-mono">
          / CONNECT
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        viewport={{ once: true }}
        className="text-center min-w-0"
      >
        <p className="text-[#aaa] uppercase tracking-[0.25em] sm:tracking-[0.4em] mb-6 sm:mb-8 font-bold text-xs px-2">
          HAVE A PROJECT, OPPORTUNITY, OR IDEA?
        </p>

        <a 
          href={`mailto:${socials.email}`} 
          className="group inline-block relative max-w-full"
        >
          <div className="overflow-hidden py-3 sm:py-4 px-1">
            <p className="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-none transition-all duration-700 group-hover:text-moonstone select-none break-words font-poppins">
              {"LET'S TALK".split('').map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1.2, 
                    delay: i * 0.04, 
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  className="inline-block group-hover:-translate-y-2 transition-transform duration-500 ease-out"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </p>
          </div>
          <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-transparent via-moonstone to-transparent transition-all duration-1000 mx-auto mt-4 opacity-50 group-hover:opacity-100 shadow-[0_0_20px_rgba(224,231,255,0.6)]" />
        </a>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-6 mt-8 sm:mt-12 max-w-md sm:max-w-none mx-auto">
          <a
            href={`mailto:${socials.email}`}
            className="w-full sm:w-auto btn-shine flex items-center justify-center gap-3 min-h-11 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl border border-moonstone text-zinc-950 font-bold text-base sm:text-lg bg-moonstone hover:bg-white transition-all duration-300 shadow-[0_0_25px_rgba(224,231,255,0.3)]"
          >
            <Send className="w-5 h-5 text-zinc-950" />
            Send an Email
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto btn-shine flex items-center justify-center gap-3 min-h-11 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl border border-white/20 bg-white/5 hover:bg-white hover:text-zinc-950 transition-all duration-300 text-white font-bold text-base sm:text-lg"
          >
            <Linkedin className="w-5 h-5" />
            Connect on LinkedIn
          </a>
          {socials.github && (
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto btn-shine flex items-center justify-center gap-3 min-h-11 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl border border-white/20 bg-white/5 hover:bg-white hover:text-zinc-950 transition-all duration-300 text-white font-bold text-base sm:text-lg"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          )}
        </div>

        {/* Quick Contact & Availability Metadata Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto mt-12 pt-8 border-t border-white/10 text-left">
          <div className="glass-card p-4 rounded-xl border border-white/10 flex items-center gap-3">
            <Mail className="w-5 h-5 text-moonstone shrink-0" />
            <div className="truncate">
              <span className="text-[10px] font-mono uppercase text-[#aaa] block">Direct Email</span>
              <a href={`mailto:${socials.email}`} className="text-xs sm:text-sm text-white font-mono hover:text-moonstone transition-colors truncate block">
                {socials.email}
              </a>
            </div>
          </div>

          <div className="glass-card p-4 rounded-xl border border-white/10 flex items-center gap-3">
            <Clock className="w-5 h-5 text-moonstone shrink-0" />
            <div>
              <span className="text-[10px] font-mono uppercase text-[#aaa] block">Response Time</span>
              <span className="text-xs sm:text-sm text-white font-mono block">Within 24 Hours</span>
            </div>
          </div>

          {socials.location && (
            <div className="glass-card p-4 rounded-xl border border-white/10 flex items-center gap-3 sm:col-span-2 md:col-span-1">
              <MapPin className="w-5 h-5 text-moonstone shrink-0" />
              <div>
                <span className="text-[10px] font-mono uppercase text-[#aaa] block">Location</span>
                <span className="text-xs sm:text-sm text-white font-mono block">{socials.location}</span>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
