"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import {
  TrendingUp,
  Terminal,
  Film,
  ArrowRight,
  Code2,
  Play,
  BarChart3,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

type DisciplineKey = "marketing" | "software" | "video";

export function DisciplinesSection() {
  const [activeDiscipline, setActiveDiscipline] = useState<DisciplineKey>("marketing");

  const disciplines = [
    {
      id: "marketing" as DisciplineKey,
      number: "01",
      title: "Marketing",
      tagline: "Get Seen. Get Recognized.",
      desc: "Digital media buying across Meta & Google paired with distinct brand design. We engineer sustainable customer acquisition funnels that convert clicks into verified revenue.",
      href: "/services#marketing",
      workHref: "/work/marketing",
      icon: TrendingUp,
      accent: "text-rose-500",
      pill: "Paid Media & Brand Architecture",
    },
    {
      id: "software" as DisciplineKey,
      number: "02",
      title: "Software Development",
      tagline: "Built To Run Your Business.",
      desc: "High-performance web apps, cross-platform mobile products, and AI automations. Built to handle complex operational workflows, not just look pretty.",
      href: "/services#software-development",
      workHref: "/work/software-development",
      icon: Terminal,
      accent: "text-cyan-500",
      pill: "Full-Stack & AI Systems",
    },
    {
      id: "video" as DisciplineKey,
      number: "03",
      title: "Video Production",
      tagline: "Every Frame, Polished.",
      desc: "Full in-house video and photo production — concept, shoot, kinetic editing, sound design, and color grading for fashion, F&B, products, and interviews.",
      href: "/services#video-editing",
      workHref: "/work/video-editing",
      icon: Film,
      accent: "text-amber-500",
      pill: "4K Shoots & Kinetic Post-Production",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-surface text-foreground border-y border-border-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          chapter="CHAPTER 01"
          eyebrow="The Core Proposition"
          title="One Team."
          highlightTitle="Three Disciplines."
          description="Your brand deserves one synchronized in-house partner rather than juggling three fragmented agencies. When marketing, software, and video work together, growth compounds."
        />

        {/* Interactive Discipline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-8">
          {/* Left Column: Interactive Tab Cards */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {disciplines.map((item) => {
              const isActive = activeDiscipline === item.id;
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveDiscipline(item.id)}
                  onClick={() => setActiveDiscipline(item.id)}
                  className={cn(
                    "group relative p-6 sm:p-8 rounded-3xl border transition-all duration-400 cursor-pointer select-none",
                    isActive
                      ? "bg-surface-elevated border-accent-crimson/80 shadow-xl shadow-accent-crimson/5"
                      : "bg-surface-muted/60 border-border hover:border-border-strong hover:bg-surface-elevated/50"
                  )}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-mono font-bold text-accent-crimson">
                        {item.number}
                      </span>
                      <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground border border-border px-2.5 py-0.5 rounded-full">
                        {item.pill}
                      </span>
                    </div>

                    <div
                      className={cn(
                        "w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300",
                        isActive
                          ? "bg-accent text-white border-accent"
                          : "bg-surface border-border text-muted-foreground group-hover:text-foreground"
                      )}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight font-display text-foreground mt-4">
                    {item.title}
                  </h3>

                  <p className="text-sm font-semibold text-accent-crimson font-sans mt-1">
                    {item.tagline}
                  </p>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-3 font-sans">
                    {item.desc}
                  </p>

                  <div className="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between">
                    <a
                      href={item.href}
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-accent-crimson hover:text-accent-hover"
                    >
                      <span>Explore Capability</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={item.workHref}
                      className="text-xs font-mono text-muted-foreground hover:text-foreground uppercase tracking-wider"
                    >
                      View Work →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Discipline Visualizer */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="h-full min-h-[440px] rounded-3xl border border-border-strong bg-surface-elevated p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                {activeDiscipline === "marketing" && (
                  <motion.div
                    key="marketing"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col justify-between h-full space-y-6"
                  >
                    {/* Visual Header */}
                    <div className="flex items-center justify-between border-b border-border-subtle pb-4">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-accent-crimson uppercase">
                        <BarChart3 className="w-4 h-4" />
                        Campaign Growth Architecture
                      </div>
                      <span className="text-[10px] font-mono uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
                        Live Attribution
                      </span>
                    </div>

                    {/* Simulated KPI Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl bg-surface-muted border border-border-subtle">
                        <span className="text-xs font-mono text-muted-foreground uppercase">
                          Average ROAS Target
                        </span>
                        <div className="text-3xl font-black font-display text-foreground mt-1">
                          4.85x
                        </div>
                        <span className="text-[11px] font-mono text-emerald-500">
                          ↑ Optimized conversion spend
                        </span>
                      </div>

                      <div className="p-4 rounded-2xl bg-surface-muted border border-border-subtle">
                        <span className="text-xs font-mono text-muted-foreground uppercase">
                          Attribution Accuracy
                        </span>
                        <div className="text-3xl font-black font-display text-foreground mt-1">
                          100%
                        </div>
                        <span className="text-[11px] font-mono text-accent-crimson">
                          Server-Side CAPI tracking
                        </span>
                      </div>
                    </div>

                    {/* Funnel Channels */}
                    <div className="space-y-2.5">
                      <span className="text-xs font-mono text-muted-foreground uppercase font-bold">
                        Multi-Channel Media Funnel
                      </span>
                      <div className="space-y-2">
                        {[
                          { channel: "Meta Ads (IG & FB)", share: "45%", color: "bg-rose-500" },
                          { channel: "Google Search & PMax", share: "35%", color: "bg-amber-500" },
                          { channel: "Marketplaces (Amazon/Swiggy)", share: "20%", color: "bg-cyan-500" },
                        ].map((c) => (
                          <div key={c.channel} className="space-y-1">
                            <div className="flex justify-between text-xs font-mono text-foreground/80">
                              <span>{c.channel}</span>
                              <span className="font-bold">{c.share}</span>
                            </div>
                            <div className="w-full h-2 rounded-full bg-surface-muted overflow-hidden">
                              <div
                                className={cn("h-full rounded-full", c.color)}
                                style={{ width: c.share }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-accent/5 border border-accent/20 flex items-center justify-between">
                      <span className="text-xs font-mono text-foreground">
                        Ready to scale your customer acquisition?
                      </span>
                      <MagneticButton href="/work/marketing" size="sm" variant="primary">
                        See Campaigns
                      </MagneticButton>
                    </div>
                  </motion.div>
                )}

                {activeDiscipline === "software" && (
                  <motion.div
                    key="software"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col justify-between h-full space-y-5"
                  >
                    {/* Visual Header */}
                    <div className="flex items-center justify-between border-b border-border-subtle pb-4">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-500 uppercase">
                        <Code2 className="w-4 h-4" />
                        Next.js &amp; TypeScript Architecture
                      </div>
                      <span className="text-[10px] font-mono uppercase bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 px-2 py-0.5 rounded border border-cyan-500/20 font-bold">
                        Edge Latency &lt;15ms
                      </span>
                    </div>

                    {/* Simulated Code Terminal */}
                    <div className="p-4 rounded-2xl bg-black/95 border border-border-strong text-xs font-mono text-white/90 space-y-2 overflow-x-auto shadow-inner">
                      <div className="flex items-center gap-1.5 pb-2 border-b border-white/10 text-white/60 text-[10px]">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                        <span className="ml-2">production-app.config.ts</span>
                      </div>
                      <p className="text-cyan-400 font-bold">
                        export const SystemConfig = &#123;
                      </p>
                      <p className="pl-4">framework: &quot;Next.js App Router&quot;,</p>
                      <p className="pl-4">inferenceEngine: &quot;ONNX On-Device Runtime&quot;,</p>
                      <p className="pl-4">aiPipeline: &quot;Google Gemini MultiModal&quot;,</p>
                      <p className="pl-4">realtimeProtocol: &quot;WebRTC Data Channels&quot;,</p>
                      <p className="pl-4 text-emerald-400">status: &quot;SHIPPED_TO_PRODUCTION&quot;,</p>
                      <p className="text-cyan-400 font-bold">&#125;;</p>
                    </div>

                    {/* Stack Highlights */}
                    <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                      <div className="p-2.5 rounded-xl bg-surface-muted border border-border-subtle">
                        <span className="text-foreground font-bold block">React Native</span>
                        <span className="text-[10px] text-muted-foreground">iOS &amp; Android</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-surface-muted border border-border-subtle">
                        <span className="text-foreground font-bold block">MongoDB</span>
                        <span className="text-[10px] text-muted-foreground">Indexed Storage</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-surface-muted border border-border-subtle">
                        <span className="text-foreground font-bold block">GraphQL API</span>
                        <span className="text-[10px] text-muted-foreground">Sub-50ms query</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 flex items-center justify-between">
                      <span className="text-xs font-mono text-foreground">
                        12+ production software products shipped.
                      </span>
                      <MagneticButton href="/work/software-development" size="sm" variant="primary">
                        View Products
                      </MagneticButton>
                    </div>
                  </motion.div>
                )}

                {activeDiscipline === "video" && (
                  <motion.div
                    key="video"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col justify-between h-full space-y-5"
                  >
                    {/* Visual Header */}
                    <div className="flex items-center justify-between border-b border-border-subtle pb-4">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-500 uppercase">
                        <Film className="w-4 h-4" />
                        In-House Cinematography &amp; Color
                      </div>
                      <span className="text-[10px] font-mono uppercase bg-amber-500/10 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded border border-amber-500/20 font-bold">
                        DaVinci Resolve Studio
                      </span>
                    </div>

                    {/* Filmstrip simulation */}
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-border-strong flex items-center justify-center p-4">
                      {/* Sprocket holes */}
                      <div className="absolute top-2 left-0 right-0 flex justify-between px-3 opacity-40">
                        {Array.from({ length: 8 }).map((_, i) => (
                          <div key={i} className="w-3 h-2 rounded-sm bg-white/50" />
                        ))}
                      </div>

                      <div className="text-center space-y-2 relative z-10">
                        <div className="w-12 h-12 rounded-full bg-accent-crimson text-white flex items-center justify-center mx-auto shadow-lg">
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        </div>
                        <div className="text-xs font-mono font-bold text-white uppercase tracking-widest">
                          9:16 Reels · 16:9 Docu Series
                        </div>
                        <div className="text-[10px] font-mono text-white/80">
                          Fashion · Food &amp; Beverage · Street Vox-Pop
                        </div>
                      </div>

                      <div className="absolute bottom-2 left-0 right-0 flex justify-between px-3 opacity-40">
                        {Array.from({ length: 8 }).map((_, i) => (
                          <div key={i} className="w-3 h-2 rounded-sm bg-white/50" />
                        ))}
                      </div>
                    </div>

                    {/* Production Checklist */}
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-accent-crimson" />
                        <span>Studio Lighting Rig</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-accent-crimson" />
                        <span>Kinetic Pacing Edits</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-accent-crimson" />
                        <span>Acoustic Foley Design</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-accent-crimson" />
                        <span>Chandigarh Field Shoots</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 flex items-center justify-between">
                      <span className="text-xs font-mono text-foreground">
                        Shoot, edit &amp; sound under one roof.
                      </span>
                      <MagneticButton href="/work/video-editing" size="sm" variant="primary">
                        Watch Reels
                      </MagneticButton>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
