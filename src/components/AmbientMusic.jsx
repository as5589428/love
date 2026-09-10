import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Pause, Play, Sparkles } from 'lucide-react';

export default function AmbientMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.35);
  const [hasInteracted, setHasInteracted] = useState(false);

  const audioCtxRef = useRef(null);
  const masterGainRef = useRef(null);
  const timerRef = useRef(null);
  const stepRef = useRef(0);

  // Soothing chord progression (frequencies in Hz)
  // Cmaj7 -> Am9 -> Fmaj7 -> G9sus4
  const chords = [
    [261.63, 329.63, 392.0, 493.88], // C E G B (Cmaj7)
    [220.0, 261.63, 329.63, 392.0, 493.88], // A C E G B (Am9)
    [174.61, 261.63, 329.63, 392.0], // F C E G (Fmaj7)
    [196.0, 293.66, 392.0, 440.0, 523.25], // G D G A C (Gsus)
  ];

  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContext();
      const master = ctx.createGain();
      master.gain.setValueAtTime(volume, ctx.currentTime);
      master.connect(ctx.destination);

      audioCtxRef.current = ctx;
      masterGainRef.current = master;
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  };

  const playChordNote = (freq, delay = 0, duration = 3.2) => {
    const ctx = audioCtxRef.current;
    if (!ctx || !masterGainRef.current) return;

    const now = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const noteGain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    // Soft Rhodes / acoustic piano timbre: sine with subtle triangle blend
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    // Warm low-pass filter
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, now);
    filter.frequency.exponentialRampToValueAtTime(350, now + duration);

    // Envelope
    noteGain.gain.setValueAtTime(0.0001, now);
    noteGain.gain.exponentialRampToValueAtTime(0.18, now + 0.15); // gentle attack
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration); // smooth decay

    osc.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(masterGainRef.current);

    osc.start(now);
    osc.stop(now + duration + 0.1);
  };

  const tickSequence = () => {
    if (!isPlaying) return;
    const currentChord = chords[stepRef.current % chords.length];

    // Arpeggiate chord notes with delicate staggered delays
    currentChord.forEach((freq, idx) => {
      playChordNote(freq, idx * 0.18, 3.8);
    });

    // Occasional gentle high sparkle note
    if (Math.random() > 0.4) {
      const highNotes = [523.25, 587.33, 659.25, 783.99]; // C5, D5, E5, G5
      const randomNote = highNotes[Math.floor(Math.random() * highNotes.length)];
      playChordNote(randomNote, 1.2 + Math.random() * 0.5, 2.5);
    }

    stepRef.current += 1;
    timerRef.current = setTimeout(tickSequence, 3200);
  };

  const toggleMusic = () => {
    initAudio();
    setHasInteracted(true);
    if (isPlaying) {
      clearTimeout(timerRef.current);
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      tickSequence();
    } else {
      clearTimeout(timerRef.current);
    }
    return () => clearTimeout(timerRef.current);
  }, [isPlaying]);

  useEffect(() => {
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.setTargetAtTime(
        volume,
        audioCtxRef.current.currentTime,
        0.1
      );
    }
  }, [volume]);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
      }}
    >
      {!hasInteracted && (
        <div
          style={{
            background: 'rgba(244, 63, 94, 0.9)',
            color: '#fff',
            fontSize: '0.8rem',
            fontWeight: '600',
            padding: '0.4rem 0.85rem',
            borderRadius: '9999px',
            boxShadow: '0 8px 20px rgba(244, 63, 94, 0.4)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            animation: 'pulseGlow 2s infinite',
          }}
        >
          <Sparkles size={14} /> Play our melody
        </div>
      )}

      <div
        className="glass-panel"
        style={{
          padding: '0.5rem 0.9rem',
          borderRadius: '9999px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.65rem',
          background: 'rgba(22, 17, 34, 0.85)',
          boxShadow: isPlaying
            ? '0 8px 30px rgba(244, 63, 94, 0.35)'
            : '0 8px 25px rgba(0, 0, 0, 0.5)',
          border: isPlaying
            ? '1px solid rgba(244, 63, 94, 0.4)'
            : '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'var(--transition-smooth)',
        }}
      >
        <button
          onClick={toggleMusic}
          id="toggle-music-btn"
          title={isPlaying ? 'Pause Melody' : 'Play Gentle Melody'}
          style={{
            background: isPlaying
              ? 'linear-gradient(135deg, #f43f5e, #e11d48)'
              : 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            color: '#fff',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'var(--transition-smooth)',
          }}
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} style={{ marginLeft: '2px' }} />}
        </button>

        {isPlaying && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '3px', height: '16px' }}>
            <span className="eq-bar eq-bar-1" />
            <span className="eq-bar eq-bar-2" />
            <span className="eq-bar eq-bar-3" />
            <span className="eq-bar eq-bar-4" />
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <button
            onClick={() => setVolume((v) => (v === 0 ? 0.35 : 0))}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--color-text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {volume === 0 ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>
          <input
            type="range"
            min="0"
            max="0.8"
            step="0.05"
            value={volume}
            onChange={(e) => {
              setVolume(parseFloat(e.target.value));
              if (!isPlaying) toggleMusic();
            }}
            style={{
              width: '55px',
              accentColor: '#f43f5e',
              cursor: 'pointer',
            }}
            title="Volume"
          />
        </div>
      </div>

      <style>{`
        .eq-bar {
          display: inline-block;
          width: 3px;
          background: #fda4af;
          border-radius: 2px;
          animation: eqAnim 1s ease-in-out infinite alternate;
        }
        .eq-bar-1 { height: 8px; animation-delay: 0.1s; }
        .eq-bar-2 { height: 14px; animation-delay: 0.3s; }
        .eq-bar-3 { height: 10px; animation-delay: 0.2s; }
        .eq-bar-4 { height: 15px; animation-delay: 0.4s; }

        @keyframes eqAnim {
          0% { height: 4px; }
          100% { height: 16px; }
        }
      `}</style>
    </div>
  );
}
