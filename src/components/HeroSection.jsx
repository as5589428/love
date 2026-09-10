import React from 'react';
import { Heart, Sparkles, Coffee, Mail, ChevronDown } from 'lucide-react';

export default function HeroSection({ names, dates }) {
  return (
    <section
      style={{
        minHeight: '92vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: '7rem',
        paddingBottom: '3rem',
        position: 'relative',
      }}
    >
      <div className="content-wrapper" style={{ maxWidth: '880px' }}>
        {/* Memory Pill Tag */}
        <div
          className="badge-pill animate-float"
          style={{
            marginBottom: '1.8rem',
            boxShadow: '0 4px 20px rgba(244, 63, 94, 0.25)',
          }}
        >
          <Sparkles size={14} color="#fda4af" />
          <span>June 10th • LinkedIn to Fuel Station Cafe</span>
        </div>

        {/* Hero Title */}
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 4.4rem)',
            fontWeight: '800',
            lineHeight: 1.12,
            marginBottom: '1.4rem',
          }}
        >
          I'm So Sorry,{' '}
          <span className="gradient-text-rose">{names.herName}</span>.
          <br />
          <span
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
              fontFamily: 'var(--font-heading)',
              fontStyle: 'italic',
              color: 'var(--color-champagne)',
              display: 'block',
              marginTop: '0.4rem',
            }}
          >
            You Mean The Entire World To Me.
          </span>
        </h1>

        {/* Narrative Subtitle */}
        <p
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'var(--color-text-muted)',
            maxWidth: '680px',
            margin: '0 auto 2.5rem auto',
            lineHeight: 1.7,
            fontWeight: '400',
          }}
        >
          Ever since that unexpected connection on <strong style={{ color: '#fff' }}>LinkedIn</strong> and
          the unforgettable first date we shared at{' '}
          <strong style={{ color: '#fde68a' }}>Fuel Station Cafe on June 10th</strong>, you have been my
          greatest happiness. This little corner of the internet is my way of saying I made a mistake,
          and my heart belongs solely to you.
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '3.5rem',
          }}
        >
          <a href="#apology" className="btn-romantic-primary">
            <Mail size={18} />
            <span>Open My Apology Letter</span>
          </a>

          <a href="#cafe-date" className="btn-romantic-secondary">
            <Coffee size={18} color="#f59e0b" />
            <span>Our Fuel Station Memories</span>
          </a>
        </div>

        {/* Relationship Teaser Bar */}
        <div
          className="glass-panel"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1.5rem',
            padding: '0.9rem 2rem',
            borderRadius: '9999px',
            border: '1px solid rgba(244, 63, 94, 0.25)',
            background: 'rgba(26, 20, 38, 0.7)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.2rem' }}>💼</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-text-dim)' }}>
              Connected on LinkedIn
            </span>
          </div>

          <Heart
            size={18}
            fill="#f43f5e"
            color="#f43f5e"
            className="animate-heartbeat"
          />

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.2rem' }}>☕</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-text-dim)' }}>
              1st Date: Fuel Station Cafe
            </span>
          </div>
        </div>
      </div>

      {/* Down Chevron Indicator */}
      <a
        href="#counter"
        style={{
          position: 'absolute',
          bottom: '1.5rem',
          color: 'var(--color-text-dim)',
          textDecoration: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.2rem',
          fontSize: '0.75rem',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          transition: 'var(--transition-smooth)',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#fda4af')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-dim)')}
      >
        <span>Our Milestone</span>
        <ChevronDown size={18} className="animate-float" />
      </a>
    </section>
  );
}
