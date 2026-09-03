export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  deliverables: string[];
}

export interface DisciplineService {
  id: "marketing" | "software" | "video";
  number: string;
  title: string;
  tagline: string;
  headline: string;
  summary: string;
  philosophy: string;
  capabilities: string[];
  subServices: ServiceItem[];
  technologiesOrTools: string[];
  process: { step: string; title: string; desc: string }[];
  deliverablesHighlight: string[];
  ctaText: string;
}

export const servicesData: DisciplineService[] = [
  {
    id: "marketing",
    number: "01",
    title: "Marketing",
    tagline: "Get Seen. Get Recognized.",
    headline: "Performance Advertising Grounded in True Audience Psychology",
    summary:
      "We fuse quantitative ad media buying across Meta, Google, and Marketplaces with distinct, recognizable visual brand strategy. No vanity impressions — we engineer sustainable customer acquisition funnels that scale your revenue.",
    philosophy:
      "Premium marketing isn't just louder marketing — it's marketing that holds up when someone looks closely. We build creative that earns trust and funnels that convert attention into measurable revenue.",
    capabilities: [
      "Meta Ads (Facebook & Instagram)",
      "Google Search, Display & Performance Max",
      "YouTube Video Advertising",
      "Marketplace Ads (Amazon, Flipkart, Swiggy)",
      "Technical SEO & Core Web Vitals",
      "GA4, Search Console & Attribution",
      "Landing Page CRO & A/B Testing",
      "Retargeting & Lookalike Audience Models",
      "Budget & ROAS Scaling",
    ],
    subServices: [
      {
        id: "paid-acquisition",
        name: "Paid Media Acquisition & Performance",
        description:
          "End-to-end management of paid search, social, and programmatic channels. We build data-informed campaign structures with systematic A/B testing of messaging and audiences.",
        deliverables: [
          "Granular campaign setup & targeting matrix",
          "Continuous copy & creative variant testing",
          "Custom conversion API & server-side event tracking",
          "Weekly transparent ROAS & CPA performance dashboards",
        ],
      },
      {
        id: "brand-identity",
        name: "Brand Identity & Visual System",
        description:
          "Distinct brand identities that separate you from generic template competitors. We craft complete design language systems from logos to brand guidelines and ad design.",
        deliverables: [
          "Vector brand logo marks & lockups",
          "Comprehensive typography & color guidelines",
          "High-converting digital ad creative kits",
          "Stationery, packaging & physical collateral design",
        ],
      },
      {
        id: "growth-cro",
        name: "Conversion Rate Optimization (CRO)",
        description:
          "Eliminate friction between the first ad click and checkout or consultation inquiry. We refine user journey pathways, form design, and offer packaging.",
        deliverables: [
          "Friction audit & heatmap drop-off analysis",
          "Custom high-speed Next.js landing pages",
          "Multi-step qualified lead forms",
          "Direct CRM & webhook integrations",
        ],
      },
    ],
    technologiesOrTools: [
      "Meta Ads Manager",
      "Google Ads",
      "Google Analytics 4",
      "Google Tag Manager",
      "Amazon Ads",
      "Figma",
      "Hotjar",
      "GoHighLevel",
    ],
    process: [
      {
        step: "01",
        title: "Audience & Intent Research",
        desc: "We dissect customer demographics, pain triggers, and competitor whitespace before a single rupee of budget is spent.",
      },
      {
        step: "02",
        title: "Architecting the Funnel",
        desc: "Building high-speed landing experiences, ad copy hierarchies, and pixel tracking to capture high-intent users.",
      },
      {
        step: "03",
        title: "Multi-Variant Creative Testing",
        desc: "Deploying parallel creative angles, hooks, and formats to identify the lowest cost-per-acquisition winners.",
      },
      {
        step: "04",
        title: "Scaling & Honest Reporting",
        desc: "Reallocating budget to winning ad sets, eliminating wasted spend, and providing transparent metric reports.",
      },
    ],
    deliverablesHighlight: [
      "Targeted lead generation pipelines",
      "Optimized e-commerce ROAS",
      "High-converting creative design suites",
      "Clean attribution & CRM handoffs",
    ],
    ctaText: "Start A Marketing Project",
  },
  {
    id: "software",
    number: "02",
    title: "Software Development",
    tagline: "Built To Run Your Business. Not Just Represent It.",
    headline: "Production-Grade Web Applications, Mobile Apps & AI Systems",
    summary:
      "We design and engineer bespoke software that performs real business work. From high-throughput APIs and gamified mobile applications to multilingual CMS engines and intelligent AI workflow pipelines, we build systems that endure.",
    philosophy:
      "Software is the operational backbone of your company. It shouldn't just look pretty on desktop — it must be blindingly fast, fault-tolerant, accessible, and structured to scale gracefully as your userbase expands.",
    capabilities: [
      "High-Performance Next.js Web Applications",
      "Custom E-Commerce Architectures (Shopify & Headless)",
      "Cross-Platform Mobile Apps (React Native)",
      "AI Automations & LLM Pipelines (Gemini, OpenAI)",
      "Headless CMS (Payload, Prismic, Sanity)",
      "GraphQL & RESTful API Architectures",
      "Real-Time Systems (WebRTC, WebSockets, AudioWorklet)",
      "Cloud Infrastructure & Edge Deployments (Vercel, AWS)",
      "Browser Extensions (Chrome MV3)",
    ],
    subServices: [
      {
        id: "web-apps",
        name: "Custom Web Applications & SaaS Platforms",
        description:
          "End-to-end product engineering from Figma design to production infrastructure. Built on modern React/Next.js architectures with strict TypeScript typing.",
        deliverables: [
          "Full-stack Next.js/React system architecture",
          "Responsive, accessible design system implementation",
          "Role-based authentication & JWT session management",
          "Serverless database design (MongoDB, PostgreSQL)",
        ],
      },
      {
        id: "mobile-development",
        name: "Mobile App Development (iOS & Android)",
        description:
          "Native-feeling cross-platform mobile apps using React Native and Expo. Seamless offline sync, device hardware integrations, and on-device machine learning.",
        deliverables: [
          "Single-codebase iOS & Android applications",
          "On-device AI integration (ONNX Runtime)",
          "Push notifications, deep linking & in-app purchases",
          "Complete App Store and Google Play release management",
        ],
      },
      {
        id: "ai-automation",
        name: "AI Systems & Business Automations",
        description:
          "Automate repetitive manual operations with intelligent pipelines. We integrate cutting-edge LLMs (Gemini, Claude, GPT) and webhook workflow engines to replace manual data entry.",
        deliverables: [
          "Document extraction & multi-modal processing pipelines",
          "n8n / custom webhook automation workflows",
          "Client-side WebAssembly & privacy-first processing",
          "Automated CRM & multi-party email/SMS triggers",
        ],
      },
    ],
    technologiesOrTools: [
      "TypeScript",
      "Next.js",
      "React 19",
      "React Native",
      "MongoDB",
      "GraphQL",
      "Payload CMS",
      "ONNX",
      "WebRTC",
      "Vercel",
      "Tailwind CSS",
      "Google Gemini",
    ],
    process: [
      {
        step: "01",
        title: "Technical Scoping & Schema Design",
        desc: "Mapping out data entities, state flows, API boundaries, and third-party integrations before writing code.",
      },
      {
        step: "02",
        title: "Interactive Prototype & Component Architecture",
        desc: "Building a modular, typed component library and responsive user interfaces with immediate client feedback loops.",
      },
      {
        step: "03",
        title: "Backend Engineering & Edge Optimization",
        desc: "Implementing secure database indexing, caching layers, atomic writes, and background worker jobs.",
      },
      {
        step: "04",
        title: "Rigorous QA, Audits & Deployment",
        desc: "Automated test passes, accessibility checks, Core Web Vitals profiling, and zero-downtime CI/CD deployment.",
      },
    ],
    deliverablesHighlight: [
      "Blazing sub-second page loads",
      "Scalable database & API backends",
      "App Store-ready mobile apps",
      "Clean, documented TypeScript source code",
    ],
    ctaText: "Start A Development Project",
  },
  {
    id: "video",
    number: "03",
    title: "Video Production & Editing",
    tagline: "Every Frame, Polished.",
    headline: "Cinematic Visual Storytelling Built for Modern Attention",
    summary:
      "From on-location multi-camera field shoots in Chandigarh to high-fashion lookbooks, macro product showcases, and documentary series, we handle the entire production pipeline in-house: concept, direction, shoot, edit, sound, and color.",
    philosophy:
      "Video is the most visceral medium a brand possesses. A 15-second product reel requires surgical pacing, punchy sound design, and razor-sharp color grading to stop the scroll. We treat every single frame as a brand statement.",
    capabilities: [
      "On-Location & Studio Cinematography",
      "Vertical 9:16 Social Reels & Commercial Cuts",
      "High-Fashion & Lookbook Visuals",
      "Macro Food & Beverage Production",
      "Multi-Camera Interview & Vox-Pop Series",
      "Advanced Post-Production & Kinetic Editing",
      "Bespoke Sound Design & Acoustic Foley",
      "Color Grading (DaVinci Resolve)",
      "High-Resolution Product Photography",
    ],
    subServices: [
      {
        id: "reels-production",
        name: "Social Video & Product Reel Production",
        description:
          "High-impact short-form videos engineered specifically for TikTok, Instagram Reels, and YouTube Shorts. Hook viewers in the first 2 seconds and maintain engagement throughout.",
        deliverables: [
          "Concept storyboard & visual shot lists",
          "4K multi-angle on-location filming",
          "Dynamic kinetic cuts with custom motion graphics",
          "Platform-optimized export presets and thumbnails",
        ],
      },
      {
        id: "interview-series",
        name: "Interviews, Vox-Pops & Long-Form Stories",
        description:
          "Professional dialogue capture with pristine wireless audio, flattering multi-point lighting, and empathetic conversational flow for documentary and corporate series.",
        deliverables: [
          "Multi-camera interview setup & dedicated boom audio",
          "Pacing edits that eliminate dead space while preserving warmth",
          "B-roll insertion and ambient soundtrack integration",
          "Full subtitling and social teaser snippets",
        ],
      },
      {
        id: "post-production",
        name: "Post-Production, Color & Sound Design",
        description:
          "Elevate existing raw footage into a broadcast-quality production. Precision color grading matching brand palettes and custom multi-layer sound design.",
        deliverables: [
          "DaVinci Resolve cinematic color grading",
          "Multi-track audio mix & mastering with sound effects",
          "Pacing refinement and visual stabilization",
          "Asset delivery in all necessary aspect ratios (9:16, 16:9, 1:1)",
        ],
      },
    ],
    technologiesOrTools: [
      "DaVinci Resolve Studio",
      "Adobe Premiere Pro",
      "After Effects",
      "Sony Cinema Line Cameras",
      "GVM & Aputure Lighting",
      "Rode & Sennheiser Audio",
    ],
    process: [
      {
        step: "01",
        title: "Concept & Moodboard",
        desc: "Aligning on visual tone, color palette, pacing references, and shot lists tailored to the campaign goals.",
      },
      {
        step: "02",
        title: "The Shoot",
        desc: "Professional production execution in studio or on-location with cinema-grade cameras, lighting, and audio.",
      },
      {
        step: "03",
        title: "The Assembly & Edit",
        desc: "Cutting for rhythm, layering sound design, integrating motion typography, and grading for cinematic mood.",
      },
      {
        step: "04",
        title: "Master Delivery",
        desc: "Delivering crisp masters tailored for web headers, social channels, and ad platforms without compression artifacts.",
      },
    ],
    deliverablesHighlight: [
      "High-retention 9:16 short-form video",
      "Documentary & interview cuts",
      "Broadcast-grade color grading",
      "Studio product photography",
    ],
    ctaText: "Start A Video Project",
  },
];
