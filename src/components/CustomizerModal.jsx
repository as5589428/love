import React, { useState } from 'react';
import { X, Check, RotateCcw, Heart, Calendar } from 'lucide-react';

export default function CustomizerModal({ isOpen, onClose, names, dates, onSave, onReset }) {
  const [herName, setHerName] = useState(names.herName);
  const [hisName, setHisName] = useState(names.hisName);
  const [firstDate, setFirstDate] = useState(dates.firstDate.split('T')[0]);
  const [locationName, setLocationName] = useState(dates.locationName);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      names: {
        herName: herName.trim() || 'My Dearest',
        hisName: hisName.trim() || 'Yours Forever',
      },
      dates: {
        ...dates,
        firstDate: `${firstDate}T18:00:00`,
        locationName: locationName.trim() || 'Fuel Station Cafe',
      },
    });
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(10, 7, 18, 0.85)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '520px',
          padding: '2rem',
          borderRadius: 'var(--radius-xl)',
          background: 'rgba(24, 18, 36, 0.95)',
          border: '1px solid rgba(244, 63, 94, 0.3)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
          position: 'relative',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: 'transparent',
            border: 'none',
            color: 'var(--color-text-dim)',
            cursor: 'pointer',
          }}
        >
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
          <Heart size={20} color="#f43f5e" fill="#f43f5e" />
          <h3 style={{ fontSize: '1.4rem' }}>Personalize Your Website</h3>
        </div>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', marginBottom: '1.6rem' }}>
          Customize your names and first date date to make this website uniquely yours.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: '#fda4af', marginBottom: '0.4rem' }}>
              Her Name / Sweet Nickname:
            </label>
            <input
              type="text"
              value={herName}
              onChange={(e) => setHerName(e.target.value)}
              placeholder="e.g. Ananya, Baby, My Love"
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#fff',
                outline: 'none',
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: '#fda4af', marginBottom: '0.4rem' }}>
              Your Name / Sign-off:
            </label>
            <input
              type="text"
              value={hisName}
              onChange={(e) => setHisName(e.target.value)}
              placeholder="e.g. Rahul, Yours Always"
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#fff',
                outline: 'none',
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: '#fde68a', marginBottom: '0.4rem' }}>
              First Date Date (June 10th):
            </label>
            <input
              type="date"
              value={firstDate}
              onChange={(e) => setFirstDate(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#fff',
                outline: 'none',
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: '#fde68a', marginBottom: '0.4rem' }}>
              First Date Cafe:
            </label>
            <input
              type="text"
              value={locationName}
              onChange={(e) => setLocationName(e.target.value)}
              placeholder="Fuel Station Cafe"
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#fff',
                outline: 'none',
              }}
            />
          </div>

          <div style={{ display: 'flex', gap: '0.8rem', marginTop: '0.8rem' }}>
            <button
              type="submit"
              className="btn-romantic-primary"
              style={{ flex: 1, justifyContent: 'center' }}
            >
              <Check size={16} /> Save Changes
            </button>
            <button
              type="button"
              onClick={onReset}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: 'var(--color-text-dim)',
                padding: '0 1rem',
                borderRadius: 'var(--radius-full)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                fontSize: '0.85rem',
              }}
              title="Reset to defaults"
            >
              <RotateCcw size={14} /> Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
