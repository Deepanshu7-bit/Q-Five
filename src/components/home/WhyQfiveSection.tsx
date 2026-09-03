"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyQfiveSection() {
  const narrativePoints = [
    {
      num: "01",
      title: "One Team, Three Disciplines",
      headline: "No handoff friction. No vendor finger-pointing.",
      desc: "When the engineers building your checkout flow sit alongside the marketers running your Meta ads and the cinematographers shooting your product reels, every initiative moves in lockstep. Nothing falls between the cracks.",
    },
    {
      num: "02",
      title: "In-House, Start To Finish",
      headline: "Every shoot, every line of code, every campaign.",
      desc: "We don't outsource your core deliverables to anonymous third-party freelancers. From the initial technical scoping meeting to the final 4K color grade, you work with our own full-time Chandigarh studio specialists.",
    },
    {
      num: "03",
      title: "Software That Converts The Attention",
      headline: "Marketing creates demand. Software closes the deal.",
      desc: "Great ads are useless if your landing page takes 4 seconds to load or your app crashes during registration. We engineer production-grade web apps, mobile apps, and automated workflows built to convert marketing traffic.",
    },
    {
      num: "04",
      title: "Fifteen Years Steady",
      headline: "Long enough across categories to know what actually moves the needle.",
      desc: "Over 15+ years of continuous operating history across real estate, healthcare, education, consumer electronics, and SaaS. We bring seasoned strategic judgment that avoids expensive rookie mistakes.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-background text-foreground relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          chapter="CHAPTER 02"
          eyebrow="Why Qfive"
          title="Built To Be Trusted."
          highlightTitle="Not Just Noticed."
          description="Premium digital work isn't just about making loud claims — it's about building marketing, software, and video that holds up when someone looks closely."
        />

        {/* Vertically Staged Narrative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-12">
          {narrativePoints.map((point) => (
            <div
              key={point.num}
              className="group p-8 sm:p-10 rounded-3xl bg-surface border border-border-strong hover:border-accent-crimson transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Large Numeral */}
                <div className="flex items-center justify-between border-b border-border-subtle pb-4 mb-6">
                  <span className="text-3xl sm:text-4xl font-black font-display text-accent-crimson">
                    {point.num}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    Advantage
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight font-display text-foreground">
                  {point.title}
                </h3>

                <p className="mt-2 text-sm sm:text-base font-semibold text-accent-crimson font-sans">
                  {point.headline}
                </p>

                <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed font-sans">
                  {point.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-border-subtle/60 flex items-center justify-between text-xs font-mono text-muted-foreground">
                <span>CHANDIGARH STUDIO</span>
                <span className="text-accent-crimson">✦ VERIFIED PRINCIPLE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
