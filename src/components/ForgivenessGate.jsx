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
    'Can I bribe you with Fuel Station cake? 🍰',
    'Pretty please with coffee on top? ☕',
    'Are you 1000% sure? 💔',
    'The "No" button is on strike! 😴',
    'Okay, you know you love me! 💕',
    'No is not an option anymore! 🥰',
  ];

  const handleYes = () => {
    setIsForgiven(true);

    // Heart Confetti Explosion
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#f43f5e', '#fda4af', '#f59e0b', '#fde68a', '#ec4899'],
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  const handleNoDodge = () => {
    setNoCount((prev) => prev + 1);

    // Generate random offset within safe container bounds
    const maxOffset = 130;
    const randomX = (Math.random() - 0.5) * maxOffset * 2;
    const randomY = (Math.random() - 0.5) * maxOffset;

    setNoPosition({ x: randomX, y: randomY });
  };

  return (
    <section id="forgiveness" style={{ padding: '4.5rem 0' }}>
      <div className="content-wrapper" style={{ maxWidth: '820px' }}>
        <div
          className="glass-panel"
          style={{
            padding: '3.5rem 2rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            border: isForgiven
              ? '2px solid rgba(244, 63, 94, 0.6)'
              : '1px solid var(--glass-border)',
            background: isForgiven
              ? 'radial-gradient(circle at center, rgba(244, 63, 94, 0.15) 0%, rgba(20, 15, 30, 0.9) 100%)'
              : 'var(--glass-bg)',
          }}
        >
          {!isForgiven ? (
            <div>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  margin: '0 auto 1.2rem auto',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #f43f5e, #fb7185)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 25px rgba(244, 63, 94, 0.4)',
                }}
              >
                <Heart size={32} color="#fff" className="animate-heartbeat" />
              </div>

              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                  marginBottom: '0.8rem',
                }}
              >
                Will You Forgive Me,{' '}
                <span className="gradient-text-rose">{names.herName}</span>?
              </h2>

              <p
                style={{
                  color: 'var(--color-text-muted)',
                  fontSize: '1.05rem',
                  maxWidth: '520px',
                  margin: '0 auto 2.5rem auto',
                }}
              >
                I promise to be better, to always listen, and to make you smile the same way you did on June 10th at Fuel Station Cafe.
              </p>

              {/* Action Buttons with dodging No button */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1.5rem',
                  minHeight: '80px',
                  position: 'relative',
                }}
              >
                <button
                  id="forgive-yes-btn"
                  onClick={handleYes}
                  className="btn-romantic-primary"
                  style={{
                    fontSize: '1.15rem',
                    padding: '0.95rem 2.4rem',
                    transform: `scale(${1 + Math.min(noCount * 0.08, 0.5)})`,
                    zIndex: 10,
                  }}
                >
                  <Heart size={20} fill="#fff" />
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
                    padding: '0.75rem 1.6rem',
                    borderRadius: '9999px',
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
                    transition: 'transform 0.25s ease-out, background 0.2s',
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
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 1.4rem auto',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 30px rgba(16, 185, 129, 0.4)',
                }}
              >
                <PartyPopper size={42} color="#fff" />
              </div>

              <div className="badge-pill" style={{ marginBottom: '1rem', background: 'rgba(16, 185, 129, 0.15)', borderColor: '#10b981', color: '#6ee7b7' }}>
                <CheckCircle size={14} />
                <span>Officially Forgiven & Cherished</span>
              </div>

              <h2
                style={{
                  fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
                  marginBottom: '1rem',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                Thank You For Your Beautiful Heart! ❤️
              </h2>

              <p
                style={{
                  color: 'var(--color-text-muted)',
                  fontSize: '1.15rem',
                  maxWidth: '560px',
                  margin: '0 auto 2rem auto',
                  lineHeight: 1.7,
                }}
              >
                You have no idea how much your forgiveness means to me. I promise to keep making you proud and loving you more with every single passing day.
              </p>

              {/* Reward Certificate */}
              <div
                className="glass-panel-subtle"
                style={{
                  maxWidth: '520px',
                  margin: '0 auto',
                  padding: '1.6rem',
                  border: '1px dashed rgba(245, 158, 11, 0.5)',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(245, 158, 11, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.2rem',
                  textAlign: 'left',
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: '#f59e0b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Coffee size={26} color="#fff" />
                </div>
                <div>
                  <div style={{ fontWeight: '700', color: '#fde68a', fontSize: '1.05rem', marginBottom: '0.2rem' }}>
                    Next Stop: Fuel Station Cafe! ☕
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                    Your favorite coffee & sweet dessert are officially on me. Date is locked!
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <button
                  onClick={handleYes}
                  className="btn-romantic-primary"
                  style={{ padding: '0.7rem 1.6rem', fontSize: '0.92rem' }}
                >
                  <Sparkles size={16} /> More Confetti!
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
