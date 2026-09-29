import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Plus, Award, ShieldCheck } from 'lucide-react';
import { achievements, certifications } from '../data/portfolioData';

function AchievementCard({ item, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card card-hover p-6 relative overflow-hidden"
      data-hover
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent)' }}
      />
      <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center" style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)' }}>
        <Award size={18} style={{ color: 'var(--accent)' }} />
      </div>
      <h3 className="font-semibold text-white text-base mb-1">{item.title}</h3>
      <p className="text-xs font-mono mb-2" style={{ color: 'var(--accent)' }}>{item.org}</p>
      <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
      <span className="font-mono text-[11px]" style={{ color: '#555' }}>{item.date}</span>
    </motion.div>
  );
}

function CertCard({ cert, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
      className="card cert-card p-6 relative overflow-hidden shrink-0"
      style={{ width: '260px' }}
      data-hover
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${cert.color || 'var(--accent)'}, transparent)` }}
      />
      <div className="w-9 h-9 rounded-lg mb-3 flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.05)' }}>
        <ShieldCheck size={16} style={{ color: cert.color || 'var(--accent)' }} />
      </div>
      <h3 className="font-semibold text-white text-sm mb-1 leading-tight">{cert.title}</h3>
      <p className="text-xs mb-3" style={{ color: cert.color || 'var(--text-secondary)' }}>{cert.org}</p>
      <div className="flex items-center justify-between border-t pt-3" style={{ borderColor: 'var(--border)' }}>
        <span className="font-mono text-xs" style={{ color: '#555' }}>{cert.year}</span>
        <span className="font-mono text-xs hover:underline cursor-pointer" style={{ color: cert.color || 'var(--accent)' }}>View Certificate →</span>
      </div>
    </motion.div>
  );
}

export default function AchievementsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="achievements" className="section-spacing relative" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-main" ref={ref}>
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px w-6" style={{ background: 'var(--accent)' }} />
          <span className="section-label">Recognition</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.05 }}
          className="font-display font-black mb-10"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.15, letterSpacing: '-1px' }}
        >
          Achievements & <span className="gradient-text">Certifications.</span>
        </motion.h2>

        {/* Real Achievements or Placeholder Card */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {achievements.length > 0 ? (
            achievements.map((item, i) => (
              <AchievementCard key={i} item={item} index={i} inView={inView} />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="card p-6 flex flex-col items-center justify-center text-center min-h-[160px]"
              style={{ borderStyle: 'dashed', borderColor: 'rgba(255,255,255,0.12)' }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3" style={{ background: 'rgba(255,255,255,0.04)' }}>
                <Plus size={18} style={{ color: 'var(--text-secondary)' }} />
              </div>
              <p className="font-mono text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--text-secondary)' }}>
                [ADD ACHIEVEMENT]
              </p>
              <p className="text-xs" style={{ color: '#555' }}>Achievements will be listed here</p>
            </motion.div>
          )}
        </div>

        {/* Real Certifications or Placeholder Grid */}
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="font-display font-bold text-xl mb-6 text-white"
        >
          Certifications
        </motion.h3>

        {certifications.length > 0 ? (
          <div className="flex gap-4 overflow-x-auto pb-4 scroll-hide">
            {certifications.map((cert, i) => (
              <CertCard key={i} cert={cert} index={i} inView={inView} />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="card p-6 flex flex-col items-center justify-center text-center min-h-[160px]"
              style={{ borderStyle: 'dashed', borderColor: 'rgba(255,255,255,0.12)' }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3" style={{ background: 'rgba(255,255,255,0.04)' }}>
                <ShieldCheck size={18} style={{ color: 'var(--text-secondary)' }} />
              </div>
              <p className="font-mono text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--text-secondary)' }}>
                [ADD CERTIFICATE]
              </p>
              <p className="text-xs" style={{ color: '#555' }}>Verified certifications will be listed here</p>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
