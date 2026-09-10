import React, { useState } from 'react';
import { Gift, Coffee, HeartHandshake, Trophy, Car, Crown, Sparkles, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

const iconMap = {
  Coffee: Coffee,
  HeartHandshake: HeartHandshake,
  Trophy: Trophy,
  Car: Car,
  Crown: Crown,
  Sparkles: Sparkles,
};

export default function LoveCoupons({ coupons, names }) {
  const [redeemed, setRedeemed] = useState({});

  const handleRedeem = (id, title) => {
    if (redeemed[id]) return;

    setRedeemed((prev) => ({
      ...prev,
      [id]: new Date().toLocaleDateString(),
    }));

    // Mini confetti burst
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#fda4af', '#f43f5e', '#fde68a'],
    });
  };

  return (
    <section id="coupons" style={{ padding: '4.5rem 0' }}>
      <div className="content-wrapper">
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <Gift size={14} />
            <span>Special For You</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '0.8rem' }}>
            Personal <span className="gradient-text-rose">Love Coupons</span>
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>
            Non-expiring, guaranteed passes that you can redeem anytime with {names.hisName}.
          </p>
        </div>

        {/* Coupons Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.8rem',
          }}
        >
          {coupons.map((coupon) => {
            const IconComponent = iconMap[coupon.icon] || Sparkles;
            const isRedeemed = !!redeemed[coupon.id];

            return (
              <div
                key={coupon.id}
                className="glass-panel-interactive"
                style={{
                  padding: '2rem 1.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: 'var(--radius-lg)',
                  border: isRedeemed
                    ? '1px solid rgba(16, 185, 129, 0.4)'
                    : '1px solid var(--glass-border)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Stamp overlay if redeemed */}
                {isRedeemed && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '1.5rem',
                      right: '1.2rem',
                      border: '2px dashed #10b981',
                      color: '#6ee7b7',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px',
                      fontSize: '0.72rem',
                      fontWeight: '800',
                      textTransform: 'uppercase',
                      transform: 'rotate(12deg)',
                      background: 'rgba(16, 185, 129, 0.15)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Redeemed!
                  </div>
                )}

                <div>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(244, 63, 94, 0.15)',
                      border: '1px solid rgba(244, 63, 94, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.2rem',
                      color: '#fda4af',
                    }}
                  >
                    <IconComponent size={22} />
                  </div>

                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#ffffff' }}>
                    {coupon.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: 'var(--color-text-muted)',
                      lineHeight: 1.6,
                      marginBottom: '1.5rem',
                    }}
                  >
                    {coupon.description}
                  </p>
                </div>

                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '1rem',
                      borderTop: '1px dashed rgba(255, 255, 255, 0.1)',
                      marginBottom: '1rem',
                      fontSize: '0.75rem',
                      color: 'var(--color-text-dim)',
                    }}
                  >
                    <span>Code: {coupon.code}</span>
                    <span>Valid: Forever</span>
                  </div>

                  <button
                    onClick={() => handleRedeem(coupon.id, coupon.title)}
                    disabled={isRedeemed}
                    style={{
                      width: '100%',
                      padding: '0.65rem 1rem',
                      borderRadius: 'var(--radius-full)',
                      border: 'none',
                      background: isRedeemed
                        ? 'rgba(16, 185, 129, 0.2)'
                        : 'linear-gradient(135deg, #f43f5e, #be123c)',
                      color: isRedeemed ? '#6ee7b7' : '#ffffff',
                      fontWeight: '600',
                      fontSize: '0.88rem',
                      cursor: isRedeemed ? 'default' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem',
                      transition: 'var(--transition-smooth)',
                    }}
                  >
                    {isRedeemed ? (
                      <>
                        <Check size={16} />
                        <span>Redeemed on {redeemed[coupon.id]}</span>
                      </>
                    ) : (
                      <>
                        <Sparkles size={15} />
                        <span>Redeem Pass</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
