import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { currentFocus, learningTerminal } from '../data/portfolioData';

function TerminalSection({ inView }) {
  const [lines, setLines] = useState([]);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    if (!inView) return;
    let idx = 0;
    const timer = setInterval(() => {
      if (idx < learningTerminal.length) {
        setLines(prev => [...prev, learningTerminal[idx]]);
        idx++;
      } else {
        clearInterval(timer);
      }
    }, 600);
    return () => clearInterval(timer);
  }, [inView]);

  useEffect(() => {
    const blink = setInterval(() => setCursor(c => !c), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="rounded-2xl overflow-hidden"
      style={{
        background: 'rgba(5,5,5,0.9)',
        border: '1px solid rgba(0,212,255,0.15)',
        fontFamily: 'JetBrains Mono, monospace',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(0,212,255,0.05)',
      }}
    >
      {/* Terminal title bar */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.4)' }}
      >
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        <span className="ml-3 text-xs" style={{ color: 'var(--text-secondary)' }}>terminal</span>
      </div>

      <div className="p-6">
        {/* Prompt line */}
        <div className="flex items-center gap-2 mb-4">
          <span style={{ color: '#10B981' }}>harsha</span>
          <span style={{ color: 'var(--text-secondary)' }}>@portfolio</span>
          <span style={{ color: 'var(--text-secondary)' }}>:~$</span>
          <span style={{ color: '#fff' }}> learning</span>
        </div>

        <div className="space-y-2 mb-4">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2"
            >
              <span style={{ color: 'var(--accent)' }}>›</span>
              <span style={{ color: '#E2E8F0' }}>{line}</span>
              <span
                className="text-xs px-2 py-0.5 rounded ml-2"
                style={{ background: 'rgba(16,185,129,0.1)', color: '#10B981', border: '1px solid rgba(16,185,129,0.2)' }}
              >
                active
              </span>
            </motion.div>
          ))}
        </div>

        {/* Blinking cursor */}
        <div className="flex items-center gap-2">
          <span style={{ color: '#10B981' }}>harsha</span>
          <span style={{ color: 'var(--text-secondary)' }}>@portfolio</span>
          <span style={{ color: 'var(--text-secondary)' }}>:~$</span>
          <span
            className="inline-block w-2 h-4 ml-1"
            style={{ background: 'var(--accent)', opacity: cursor ? 0.8 : 0, transition: 'opacity 0.1s' }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function FocusSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-spacing relative" style={{ background: 'var(--bg-primary)' }}>
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="container-main relative" ref={ref}>
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px w-8" style={{ background: 'var(--accent)' }} />
          <span className="section-label">Right Now</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display font-black mb-4"
          style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', lineHeight: 1.1, letterSpacing: '-1.5px' }}
        >
          What I'm{' '}
          <span className="gradient-text">Building Next.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-16 text-lg max-w-lg"
          style={{ color: 'var(--text-secondary)' }}
        >
          Current learning path and focus areas — always expanding, always growing.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Focus cards */}
          <div className="grid grid-cols-2 gap-4">
            {currentFocus.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="card-hover rounded-2xl p-6 relative overflow-hidden"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                data-hover
              >
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent)' }}
                />
                <span
                  className="font-mono font-black text-4xl mb-3 block"
                  style={{ color: 'rgba(0,212,255,0.12)' }}
                >
                  {item.num}
                </span>
                <h3 className="font-display font-bold text-base text-white mb-2">{item.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Terminal */}
          <TerminalSection inView={inView} />
        </div>
      </div>
    </section>
  );
}
