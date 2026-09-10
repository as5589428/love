import React, { useState, useEffect } from 'react';
import { initialStoryData } from './data/storyData';
import FloatingHeartsCanvas from './components/FloatingHeartsCanvas';
import AmbientMusic from './components/AmbientMusic';
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
    const saved = localStorage.getItem('personal_love_story_data');
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
    localStorage.setItem('personal_love_story_data', JSON.stringify(data));
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
    localStorage.removeItem('personal_love_story_data');
    setIsCustomizerOpen(false);
  };

  return (
    <div className="app-container">
      {/* Floating Canvas Animation */}
      <FloatingHeartsCanvas />

      {/* Floating Background Ambient Music */}
      <AmbientMusic />

      {/* Top Navbar */}
      <Navbar
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        names={data.names}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection names={data.names} dates={data.dates} />

        {/* Live Milestone Counter since June 10th */}
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

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '3rem 1.5rem',
          textAlign: 'center',
          background: 'rgba(12, 9, 18, 0.95)',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <div className="content-wrapper" style={{ maxWidth: '600px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem',
              marginBottom: '0.8rem',
            }}
          >
            <Coffee size={18} color="#f59e0b" />
            <span style={{ fontSize: '0.9rem', color: 'var(--color-champagne)' }}>
              Fuel Station Cafe • June 10th
            </span>
            <Heart size={16} fill="#f43f5e" color="#f43f5e" />
          </div>

          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
            Made with all my heart and endless love for <strong style={{ color: '#fff' }}>{data.names.herName}</strong>.
          </p>

          <p style={{ color: 'var(--color-text-dim)', fontSize: '0.8rem' }}>
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
