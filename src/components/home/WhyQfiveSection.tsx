"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { verifiedStats } from "@/data/clients";
import { ShieldCheck, Cpu, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export function WhyQfiveSection() {
  const narrativePoints = [
    {
      icon: Users,
      num: "01",
      title: "One Team, Three Disciplines",
      headline: "Zero handoff friction. No vendor finger-pointing.",
      desc: "Marketing, custom software engineering, and video production work in the same physical room in Chandigarh. Every campaign and build moves in sync.",
    },
    {
      icon: ShieldCheck,
      num: "02",
      title: "100% In-House Accountability",
      headline: "Zero outsourced code. Zero phantom media buyers.",
      desc: "From initial system architecture to final 4K color grade, you collaborate directly with our full-time specialists who own your outcomes.",
    },
    {
      icon: Cpu,
      num: "03",
      title: "Software That Converts The Traffic",
      headline: "Marketing creates demand. Software closes the deal.",
      desc: "We build blazing-fast web applications, mobile platforms, and AI automations engineered to turn ad attention into customer revenue.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-background text-foreground relative overflow-hidden border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ─── Integrated Verified Track Record Banner ─── */}
        <div className="rounded-3xl bg-surface border border-border-strong p-8 sm:p-10 mb-16 shadow-lg shadow-black/[0.02] dark:shadow-none">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {verifiedStats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center sm:items-start text-center sm:text-left border-l-0 sm:border-l border-border-subtle sm:pl-6 first:border-l-0 first:pl-0"
              >
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-accent-crimson">
                  {stat.number}
                </span>
                <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-foreground mt-1.5">
                  {stat.label}
                </span>
                <span className="text-xs text-muted-foreground font-sans mt-0.5">
                  {stat.sublabel}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <SectionHeading
            chapter="CHAPTER 03"
            eyebrow="The In-House Edge"
            title="Built To Be Trusted."
            highlightTitle="Not Just Noticed."
            description="We bridge the gap between creative strategy and engineering rigor — delivering marketing, code, and content that converts."
            className="mb-0"
          />

          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-accent-crimson hover:text-accent-hover transition-colors shrink-0"
          >
            <span>Learn More About Studio</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3 Crisp Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {narrativePoints.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.num}
                className="group p-7 sm:p-8 rounded-3xl bg-surface border border-border-strong hover:border-accent-crimson transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-border-subtle pb-4 mb-5">
                    <div className="w-10 h-10 rounded-2xl bg-accent-crimson/10 text-accent-crimson flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground">
                      Pillar {point.num}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight font-display text-foreground">
                    {point.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm font-semibold text-accent-crimson font-sans">
                    {point.headline}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
                    {point.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                  <span>CHANDIGARH HQ</span>
                  <span className="text-accent-crimson font-semibold">✦ IN-HOUSE</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

