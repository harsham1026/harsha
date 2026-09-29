import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, User, Mail, MessageSquare, FileText, ArrowRight, GitBranch, Globe } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = e => setFormState(s => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
  };

  return (
    <section id="contact" className="section-spacing relative" style={{ background: 'var(--bg-secondary)' }}>
      {/* FINAL CTA BLOCK (Compact height: ~350-450px) */}
      <div className="container-main mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="rounded-3xl relative text-center py-16 px-8 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(0,212,255,0.05) 0%, rgba(13,13,13,0.9) 50%, rgba(0,212,255,0.03) 100%)',
            border: '1px solid rgba(0,212,255,0.18)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.6), 0 0 30px rgba(0,212,255,0.05)',
          }}
        >
          {/* Subtle top/bottom accent border glow */}
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--accent), transparent)' }} />
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.2), transparent)' }} />

          <span className="section-label mb-4 inline-block">Ready to connect?</span>
          
          <h2 className="font-display font-black mb-4 tracking-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: 1.1 }}>
            LET'S CREATE <span className="gradient-text">SOMETHING AMAZING.</span>
          </h2>
          
          <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            I'm open to interesting projects, collaborations, and opportunities.
          </p>

          <motion.button
            onClick={() => document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary inline-flex items-center gap-2 text-sm px-8 py-4"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            GET IN TOUCH
            <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </div>

      {/* BALANCED TWO-COLUMN CONTACT SECTION */}
      <div className="container-main" ref={ref} id="contact-form">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-12 gap-12 items-start"
        >
          {/* LEFT COLUMN: CONTACT DETAILS */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8" style={{ background: 'var(--accent)' }} />
                <span className="section-label">Contact</span>
              </div>

              <h2 className="font-display font-black mb-4" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: 1.1, letterSpacing: '-1px' }}>
                Have an idea?<br />
                <span className="gradient-text">Let's build it.</span>
              </h2>

              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Have a project idea, collaboration opportunity, or just want to connect? Send me a message.
              </p>
            </div>

            {/* DIRECT CONTACT INFO CARDS */}
            <div className="space-y-4 pt-2">
              {/* EMAIL */}
              <div
                className="p-5 rounded-2xl flex items-center gap-4 transition-all duration-300"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)' }}>
                  <Mail size={18} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <span className="block font-mono text-xs text-[#555] uppercase tracking-wider mb-0.5">Email</span>
                  <a
                    href={personalInfo.email !== 'harsha@example.com' ? `mailto:${personalInfo.email}` : '#'}
                    className="font-medium text-sm text-white hover:text-accent transition-colors"
                  >
                    {personalInfo.email !== 'harsha@example.com' ? personalInfo.email : '[ADD EMAIL]'}
                  </a>
                </div>
              </div>

              {/* GITHUB */}
              <div
                className="p-5 rounded-2xl flex items-center gap-4 transition-all duration-300"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <GitBranch size={18} style={{ color: 'var(--text-secondary)' }} />
                </div>
                <div>
                  <span className="block font-mono text-xs text-[#555] uppercase tracking-wider mb-0.5">GitHub</span>
                  <a
                    href={personalInfo.social.github !== '#' ? personalInfo.social.github : '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-sm text-white hover:text-accent transition-colors"
                  >
                    {personalInfo.social.github !== '#' ? personalInfo.social.github : '[ADD GITHUB URL]'}
                  </a>
                </div>
              </div>

              {/* LINKEDIN */}
              <div
                className="p-5 rounded-2xl flex items-center gap-4 transition-all duration-300"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)' }}>
                  <Globe size={18} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <span className="block font-mono text-xs text-[#555] uppercase tracking-wider mb-0.5">LinkedIn</span>
                  <a
                    href={personalInfo.social.linkedin !== '#' ? personalInfo.social.linkedin : '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-sm text-white hover:text-accent transition-colors"
                  >
                    {personalInfo.social.linkedin !== '#' ? personalInfo.social.linkedin : '[ADD LINKEDIN URL]'}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: PREMIUM CONTACT FORM CARD */}
          <div className="lg:col-span-7">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl p-12 text-center"
                style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.25)' }}
              >
                <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4" style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.4)' }}>
                  <Send size={24} style={{ color: '#10B981' }} />
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-2">Message Sent!</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Thank you for reaching out. I will get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-7 md:p-9 space-y-6"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '20px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono mb-2 uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                      YOUR NAME
                    </label>
                    <div className="relative">
                      <User size={15} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#555' }} />
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-300"
                        style={{
                          background: 'rgba(255,255,255,0.025)',
                          border: '1px solid var(--border)',
                          color: '#fff',
                        }}
                        onFocus={e => {
                          e.target.style.borderColor = 'var(--accent)';
                          e.target.style.boxShadow = '0 0 15px rgba(0,212,255,0.15)';
                        }}
                        onBlur={e => {
                          e.target.style.borderColor = 'var(--border)';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono mb-2 uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                      YOUR EMAIL
                    </label>
                    <div className="relative">
                      <Mail size={15} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#555' }} />
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-300"
                        style={{
                          background: 'rgba(255,255,255,0.025)',
                          border: '1px solid var(--border)',
                          color: '#fff',
                        }}
                        onFocus={e => {
                          e.target.style.borderColor = 'var(--accent)';
                          e.target.style.boxShadow = '0 0 15px rgba(0,212,255,0.15)';
                        }}
                        onBlur={e => {
                          e.target.style.borderColor = 'var(--border)';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono mb-2 uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                    SUBJECT
                  </label>
                  <div className="relative">
                    <FileText size={15} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#555' }} />
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      placeholder="What would you like to discuss?"
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-300"
                      style={{
                        background: 'rgba(255,255,255,0.025)',
                        border: '1px solid var(--border)',
                        color: '#fff',
                      }}
                      onFocus={e => {
                        e.target.style.borderColor = 'var(--accent)';
                        e.target.style.boxShadow = '0 0 15px rgba(0,212,255,0.15)';
                      }}
                      onBlur={e => {
                        e.target.style.borderColor = 'var(--border)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono mb-2 uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                    MESSAGE
                  </label>
                  <div className="relative">
                    <MessageSquare size={15} className="absolute left-4 top-4" style={{ color: '#555' }} />
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project or idea..."
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-300 resize-none"
                      style={{
                        background: 'rgba(255,255,255,0.025)',
                        border: '1px solid var(--border)',
                        color: '#fff',
                      }}
                      onFocus={e => {
                        e.target.style.borderColor = 'var(--accent)';
                        e.target.style.boxShadow = '0 0 15px rgba(0,212,255,0.15)';
                      }}
                      onBlur={e => {
                        e.target.style.borderColor = 'var(--border)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={sending}
                  className="btn-primary w-full flex items-center justify-center gap-3 py-4 text-sm font-semibold tracking-wide"
                  whileHover={{ scale: sending ? 1 : 1.015 }}
                  whileTap={{ scale: sending ? 1 : 0.985 }}
                >
                  {sending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      SEND MESSAGE
                      <Send size={15} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
