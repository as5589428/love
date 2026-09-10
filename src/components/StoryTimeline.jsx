import React from 'react';
import { Sparkles, Coffee, Heart, CheckCircle2, MessageSquareQuote } from 'lucide-react';
import linkedinImg from '../assets/linkedin_story.jpg';
import cafeImg from '../assets/fuel_station_cafe.jpg';
import coupleImg from '../assets/couple_roses.jpg';

export default function StoryTimeline({ story }) {
  const images = {
    linkedin: linkedinImg,
    'fuel-station': cafeImg,
    journey: coupleImg,
  };

  return (
    <section id="story" style={{ padding: '3rem 0' }}>
      <div className="content-wrapper">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 2.5rem auto' }}>
          <div className="badge-pill" style={{ marginBottom: '0.8rem' }}>
            <Sparkles size={13} />
            <span>Our Journey</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', marginBottom: '0.6rem' }}>
            From LinkedIn to <span className="gradient-text-rose">Fuel Station Cafe</span>
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)' }}>
            The story of how two people met through a simple message and found true love on June 10th, 2026.
          </p>
        </div>

        {/* Timeline Stories */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {story.map((item, index) => {
            const isEven = index % 2 === 0;
            const imgSrc = images[item.id] || item.image;

            return (
              <div
                key={item.id}
                id={item.id === 'fuel-station' ? 'cafe-date' : undefined}
                className="glass-panel timeline-card"
                style={{
                  padding: 'clamp(1.2rem, 3.5vw, 2.5rem)',
                  display: 'grid',
                  gridTemplateColumns: isEven ? '1.1fr 0.9fr' : '0.9fr 1.1fr',
                  gap: 'clamp(1.5rem, 3vw, 2.5rem)',
                  alignItems: 'center',
                  border:
                    item.id === 'fuel-station'
                      ? '1px solid rgba(251, 191, 36, 0.45)'
                      : '1px solid var(--glass-border)',
                  background:
                    item.id === 'fuel-station'
                      ? 'rgba(28, 16, 36, 0.85)'
                      : 'var(--glass-bg)',
                  borderRadius: 'var(--radius-xl)',
                }}
              >
                {/* Content Side */}
                <div style={{ order: isEven ? 1 : 2 }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.8rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.6rem',
                        fontWeight: '800',
                        color: 'rgba(255, 77, 121, 0.55)',
                      }}
                    >
                      {item.stepNumber}
                    </span>
                    <span
                      className={item.id === 'fuel-station' ? 'badge-gold' : 'badge-pill'}
                      style={{ fontSize: '0.75rem' }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: 'clamp(1.3rem, 3.5vw, 1.9rem)',
                      marginBottom: '0.3rem',
                      color: item.id === 'fuel-station' ? '#fef08a' : '#ffffff',
                    }}
                  >
                    {item.title}
                  </h3>

                  <div
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--color-rose-light)',
                      marginBottom: '0.9rem',
                      fontWeight: '500',
                    }}
                  >
                    {item.subtitle}
                  </div>

                  <p
                    style={{
                      color: 'var(--color-text-muted)',
                      fontSize: 'clamp(0.88rem, 2.5vw, 0.98rem)',
                      lineHeight: 1.65,
                      marginBottom: '1.1rem',
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Romantic Quote Card */}
                  <div
                    style={{
                      padding: '0.8rem 1rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      borderLeft: item.id === 'fuel-station' ? '3px solid #fbbf24' : '3px solid #ff4d79',
                      borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                      marginBottom: '1.1rem',
                      fontStyle: 'italic',
                      color: 'var(--color-text-main)',
                      fontSize: 'clamp(0.85rem, 2vw, 0.92rem)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                    }}
                  >
                    <MessageSquareQuote size={18} color={item.id === 'fuel-station' ? '#fbbf24' : '#ff4d79'} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>"{item.quote}"</span>
                  </div>

                  {/* Key Highlights */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {item.details.map((detail, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: 'clamp(0.8rem, 2vw, 0.88rem)',
                          color: 'var(--color-text-muted)',
                        }}
                      >
                        <CheckCircle2 size={15} color="#fda4af" style={{ flexShrink: 0 }} />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Side */}
                <div
                  style={{
                    order: isEven ? 2 : 1,
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      borderRadius: 'var(--radius-lg)',
                      overflow: 'hidden',
                      position: 'relative',
                      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.65)',
                      border: '1px solid rgba(255, 255, 255, 0.16)',
                    }}
                  >
                    <img
                      src={imgSrc}
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: 'clamp(210px, 35vw, 320px)',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />

                    {/* Gradient Overlay */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(180deg, transparent 55%, rgba(10, 6, 18, 0.88) 100%)',
                        pointerEvents: 'none',
                      }}
                    />

                    {/* Floating Badge */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '0.75rem',
                        left: '0.75rem',
                        background: 'rgba(15, 9, 25, 0.88)',
                        backdropFilter: 'blur(10px)',
                        padding: '0.35rem 0.75rem',
                        borderRadius: '9999px',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        color: item.id === 'fuel-station' ? '#fef08a' : '#fda4af',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                      }}
                    >
                      {item.id === 'fuel-station' ? <Coffee size={13} /> : <Heart size={13} />}
                      <span>{item.badge}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .timeline-card {
            grid-template-columns: 1fr !important;
            gap: 1.4rem !important;
          }
          .timeline-card > div {
            order: initial !important;
          }
        }
      `}</style>
    </section>
  );
}
