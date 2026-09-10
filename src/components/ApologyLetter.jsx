import React, { useState } from 'react';
import { Mail, Heart, Check, Sparkles, Edit3, ShieldCheck } from 'lucide-react';

export default function ApologyLetter({ apology, names, onUpdateApology }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [customParagraphs, setCustomParagraphs] = useState(
    apology.paragraphs.join('\n\n')
  );

  const handleSaveEdit = () => {
    const updated = customParagraphs
      .split('\n\n')
      .map((p) => p.trim())
      .filter(Boolean);
    if (onUpdateApology && updated.length > 0) {
      onUpdateApology(updated);
    }
    setIsEditing(false);
  };

  return (
    <section id="apology" style={{ padding: '3rem 0' }}>
      <div className="content-wrapper" style={{ maxWidth: '820px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div className="badge-pill" style={{ marginBottom: '0.8rem' }}>
            <Mail size={13} />
            <span>Straight From My Heart</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.9rem)', marginBottom: '0.5rem' }}>
            My Sincere Apology To <span className="gradient-text-rose">{names.herName}</span>
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: 'clamp(0.88rem, 2vw, 1rem)', maxWidth: '580px', margin: '0 auto' }}>
            Every word written here is honest, from the bottom of my heart, and meant forever.
          </p>
        </div>

        {/* Envelope & Letter Container */}
        <div style={{ position: 'relative' }}>
          {/* Fold/Unfold & Edit Action Toolbar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '0.8rem',
              padding: '0 0.2rem',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: 'var(--color-text-main)',
                padding: '0.4rem 0.85rem',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <Mail size={14} color="#fda4af" />
              <span>{isOpen ? 'Fold Into Envelope' : 'Open Letter 💌'}</span>
            </button>

            <button
              onClick={() => {
                if (isEditing) handleSaveEdit();
                else setIsEditing(true);
              }}
              style={{
                background: isEditing
                  ? 'linear-gradient(135deg, #10b981, #059669)'
                  : 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                padding: '0.4rem 0.85rem',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              {isEditing ? (
                <>
                  <Check size={13} /> <span>Save Words</span>
                </>
              ) : (
                <>
                  <Edit3 size={13} /> <span>Customize Letter</span>
                </>
              )}
            </button>
          </div>

          {/* Letter Surface */}
          <div
            style={{
              background: '#fffdf9',
              color: '#281e26',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(1.6rem, 4vw, 3.2rem) clamp(1.1rem, 3.5vw, 2.8rem)',
              boxShadow:
                '0 20px 50px -15px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(255, 77, 121, 0.25)',
              position: 'relative',
              overflow: 'hidden',
              display: isOpen ? 'block' : 'none',
            }}
          >
            {/* Wax Seal Stamp Mark */}
            <div
              style={{
                position: 'absolute',
                top: '1.2rem',
                right: '1.2rem',
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 35% 35%, #ff4d79, #9f1239)',
                boxShadow:
                  '0 4px 15px rgba(159, 18, 57, 0.45), inset 0 2px 4px rgba(255, 255, 255, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px dashed rgba(255, 255, 255, 0.25)',
              }}
              title="Sealed with Love"
            >
              <Heart size={20} fill="#fff" color="#fff" />
            </div>

            {/* Letter Date & Header */}
            <div
              style={{
                fontSize: '0.82rem',
                color: '#786875',
                letterSpacing: '0.03em',
                marginBottom: '1.2rem',
                fontFamily: 'var(--font-heading)',
                fontStyle: 'italic',
                paddingRight: '48px',
              }}
            >
              Dedicated to you • First Date on June 10th, 2026 at Fuel Station Cafe
            </div>

            {/* Salutation */}
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.4rem, 4vw, 2rem)',
                color: '#1a101b',
                marginBottom: '1.4rem',
                fontWeight: '700',
              }}
            >
              My Dearest {names.herName},
            </h3>

            {/* Editing mode or reading mode */}
            {isEditing ? (
              <div>
                <textarea
                  value={customParagraphs}
                  onChange={(e) => setCustomParagraphs(e.target.value)}
                  rows={8}
                  style={{
                    width: '100%',
                    padding: '0.9rem',
                    fontSize: '0.95rem',
                    fontFamily: 'var(--font-body)',
                    lineHeight: 1.65,
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid #ff4d79',
                    outline: 'none',
                    color: '#2a2228',
                    background: '#fff',
                    marginBottom: '0.8rem',
                  }}
                />
                <button
                  onClick={handleSaveEdit}
                  className="btn-romantic-primary"
                  style={{ padding: '0.55rem 1.2rem', fontSize: '0.85rem' }}
                >
                  Save My Words
                </button>
              </div>
            ) : (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.1rem',
                  fontSize: 'clamp(0.92rem, 2.5vw, 1.05rem)',
                  lineHeight: 1.75,
                  color: '#342633',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {apology.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            )}

            {/* My Promises Box */}
            <div
              style={{
                marginTop: '2rem',
                padding: '1.2rem',
                background: '#fff5f6',
                borderRadius: 'var(--radius-md)',
                border: '1px solid #fecdd3',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontWeight: '700',
                  color: '#9f1239',
                  marginBottom: '0.6rem',
                  fontSize: '0.95rem',
                }}
              >
                <ShieldCheck size={17} color="#ff4d79" />
                <span>My Unbreakable Promises To You:</span>
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  fontSize: '0.9rem',
                  color: '#4c0519',
                }}
              >
                {apology.promisePoints.map((point, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <span style={{ color: '#ff4d79', marginTop: '2px', flexShrink: 0 }}>❤️</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Signature & Closing */}
            <div
              style={{
                marginTop: '2rem',
                paddingTop: '1.2rem',
                borderTop: '1px solid #f3e8ee',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
              }}
            >
              <div style={{ color: '#685465', fontSize: '0.92rem' }}>{apology.closing}</div>
              <div
                className="font-script"
                style={{
                  fontSize: 'clamp(2rem, 6vw, 2.5rem)',
                  color: '#ff4d79',
                  fontWeight: '700',
                }}
              >
                {names.hisName}
              </div>
            </div>
          </div>

          {/* Envelope Closed State */}
          {!isOpen && (
            <div
              onClick={() => setIsOpen(true)}
              className="glass-panel-interactive"
              style={{
                padding: '3rem 1.5rem',
                textAlign: 'center',
                cursor: 'pointer',
                border: '2px dashed rgba(255, 77, 121, 0.45)',
                borderRadius: 'var(--radius-xl)',
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  margin: '0 auto 1rem auto',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #ff4d79, #be123c)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 25px rgba(255, 77, 121, 0.45)',
                }}
              >
                <Mail size={28} color="#fff" />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>
                Tap To Open My Apology Letter
              </h3>
              <p style={{ color: 'var(--color-rose-light)', fontSize: '0.9rem' }}>
                Sealed with all my love for {names.herName}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
