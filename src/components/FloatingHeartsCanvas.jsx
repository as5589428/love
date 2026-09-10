import React, { useEffect, useRef } from 'react';

export default function FloatingHeartsCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle pool
    const particles = [];
    const heartCount = 38;

    const colors = [
      'rgba(244, 63, 94, ',   // rose
      'rgba(251, 113, 133, ', // light rose
      'rgba(245, 158, 11, ',  // amber gold
      'rgba(253, 230, 138, ', // champagne
      'rgba(219, 39, 119, ',  // pink
    ];

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * height : height + 20;
        this.size = Math.random() * 14 + 6;
        this.speedY = Math.random() * 0.8 + 0.3;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.colorBase = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.5 + 0.2;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.02;
        this.isHeart = Math.random() > 0.35; // 65% hearts, 35% glowing bokeh orbs
      }

      update() {
        this.y -= this.speedY;
        this.x += this.speedX + Math.sin(this.y * 0.01) * 0.3;
        this.rotation += this.rotSpeed;

        if (this.y < -30 || this.x < -30 || this.x > width + 30) {
          this.reset(false);
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        if (this.isHeart) {
          ctx.fillStyle = this.colorBase + this.alpha + ')';
          ctx.beginPath();
          const s = this.size * 0.08;
          ctx.moveTo(0, 0);
          ctx.bezierCurveTo(-5 * s, -10 * s, -15 * s, -5 * s, -15 * s, 5 * s);
          ctx.bezierCurveTo(-15 * s, 15 * s, 0, 25 * s, 0, 30 * s);
          ctx.bezierCurveTo(0, 25 * s, 15 * s, 15 * s, 15 * s, 5 * s);
          ctx.bezierCurveTo(15 * s, -5 * s, 5 * s, -10 * s, 0, 0);
          ctx.fill();
        } else {
          // Soft glowing stardust orb
          const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
          grad.addColorStop(0, this.colorBase + (this.alpha * 1.5) + ')');
          grad.addColorStop(1, this.colorBase + '0)');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(0, 0, this.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }
    }

    for (let i = 0; i < heartCount; i++) {
      particles.push(new Particle());
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas id="hearts-canvas" ref={canvasRef} aria-hidden="true" />;
}
