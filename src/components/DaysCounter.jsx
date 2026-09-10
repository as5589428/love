import React, { useState, useEffect } from 'react';
import { Heart, Clock, Calendar, Sparkles } from 'lucide-react';

export default function DaysCounter({ dates }) {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalSeconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const startDate = new Date(dates.firstDate).getTime();
      const now = new Date().getTime();
      const difference = Math.max(0, now - startDate);

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeElapsed({
        days,
        hours,
        minutes,
        seconds,
        totalSeconds: Math.floor(difference / 1000),
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [dates.firstDate]);

  const units = [
    { label: 'Days', value: timeElapsed.days },
    { label: 'Hours', value: String(timeElapsed.hours).padStart(2, '0') },
    { label: 'Minutes', value: String(timeElapsed.minutes).padStart(2, '0') },
    { label: 'Seconds', value: String(timeElapsed.seconds).padStart(2, '0') },
  ];

  return (
    <section id="counter" style={{ padding: '3.5rem 0' }}>
      <div className="content-wrapper">
        <div
          className="glass-panel"
          style={{
            padding: '2.5rem 1.8rem',
            textAlign: 'center',
            maxWidth: '920px',
            margin: '0 auto',
            border: '1px solid rgba(244, 63, 94, 0.25)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle background glow */}
          <div
            style={{
              position: 'absolute',
              top: '-30%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '400px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(244, 63, 94, 0.15) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--color-champagne)',
              fontSize: '0.85rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '0.8rem',
            }}
          >
            <Calendar size={15} />
            <span>Since Our First Date • Fuel Station Cafe</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)',
              marginBottom: '0.6rem',
            }}
          >
            Treasuring Every Single Second With You
          </h2>

          <p
            style={{
              color: 'var(--color-text-muted)',
              fontSize: '0.95rem',
              maxWidth: '560px',
              margin: '0 auto 2.2rem auto',
            }}
          >
            Ever since that unforgettable evening on <strong style={{ color: '#fda4af' }}>June 10th</strong>,
            every passing second has made me realize how rare and special what we have truly is.
          </p>

          {/* Time Counter Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1rem',
              maxWidth: '680px',
              margin: '0 auto 1.8rem auto',
            }}
          >
            {units.map((unit) => (
              <div
                key={unit.label}
                className="glass-panel-subtle"
                style={{
                  padding: '1.2rem 0.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--radius-md)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                    fontWeight: '700',
                    color: '#ffffff',
                    lineHeight: 1,
                    marginBottom: '0.4rem',
                  }}
                >
                  {unit.value}
                </div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--color-rose-light)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    fontWeight: '600',
                  }}
                >
                  {unit.label}
                </div>
              </div>
            ))}
          </div>

          {/* Sweet commentary */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.85rem',
              color: 'var(--color-text-dim)',
              background: 'rgba(255, 255, 255, 0.04)',
              padding: '0.4rem 1rem',
              borderRadius: '9999px',
            }}
          >
            <Heart size={14} fill="#f43f5e" color="#f43f5e" />
            <span>Over {timeElapsed.days} days of laughter, memories & endless love</span>
          </div>
        </div>
      </div>
    </section>
  );
}
