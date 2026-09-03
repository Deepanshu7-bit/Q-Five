"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { verifiedClients } from "@/data/clients";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const marketingVerticals = [
  {
    title: "Real Estate",
    description: "Meta lead-gen campaigns turning property inquiries into qualified buyer consultations with intent-gated forms.",
    tags: "Prem Properties · Mehar Property",
  },
  {
    title: "Education & Study Abroad",
    description: "Full-funnel Meta & Google search ads for visa consultation and university admissions in Canada, UK, and Australia.",
    tags: "Final Flight · Study Portals",
  },
  {
    title: "Healthcare & Clinics",
    description: "Patient acquisition funnels with lookalike targeting, location radius ads, and continuous cost-per-lead optimization.",
    tags: "Kohli Hospital · Specialized Clinics",
  },
  {
    title: "Consumer Electronics",
    description: "Multi-dealer Meta campaigns for Sony Bravia displays, festive footfall promotions, and coordinated catalog ads.",
    tags: "Sony Dealer Network",
  },
  {
    title: "E-commerce Marketplaces",
    description: "Amazon Sponsored Ads, Flipkart Media, and quick-commerce Swiggy Instamart optimization with ROAS tracking.",
    tags: "Desi Cooks · Foodie Pitaara",
  },
  {
    title: "B2B & International Events",
    description: "Delegate pass registration and exhibitor lead acquisition across UK corporate directors and founders.",
    tags: "B2B Growth Expo (UK)",
  },
  {
    title: "SaaS & Software",
    description: "Google Search, Display, and Performance Max campaigns targeting high-intent B2B search terms with measurable ROI.",
    tags: "Developer & Ops SaaS",
  },
  {
    title: "Renewable Energy",
    description: "High-ticket commercial and residential solar installation leads targeted by rooftop ownership and electrical tariffs.",
    tags: "SolatNation · Power Sure",
  },
  {
    title: "Public & Civic Campaigns",
    description: "Meta awareness and reach planning with content scheduling compliant with platform political ad policies.",
    tags: "Regional Awareness",
  },
];

export function MarketingWallSection() {
  const [hoveredVertical, setHoveredVertical] = useState<number | null>(null);

  return (
    <section className="py-24 sm:py-32 bg-surface text-foreground border-y border-border-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          chapter="CHAPTER 05"
          eyebrow="Market Impact"
          title="Nine Industries."
          highlightTitle="One Tested Playbook."
          description="Different verticals, same rigor: understand customer psychology, architect high-speed funnels, test creative variations continuously, and report metrics transparently."
        />

        {/* Verticals Editorial Index */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {marketingVerticals.map((vert, i) => (
            <div
              key={vert.title}
              onMouseEnter={() => setHoveredVertical(i)}
              onMouseLeave={() => setHoveredVertical(null)}
              className={cn(
                "p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between select-none cursor-pointer",
                hoveredVertical === i
                  ? "bg-surface-elevated border-accent-crimson shadow-xl -translate-y-1"
                  : "bg-surface-muted/60 border-border hover:border-border-strong"
              )}
            >
              <div>
                <div className="flex items-center justify-between border-b border-border-subtle pb-3 mb-4">
                  <span className="text-xs font-mono font-bold text-accent-crimson">
                    0{i + 1}
                  </span>
                  <span className="text-[10px] font-mono uppercase text-muted-foreground">
                    {vert.tags}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight font-display text-foreground">
                  {vert.title}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground leading-relaxed font-sans">
                  {vert.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between text-xs font-mono text-muted-foreground">
                <span className="text-accent-crimson font-bold">Meta + Google Ads</span>
                <span>Active Verticals</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Client Logos Wall */}
        <div className="mt-20 sm:mt-28">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-crimson">
              Verified Partnerships
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase font-display text-foreground mt-2">
              Brands Grown By Qfive
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground font-sans mt-1">
              Official client brand portfolio representing over 15+ years of steady agency execution.
            </p>
          </div>

          {/* Logo Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {verifiedClients.map((client) => (
              <div
                key={client.name}
                className="group relative flex flex-col items-center justify-center p-5 rounded-2xl bg-surface-elevated border border-border hover:border-accent-crimson transition-all duration-300 min-h-[110px] shadow-sm hover:shadow-md"
              >
                {client.logo ? (
                  <div className="relative w-full h-12 flex items-center justify-center filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={140}
                      height={48}
                      className="max-h-10 w-auto object-contain"
                    />
                  </div>
                ) : (
                  <div className="text-center">
                    <span className="text-sm sm:text-base font-display font-black uppercase tracking-tight text-foreground/85 group-hover:text-accent-crimson transition-colors">
                      {client.name}
                    </span>
                  </div>
                )}
                <span className="text-[9px] font-mono text-muted-foreground tracking-wider uppercase mt-2 text-center">
                  {client.industry}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Marketing CTA */}
        <div className="mt-16 text-center">
          <MagneticButton href="/work/marketing" size="lg" variant="primary">
            Explore All Marketing Work &amp; Ads →
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
