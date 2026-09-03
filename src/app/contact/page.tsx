import { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { agencyContactInfo } from "@/data/clients";
import { MapPin, Mail, Calendar, ArrowUpRight, Sparkles, MessageSquare, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Qfive — Start A Project with Chandigarh's In-House Agency",
  description:
    "Get in touch with Qfive Digital & Creative Studio. Plot No. 25, Industrial Area Phase I, Chandigarh. Email hello@qfive.in or book a direct 30-min strategy call.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Studio Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-accent-crimson uppercase mb-4">
                <Sparkles className="w-4 h-4" />
                GET IN TOUCH · DIRECT STUDIO ACCESS
              </div>
              <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight font-display text-foreground leading-[1]">
                Tell Us What <br />
                <span className="text-accent-crimson">You&apos;re Building.</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground font-sans leading-relaxed">
                Whether you need a full-scale web application, a multi-channel performance marketing engine, or a high-fashion video campaign — let&apos;s talk through your goals.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <div className="p-6 rounded-3xl bg-surface border border-border flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-surface-elevated border border-border text-accent-crimson flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground block">
                    Studio Headquarters
                  </span>
                  <p className="text-base font-display font-bold uppercase text-foreground mt-0.5">
                    Plot No. 25, Industrial Area Phase I
                  </p>
                  <p className="text-xs font-mono text-muted-foreground mt-0.5">
                    Chandigarh, 160002 · India
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-surface border border-border flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-surface-elevated border border-border text-accent-crimson flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground block">
                    Direct Email
                  </span>
                  <a
                    href="mailto:hello@qfive.in"
                    className="text-base font-display font-bold text-foreground hover:text-accent-crimson transition-colors block mt-0.5"
                  >
                    hello@qfive.in
                  </a>
                  <p className="text-xs font-mono text-muted-foreground mt-0.5">
                    Typical response within 24 hours
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-surface border border-border flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-surface-elevated border border-border text-accent-crimson flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="flex-grow">
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground block">
                    Direct Video Call
                  </span>
                  <a
                    href={agencyContactInfo.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-display font-bold text-foreground hover:text-accent-crimson transition-colors inline-flex items-center gap-1.5 mt-0.5"
                  >
                    <span>Book 30-Min Strategy Call</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <p className="text-xs font-mono text-muted-foreground mt-0.5">
                    Connect directly with a Qfive lead
                  </p>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-4 border-t border-border-subtle flex items-center gap-4 text-xs font-mono">
              <span className="text-muted-foreground uppercase">Follow Qfive:</span>
              {agencyContactInfo.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-accent-crimson hover:underline uppercase"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Progressive Project Builder Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
