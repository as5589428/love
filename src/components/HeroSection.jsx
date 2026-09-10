import React from 'react';
import { Heart, Sparkles, Coffee, Mail, ChevronDown } from 'lucide-react';

export default function HeroSection({ names, dates }) {
  return (
    <section
      style={{
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: '6rem',
        paddingBottom: '2.5rem',
        position: 'relative',
      }}
    >
      <div className="content-wrapper" style={{ maxWidth: '820px', width: '100%' }}>
        {/* Memory Pill Tag */}
        <div
          className="badge-pill animate-float"
          style={{
            marginBottom: '1.2rem',
            boxShadow: '0 4px 20px rgba(255, 77, 121, 0.3)',
          }}
        >
          <Sparkles size={13} color="#fda4af" />
          <span>June 10th, 2026 • LinkedIn to Fuel Station Cafe</span>
        </div>

        {/* Hero Title */}
        <h1
          style={{
            fontSize: 'clamp(2rem, 6.5vw, 3.8rem)',
            fontWeight: '800',
            lineHeight: 1.18,
            marginBottom: '1rem',
          }}
        >
          I'm So Sorry,{' '}
          <span className="gradient-text-rose">{names.herName}</span>.
          <br />
          <span
            style={{
              fontSize: 'clamp(1.4rem, 4.5vw, 2.8rem)',
              fontFamily: 'var(--font-heading)',
              fontStyle: 'italic',
              color: 'var(--color-champagne)',
              display: 'block',
              marginTop: '0.35rem',
            }}
          >
            You Mean The Entire World To Me.
          </span>
        </h1>

        {/* Narrative Subtitle */}
        <p
          style={{
            fontSize: 'clamp(0.92rem, 2.5vw, 1.15rem)',
            color: 'var(--color-text-muted)',
            maxWidth: '620px',
            margin: '0 auto 2rem auto',
            lineHeight: 1.65,
          }}
        >
          Ever since that unexpected connection on <strong style={{ color: '#fff' }}>LinkedIn</strong> and
          our first date at{' '}
          <strong style={{ color: '#fef08a' }}>Fuel Station Cafe on June 10th, 2026</strong>, you have been my
          greatest happiness, Ifra. This is Aman's heartfelt way of saying I am truly sorry,
          and my whole heart belongs to you.
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginBottom: '2.5rem',
            width: '100%',
          }}
        >
          <a href="#apology" className="btn-romantic-primary" style={{ padding: '0.75rem 1.4rem' }}>
            <Mail size={17} />
            <span>Open My Apology Letter</span>
          </a>

          <a href="#cafe-date" className="btn-romantic-secondary" style={{ padding: '0.75rem 1.4rem' }}>
            <Coffee size={17} color="#fbbf24" />
            <span>Our Fuel Station Memories</span>
          </a>
        </div>

        {/* Relationship Teaser Bar */}
        <div
          className="glass-panel"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.8rem',
            padding: '0.65rem 1.2rem',
            borderRadius: '9999px',
            border: '1px solid rgba(255, 77, 121, 0.3)',
            background: 'rgba(23, 14, 34, 0.75)',
            maxWidth: '100%',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ fontSize: '1rem' }}>💼</span>
            <span style={{ fontSize: '0.78rem', color: 'var(--color-text-dim)' }}>
              Met on LinkedIn
            </span>
          </div>

          <Heart
            size={16}
            fill="#ff4d79"
            color="#ff4d79"
            className="animate-heartbeat"
          />

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ fontSize: '1rem' }}>☕</span>
            <span style={{ fontSize: '0.78rem', color: 'var(--color-text-dim)' }}>
              1st Date: Fuel Station Cafe
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
