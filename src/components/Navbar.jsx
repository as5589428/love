import React, { useState } from 'react';
import { Heart, Coffee, Mail, Gift, Settings, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenCustomizer, names }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Our Story', href: '#story', icon: Sparkles },
    { label: 'Fuel Station Cafe', href: '#cafe-date', icon: Coffee },
    { label: 'My Apology', href: '#apology', icon: Mail },
    { label: 'Love Coupons', href: '#coupons', icon: Gift },
    { label: 'Forgive Me?', href: '#forgiveness', icon: Heart },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 2rem)',
        maxWidth: '1100px',
        zIndex: 40,
      }}
    >
      <nav
        className="glass-panel"
        style={{
          padding: '0.75rem 1.4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: '9999px',
          background: 'rgba(20, 15, 30, 0.75)',
        }}
      >
        {/* Brand */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #f43f5e, #f59e0b)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(244, 63, 94, 0.4)',
            }}
          >
            <Heart size={18} fill="#fff" color="#fff" />
          </div>
          <div>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: '700',
                fontSize: '1.05rem',
                letterSpacing: '-0.01em',
              }}
            >
              {names?.hisName || 'Aman'} & {names?.herName || 'Ifra'}
            </span>
            <span
              style={{
                fontSize: '0.75rem',
                color: 'var(--color-rose-light)',
                marginLeft: '0.35rem',
                fontFamily: 'var(--font-body)',
              }}
            >
              • June 10, 2026
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.5rem',
          }}
          className="desktop-links"
        >
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                color: 'var(--color-text-muted)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '500',
                transition: 'var(--transition-smooth)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fda4af')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
            >
              <item.icon size={15} />
              {item.label}
            </a>
          ))}
        </div>

        {/* Action Button: Personalize */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <button
            onClick={onOpenCustomizer}
            id="personalize-btn"
            title="Personalize Names & Text"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: 'var(--color-champagne)',
              padding: '0.45rem 0.9rem',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'var(--transition-smooth)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.borderColor = 'rgba(245, 158, 11, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            }}
          >
            <Settings size={14} />
            <span>Customize</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle-btn"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--color-text-main)',
              cursor: 'pointer',
              display: 'none',
              padding: '0.3rem',
            }}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="glass-panel"
          style={{
            marginTop: '0.6rem',
            padding: '1.2rem',
            borderRadius: 'var(--radius-lg)',
            background: 'rgba(20, 15, 30, 0.95)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={handleLinkClick}
              style={{
                color: 'var(--color-text-main)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
              }}
            >
              <item.icon size={18} color="#f43f5e" />
              {item.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 820px) {
          .desktop-links {
            display: flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }
        @media (max-width: 819px) {
          .desktop-links {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
