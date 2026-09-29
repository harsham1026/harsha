import { useEffect, useRef, useMemo } from 'react';

export default function HeroBackground() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const particles = useRef([]);
  const time = useRef(0);

  const PARTICLE_COUNT = useMemo(() => {
    return window.innerWidth < 768 ? 15 : 35;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Init particles
    particles.current = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 1.2 + 0.2,
      vx: (Math.random() - 0.5) * 0.1,
      vy: (Math.random() - 0.5) * 0.1,
      opacity: Math.random() * 0.2 + 0.03,
      pulse: Math.random() * Math.PI * 2,
    }));

    const drawGrid = () => {
      const gridSize = 50;
      ctx.strokeStyle = 'rgba(0, 212, 255, 0.018)';
      ctx.lineWidth = 0.5;
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };

    const drawParticles = () => {
      particles.current.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.01;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const pulsedOpacity = p.opacity + Math.sin(p.pulse) * 0.05;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${Math.max(0, pulsedOpacity)})`;
        ctx.fill();
      });
    };

    const drawConnections = () => {
      const pts = particles.current;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            const opacity = (1 - dist / 100) * 0.035;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const drawRadialGlow = () => {
      const cx = width / 2;
      const cy = height * 0.42;
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.min(width, height) * 0.55);
      gradient.addColorStop(0, `rgba(0, 212, 255, 0.025)`);
      gradient.addColorStop(0.5, `rgba(0, 212, 255, 0.008)`);
      gradient.addColorStop(1, 'rgba(0, 212, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    };

    const drawScanLine = () => {
      const y = ((time.current * 0.3) % (height + 200)) - 100;
      const grad = ctx.createLinearGradient(0, y - 30, 0, y + 30);
      grad.addColorStop(0, 'rgba(0, 212, 255, 0)');
      grad.addColorStop(0.5, 'rgba(0, 212, 255, 0.008)');
      grad.addColorStop(1, 'rgba(0, 212, 255, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, y - 30, width, 60);
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      time.current += 1;
      drawGrid();
      drawRadialGlow();
      drawScanLine();
      drawParticles();
      drawConnections();
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [PARTICLE_COUNT]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
}
