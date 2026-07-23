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

    // Particle nodes setup
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

    const colors = ['#7C3AED', '#3B82F6', '#06B6D4'];

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.6,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.6 + 0.2,
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
            ctx.strokeStyle = '#7C3AED';
            ctx.globalAlpha = (1 - dist / 130) * 0.15;
            ctx.lineWidth = 0.6;
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
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Aurora blurred blobs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-[140px] animate-blob-1 pointer-events-none" />
      <div className="absolute top-[35%] -right-40 w-[550px] h-[550px] rounded-full bg-blue-600/20 blur-[150px] animate-blob-2 pointer-events-none" />
      <div className="absolute -bottom-40 left-[25%] w-[650px] h-[650px] rounded-full bg-cyan-500/15 blur-[160px] animate-blob-3 pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
          backgroundSize: '36px 36px'
        }}
      />

      {/* Floating Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
    </div>
  );
};

export default BackgroundAtmosphere;
