
import React, { useRef, useState, useEffect } from 'react';
import { Music2, Pause, Play } from 'lucide-react';
import './MusicPlayer.css';

export default function MusicPlayer({ autoStart = false }) {
  const audio = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);

  const startMusic = async () => {
    if (!audio.current) return;

    try {
      audio.current.volume = 0.45;
      await audio.current.play();

      setPlaying(true);
      setStarted(true);
    } catch (error) {
      setPlaying(false);
    }
  };

  const toggleMusic = async () => {
    if (!audio.current) return;

    if (playing) {
      audio.current.pause();
      setPlaying(false);
    } else {
      await startMusic();
    }
  };

  // Try autoplay when component mounts
  useEffect(() => {
    if (autoStart) {
      startMusic();
    }
  }, [autoStart]);

  // Retry music on first user interaction if autoplay was blocked
  useEffect(() => {
    if (started) return;

    const handleFirstInteraction = () => {
      startMusic();
    };

    window.addEventListener('pointerdown', handleFirstInteraction, {
      once: true
    });

    return () => {
      window.removeEventListener('pointerdown', handleFirstInteraction);
    };
  }, [started]);

  return (
    <>
      <audio
        ref={audio}
        src="/music/wedding.mp3"
        loop
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      <button
        className={`music-button ${playing ? 'is-playing' : ''}`}
        onClick={toggleMusic}
        aria-label={playing ? 'Pause music' : 'Play music'}
        title={playing ? 'Pause music' : 'Play wedding music'}
      >
        <span className="music-ripple" />

        {playing ? <Pause size={18} /> : <Play size={18} />}
        <Music2 size={16} />
      </button>
    </>
  );
}
