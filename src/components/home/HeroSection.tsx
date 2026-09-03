"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { AnimatedLogo } from "@/components/ui/AnimatedLogo";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { MapPin, ArrowDown, Sparkles } from "lucide-react";
import { agencyContactInfo } from "@/data/clients";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Subtle controlled pointer parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 25 });

  const logoParallaxX = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const logoParallaxY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-accent-crimson/[0.06] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Location & Agency Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface border border-border-strong text-xs font-mono font-bold tracking-widest text-accent-crimson uppercase mb-6"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Chandigarh — Digital &amp; Creative Agency</span>
            </motion.div>

            {/* Dominant Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tighter font-display text-foreground leading-[0.95]"
            >
              Creative Strategy.
              <br />
              <span className="text-accent-crimson">Real Results.</span>
            </motion.h1>

            {/* Core Value Proposition Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl font-sans"
            >
              Marketing, software engineering, and video production — brought
              together under <strong className="text-foreground font-semibold">one in-house team</strong> so
              your brand never gets lost between vendors.
            </motion.p>

            {/* Call to Actions & Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
            >
              <MagneticButton href="/contact" size="lg" variant="primary">
                Start A Project
              </MagneticButton>
              <MagneticButton href="/services" size="lg" variant="outline">
                Our Three Disciplines
              </MagneticButton>
            </motion.div>

            {/* Micro Coordinates Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12 pt-6 border-t border-border-subtle flex items-center gap-6 text-[11px] font-mono text-muted-foreground uppercase"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Q2/Q3 Projects</span>
              </div>
              <span className="hidden sm:inline">|</span>
              <span className="hidden sm:inline">{agencyContactInfo.coordinates}</span>
            </motion.div>
          </div>

          {/* Right Cinematic Animated Brand Ident */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <motion.div
              style={{
                x: logoParallaxX,
                y: logoParallaxY,
              }}
              className="relative"
            >
              <AnimatedLogo size={360} />
            </motion.div>
          </div>
        </div>

        {/* Scroll Cue indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 lg:mt-16 flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground"
        >
          <span>Scroll To Explore</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-accent-crimson" />
        </motion.div>
      </div>
    </section>
  );
}
