export type Discipline = "software" | "marketing" | "video";

export interface Project {
  id: string;
  slug: string;
  title: string;
  headline: string;
  discipline: Discipline;
  category: string;
  client?: string;
  industry: string;
  description: string;
  challenge?: string;
  solution?: string;
  outcomes?: string[];
  technologies?: string[];
  image: string;
  videoPoster?: string;
  videoSrc?: string;
  aspect?: "horizontal" | "vertical";
  liveUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
  metrics?: { label: string; value: string }[];
  proof?: string;
}

export const softwareProjects: Project[] = [
  {
    id: "gastro-genius",
    slug: "gastro-genius-challenge",
    title: "A Duolingo For Doctors",
    headline: "Gamified Board Exam-Prep Platform for Gastroenterologists",
    discipline: "software",
    category: "Healthtech · Mobile & API",
    client: "Gastro Genius Challenge",
    industry: "Healthcare & EdTech",
    description:
      "We engineered the backend, high-throughput GraphQL API, and admin CMS platform behind this medical quiz app: a verified bank of board-style clinical questions wrapped in an engaging gamified economy — hearts, streaks, 1-vs-1 duels, a daily fortune wheel, and live competitive leaderboards.",
    challenge:
      "Medical professionals have tight schedules and high expectations for responsiveness. The legacy architecture suffered from latency bottlenecks during peak evening study windows.",
    solution:
      "Engineered an optimization pass with compound MongoDB indexes, atomic reward write operations, and batched leaderboard lookups on Next.js & Payload CMS hosted on Vercel edge infrastructure.",
    outcomes: [
      "API response speed improved by 300% under high-concurrency load",
      "Live production deployment on Apple App Store & Google Play",
      "Full game economy with real-time multiplayer duels and streak preservation",
    ],
    technologies: ["Next.js", "Payload CMS", "MongoDB", "GraphQL", "Vercel", "TypeScript"],
    image: "/images/projects/gastro-genius-challenge.webp",
    liveUrl: "https://gastrogeniuschallenge.com",
    featured: true,
    proof: "Live on Apple App Store & Google Play",
    metrics: [
      { label: "API Speedup", value: "3x" },
      { label: "Availability", value: "99.99%" },
    ],
  },
  {
    id: "zema-fidelat",
    slug: "zema-fidelat",
    title: "Teaching A Script No Other App Teaches",
    headline: "Children's Language-Learning App with On-Device AI Handwriting Recognition",
    discipline: "software",
    category: "EdTech · Cross-Platform App",
    client: "Zema Fidelat",
    industry: "Education & AI",
    description:
      "Mainstream language apps skip Tigrinya's ancient Ge'ez script entirely. We built this complete ecosystem from the ground up: a React Native mobile application, a headless CMS curriculum engine, and a web platform covering 35 structured lessons and all 245 Ge'ez glyphs.",
    challenge:
      "Evaluating complex glyph strokes accurately on mobile devices without relying on slow or expensive cloud API roundtrips, while supporting low-bandwidth and offline environments.",
    solution:
      "Trained and embedded an on-device neural network (ONNX) that evaluates hand-traced letter strokes in real-time with sub-30ms inference. Built an automated vector generator to synthesize tracing guidelines directly from typography fonts.",
    outcomes: [
      "245 unique Ge'ez glyphs dynamically graded with on-device ONNX runtime",
      "Offline-first progress sync across family devices without data loss",
      "Official release on iOS App Store & Android Play Store",
    ],
    technologies: ["React Native (Expo)", "ONNX Runtime", "Payload CMS", "MongoDB", "TypeScript"],
    image: "/videos/projects/posters/zema-fidelat.webp",
    videoPoster: "/videos/projects/posters/zema-fidelat.webp",
    videoSrc: "/videos/projects/zema-fidelat.mp4",
    liveUrl: "https://zemafidelat.com",
    featured: true,
    proof: "Live iOS & Android Production Release",
    metrics: [
      { label: "Glyphs Mapped", value: "245" },
      { label: "On-Device Inference", value: "<30ms" },
    ],
  },
  {
    id: "subgen-ai",
    slug: "subgen-ai",
    title: "Subtitles That Understand Hinglish",
    headline: "Privacy-First In-Browser AI Auto-Captioning Tool for Indian Creators",
    discipline: "software",
    category: "AI Product · SaaS",
    client: "SubGen AI",
    industry: "Creator Economy & AI",
    description:
      "Most auto-caption SaaS products fail on Hindi-English code-switching and mandate huge video uploads to remote cloud servers. SubGen AI extracts and compresses audio entirely in-browser using WebAssembly, transmitting only compressed audio tokens to Gemini models.",
    challenge:
      "Heavy video uploads exhaust creator bandwidth and raise serious privacy concerns for unreleased video drafts.",
    solution:
      "Executed ffmpeg.wasm directly in browser threads, sending only lightweight audio buffers. Users manage their own API keys, securely encrypted server-side.",
    outcomes: [
      "Zero video file upload to servers — 100% on-device video rendering",
      "Tuned Hinglish vocabulary parsing with timestamped subtitle styling",
      "Open-source and live hosted production tool",
    ],
    technologies: ["Next.js", "Vercel AI SDK", "Google Gemini", "ffmpeg.wasm", "Clerk", "Tailwind CSS"],
    image: "/videos/projects/posters/subgenai.webp",
    videoPoster: "/videos/projects/posters/subgenai.webp",
    videoSrc: "/videos/projects/subgenai.mp4",
    liveUrl: "https://subgenai.ajaydevelops.in",
    sourceUrl: "https://github.com/ajay-develops/sub-gen-ai",
    featured: true,
    proof: "Live Product & Open Source",
    metrics: [
      { label: "Bandwidth Saved", value: "95%" },
      { label: "Privacy", value: "Client-Side" },
    ],
  },
  {
    id: "zyrasound",
    slug: "zyrasound",
    title: "Musicians In Sync, Continents Apart",
    headline: "Realtime Collaborative Jamming & Web MIDI Synthesizer Platform",
    discipline: "software",
    category: "Realtime Audio · Web Platform",
    client: "ZyraSound",
    industry: "Music Tech & WebRTC",
    description:
      "Streaming raw audio across the globe suffers intolerable acoustic latency. ZyraSound solves this by transmitting ultra-compact MIDI data packets over WebRTC data channels in under 15ms, with each client synthesising the collective performance locally against a synchronized clock.",
    challenge:
      "Sub-20ms audio latency constraints across distributed geographical internet connections.",
    solution:
      "Engineered browser-native instruments using the Web Audio API and custom AudioWorklets, paired with P2P WebRTC data mesh channels, loop recording, and instant account-free room invites.",
    outcomes: [
      "Ultra-low latency MIDI synchronization with zero acoustic feedback",
      "In-browser loop rendering and instant social audio publication",
      "Peer-to-peer audio/video chat alongside musical collaboration",
    ],
    technologies: ["TypeScript", "Next.js", "WebRTC", "Web Audio API", "AudioWorklet", "Web MIDI"],
    image: "/videos/projects/posters/zyrasound.webp",
    videoPoster: "/videos/projects/posters/zyrasound.webp",
    videoSrc: "/videos/projects/zyrasound.mp4",
    liveUrl: "https://zyrasound.ajaydevelops.in",
    featured: true,
    proof: "Live Production Audio Web App",
    metrics: [
      { label: "Packet Latency", value: "<15ms" },
      { label: "Audio Engine", value: "AudioWorklet" },
    ],
  },
  {
    id: "oboe-orders",
    slug: "oboe-orders",
    title: "Purchase Orders That File Themselves",
    headline: "AI-Powered PDF Extraction & Automated Supplier Reconciliation Pipeline",
    discipline: "software",
    category: "AI Automation · Operations Tooling",
    client: "Oboe Distribution",
    industry: "B2B Logistics & Automation",
    description:
      "A high-volume industrial distributor spent hours re-typing complex purchase order PDFs by hand, splitting line items across separate manufacturers and tracking deliveries via email. We built an end-to-end automated reconciliation portal with multi-party approval workflows.",
    challenge:
      "Eliminating manual data entry errors and multi-supplier confirmation delays.",
    solution:
      "Built a multimodal pipeline with Google Gemini to extract unstructured line items into validated database schemas, connected to n8n webhook workflows for automated supplier chasing.",
    outcomes: [
      "Reduced purchase order processing time from 45 minutes to 90 seconds",
      "Side-by-side visual document comparison and automated supplier reminders",
      "Direct GoHighLevel CRM and ERP database sync",
    ],
    technologies: ["Next.js", "Google Gemini", "n8n", "MongoDB", "GoHighLevel", "Tailwind CSS"],
    image: "/images/projects/oboe-orders.webp",
    liveUrl: "https://oboe-orders.vercel.app",
    featured: false,
    proof: "Delivered & Powering Daily Operations",
    metrics: [
      { label: "Time Saved", value: "92%" },
      { label: "Accuracy", value: "99.4%" },
    ],
  },
  {
    id: "scale-analytics",
    slug: "scale-analytics",
    title: "Reporting Layer Over Revenue-Cycle Data",
    headline: "Enterprise Healthcare RCM Analytics Portal with Scoped Power BI Embedding",
    discipline: "software",
    category: "Healthtech · Enterprise Analytics",
    client: "Scale Healthcare Solutions",
    industry: "Healthcare Analytics",
    description:
      "Engineered an enterprise analytics portal granting healthcare revenue-cycle management teams granular, role-aware visibility over insurance claims, denials, receivables, and team throughput without exposing raw database tables.",
    challenge:
      "Ensuring strict HIPAA compliance, tenant-scoped data isolation, and instant dashboard loading without Power BI initialization delays.",
    solution:
      "Implemented a secure Express & Next.js session bridge with cryptographically verified JWT tokens, rotating refresh cookies, and background report cache-warming.",
    outcomes: [
      "Zero first-hit load delays through automated report cache warming",
      "Strict multi-tenant role-based access control and organizational scoping",
      "Power BI embedded analytics with custom responsive container controls",
    ],
    technologies: ["Next.js", "Express", "MongoDB", "Power BI Embedded", "JWT", "TypeScript"],
    image: "/images/projects/scale-analytics.webp",
    featured: false,
    proof: "Healthcare RCM Enterprise Platform",
    metrics: [
      { label: "Security", value: "HIPAA-Ready" },
      { label: "Cache Hit Rate", value: "98%" },
    ],
  },
  {
    id: "logopsi-estudios",
    slug: "logopsi-estudios",
    title: "Structured Learning Between Tutors & Kids",
    headline: "Multilingual Educational Platform for Interactive Quizzes and Feedback",
    discipline: "software",
    category: "EdTech · Web Platform",
    client: "Logopsi Estudios",
    industry: "Education",
    description:
      "A cross-border educational platform coordinating reading assignments, interactive comprehension quizzes, and structured tutor-student feedback across English, French, and Spanish.",
    challenge:
      "Creating an intuitive interface for young children while providing granular evaluation tools and real-time chat for educators.",
    solution:
      "Designed field-level permissions separating prompt composition from answer submission. Built-in Stream Chat with educator moderation controls and automated status lifecycles.",
    outcomes: [
      "Seamless trilingual internationalization (EN / FR / ES)",
      "Automated assignment progression upon quiz completion",
      "Integrated real-time messaging and grading workflows",
    ],
    technologies: ["Next.js", "React 19", "Payload CMS", "MongoDB", "Stream Chat", "TypeScript"],
    image: "/images/projects/logopsi-estudios.webp",
    featured: false,
    proof: "Live Trilingual EdTech Product",
  },
  {
    id: "webpage-showcase",
    slug: "webpage-showcase",
    title: "A Camera Dolly For Your Browser",
    headline: "Open-Source Chrome Extension for Smooth, Repeatable Product Walkthroughs",
    discipline: "software",
    category: "Developer Tool · Chrome MV3",
    client: "Open Source Tool",
    industry: "Developer Tooling",
    description:
      "Recording product demos by hand is erratic. This Manifest V3 extension automates smooth, eased cinematic browser scrolling with customizable waypoints, auto section detection, and per-site pause timing.",
    technologies: ["TypeScript", "Chrome MV3", "WXT", "Vite", "Vitest"],
    image: "/videos/projects/posters/webpage-showcase.webp",
    videoPoster: "/videos/projects/posters/webpage-showcase.webp",
    videoSrc: "/videos/projects/webpage-showcase.mp4",
    liveUrl: "https://chromewebstore.google.com/detail/jfgegogopcpjgmenieojcjnppikopdag",
    sourceUrl: "https://github.com/ajay-develops/webpage-showcase-chrome-extension",
    featured: false,
    proof: "Live on Chrome Web Store",
  },
  {
    id: "medical-marketing-cms",
    slug: "medical-marketing-cms",
    title: "One Platform, Every Clinic's Campaign",
    headline: "Bilingual Multi-Tenant Headless CMS for Medical & Legal Lead Generation",
    discipline: "software",
    category: "Martech · Multi-Tenant CMS",
    client: "Healthcare Marketing Group",
    industry: "Healthcare & Legal",
    description:
      "A high-performance Next.js and Prismic architecture enabling non-technical growth teams to launch localized landing pages for clinics and legal practices with unified analytics and attribution.",
    technologies: ["Next.js", "Prismic CMS", "Vercel", "Google Tag Manager", "TypeScript"],
    image: "/images/projects/medical-marketing.webp",
    featured: false,
    proof: "Powers Multiple Medical & Legal Brands",
  },
  {
    id: "whatsapp-crm-automator",
    slug: "whatsapp-crm-automator",
    title: "CRM-Triggered WhatsApp Messaging",
    headline: "High-Throughput Automation Bridge for CRM Workflow Triggers",
    discipline: "software",
    category: "Automation · Open Source",
    client: "Open Source Tool",
    industry: "Martech & CRM",
    description:
      "An open-source bridge allowing CRMs like GoHighLevel and HubSpot to trigger transactional WhatsApp messages with randomized copy variations and per-session rate limits.",
    technologies: ["Node.js", "Chrome Extension", "TypeScript", "WebSocket", "Express"],
    image: "/videos/projects/posters/whatsapp-crm-automator.webp",
    videoPoster: "/videos/projects/posters/whatsapp-crm-automator.webp",
    videoSrc: "/videos/projects/whatsapp-crm-automator.mp4",
    featured: false,
    proof: "Open Source CRM Tooling",
  },
];

export const marketingProjects: Project[] = [
  {
    id: "mkt-real-estate",
    slug: "real-estate-performance",
    title: "High-Intent Property Lead Engines",
    headline: "Meta Lead-Generation Campaigns Converting High-Ticket Real Estate Inquiries",
    discipline: "marketing",
    category: "Performance Marketing · Meta Ads",
    client: "Prem Properties & Mehar Property Advisor",
    industry: "Real Estate",
    description:
      "Structured geographic and demographic audience funnels targeting active investors and home buyers. Utilizes customized Meta Instant Forms with qualifying micro-questions to filter serious buyers before sales handoff.",
    technologies: ["Meta Ads Manager", "Instant Forms", "GA4", "Retargeting", "Custom Audiences"],
    image: "/logos/clients/prem-properties.webp",
    featured: true,
    outcomes: [
      "Qualified cost-per-lead reduced through intent-gated form friction",
      "Automated lead routing into WhatsApp & CRM within 10 seconds",
      "Dynamic creative testing across floor plans, video walk-throughs, and location highlights",
    ],
  },
  {
    id: "mkt-sony-bravia",
    slug: "sony-bravia-dealer-network",
    title: "Omnichannel Dealer Network Marketing",
    headline: "Multi-Location Meta & Social Retargeting Across Consumer Electronics Retail",
    discipline: "marketing",
    category: "Paid Social & Retargeting",
    client: "Sony Dealer Network",
    industry: "Consumer Electronics",
    description:
      "Coordinated paid acquisition across dealer showrooms promoting Sony Bravia displays. Geo-fenced radius targeting around retail clusters combined with festive promotion spikes and trade-in offers.",
    technologies: ["Meta Ads", "Geo-Fencing", "Catalog Ads", "Brand Asset Management"],
    image: "/logos/clients/sagar-ratna.svg",
    featured: true,
    outcomes: [
      "Footfall traffic surge driven during regional festival promotions",
      "Consistent brand aesthetic maintained across independent dealer handles",
      "Hyper-localized ad variations with custom dealer address callouts",
    ],
  },
  {
    id: "mkt-education",
    slug: "education-study-abroad",
    title: "Global Education & Immigration Funnels",
    headline: "Full-Funnel Meta & Google Ads for International Study Abroad Programs",
    discipline: "marketing",
    category: "Search & Social Performance",
    client: "Final Flight & Educational Partners",
    industry: "Education & Study Abroad",
    description:
      "End-to-end performance engine capturing student leads aspiring to study in Canada, UK, and Australia. Search intent captures high-urgency queries while social creative builds trust through student visa success stories.",
    technologies: ["Google Search", "Meta Ads", "Landing Page CRO", "Pixel Tracking", "GA4"],
    image: "/logos/clients/power-sure.webp",
    featured: true,
    outcomes: [
      "A/B-tested landing pages boosting form completion rate",
      "Conversion tracking mapped directly to visa consultation appointments",
      "Seasonal enrollment campaign scaling with budget reallocation to top performing countries",
    ],
  },
  {
    id: "mkt-marketplaces",
    slug: "ecommerce-marketplaces",
    title: "Marketplace Advertising & Listing Optimization",
    headline: "Amazon, Flipkart, and Quick-Commerce Ad Management for F&B Brands",
    discipline: "marketing",
    category: "Retail Media & E-Commerce",
    client: "Desi Cooks, Foodie Pitaara, Masanzo",
    industry: "E-commerce & F&B",
    description:
      "Comprehensive retail media management across Amazon Sponsored Products, Flipkart Ads, and Swiggy Instamart banner inventory paired with A+ content copywriting and keyword indexing.",
    technologies: ["Amazon Ads", "Flipkart Media", "Swiggy Instamart Ads", "ROAS Modeling"],
    image: "/logos/clients/desi-cooks.webp",
    featured: false,
    outcomes: [
      "ACOS optimized while growing organic search rank across high-volume categories",
      "High-converting lifestyle imagery and product bundle listings",
      "Real-time budget management synced with inventory stocking levels",
    ],
  },
  {
    id: "mkt-renewable",
    slug: "renewable-energy-solar",
    title: "Commercial & Residential Solar Funnels",
    headline: "High-Ticket Lead Generation for Solar Installation Providers",
    discipline: "marketing",
    category: "Meta Ads & Lead Gen",
    client: "SolatNation & Power Sure",
    industry: "Renewable Energy",
    description:
      "Targeted lead acquisition campaigns aimed at commercial factory owners and residential homeowners looking to offset rising electricity tariffs with solar installations.",
    technologies: ["Meta Ads", "Instant Experience", "Geo-Demographic Filtering", "CRM Integration"],
    image: "/logos/clients/solatnation.webp",
    featured: false,
    outcomes: [
      "Roof-size and bill qualification questions embedded into ad funnels",
      "High-ticket inquiry pipeline delivered to field sales engineers",
    ],
  },
  {
    id: "mkt-b2b-expo",
    slug: "uk-b2b-growth-expo",
    title: "International B2B Event Registration",
    headline: "Audience Segmentation & Retargeting for UK Business Growth Expo",
    discipline: "marketing",
    category: "B2B Lead Generation",
    client: "B2B Growth Expo (UK)",
    industry: "B2B & Events",
    description:
      "Laser-focused audience targeting across UK business owners, founders, and corporate directors to drive attendee pass bookings and exhibitor booth inquiries.",
    technologies: ["LinkedIn Ads", "Meta Ads", "Email Nurturing", "Conversion APIs"],
    image: "/logos/clients/b2b-growth-expo.webp",
    featured: false,
    outcomes: [
      "Target delegate registration targets achieved weeks ahead of event date",
      "High ROI exhibitor package inquiries generated for event organizers",
    ],
  },
];

export const videoProjects: Project[] = [
  {
    id: "vid-streetwear",
    slug: "streetwear-lookbook",
    title: "Streetwear Lookbook",
    headline: "High-Energy Urban Fashion Shoot & Editorial Rhythm Edit",
    discipline: "video",
    category: "Fashion · Shoot & Edit",
    industry: "Apparel & Lifestyle",
    description:
      "Full location production and post-production for an apparel drop: fast-paced cuts, speed-ramping, bespoke typography callouts, and audio design matching contemporary street aesthetics.",
    image: "/videos/posters/streetwear-lookbook.webp",
    videoPoster: "/videos/posters/streetwear-lookbook.webp",
    videoSrc: "/videos/streetwear-lookbook.mp4",
    aspect: "vertical",
    featured: true,
  },
  {
    id: "vid-skatepark",
    slug: "skate-park-fashion-edit",
    title: "Skate Park Fashion Edit",
    headline: "Dynamic Motion Tracking & Kinetic Cut for Youth Apparel",
    discipline: "video",
    category: "Fashion · Shoot & Edit",
    industry: "Lifestyle & Action",
    description:
      "Action-focused multi-angle shoot capturing garments in real movement. Sound designed with natural environmental textures, skateboard impact cues, and gritty color grading.",
    image: "/videos/posters/skate-park-fashion.webp",
    videoPoster: "/videos/posters/skate-park-fashion.webp",
    videoSrc: "/videos/skate-park-fashion.mp4",
    aspect: "vertical",
    featured: true,
  },
  {
    id: "vid-product-feature",
    slug: "weekend-tracks-product",
    title: "Product Feature Reel",
    headline: "Macro Fabric Details & Stylized Studio Product Showcase",
    discipline: "video",
    category: "Fashion · Studio Edit",
    industry: "Apparel & Accessories",
    description:
      "Macro lens studio cinematography highlighting fabric textures, stitch quality, zipper hardware, and garment silhouette for digital e-commerce ads.",
    image: "/videos/posters/weekend-tracks-product.webp",
    videoPoster: "/videos/posters/weekend-tracks-product.webp",
    videoSrc: "/videos/weekend-tracks-product.mp4",
    aspect: "vertical",
    featured: true,
  },
  {
    id: "vid-accessories",
    slug: "tortoise-bag-feature",
    title: "Accessories Feature Reel",
    headline: "Luxury Bag Craftsmanship & Material Highlight Video",
    discipline: "video",
    category: "Accessories · Shoot & Edit",
    industry: "Luxury Goods",
    description:
      "Tactile, slow-burn lighting and smooth motorized slider passes showcasing leather grain, interior compartments, and structural durability.",
    image: "/videos/posters/tortoise-bag-feature.webp",
    videoPoster: "/videos/posters/tortoise-bag-feature.webp",
    videoSrc: "/videos/tortoise-bag-feature.mp4",
    aspect: "vertical",
    featured: false,
  },
  {
    id: "vid-restaurant-chef",
    slug: "brooklyn-chef-kitchen",
    title: "Restaurant Kitchen Feature",
    headline: "Sensory Culinary Storytelling & Culinary Precision Cut",
    discipline: "video",
    category: "Food & Beverage · Shoot & Edit",
    industry: "Hospitality & Dining",
    description:
      "Atmospheric documentary-style kitchen capture: pan sizzle, knife precision, plating aesthetics, and warm ambient dining room vibes.",
    image: "/videos/posters/brooklyn-chef-kitchen.webp",
    videoPoster: "/videos/posters/brooklyn-chef-kitchen.webp",
    videoSrc: "/videos/brooklyn-chef-kitchen.mp4",
    aspect: "vertical",
    featured: false,
  },
  {
    id: "vid-hospitality",
    slug: "tiz-hospitality-moment",
    title: "Hospitality Moment",
    headline: "Atmospheric Cocktail Craft & Evening Ambience",
    discipline: "video",
    category: "Food & Beverage · Shoot & Edit",
    industry: "Hospitality",
    description:
      "Sensory beverage cinematography capturing cocktail pouring, ice crystal detail, garnishes, and intimate bar interior ambience.",
    image: "/videos/posters/tiz-hospitality-moment.webp",
    videoPoster: "/videos/posters/tiz-hospitality-moment.webp",
    videoSrc: "/videos/tiz-hospitality-moment.mp4",
    aspect: "vertical",
    featured: false,
  },
  {
    id: "vid-independence-street",
    slug: "independence-day-street-series",
    title: "Independence Day Street Series",
    headline: "On-Location Vox-Pop Series with Real Chandigarh Citizens",
    discipline: "video",
    category: "Interviews · Chandigarh Production",
    industry: "Culture & Public Series",
    description:
      "Multi-camera field production capturing spontaneous, heartwarming public reflections across sectors in Chandigarh. Crisp boom audio and rhythmic conversational editing.",
    image: "/videos/posters/independence-day-street-series.webp",
    videoPoster: "/videos/posters/independence-day-street-series.webp",
    videoSrc: "/videos/independence-day-street-series.mp4",
    aspect: "horizontal",
    featured: true,
  },
  {
    id: "vid-campus-life",
    slug: "campus-life-feature",
    title: "Campus Life Feature",
    headline: "Multi-Location University Story & Student Experience",
    discipline: "video",
    category: "Documentary · Shoot & Edit",
    industry: "Higher Education",
    description:
      "Comprehensive documentary capturing modern classrooms, laboratory research, campus sports, and student perspectives.",
    image: "/videos/posters/campus-life-feature.webp",
    videoPoster: "/videos/posters/campus-life-feature.webp",
    videoSrc: "/videos/campus-life-feature.mp4",
    aspect: "horizontal",
    featured: false,
  },
  {
    id: "vid-culture-vox",
    slug: "culture-comparison-vox-pop",
    title: "Culture Comparison Vox-Pop",
    headline: "Engaging Street Interview Series Edited for Pacing & Hook Retention",
    discipline: "video",
    category: "Interview Series · Fast Cut",
    industry: "Digital Media",
    description:
      "Fast-paced street interview series engineered for social hook rate: immediate topic introduction, humorous sound effects, and rapid perspective contrast.",
    image: "/videos/posters/culture-comparison-vox-pop.webp",
    videoPoster: "/videos/posters/culture-comparison-vox-pop.webp",
    videoSrc: "/videos/culture-comparison-vox-pop.mp4",
    aspect: "horizontal",
    featured: false,
  },
  {
    id: "vid-hill-station",
    slug: "hill-station-travel-vox-pop",
    title: "Hill-Station Travel Vox-Pop",
    headline: "On-Location Travel & Tourist Reflections",
    discipline: "video",
    category: "Travel & Culture · Outdoor Shoot",
    industry: "Tourism & Lifestyle",
    description:
      "Cinematic mountain backdrop interviews capturing traveler stories, local road trip culture, and scenic drone establishing shots.",
    image: "/videos/posters/hill-station-travel-vox-pop.webp",
    videoPoster: "/videos/posters/hill-station-travel-vox-pop.webp",
    videoSrc: "/videos/hill-station-travel-vox-pop.mp4",
    aspect: "horizontal",
    featured: false,
  },
];

export const allProjects: Project[] = [
  ...softwareProjects,
  ...marketingProjects,
  ...videoProjects,
];
