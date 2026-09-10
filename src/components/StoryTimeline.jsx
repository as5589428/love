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
    <section id="story" style={{ padding: '4.5rem 0' }}>
      <div className="content-wrapper">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <Sparkles size={14} />
            <span>Our Journey</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '0.8rem' }}>
            How A Connection Request <span className="gradient-text-rose">Changed Everything</span>
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>
            From talking on LinkedIn to sitting across from each other at Fuel Station Cafe on June 10th — here is the story of us.
          </p>
        </div>

        {/* Timeline Stories */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {story.map((item, index) => {
            const isEven = index % 2 === 0;
            const imgSrc = images[item.id] || item.image;

            return (
              <div
                key={item.id}
                id={item.id === 'fuel-station' ? 'cafe-date' : undefined}
                className="glass-panel"
                style={{
                  padding: '2.5rem',
                  display: 'grid',
                  gridTemplateColumns: isEven ? '1.1fr 0.9fr' : '0.9fr 1.1fr',
                  gap: '2.5rem',
                  alignItems: 'center',
                  border:
                    item.id === 'fuel-station'
                      ? '1px solid rgba(245, 158, 11, 0.4)'
                      : '1px solid var(--glass-border)',
                  background:
                    item.id === 'fuel-station'
                      ? 'rgba(30, 20, 35, 0.8)'
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
                      gap: '0.6rem',
                      marginBottom: '1rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.8rem',
                        fontWeight: '800',
                        color: 'rgba(244, 63, 94, 0.5)',
                      }}
                    >
                      {item.stepNumber}
                    </span>
                    <span
                      className={item.id === 'fuel-station' ? 'badge-gold' : 'badge-pill'}
                      style={{ fontSize: '0.78rem' }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)',
                      marginBottom: '0.4rem',
                      color: item.id === 'fuel-station' ? '#fef3c7' : '#ffffff',
                    }}
                  >
                    {item.title}
                  </h3>

                  <div
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--color-rose-light)',
                      marginBottom: '1.2rem',
                      fontWeight: '500',
                    }}
                  >
                    {item.subtitle}
                  </div>

                  <p
                    style={{
                      color: 'var(--color-text-muted)',
                      fontSize: '1rem',
                      lineHeight: 1.7,
                      marginBottom: '1.4rem',
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Romantic Quote Card */}
                  <div
                    style={{
                      padding: '1rem 1.2rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      borderLeft: item.id === 'fuel-station' ? '3px solid #f59e0b' : '3px solid #f43f5e',
                      borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                      marginBottom: '1.4rem',
                      fontStyle: 'italic',
                      color: 'var(--color-text-main)',
                      fontSize: '0.95rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.6rem',
                    }}
                  >
                    <MessageSquareQuote size={20} color={item.id === 'fuel-station' ? '#f59e0b' : '#f43f5e'} />
                    <span>"{item.quote}"</span>
                  </div>

                  {/* Key Highlights */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {item.details.map((detail, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '0.88rem',
                          color: 'var(--color-text-muted)',
                        }}
                      >
                        <CheckCircle2 size={16} color="#fda4af" />
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
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                    }}
                  >
                    <img
                      src={imgSrc}
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '340px',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />

                    {/* Gradient Overlay */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(180deg, transparent 60%, rgba(13, 10, 20, 0.85) 100%)',
                        pointerEvents: 'none',
                      }}
                    />

                    {/* Floating Badge */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '1rem',
                        left: '1rem',
                        background: 'rgba(15, 10, 25, 0.85)',
                        backdropFilter: 'blur(10px)',
                        padding: '0.4rem 0.9rem',
                        borderRadius: '9999px',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        color: item.id === 'fuel-station' ? '#fde68a' : '#fda4af',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                      }}
                    >
                      {item.id === 'fuel-station' ? <Coffee size={14} /> : <Heart size={14} />}
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
        @media (max-width: 900px) {
          #story .glass-panel {
            grid-template-columns: 1fr !important;
            padding: 1.5rem !important;
            gap: 1.8rem !important;
          }
          #story .glass-panel > div {
            order: initial !important;
          }
        }
      `}</style>
    </section>
  );
}
