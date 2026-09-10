import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function MemoryPolaroids({ reasons, names }) {
  return (
    <section id="reasons" style={{ padding: '3rem 0' }}>
      <div className="content-wrapper">
        <div style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto 2.5rem auto' }}>
          <div className="badge-pill" style={{ marginBottom: '0.8rem' }}>
            <Heart size={13} />
            <span>Why I Adore You</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', marginBottom: '0.6rem' }}>
            Reasons Why Aman's Heart Chose <span className="gradient-text-rose">{names.herName}</span>
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: 'clamp(0.88rem, 2vw, 1rem)' }}>
            A few of the countless little reasons you are the most precious person in my life.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.4rem',
          }}
        >
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="glass-panel-interactive"
              style={{
                padding: 'clamp(1.5rem, 3vw, 2rem) clamp(1.1rem, 2.5vw, 1.5rem)',
                borderRadius: 'var(--radius-lg)',
                position: 'relative',
              }}
            >
              {/* Tape sticker decoration */}
              <div
                style={{
                  position: 'absolute',
                  top: '-8px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '70px',
                  height: '16px',
                  background: 'rgba(251, 191, 36, 0.35)',
                  border: '1px dashed rgba(251, 191, 36, 0.5)',
                  borderRadius: '2px',
                  backdropFilter: 'blur(4px)',
                }}
              />

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.8rem',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: '800',
                    color: 'rgba(255, 77, 121, 0.4)',
                  }}
                >
                  {reason.number}
                </span>
                <Heart size={16} color="#fda4af" />
              </div>

              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.4rem', color: '#ffffff' }}>
                {reason.title}
              </h3>

              <p
                style={{
                  color: 'var(--color-text-muted)',
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                }}
              >
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
