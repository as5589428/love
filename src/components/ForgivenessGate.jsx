import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Coffee, PartyPopper, CheckCircle } from 'lucide-react';

export default function ForgivenessGate({ names }) {
  const [isForgiven, setIsForgiven] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const noPhrases = [
    'No 🥺',
    'Wait, really? 🥺',
    'Look at my puppy eyes 🐶',
    'Can I bribe you with cake? 🍰',
    'Fuel Station coffee on me? ☕',
    'Are you 1000% sure? 💔',
    'The "No" button is sleepy... 😴',
    'Okay, you know you love me! 💕',
    'No is not an option anymore! 🥰',
  ];

  const handleYes = () => {
    setIsForgiven(true);

    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#ff4d79', '#fda4af', '#fbbf24', '#fef08a', '#f43f5e'],
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  };

  const handleNoDodge = () => {
    setNoCount((prev) => prev + 1);

    // Dynamic safe offset tailored for mobile screens
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 500;
    const maxOffset = isMobile ? 35 : 110;
    const randomX = (Math.random() - 0.5) * maxOffset * 1.5;
    const randomY = (Math.random() - 0.5) * maxOffset;

    setNoPosition({ x: randomX, y: randomY });
  };

  return (
    <section id="forgiveness" style={{ padding: '3rem 0' }}>
      <div className="content-wrapper" style={{ maxWidth: '800px' }}>
        <div
          className="glass-panel"
          style={{
            padding: 'clamp(2rem, 5vw, 3.2rem) clamp(1.2rem, 3vw, 2rem)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            border: isForgiven
              ? '2px solid rgba(255, 77, 121, 0.65)'
              : '1px solid var(--glass-border)',
            background: isForgiven
              ? 'radial-gradient(circle at center, rgba(255, 77, 121, 0.2) 0%, rgba(18, 10, 28, 0.95) 100%)'
              : 'var(--glass-bg)',
          }}
        >
          {!isForgiven ? (
            <div>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  margin: '0 auto 1rem auto',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #ff4d79, #fb7185)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 25px rgba(255, 77, 121, 0.45)',
                }}
              >
                <Heart size={28} color="#fff" className="animate-heartbeat" />
              </div>

              <h2
                style={{
                  fontSize: 'clamp(1.6rem, 4vw, 2.6rem)',
                  marginBottom: '0.6rem',
                }}
              >
                Will You Forgive Me,{' '}
                <span className="gradient-text-rose">{names.herName}</span>?
              </h2>

              <p
                style={{
                  color: 'var(--color-text-muted)',
                  fontSize: 'clamp(0.88rem, 2.5vw, 1.02rem)',
                  maxWidth: '480px',
                  margin: '0 auto 2rem auto',
                }}
              >
                I promise to always listen, understand your heart, and make you smile the same way you did on June 10th at Fuel Station Cafe.
              </p>

              {/* Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem',
                  minHeight: '75px',
                  position: 'relative',
                  flexWrap: 'wrap',
                }}
              >
                <button
                  id="forgive-yes-btn"
                  onClick={handleYes}
                  className="btn-romantic-primary"
                  style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
                    padding: '0.85rem 2rem',
                    transform: `scale(${1 + Math.min(noCount * 0.06, 0.35)})`,
                    zIndex: 10,
                  }}
                >
                  <Heart size={18} fill="#fff" />
                  <span>Yes, I Forgive You ❤️</span>
                </button>

                <button
                  id="forgive-no-btn"
                  onMouseEnter={handleNoDodge}
                  onClick={handleNoDodge}
                  onTouchStart={handleNoDodge}
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: 'var(--color-text-muted)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    padding: '0.7rem 1.4rem',
                    borderRadius: '9999px',
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
                    transition: 'transform 0.22s ease-out, background 0.2s',
                    userSelect: 'none',
                  }}
                >
                  <span>{noPhrases[Math.min(noCount, noPhrases.length - 1)]}</span>
                </button>
              </div>
            </div>
          ) : (
            <div style={{ animation: 'pulseGlow 2s ease-out' }}>
              <div
                style={{
                  width: '70px',
                  height: '70px',
                  margin: '0 auto 1.2rem auto',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 30px rgba(16, 185, 129, 0.4)',
                }}
              >
                <PartyPopper size={36} color="#fff" />
              </div>

              <div className="badge-pill" style={{ marginBottom: '0.8rem', background: 'rgba(16, 185, 129, 0.18)', borderColor: '#10b981', color: '#6ee7b7' }}>
                <CheckCircle size={13} />
                <span>Officially Forgiven & Cherished</span>
              </div>

              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 4.5vw, 3rem)',
                  marginBottom: '0.8rem',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                Thank You, Ifra! ❤️
              </h2>

              <p
                style={{
                  color: 'var(--color-text-muted)',
                  fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
                  maxWidth: '520px',
                  margin: '0 auto 1.8rem auto',
                  lineHeight: 1.65,
                }}
              >
                Your forgiveness means everything to Aman. I promise to keep making you proud, smiling, and loving you more every single day.
              </p>

              {/* Reward Certificate */}
              <div
                className="glass-panel-subtle"
                style={{
                  maxWidth: '480px',
                  margin: '0 auto',
                  padding: '1.2rem',
                  border: '1px dashed rgba(251, 191, 36, 0.55)',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(251, 191, 36, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  textAlign: 'left',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    background: '#fbbf24',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Coffee size={22} color="#000" />
                </div>
                <div>
                  <div style={{ fontWeight: '700', color: '#fef08a', fontSize: '0.98rem', marginBottom: '0.2rem' }}>
                    Next Stop: Fuel Station Cafe! ☕
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                    Your favorite coffee & sweet dessert are on Aman. Date is locked!
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '1.6rem' }}>
                <button
                  onClick={handleYes}
                  className="btn-romantic-primary"
                  style={{ padding: '0.65rem 1.4rem', fontSize: '0.88rem' }}
                >
                  <Sparkles size={15} /> More Confetti!
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
