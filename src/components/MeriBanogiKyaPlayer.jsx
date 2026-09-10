import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Music, Volume2, VolumeX, Sparkles, ChevronUp, ChevronDown, ExternalLink } from 'lucide-react';

export default function MeriBanogiKyaPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const playerRef = useRef(null);
  const iframeRef = useRef(null);

  // YouTube Video ID for "Meri Banogi Kya" by Rito Riba
  const videoId = 'uoLC9u_M-E8';

  // Listen to messages or trigger play/pause via YouTube Iframe API
  const handleTogglePlay = () => {
    const nextState = !isPlaying;
    setIsPlaying(nextState);

    if (iframeRef.current && iframeRef.current.contentWindow) {
      const command = nextState
        ? JSON.stringify({ event: 'command', func: 'playVideo', args: '' })
        : JSON.stringify({ event: 'command', func: 'pauseVideo', args: '' });
      iframeRef.current.contentWindow.postMessage(command, '*');
    }
  };

  const handleToggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    if (iframeRef.current && iframeRef.current.contentWindow) {
      const command = nextMute
        ? JSON.stringify({ event: 'command', func: 'mute', args: '' })
        : JSON.stringify({ event: 'command', func: 'unMute', args: '' });
      iframeRef.current.contentWindow.postMessage(command, '*');
    }
  };

  return (
    <>
      {/* Hidden YouTube Iframe that streams the audio smoothly */}
      <div
        style={{
          position: 'fixed',
          top: '-9999px',
          left: '-9999px',
          width: '1px',
          height: '1px',
          opacity: 0,
          pointerEvents: 'none',
        }}
      >
        <iframe
          ref={iframeRef}
          id="yt-music-frame"
          src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=${window.location.origin}&autoplay=0&loop=1&playlist=${videoId}&controls=0`}
          title="Meri Banogi Kya - Rito Riba"
          allow="autoplay"
        />
      </div>

      {/* Floating Mini Music Widget (Optimized for Mobile 400px and Desktop) */}
      <div
        style={{
          position: 'fixed',
          bottom: '1rem',
          right: '1rem',
          zIndex: 60,
          maxWidth: 'calc(100vw - 2rem)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '0.5rem',
        }}
      >
        {/* Expanded Video & Lyrics Drawer */}
        {isExpanded && (
          <div
            className="glass-panel"
            style={{
              width: 'min(360px, 88vw)',
              padding: '1rem',
              borderRadius: 'var(--radius-lg)',
              background: 'rgba(18, 10, 28, 0.95)',
              border: '1px solid rgba(255, 77, 121, 0.4)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.9)',
              marginBottom: '0.4rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '0.8rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Sparkles size={15} color="#ff4d79" />
                <span style={{ fontSize: '0.88rem', fontWeight: '700', color: '#fff' }}>
                  Our Special Song ❤️
                </span>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-text-dim)',
                  cursor: 'pointer',
                }}
              >
                <ChevronDown size={18} />
              </button>
            </div>

            {/* Embedded Mini Player view */}
            <div
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                aspectRatio: '16/9',
                background: '#000',
                marginBottom: '0.8rem',
              }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=${isPlaying ? 1 : 0}`}
                title="Meri Banogi Kya Official Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{ width: '100%', height: '100%', border: 'none' }}
              />
            </div>

            <div style={{ fontSize: '0.82rem', color: 'var(--color-rose-light)', textAlign: 'center' }}>
              🎵 <em>"Meri Banogi Kya"</em> — Sung by Rito Riba
            </div>
          </div>
        )}

        {/* The Floating Pill Controller */}
        <div
          className="glass-panel"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            padding: '0.45rem 0.85rem',
            borderRadius: '9999px',
            background: 'rgba(20, 10, 32, 0.88)',
            border: isPlaying
              ? '1px solid rgba(255, 77, 121, 0.5)'
              : '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: isPlaying
              ? '0 10px 30px rgba(255, 77, 121, 0.4)'
              : '0 8px 25px rgba(0, 0, 0, 0.6)',
            transition: 'var(--transition-smooth)',
          }}
        >
          {/* Vinyl Record / Icon */}
          <div
            className={isPlaying ? 'animate-spin-slow' : ''}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'radial-gradient(circle at center, #ff4d79 20%, #1a0b22 21%, #090510 100%)',
              border: '2px solid rgba(255, 77, 121, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: isPlaying ? '0 0 12px rgba(255, 77, 121, 0.6)' : 'none',
            }}
          >
            <Music size={13} color="#fff" />
          </div>

          {/* Song Info */}
          <div
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              lineHeight: 1.15,
            }}
          >
            <span
              style={{
                fontSize: '0.82rem',
                fontWeight: '700',
                color: '#fff',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '125px',
              }}
            >
              Meri Banogi Kya
            </span>
            <span
              style={{
                fontSize: '0.68rem',
                color: 'var(--color-rose-light)',
              }}
            >
              Rito Riba • Play
            </span>
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={handleTogglePlay}
            id="play-rito-riba-btn"
            title={isPlaying ? 'Pause Song' : 'Play Meri Banogi Kya'}
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              border: 'none',
              background: 'linear-gradient(135deg, #ff4d79, #e11d48)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(255, 77, 121, 0.5)',
              transition: 'var(--transition-smooth)',
              flexShrink: 0,
            }}
          >
            {isPlaying ? <Pause size={15} /> : <Play size={15} style={{ marginLeft: '2px' }} />}
          </button>

          {/* Expand Drawer Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-text-dim)',
              cursor: 'pointer',
              padding: '2px',
              display: 'flex',
              alignItems: 'center',
            }}
            title="Watch video"
          >
            {isExpanded ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
          </button>
        </div>
      </div>
    </>
  );
}
