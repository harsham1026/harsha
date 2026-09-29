import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import HeroBackground from '../components/HeroBackground';

// Brand SVG logos
function GithubLogo({ size = 22, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinLogo({ size = 22, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function LeetcodeLogo({ size = 22, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16.102 17.93l-2.697 2.607c-.466.45-1.135.717-1.851.717-.716 0-1.385-.267-1.85-.717L3.486 14.3a2.684 2.684 0 010-3.791l6.218-6.242c.465-.45 1.134-.717 1.85-.717.716 0 1.385.267 1.852.717l2.697 2.607a.64.64 0 010 .902.63.63 0 01-.894 0L12.514 5.17a1.408 1.408 0 00-1.96 0L4.336 11.41a1.403 1.403 0 000 1.982l6.218 6.243c.54.542 1.42.542 1.96 0l2.696-2.606a.63.63 0 01.894 0 .64.64 0 010 .902z" />
      <path d="M10.842 12.01h9.61a.635.635 0 00.636-.636.635.635 0 00-.636-.636h-9.61a.635.635 0 00-.636.636c0 .35.285.636.636.636z" />
    </svg>
  );
}

function GfgLogo({ size = 22, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.8 14.5H8.7V7.5h4.5v1.6h-3V11h2.7v1.5h-2.7v4zm6.3 0h-1.5V7.5h4.5v1.6h-3V11h2.7v1.5h-2.7v4z" />
    </svg>
  );
}

const socialLinks = [
  { icon: GithubLogo, label: 'GitHub', href: personalInfo.social.github },
  { icon: LinkedinLogo, label: 'LinkedIn', href: personalInfo.social.linkedin },
  { icon: LeetcodeLogo, label: 'LeetCode', href: personalInfo.social.leetcode },
  { icon: GfgLogo, label: 'GeeksforGeeks', href: personalInfo.social.gfg },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } },
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden text-center"
      style={{
        background: 'var(--bg-primary)',
        minHeight: '88vh',
        paddingTop: 'calc(var(--nav-height) + 56px)',
        paddingBottom: '72px',
      }}
    >
      {/* Dynamic ambient canvas background */}
      <HeroBackground />

      {/* Soft background radial light glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10 rounded-full blur-3xl"
        style={{
          width: 'clamp(340px, 65vw, 800px)',
          height: 'clamp(260px, 50vw, 480px)',
          background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.08) 0%, rgba(0,212,255,0.015) 50%, transparent 75%)',
        }}
      />

      <div className="relative z-10 container-main w-full flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col items-center text-center"
          style={{ maxWidth: '860px' }}
        >
          {/* Greeting Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full"
            style={{ background: 'rgba(0, 212, 255, 0.06)', border: '1px solid rgba(0, 212, 255, 0.18)' }}
          >
            <span className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
            <span className="section-label" style={{ letterSpacing: '2px', fontSize: '11px' }}>HI THERE 👋</span>
          </motion.div>

          {/* Name Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-black mb-4 tracking-tight text-white"
            style={{
              fontSize: 'clamp(2.75rem, 7.5vw, 5.5rem)',
              lineHeight: 1.05,
              letterSpacing: '-2px',
            }}
          >
            I'm <span className="gradient-text">Harsha M</span>
          </motion.h1>

          {/* Professional Role */}
          <motion.p
            variants={itemVariants}
            className="font-mono text-xs sm:text-sm md:text-base mb-6 tracking-widest uppercase font-semibold"
            style={{ color: 'var(--accent)' }}
          >
            COMPUTER SCIENCE ENGINEERING STUDENT &amp; DEVELOPER
          </motion.p>

          {/* Short Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl leading-relaxed mb-9 text-center"
            style={{ color: 'var(--text-secondary)', maxWidth: '720px' }}
          >
            "I build software, solve problems, and turn ideas into useful products."
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto mb-8">
            <motion.button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary group w-full sm:w-auto justify-center"
              style={{
                height: '52px',
                padding: '0 32px',
                fontSize: '14px',
                borderRadius: '12px',
              }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              EXPLORE MY WORK
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.a
              href={personalInfo.resumeUrl}
              className="btn-outline w-full sm:w-auto justify-center"
              style={{
                height: '52px',
                padding: '0 30px',
                fontSize: '14px',
                borderRadius: '12px',
                background: '#0D0D0D',
                border: '1px solid #292929',
              }}
              whileHover={{ scale: 1.03, y: -2, borderColor: 'var(--accent)' }}
              whileTap={{ scale: 0.97 }}
            >
              <Download size={15} />
              DOWNLOAD RESUME
            </motion.a>
          </motion.div>

          {/* Social Icon Row */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <div key={label} className="relative group">
                <motion.a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center transition-all duration-300"
                  style={{
                    width: '50px',
                    height: '50px',
                    background: '#0D0D0D',
                    border: '1px solid #292929',
                    borderRadius: '14px',
                  }}
                  whileHover={{
                    scale: 1.08,
                    y: -4,
                    borderColor: 'var(--accent)',
                    boxShadow: '0 0 20px rgba(0, 212, 255, 0.25)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={22} className="text-[#A1A1AA] transition-colors duration-300 group-hover:text-[var(--accent)]" />
                </motion.a>

                {/* Tooltip */}
                <div
                  className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg z-20"
                  style={{ background: '#18181B', border: '1px solid #3F3F46' }}
                >
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none"
      >
        <span className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase">SCROLL</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-0.5 h-5 rounded-full"
          style={{ background: 'linear-gradient(to bottom, var(--accent), transparent)' }}
        />
      </motion.div>
    </section>
  );
}
