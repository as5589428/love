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

  const handleRedeem = (id) => {
    if (redeemed[id]) return;

    setRedeemed((prev) => ({
      ...prev,
      [id]: new Date().toLocaleDateString(),
    }));

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#fda4af', '#ff4d79', '#fef08a'],
    });
  };

  return (
    <section id="coupons" style={{ padding: '3rem 0' }}>
      <div className="content-wrapper">
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 2.5rem auto' }}>
          <div className="badge-pill" style={{ marginBottom: '0.8rem' }}>
            <Gift size={13} />
            <span>Special For You</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', marginBottom: '0.6rem' }}>
            Personal <span className="gradient-text-rose">Love Coupons</span>
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: 'clamp(0.88rem, 2vw, 1rem)' }}>
            Non-expiring passes that Ifra can redeem anytime with Aman.
          </p>
        </div>

        {/* Coupons Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.2rem',
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
                  padding: 'clamp(1.4rem, 3vw, 1.8rem) clamp(1.1rem, 2.5vw, 1.5rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: 'var(--radius-lg)',
                  border: isRedeemed
                    ? '1px solid rgba(16, 185, 129, 0.45)'
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
                      top: '1.2rem',
                      right: '1rem',
                      border: '2px dashed #10b981',
                      color: '#6ee7b7',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      fontSize: '0.7rem',
                      fontWeight: '800',
                      textTransform: 'uppercase',
                      transform: 'rotate(10deg)',
                      background: 'rgba(16, 185, 129, 0.15)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    Redeemed!
                  </div>
                )}

                <div>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(255, 77, 121, 0.15)',
                      border: '1px solid rgba(255, 77, 121, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem',
                      color: '#fda4af',
                    }}
                  >
                    <IconComponent size={20} />
                  </div>

                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.4rem', color: '#ffffff' }}>
                    {coupon.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--color-text-muted)',
                      lineHeight: 1.55,
                      marginBottom: '1.2rem',
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
                      paddingTop: '0.8rem',
                      borderTop: '1px dashed rgba(255, 255, 255, 0.1)',
                      marginBottom: '0.8rem',
                      fontSize: '0.72rem',
                      color: 'var(--color-text-dim)',
                    }}
                  >
                    <span>Code: {coupon.code}</span>
                    <span>Valid: Forever</span>
                  </div>

                  <button
                    onClick={() => handleRedeem(coupon.id)}
                    disabled={isRedeemed}
                    style={{
                      width: '100%',
                      padding: '0.6rem 1rem',
                      borderRadius: 'var(--radius-full)',
                      border: 'none',
                      background: isRedeemed
                        ? 'rgba(16, 185, 129, 0.2)'
                        : 'linear-gradient(135deg, #ff4d79, #be123c)',
                      color: isRedeemed ? '#6ee7b7' : '#ffffff',
                      fontWeight: '600',
                      fontSize: '0.85rem',
                      cursor: isRedeemed ? 'default' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.35rem',
                      transition: 'var(--transition-smooth)',
                    }}
                  >
                    {isRedeemed ? (
                      <>
                        <Check size={15} />
                        <span>Claimed on {redeemed[coupon.id]}</span>
                      </>
                    ) : (
                      <>
                        <Sparkles size={14} />
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
