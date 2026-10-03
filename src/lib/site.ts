export const SITE = {
  name: "Contractor Insurance Info",
  legalName: "Contractors Choice Agency",
  domain: "contractorinsuranceinfo.com",
  url: "https://contractorinsuranceinfo.com",
  tagline: "The Definitive Resource for Contractor Insurance",
  description:
    "Contractor Insurance Info — the definitive contractor insurance resource. GL, professional liability, workers' comp, commercial auto, umbrella, bonds, and E&O explained. All 50 states. Get a quote in 15 minutes.",
  phone: "844-967-5247",
  phoneHref: "tel:+18449675247",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Rd, Suite #104",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8 am–5 pm MST",
  claimsSla: "Same-day claims reporting assistance",
  quoteSla: "Quotes in approximately 15 minutes",
  statesLicensed: 50,
} as const;

export const BRAND = {
  brandShort: "Contractor Insurance Info",
  brandSub: "Contractors Choice Agency",
  nicheShort: "contractor",
  nicheCap: "Contractor",
  nichePlural: "contractors",
  nichePluralCap: "Contractors",
  operator: "contractor",
  operatorCap: "Contractor",
  industry: "contracting",
  industryCap: "Contracting",
  audience: "contractors",
  audienceCap: "Contractors",
  ownerTitle: "Licensed Insurance Agent",
  regionPill: "All 50 States",
  serviceSuffix: "for Contractors",
} as const;

export const NAV_LINKS = [
  { label: "Coverage Types", href: "/services" },
  { label: "Coverage Area", href: "/coverage" },
  { label: "Resources", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "general-liability",
    title: "General Liability",
    short: "GL & Completed Ops",
    description:
      "Third-party bodily injury, property damage, and completed-operations protection — the foundational policy every contractor must carry and understand.",
    icon: "ShieldCheck",
    keywords: [
      "general liability insurance contractor",
      "contractor GL coverage explained",
      "completed operations insurance",
      "contractor liability guide",
    ],
  },
  {
    slug: "professional-liability",
    title: "Professional Liability",
    short: "E&O / Prof. Liability",
    description:
      "Errors and omissions coverage for design-build, consulting, and professional services — what GL doesn't cover and why you may need it.",
    icon: "FileCheck",
    keywords: [
      "professional liability insurance contractor",
      "contractor E&O insurance explained",
      "errors omissions construction guide",
      "design build liability",
    ],
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    short: "Workers' Comp",
    description:
      "Wage replacement and medical benefits for injured crew members — class codes, experience mods, and what contractors need to know.",
    icon: "HardHat",
    keywords: [
      "workers comp contractor guide",
      "construction workers compensation explained",
      "contractor workers comp class codes",
      "experience modification factor",
    ],
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto",
    short: "Commercial Auto",
    description:
      "Coverage for contractor vehicles, trucks, trailers, and hired/non-owned auto — when personal auto policies fall short.",
    icon: "Truck",
    keywords: [
      "commercial auto insurance contractor guide",
      "contractor truck insurance explained",
      "hired non-owned auto contractor",
      "fleet insurance contractor",
    ],
  },
  {
    slug: "commercial-umbrella",
    title: "Commercial Umbrella",
    short: "Umbrella",
    description:
      "Excess liability limits above GL, auto, and employers liability — how umbrella works and when subcontracts require it.",
    icon: "Umbrella",
    keywords: [
      "commercial umbrella contractor explained",
      "excess liability contractor guide",
      "umbrella policy construction",
      "contractor umbrella insurance",
    ],
  },
  {
    slug: "surety-bonds",
    title: "Surety Bonds",
    short: "Bonds",
    description:
      "License bonds, performance bonds, and payment bonds — what they are, when they're required, and how they differ from insurance.",
    icon: "Award",
    keywords: [
      "contractor surety bond explained",
      "contractor license bond guide",
      "performance bond information",
      "payment bond contractor",
    ],
  },
  {
    slug: "tools-equipment",
    title: "Tools & Equipment",
    short: "Tools & Equipment",
    description:
      "Inland marine coverage for contractor tools — what commercial property misses and how tools coverage actually works.",
    icon: "Wrench",
    keywords: [
      "tools and equipment insurance guide",
      "contractor tools coverage explained",
      "inland marine contractor information",
      "jobsite tool theft insurance",
    ],
  },
] as const;

export type ServiceSlug = (typeof SERVICES)[number]["slug"];

export const LOCATIONS = [
  {
    slug: "texas",
    name: "Texas",
    region: "South Central",
    blurb:
      "Texas contractors navigate a massive construction market across Dallas-Fort Worth, Houston, Austin, and San Antonio. We provide contractor insurance information and quotes specific to Texas requirements across every trade.",
  },
  {
    slug: "california",
    name: "California",
    region: "Pacific Coast",
    blurb:
      "California has strict contractor licensing and insurance requirements. We provide comprehensive contractor insurance information and placement for CA contractors across the Bay Area, Los Angeles, and San Diego.",
  },
  {
    slug: "florida",
    name: "Florida",
    region: "Southeast",
    blurb:
      "Florida's active construction and storm-restoration market demands comprehensive contractor insurance programs. We serve Florida contractors statewide with information and coverage across all trades.",
  },
  {
    slug: "southeast",
    name: "Southeast",
    region: "Multi-State",
    blurb:
      "The Southeast construction boom drives demand for specialty contractor insurance. We provide information and coverage for contractors across GA, NC, SC, TN, AL, and MS.",
  },
  {
    slug: "midwest",
    name: "Midwest",
    region: "Multi-State",
    blurb:
      "Midwest contractors face diverse project types from commercial to residential. We write contractor insurance programs across OH, IL, MI, IN, WI, MN, MO, and KS.",
  },
  {
    slug: "northeast",
    name: "Northeast",
    region: "Multi-State",
    blurb:
      "Northeast contractors work in some of the most demanding regulatory environments in the country. We provide contractor insurance information and placement in NY, NJ, CT, MA, PA, and RI.",
  },
  {
    slug: "mountain-west",
    name: "Mountain West",
    region: "Multi-State",
    blurb:
      "Mountain West construction markets in CO, AZ, NV, UT, and NM are growing rapidly. We write contractor insurance programs across the entire region.",
  },
  {
    slug: "pacific-west",
    name: "Pacific West",
    region: "Multi-State",
    blurb:
      "Pacific West contractors in WA and OR work across residential, commercial, and infrastructure sectors. We provide complete contractor insurance information and placement from Seattle to Portland.",
  },
] as const;

export type LocationSlug = (typeof LOCATIONS)[number]["slug"];

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Contractor specialist agents", icon: "HardHat" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "Same-day claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 500, suffix: "+", label: "Contractors insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years placing contractor programs", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

