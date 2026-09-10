import React, { useState, useEffect } from 'react';
import { initialStoryData } from './data/storyData';
import FloatingHeartsCanvas from './components/FloatingHeartsCanvas';
import MeriBanogiKyaPlayer from './components/MeriBanogiKyaPlayer';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DaysCounter from './components/DaysCounter';
import StoryTimeline from './components/StoryTimeline';
import ApologyLetter from './components/ApologyLetter';
import ForgivenessGate from './components/ForgivenessGate';
import LoveCoupons from './components/LoveCoupons';
import MemoryPolaroids from './components/MemoryPolaroids';
import CustomizerModal from './components/CustomizerModal';
import { Heart, Coffee } from 'lucide-react';

export default function App() {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('personal_love_story_data_v4');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return initialStoryData;
      }
    }
    return initialStoryData;
  });

  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('personal_love_story_data_v4', JSON.stringify(data));
  }, [data]);

  const handleUpdateApology = (newParagraphs) => {
    setData((prev) => ({
      ...prev,
      apology: {
        ...prev.apology,
        paragraphs: newParagraphs,
      },
    }));
  };

  const handleSaveCustomization = ({ names, dates }) => {
    setData((prev) => ({
      ...prev,
      names,
      dates,
    }));
  };

  const handleResetData = () => {
    setData(initialStoryData);
    localStorage.removeItem('personal_love_story_data_v4');
    setIsCustomizerOpen(false);
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Floating Canvas Animation */}
      <FloatingHeartsCanvas />

      {/* Featured Song: "Meri Banogi Kya" by Rito Riba with Vinyl & Expandable Player */}
      <MeriBanogiKyaPlayer />

      {/* Top Navbar */}
      <Navbar
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        names={data.names}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection names={data.names} dates={data.dates} />

        {/* Live Milestone Counter since June 10th, 2026 */}
        <DaysCounter dates={data.dates} />

        {/* Story Journey: LinkedIn to Fuel Station Cafe */}
        <StoryTimeline story={data.story} />

        {/* The Sincere Apology Letter */}
        <ApologyLetter
          apology={data.apology}
          names={data.names}
          onUpdateApology={handleUpdateApology}
        />

        {/* Interactive Forgiveness Gate */}
        <ForgivenessGate names={data.names} />

        {/* Love Coupons */}
        <LoveCoupons coupons={data.coupons} names={data.names} />

        {/* Reasons Why I Adore You */}
        <MemoryPolaroids reasons={data.reasons} names={data.names} />
      </main>

      {/* Footer (with extra bottom padding for floating music bar on mobile) */}
      <footer
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '2.5rem 1.25rem 5.5rem 1.25rem',
          textAlign: 'center',
          background: 'rgba(10, 6, 18, 0.96)',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <div className="content-wrapper" style={{ maxWidth: '580px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              marginBottom: '0.6rem',
            }}
          >
            <Coffee size={16} color="#fbbf24" />
            <span style={{ fontSize: '0.85rem', color: 'var(--color-champagne)' }}>
              Fuel Station Cafe • June 10, 2026
            </span>
            <Heart size={15} fill="#ff4d79" color="#ff4d79" />
          </div>

          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
            Made with all my heart and endless love for <strong style={{ color: '#fff' }}>{data.names.herName}</strong> — From {data.names.hisName} ❤️
          </p>

          <p style={{ color: 'var(--color-text-dim)', fontSize: '0.78rem' }}>
            From our first LinkedIn message to every tomorrow ahead.
          </p>
        </div>
      </footer>

      {/* Personalization Modal */}
      <CustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        names={data.names}
        dates={data.dates}
        onSave={handleSaveCustomization}
        onReset={handleResetData}
      />
    </div>
  );
}
