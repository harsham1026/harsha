import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Code2, BarChart3, Zap } from 'lucide-react';
import { aboutCards, stats } from '../data/portfolioData';

const cardIcons = [GraduationCap, Code2, BarChart3, Zap];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } },
};

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section-spacing relative" style={{ background: 'var(--bg-secondary)' }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.15), transparent)' }}
      />

      <div className="container-main">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section label */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-10">
            <div className="h-px w-6" style={{ background: 'var(--accent)' }} />
            <span className="section-label">About Me</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left — text + stats */}
            <div>
              <motion.h2
                variants={itemVariants}
                className="font-display font-black mb-5"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.15, letterSpacing: '-1px' }}
              >
                A little <span className="gradient-text">about me.</span>
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-[15px] md:text-base leading-relaxed mb-3"
                style={{ color: 'var(--text-secondary)' }}
              >
                I'm <span style={{ color: '#fff' }}>Harsha M</span>, a Computer Science Engineering student at{' '}
                <span style={{ color: '#fff' }}>PESITM, Shimoga</span>. I'm passionate about building software
                that solves real problems and creating data-driven insights.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-[15px] md:text-base leading-relaxed mb-8"
                style={{ color: 'var(--text-secondary)' }}
              >
                When I'm not coding, I'm exploring new technologies, working through algorithmic challenges,
                or building the next project.
              </motion.p>

              {/* Stats */}
              <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className="card rounded-xl p-4 text-center"
                  >
                    <div
                      className="font-display font-bold text-xl mb-0.5"
                      style={{ color: 'var(--accent)' }}
                    >
                      {s.value}
                    </div>
                    <div className="text-xs font-medium mb-0.5" style={{ color: '#fff' }}>
                      {s.label}
                    </div>
                    <div className="text-[10px] font-mono" style={{ color: '#555' }}>{s.sublabel}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — cards */}
            <motion.div variants={containerVariants} className="grid grid-cols-2 gap-3">
              {aboutCards.map((card, i) => {
                const Icon = cardIcons[i];
                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="card card-hover p-5"
                    data-hover
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                      style={{ background: 'rgba(0,212,255,0.06)', border: '1px solid rgba(0,212,255,0.12)' }}
                    >
                      <Icon size={18} style={{ color: 'var(--accent)' }} />
                    </div>
                    <h3 className="font-semibold text-white mb-1.5 text-sm">{card.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {card.desc}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
