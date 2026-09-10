import React from 'react';
import { Heart, Sparkles, Coffee } from 'lucide-react';

export default function MemoryPolaroids({ reasons, names }) {
  return (
    <section id="reasons" style={{ padding: '4.5rem 0' }}>
      <div className="content-wrapper">
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <Heart size={14} />
            <span>Why I Adore You</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '0.8rem' }}>
            Reasons Why My Heart Chose <span className="gradient-text-rose">{names.herName}</span>
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>
            A few of the million little things that make you the most precious part of my life.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >
          {reasons.map((reason, index) => (
            <div
              key={reason.number}
              className="glass-panel-interactive"
              style={{
                padding: '2.2rem 1.8rem',
                borderRadius: 'var(--radius-lg)',
                position: 'relative',
                transform: index % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)',
              }}
            >
              {/* Tape sticker decoration at top */}
              <div
                style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '20px',
                  background: 'rgba(253, 230, 138, 0.4)',
                  border: '1px dashed rgba(245, 158, 11, 0.4)',
                  borderRadius: '2px',
                  backdropFilter: 'blur(4px)',
                }}
              />

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1rem',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.8rem',
                    fontWeight: '800',
                    color: 'rgba(244, 63, 94, 0.35)',
                  }}
                >
                  {reason.number}
                </span>
                <Heart size={18} color="#fda4af" />
              </div>

              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', color: '#ffffff' }}>
                {reason.title}
              </h3>

              <p
                style={{
                  color: 'var(--color-text-muted)',
                  fontSize: '0.96rem',
                  lineHeight: 1.65,
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
