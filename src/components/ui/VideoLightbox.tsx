"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Film, RotateCcw } from "lucide-react";
import { Project } from "@/data/projects";

interface VideoLightboxProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function VideoLightbox({ project, isOpen, onClose }: VideoLightboxProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === " " && isOpen) {
        e.preventDefault();
        togglePlay();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsPlaying(true);
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const curr = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 1;
    setProgress((curr / dur) * 100);
    setDuration(dur);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * (videoRef.current.duration || 1);
  };

  const handleRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  if (!isOpen || !project) return null;

  const isVertical = project.aspect === "vertical";
  const videoSrc = project.videoSrc || (project.discipline === "video" ? `/videos/${project.slug}.mp4` : undefined);

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-title"
      >
        {/* Backdrop click to dismiss */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 cursor-pointer"
        />

        {/* Modal Window Shell */}
        <motion.div
          initial={{ scale: 0.94, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 15 }}
          transition={{ type: "spring", damping: 26, stiffness: 320 }}
          className="relative z-10 flex flex-col items-center max-w-4xl w-full max-h-[96vh]"
        >
          {/* Top Film Sprocket strip */}
          <div className="flex gap-2 sm:gap-3 mb-2.5 opacity-40 select-none">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-sm bg-white/30 border border-white/20"
              />
            ))}
          </div>

          {/* Close Floating Button */}
          <button
            onClick={onClose}
            className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent hover:bg-accent-hover text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 focus:outline-none cursor-pointer"
            aria-label="Close video player"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Media Player Container */}
          <div
            className={`group relative rounded-2xl overflow-hidden bg-black border border-white/20 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9)] flex items-center justify-center ${
              isVertical
                ? "aspect-[9/16] w-full max-w-[340px] sm:max-w-[380px] h-auto max-h-[72vh]"
                : "aspect-[16/9] w-full max-w-3xl max-h-[68vh]"
            }`}
          >
            {videoSrc ? (
              <video
                ref={videoRef}
                src={videoSrc}
                poster={project.videoPoster || project.image}
                autoPlay
                playsInline
                loop
                onTimeUpdate={handleTimeUpdate}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onClick={togglePlay}
                className="w-full h-full object-cover cursor-pointer"
              />
            ) : (
              <div className="text-center p-8 text-neutral-400 font-mono text-sm">
                Video source not available
              </div>
            )}

            {/* Top Bar Overlay */}
            <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 via-black/30 to-transparent flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest text-white bg-white/20 backdrop-blur-md px-3 py-1 rounded-full uppercase border border-white/10">
                <Film className="w-3 h-3 text-accent-crimson" />
                {project.category || "QFIVE CINEMATOGRAPHY"}
              </span>
              <span className="text-[10px] font-mono text-white/80">
                4K MASTER · 24 FPS
              </span>
            </div>

            {/* Center Play/Pause Large Indicator on Hover */}
            <button
              onClick={togglePlay}
              className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 cursor-pointer backdrop-blur-sm border border-white/20 pointer-events-auto"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="w-7 h-7 fill-current" />
              ) : (
                <Play className="w-7 h-7 fill-current ml-1" />
              )}
            </button>

            {/* Bottom Playback Control Bar Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2">
              {/* Seekable Progress Bar */}
              <div
                onClick={handleSeek}
                className="w-full h-1.5 bg-white/30 rounded-full cursor-pointer overflow-hidden relative"
              >
                <div
                  className="h-full bg-accent-crimson rounded-full transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Action Buttons Row */}
              <div className="flex items-center justify-between text-white text-xs font-mono">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="p-1 hover:text-accent-crimson transition-colors cursor-pointer"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={handleRestart}
                    className="p-1 hover:text-accent-crimson transition-colors cursor-pointer"
                    title="Restart"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-1 hover:text-accent-crimson transition-colors cursor-pointer"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-accent-crimson" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>

                <div className="text-[10px] text-white/70 uppercase tracking-widest font-mono">
                  {project.proof || "In-House Chandigarh Shoot & Cut"}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Title & Description */}
          <div className="mt-3 text-center max-w-lg text-white">
            <h3
              id="video-title"
              className="text-lg sm:text-xl font-display font-bold uppercase tracking-tight"
            >
              {project.title}
            </h3>
            <p className="text-xs font-sans text-neutral-300 mt-0.5 line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Bottom Film Sprocket strip */}
          <div className="flex gap-2 sm:gap-3 mt-2.5 opacity-40 select-none">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-sm bg-white/30 border border-white/20"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
