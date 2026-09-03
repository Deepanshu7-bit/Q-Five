import { Metadata } from "next";
import { AnimatedLogo } from "@/components/ui/AnimatedLogo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { CredibilityStats } from "@/components/home/CredibilityStats";
import { agencyContactInfo } from "@/data/clients";
import { MapPin, CheckCircle, ShieldCheck, HeartHandshake, Zap, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "About Qfive — Chandigarh's In-House Digital Studio",
  description:
    "Qfive is a Chandigarh-based digital studio built on strategy-led craft. 15+ years across industries bringing marketing, software development, and video production under one in-house team.",
};

const studioPrinciples = [
  {
    icon: Compass,
    title: "Strategy Before Production",
    desc: "We don't write a line of code or launch an ad campaign without understanding the commercial unit economics and competitive whitespace first.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Outsourcing",
    desc: "Every design frame, every GraphQL resolver, and every color grade is authored by our full-time team inside our Chandigarh studio.",
  },
  {
    icon: Zap,
    title: "Engineering That Works Hard",
    desc: "Software isn't a digital brochure. We build tools, APIs, and platforms engineered to automate operations and convert marketing demand into revenue.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Partnership",
    desc: "Over 15+ years of continuous operation. We treat our clients as long-term collaborators, maintaining and scaling systems well past launch day.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-background text-foreground">
      {/* Hero Brand Manifesto */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-accent-crimson uppercase">
              ABOUT QFIVE · CHANDIGARH STUDIO
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight font-display text-foreground leading-[1]">
              Your Brand Deserves <br />
              <span className="text-accent-crimson">One Team, Not Three.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-sans">
              Qfive was founded on a simple realization: modern digital brands are held back by fragmented agency ecosystems. When your marketing team, engineering team, and content team operate in silos, messaging dilutes, timelines slip, and accountability disappears.
            </p>
            <p className="text-base sm:text-lg text-foreground/90 font-sans leading-relaxed">
              We brought all three disciplines together under one in-house studio in Chandigarh. Today, our engineers, media buyers, and cinematographers work in immediate physical proximity — turning creative strategy into measurable business outcomes.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-8 rounded-3xl bg-surface border border-border-strong shadow-2xl flex flex-col items-center">
              <AnimatedLogo size={280} />
              <div className="mt-6 pt-4 border-t border-border-subtle text-center w-full">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-crimson block">
                  Studio Headquarters
                </span>
                <p className="text-xs font-mono text-muted-foreground mt-1">
                  {agencyContactInfo.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Credibility Stats */}
      <CredibilityStats />

      {/* Studio Core Principles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <SectionHeading
          chapter="OUR VALUES"
          eyebrow="Operating Principles"
          title="How We Work."
          highlightTitle="What We Stand For."
          description="A decade and a half of steady digital execution has taught us the non-negotiables of building lasting digital products."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {studioPrinciples.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-3xl bg-surface border border-border hover:border-accent-crimson transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-surface-elevated border border-border text-accent-crimson flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-display font-black uppercase text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base text-muted-foreground leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-border-subtle flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span>QFIVE PRINCIPLE 0{idx + 1}</span>
                  <span className="text-accent-crimson">✦ IN-HOUSE</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Studio Location Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-surface-elevated border border-border-strong shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="space-y-4 max-w-xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-crimson flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Chandigarh Studio Space
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight font-display text-foreground">
              Visit Us In Industrial Area Phase I.
            </h2>
            <p className="text-base text-muted-foreground font-sans">
              Our studio houses our development workstations, editing suites, audio capture setup, and strategy conference room. We welcome founders and marketing leaders for in-person project roadmapping sessions.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <MagneticButton href="/contact" size="lg" variant="primary">
              Schedule A Studio Visit
            </MagneticButton>
            <MagneticButton href="mailto:hello@qfive.in" size="lg" variant="outline">
              Email hello@qfive.in
            </MagneticButton>
          </div>
        </div>
      </div>
    </div>
  );
}
