import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Code2, Database, Wrench, Globe, Terminal, FileCode, Cpu, Layers } from 'lucide-react';
import { skills } from '../data/portfolioData';

const categoryColors = {
  Languages: '#00D4FF',
  Web: '#A855F7',
  Database: '#10B981',
  Tools: '#F59E0B',
};

const skillIconMap = {
  C: Cpu,
  'C++': Code2,
  Java: FileCode,
  Python: Terminal,
  HTML: Globe,
  CSS: Layers,
  JavaScript: Code2,
  MySQL: Database,
  MongoDB: Database,
  Git: Terminal,
  GitHub: Globe,
  'VS Code': Wrench,
};

const allSkills = Object.entries(skills).flatMap(([cat, items]) =>
  items.map(s => ({ ...s, category: cat }))
);

function SkillCard({ skill, index, inView }) {
  const catColor = categoryColors[skill.category];
  const Icon = skillIconMap[skill.name] || Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="card card-hover p-4 flex items-center gap-3.5 group"
      data-hover
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300"
        style={{
          background: `${catColor}0D`,
          border: `1px solid ${catColor}25`,
        }}
      >
        <Icon size={18} style={{ color: catColor }} />
      </div>
      <div>
        <div className="text-sm font-semibold text-white">{skill.name}</div>
        <div className="text-[10px] font-mono mt-0.5" style={{ color: catColor }}>{skill.category}</div>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...Object.keys(skills)];
  const filtered = activeCategory === 'All'
    ? allSkills
    : allSkills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="section-spacing relative" style={{ background: 'var(--bg-primary)' }}>
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="container-main relative" ref={ref}>
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-5"
        >
          <div className="h-px w-6" style={{ background: 'var(--accent)' }} />
          <span className="section-label">Tech Stack</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.05 }}
          className="font-display font-black mb-3"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.15, letterSpacing: '-1px' }}
        >
          Skills & <span className="gradient-text">Technologies</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="mb-10 text-[15px] max-w-lg"
          style={{ color: 'var(--text-secondary)' }}
        >
          A curated set of tools and technologies I use to learn, build, and experiment.
        </motion.p>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300"
              style={{
                background: activeCategory === cat ? 'var(--accent)' : 'var(--bg-card)',
                color: activeCategory === cat ? '#000' : 'var(--text-secondary)',
                border: `1px solid ${activeCategory === cat ? 'var(--accent)' : 'var(--border)'}`,
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skill grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
          {filtered.map((skill, i) => (
            <SkillCard key={`${skill.name}-${skill.category}`} skill={skill} index={i} inView={inView} />
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-5 mt-10 pt-8"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          {Object.entries(categoryColors).map(([cat, color]) => (
            <div key={cat} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: color }} />
              <span className="text-[11px] font-mono" style={{ color: 'var(--text-secondary)' }}>{cat}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
