"use client";
import { useRef, useEffect, useState } from "react";
import { Play, Pause } from "lucide-react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Try autoplay when user visits
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true); // ✅ update state if autoplay works
        })
        .catch(() => {
          console.log("Autoplay blocked, waiting for user interaction.");
        });
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.log("Playback failed:", err));
    }
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white flex items-center justify-between px-4 py-3">
      {/* Play/Pause button */}
      <button onClick={togglePlay} className="flex items-center gap-2">
        {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
        <span className="text-sm">Now Playing: True - 144BPM</span>
      </button>

      {/* Hidden audio element */}
      <audio ref={audioRef} src="/audio/loop.wav" loop preload="auto" />
    </div>
  );
}
