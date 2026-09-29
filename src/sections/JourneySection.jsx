import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Code2, Rocket } from 'lucide-react';
import { journey } from '../data/portfolioData';

const journeyIcons = [GraduationCap, Code2, Rocket];

export default function JourneySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="journey" className="section-spacing relative" style={{ background: 'var(--bg-primary)' }}>
      <div className="container-main">
        <div ref={ref}>
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center gap-3 mb-5"
          >
            <div className="h-px w-6" style={{ background: 'var(--accent)' }} />
            <span className="section-label">My Journey</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.05 }}
            className="font-display font-black mb-3"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.15, letterSpacing: '-1px' }}
          >
            Education & <span className="gradient-text">Growth.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="mb-12 text-[15px] max-w-md"
            style={{ color: 'var(--text-secondary)' }}
          >
            From first lines of code to building real software.
          </motion.p>

          {/* Timeline */}
          <div className="relative max-w-2xl">
            {/* Vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute left-5 top-0 bottom-0 w-px origin-top"
              style={{ background: 'linear-gradient(to bottom, var(--accent), rgba(0,212,255,0.15), transparent)' }}
            />

            <div className="space-y-6">
              {journey.map((item, i) => {
                const Icon = journeyIcons[i] || Rocket;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                    className="relative flex gap-5"
                  >
                    {/* Node */}
                    <div className="relative z-10 shrink-0">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{
                          background: 'var(--bg-card)',
                          border: '1px solid rgba(0,212,255,0.2)',
                        }}
                      >
                        <Icon size={16} style={{ color: 'var(--accent)' }} />
                      </div>
                    </div>

                    {/* Card */}
                    <div className="card p-5 flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
                        <h3 className="font-display font-bold text-[15px] text-white">{item.title}</h3>
                        <span
                          className="font-mono text-[10px] px-2.5 py-0.5 rounded-full shrink-0"
                          style={{ background: 'rgba(0,212,255,0.06)', color: 'var(--accent)', border: '1px solid rgba(0,212,255,0.12)' }}
                        >
                          {item.year}
                        </span>
                      </div>
                      <p className="text-xs font-medium mb-2" style={{ color: 'var(--accent)' }}>
                        {item.org}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
