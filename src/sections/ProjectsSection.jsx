import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { GitBranch, ExternalLink, ArrowRight, X, Check, Cpu, Layers, Sparkles } from 'lucide-react';
import { projects } from '../data/portfolioData';

const projectIcons = [Cpu, Layers, Sparkles];

function ProjectCard({ project, index, onClick }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = projectIcons[index] || Cpu;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="card card-hover overflow-hidden cursor-none group flex flex-col"
      onClick={onClick}
      data-hover
    >
      {/* Preview area */}
      <div
        className="relative h-44 flex items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${project.accent}08, ${project.accent}03)` }}
      >
        {/* Top accent */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${project.accent}50, transparent)` }}
        />
        {/* Icon */}
        <div className="flex flex-col items-center gap-2.5">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{ background: `${project.accent}10`, border: `1px solid ${project.accent}20` }}
          >
            <Icon size={24} style={{ color: project.accent }} />
          </div>
          <span className="font-mono text-[10px] tracking-widest" style={{ color: project.accent }}>
            PROJECT {project.number}
          </span>
        </div>
        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'rgba(0,0,0,0.6)' }}
        >
          <span className="font-medium text-sm flex items-center gap-2" style={{ color: project.accent }}>
            View Details <ArrowRight size={14} />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display font-bold text-lg leading-snug mb-1.5 text-white">
          {project.title}
        </h3>
        <p className="text-xs font-medium mb-3" style={{ color: project.accent }}>
          {project.subtitle}
        </p>
        <p
          className="text-sm leading-relaxed mb-5 flex-1"
          style={{ color: 'var(--text-secondary)', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, 4).map(tag => (
            <span key={tag} className="tag-chip">{tag}</span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-white"
            style={{ color: 'var(--text-secondary)' }}
          >
            <GitBranch size={13} />
            GitHub
          </a>
          <span style={{ color: 'var(--border)' }}>|</span>
          <button
            className="flex items-center gap-1.5 text-xs font-medium group/arrow"
            style={{ color: project.accent }}
          >
            View Project
            <ArrowRight size={12} className="group-hover/arrow:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 24, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 24, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
        className="relative w-full rounded-2xl overflow-hidden"
        style={{
          background: 'var(--bg-card)',
          border: `1px solid ${project.accent}25`,
          maxWidth: '640px',
          maxHeight: '85vh',
          overflowY: 'auto',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="relative p-6 pb-5"
          style={{ background: `linear-gradient(135deg, ${project.accent}08, transparent)` }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${project.accent}80, transparent)` }}
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)' }}
          >
            <X size={14} style={{ color: 'var(--text-secondary)' }} />
          </button>
          <span className="font-mono text-[10px] tracking-widest mb-2 block" style={{ color: project.accent }}>
            PROJECT {project.number}
          </span>
          <h2 className="font-display font-bold text-xl md:text-2xl text-white mb-1.5 pr-10">
            {project.title}
          </h2>
          <p className="text-xs" style={{ color: project.accent }}>{project.subtitle}</p>
        </div>

        <div className="p-6 pt-2 space-y-6">
          {/* Overview */}
          <div>
            <h3 className="font-semibold text-[11px] tracking-widest uppercase mb-2" style={{ color: '#555' }}>Overview</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {project.longDescription}
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-[11px] tracking-widest uppercase mb-3" style={{ color: '#555' }}>Features</h3>
            <div className="space-y-2">
              {project.features.map((f, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div
                    className="w-4 h-4 rounded flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: `${project.accent}10`, border: `1px solid ${project.accent}20` }}
                  >
                    <Check size={9} style={{ color: project.accent }} />
                  </div>
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech */}
          <div>
            <h3 className="font-semibold text-[11px] tracking-widest uppercase mb-3" style={{ color: '#555' }}>Technologies</h3>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map(t => (
                <span key={t} className="tag-chip">{t}</span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs"
            >
              <GitBranch size={13} />
              View on GitHub
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs"
              >
                <ExternalLink size={13} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-spacing relative" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-main">
        <div ref={ref}>
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center gap-3 mb-5"
          >
            <div className="h-px w-6" style={{ background: 'var(--accent)' }} />
            <span className="section-label">Selected Work</span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 }}
              className="font-display font-black"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.15, letterSpacing: '-1px' }}
            >
              What I've <span className="gradient-text">Built.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-sm max-w-xs"
              style={{ color: 'var(--text-secondary)' }}
            >
              Real projects. Real problems. Real learning.
            </motion.p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
