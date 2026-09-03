"use client";

import React from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatedLogo } from "@/components/ui/AnimatedLogo";
import { agencyContactInfo } from "@/data/clients";
import { MapPin, CheckCircle, ShieldCheck } from "lucide-react";

export function AboutTeaserSection() {
  return (
    <section className="py-24 sm:py-32 bg-background text-foreground relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Studio Visual Figure */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl bg-surface border border-border-strong p-8 flex flex-col items-center justify-between shadow-2xl overflow-hidden">
              {/* Coordinates Badge */}
              <div className="w-full flex items-center justify-between text-xs font-mono text-muted-foreground border-b border-border-subtle pb-3">
                <span className="text-accent-crimson font-bold">STUDIO HQ</span>
                <span>CHANDIGARH</span>
              </div>

              {/* Centered Animated Logo */}
              <div className="my-auto">
                <AnimatedLogo size={200} />
              </div>

              {/* Physical Studio Address */}
              <div className="w-full pt-4 border-t border-border-subtle text-center">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
                  Plot No. 25, Industrial Area Phase I
                </p>
                <p className="text-[11px] font-mono text-muted-foreground mt-0.5">
                  Chandigarh, 160002 · India
                </p>
              </div>
            </div>
          </div>

          {/* Right Brand Manifesto Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <SectionHeading
              chapter="CHAPTER 07"
              eyebrow="The Philosophy"
              title="Your Brand Deserves"
              highlightTitle="One Team, Not Three Vendors."
              description="Qfive is a Chandigarh-based digital studio built on strategy-led craft. For over fifteen years we've partnered with ambitious brands across industries, and learned the same lesson every time: brands grow fastest when marketing, software, and content aren't fighting each other."
              className="mb-8"
            />

            {/* In-House Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10">
              <div className="p-4 rounded-2xl bg-surface border border-border-subtle flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent-crimson flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-display font-bold uppercase text-foreground">
                    100% In-House Craft
                  </h4>
                  <p className="text-xs text-muted-foreground font-sans mt-0.5">
                    Zero outsourced code, zero phantom media buyers.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-surface border border-border-subtle flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-accent-crimson flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-display font-bold uppercase text-foreground">
                    15+ Years Track Record
                  </h4>
                  <p className="text-xs text-muted-foreground font-sans mt-0.5">
                    Steady operations across high-ticket categories.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton href="/about" size="lg" variant="primary">
                Read Our Story &amp; Principles →
              </MagneticButton>
              <MagneticButton href="/contact" size="lg" variant="outline">
                Visit Our Studio
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
