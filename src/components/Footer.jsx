import { motion } from 'framer-motion';
import { GitBranch, Globe, Code2, BookOpen, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const socials = [
  { icon: GitBranch, label: 'GitHub', href: personalInfo.social.github },
  { icon: Globe, label: 'LinkedIn', href: personalInfo.social.linkedin },
  { icon: Code2, label: 'LeetCode', href: personalInfo.social.leetcode },
  { icon: BookOpen, label: 'GFG', href: personalInfo.social.gfg },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      className="relative py-16 px-6"
      style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border)' }}
    >
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="font-mono text-xl font-black tracking-widest mb-2">
              <span className="text-accent">HARSHA</span>
              <span className="text-white">.M</span>
            </div>
            <p className="text-sm" style={{ color: '#555' }}>
              Computer Science Student • Developer • Learner
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                whileHover={{
                  scale: 1.1,
                  borderColor: 'var(--accent)',
                  background: 'rgba(0,212,255,0.08)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={16} style={{ color: 'var(--text-secondary)' }} />
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-medium transition-colors group"
            style={{ color: 'var(--text-secondary)' }}
            whileHover={{ scale: 1.05, color: 'var(--accent)' }}
          >
            Back to top
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>

        {/* Divider */}
        <div
          className="my-8 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, var(--border), transparent)' }}
        />

        {/* Copyright */}
        <p className="text-center text-xs font-mono" style={{ color: '#444' }}>
          © 2026 Harsha M — Built with React & ❤️
        </p>
      </div>
    </footer>
  );
}
