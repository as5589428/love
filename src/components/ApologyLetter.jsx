import React, { useState } from 'react';
import { Mail, Heart, Check, Sparkles, Edit3, ShieldCheck } from 'lucide-react';

export default function ApologyLetter({ apology, names, onUpdateApology }) {
  const [isOpen, setIsOpen] = useState(true); // default open so she can immediately read it, but can fold/unfold
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
    <section id="apology" style={{ padding: '4.5rem 0' }}>
      <div className="content-wrapper" style={{ maxWidth: '850px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <Mail size={14} />
            <span>Straight From My Heart</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '0.8rem' }}>
            My Sincere Apology To <span className="gradient-text-rose">{names.herName}</span>
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
            Words can never fully undo a mistake, but I promise that every single word here is true, honest, and forever.
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
              marginBottom: '1rem',
              padding: '0 0.5rem',
            }}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: 'var(--color-text-main)',
                padding: '0.45rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                transition: 'var(--transition-smooth)',
              }}
            >
              <Mail size={15} color="#fda4af" />
              <span>{isOpen ? 'Fold Letter Back Into Envelope' : 'Open Envelope 💌'}</span>
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
                padding: '0.45rem 0.95rem',
                borderRadius: '9999px',
                fontSize: '0.82rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              {isEditing ? (
                <>
                  <Check size={14} /> <span>Save Words</span>
                </>
              ) : (
                <>
                  <Edit3 size={14} /> <span>Customize Letter</span>
                </>
              )}
            </button>
          </div>

          {/* Letter Surface */}
          <div
            style={{
              background: '#fffdf9',
              color: '#2a2228',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(2rem, 5vw, 3.8rem)',
              boxShadow:
                '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(244, 63, 94, 0.2)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              display: isOpen ? 'block' : 'none',
            }}
          >
            {/* Wax Seal Stamp Mark in top right */}
            <div
              style={{
                position: 'absolute',
                top: '1.8rem',
                right: '1.8rem',
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 35% 35%, #e11d48, #881337)',
                boxShadow:
                  '0 4px 15px rgba(136, 19, 55, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px dashed rgba(255, 255, 255, 0.25)',
              }}
              title="Sealed with Love"
            >
              <Heart size={24} fill="#fff" color="#fff" />
            </div>

            {/* Letter Date & Header */}
            <div
              style={{
                fontSize: '0.88rem',
                color: '#786875',
                letterSpacing: '0.04em',
                marginBottom: '1.5rem',
                fontFamily: 'var(--font-heading)',
                fontStyle: 'italic',
              }}
            >
              Dedicated to you • Since June 10th at Fuel Station Cafe
            </div>

            {/* Salutation */}
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                color: '#1a101b',
                marginBottom: '1.8rem',
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
                  rows={10}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    fontSize: '1.05rem',
                    fontFamily: 'var(--font-body)',
                    lineHeight: 1.7,
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid #f43f5e',
                    outline: 'none',
                    color: '#2a2228',
                    background: '#fff',
                    marginBottom: '1rem',
                  }}
                />
                <button
                  onClick={handleSaveEdit}
                  className="btn-romantic-primary"
                  style={{ padding: '0.6rem 1.4rem', fontSize: '0.9rem' }}
                >
                  Save My Words
                </button>
              </div>
            ) : (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.3rem',
                  fontSize: 'clamp(1.02rem, 1.8vw, 1.15rem)',
                  lineHeight: 1.8,
                  color: '#3a2d39',
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
                marginTop: '2.5rem',
                padding: '1.6rem',
                background: '#fdf4f5',
                borderRadius: 'var(--radius-md)',
                border: '1px solid #fecdd3',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontWeight: '700',
                  color: '#9f1239',
                  marginBottom: '0.8rem',
                  fontSize: '1rem',
                }}
              >
                <ShieldCheck size={18} color="#e11d48" />
                <span>My Unbreakable Promises To You:</span>
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                  fontSize: '0.96rem',
                  color: '#4c0519',
                }}
              >
                {apology.promisePoints.map((point, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <span style={{ color: '#e11d48', marginTop: '3px' }}>❤️</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Signature & Closing */}
            <div
              style={{
                marginTop: '2.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid #f3e8ee',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem',
              }}
            >
              <div style={{ color: '#685465', fontSize: '0.98rem' }}>{apology.closing}</div>
              <div
                className="font-script"
                style={{
                  fontSize: '2.4rem',
                  color: '#e11d48',
                  fontWeight: '700',
                }}
              >
                {names.hisName}
              </div>
            </div>
          </div>

          {/* Envelope Closed State Preview */}
          {!isOpen && (
            <div
              onClick={() => setIsOpen(true)}
              className="glass-panel-interactive"
              style={{
                padding: '4rem 2rem',
                textAlign: 'center',
                cursor: 'pointer',
                border: '2px dashed rgba(244, 63, 94, 0.4)',
                borderRadius: 'var(--radius-xl)',
              }}
            >
              <div
                style={{
                  width: '70px',
                  height: '70px',
                  margin: '0 auto 1.2rem auto',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #f43f5e, #be123c)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 25px rgba(244, 63, 94, 0.5)',
                }}
              >
                <Mail size={32} color="#fff" />
              </div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>
                Tap To Open My Apology Letter
              </h3>
              <p style={{ color: 'var(--color-rose-light)', fontSize: '0.95rem' }}>
                Sealed with all my love for {names.herName}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
