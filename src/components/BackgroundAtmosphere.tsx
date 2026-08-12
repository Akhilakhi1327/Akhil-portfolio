import React, { useEffect, useRef } from 'react';

const BackgroundAtmosphere: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes setup — match glow palette
    const numParticles = Math.min(Math.floor(width / 25), 65);
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      alpha: number;
      color: string;
    }> = [];

    // Particle colors match the posh monochrome palette
    const colors = ['#ffffff', '#a1a1aa', '#e4e4e7'];

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        alpha: Math.random() * 0.4 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw particle connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0) p1.x = width;
        if (p1.x > width) p1.x = 0;
        if (p1.y < 0) p1.y = height;
        if (p1.y > height) p1.y = 0;

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.globalAlpha = p1.alpha;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            // Connection lines use white/gray color
            ctx.strokeStyle = '#ffffff';
            ctx.globalAlpha = (1 - dist / 130) * 0.08;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030303]">
      {/* Aurora blurred blobs — Monochromatic sleek glow */}
      <div
        className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] rounded-full blur-[160px] animate-blob-1 pointer-events-none opacity-40"
        style={{ background: 'rgba(255, 255, 255, 0.04)' }}
      />
      <div
        className="absolute top-[20%] -right-[15%] w-[700px] h-[700px] rounded-full blur-[140px] animate-blob-2 pointer-events-none opacity-30"
        style={{ background: 'rgba(255, 255, 255, 0.03)' }}
      />
      <div
        className="absolute -bottom-[30%] left-[20%] w-[900px] h-[900px] rounded-full blur-[180px] animate-blob-3 pointer-events-none opacity-40"
        style={{ background: 'rgba(255, 255, 255, 0.05)' }}
      />

      {/* Subtle dot-grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none mask-image-radial-center"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }}
      />

      {/* Floating Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-30" />
    </div>
  );
};

export default BackgroundAtmosphere;
