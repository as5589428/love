import React, { useState, useEffect } from 'react';
import { Heart, Clock, Calendar, Sparkles } from 'lucide-react';

export default function DaysCounter({ dates }) {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
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
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [dates.firstDate]);

  const units = [
    { label: 'Days', value: timeElapsed.days },
    { label: 'Hours', value: String(timeElapsed.hours).padStart(2, '0') },
    { label: 'Mins', value: String(timeElapsed.minutes).padStart(2, '0') },
    { label: 'Secs', value: String(timeElapsed.seconds).padStart(2, '0') },
  ];

  return (
    <section id="counter" style={{ padding: '2.5rem 0' }}>
      <div className="content-wrapper">
        <div
          className="glass-panel"
          style={{
            padding: 'clamp(1.5rem, 4vw, 2.5rem) clamp(1rem, 3vw, 1.8rem)',
            textAlign: 'center',
            maxWidth: '850px',
            margin: '0 auto',
            border: '1px solid rgba(255, 77, 121, 0.3)',
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
              width: '350px',
              height: '250px',
              background: 'radial-gradient(circle, rgba(255, 77, 121, 0.2) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--color-champagne)',
              fontSize: '0.78rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '0.6rem',
            }}
          >
            <Calendar size={14} />
            <span>Since Our First Date • Fuel Station Cafe (June 10th, 2026)</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.4rem, 4vw, 2.2rem)',
              marginBottom: '0.4rem',
            }}
          >
            Treasuring Every Single Second With You
          </h2>

          <p
            style={{
              color: 'var(--color-text-muted)',
              fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
              maxWidth: '520px',
              margin: '0 auto 1.8rem auto',
            }}
          >
            Ever since that magical evening on <strong style={{ color: '#fda4af' }}>June 10th, 2026</strong>,
            every passing second has made me realize how irreplaceable you are, Ifra.
          </p>

          {/* Time Counter Grid (Responsive on 400px mobile) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 'clamp(0.4rem, 2vw, 1rem)',
              maxWidth: '640px',
              margin: '0 auto 1.5rem auto',
            }}
          >
            {units.map((unit) => (
              <div
                key={unit.label}
                className="glass-panel-subtle"
                style={{
                  padding: 'clamp(0.7rem, 2vw, 1.2rem) clamp(0.3rem, 1vw, 0.6rem)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 255, 255, 0.05)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.5rem, 5.5vw, 2.8rem)',
                    fontWeight: '700',
                    color: '#ffffff',
                    lineHeight: 1,
                    marginBottom: '0.3rem',
                  }}
                >
                  {unit.value}
                </div>
                <div
                  style={{
                    fontSize: 'clamp(0.65rem, 2vw, 0.75rem)',
                    color: 'var(--color-rose-light)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
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
              gap: '0.4rem',
              fontSize: '0.8rem',
              color: 'var(--color-text-dim)',
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '0.35rem 0.9rem',
              borderRadius: '9999px',
            }}
          >
            <Heart size={13} fill="#ff4d79" color="#ff4d79" />
            <span>Over {timeElapsed.days} days of laughter, memories & love</span>
          </div>
        </div>
      </div>
    </section>
  );
}
