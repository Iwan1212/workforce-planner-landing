import React from "react";
import {
  CalendarRange,
  Activity,
  Users,
  SlidersHorizontal,
  CalendarCheck,
  ShieldCheck,
} from "lucide-react";

// ---------------------------------------------------------------------------
// URLs
// ---------------------------------------------------------------------------

export const GITHUB_URL = "https://github.com/Iwan1212/workforce-planner";
export const GITHUB_ISSUES_URL = `${GITHUB_URL}/issues`;
export const GITHUB_RELEASES_URL = `${GITHUB_URL}/releases`;
export const GITHUB_DISCUSSIONS_URL = `${GITHUB_URL}/discussions`;

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Stack", href: "#tech-stack" },
  { label: "Community", href: "#community" },
] as const;

// ---------------------------------------------------------------------------
// Features
// ---------------------------------------------------------------------------

export interface FeatureData {
  icon: string;
  title: string;
  description: string;
  tag: string;
}

export const FEATURES: FeatureData[] = [
  {
    icon: "calendar-range",
    title: "Interactive Timeline",
    description:
      "Drag-and-drop assignments between employees. Resize edges to adjust dates. Switch between monthly and weekly views.",
    tag: "Drag & drop",
  },
  {
    icon: "activity",
    title: "Capacity Detection",
    description:
      "Real-time color-coded alerts: green (OK), yellow (>80%), red (overallocated >100%). Never double-book again.",
    tag: "Real-time",
  },
  {
    icon: "users",
    title: "Team Filtering",
    description:
      "Filter by department — Frontend, Backend, QA, PM, Mobile, UX/UI, DevOps. Instantly find who’s available.",
    tag: "7 departments",
  },
  {
    icon: "sliders-horizontal",
    title: "Flexible Allocation",
    description:
      "Assign by percentage (e.g. 50% FTE) or by monthly hours. Mix both models across projects as needed.",
    tag: "% or hours",
  },
  {
    icon: "calendar-check",
    title: "Holiday Calendar",
    description:
      "13 Polish public holidays auto-integrated, including Easter-based movable dates. No manual entry required.",
    tag: "Auto-sync",
  },
  {
    icon: "shield-check",
    title: "Soft-Delete Architecture",
    description:
      "Archive instead of delete. Employees and projects are never permanently lost. Full audit trail, zero data loss.",
    tag: "Data safety",
  },
];

// ---------------------------------------------------------------------------
// How It Works Steps
// ---------------------------------------------------------------------------

export interface StepData {
  number: number;
  title: string;
  description: string;
}

export const STEPS: StepData[] = [
  {
    number: 1,
    title: "Deploy",
    description:
      "Self-host with Docker Compose in under 2 minutes. One command to spin up the entire stack.",
  },
  {
    number: 2,
    title: "Set up teams",
    description:
      "Add employees, create projects, define departments. Import from CSV or add manually.",
  },
  {
    number: 3,
    title: "Plan & allocate",
    description:
      "Drag assignments on the timeline. Resize to adjust dates. See capacity alerts in real time.",
  },
];

// ---------------------------------------------------------------------------
// Footer Links
// ---------------------------------------------------------------------------

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Timeline Demo", href: "#", external: false },
      { label: "Documentation", href: GITHUB_URL, external: true },
      { label: "Changelog", href: GITHUB_RELEASES_URL, external: true },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "GitHub", href: GITHUB_URL, external: true },
      { label: "API Docs", href: GITHUB_URL, external: true },
      { label: "Contributing", href: `${GITHUB_URL}/blob/main/CONTRIBUTING.md`, external: true },
      { label: "Issues", href: GITHUB_ISSUES_URL, external: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "MIT License", href: `${GITHUB_URL}/blob/main/LICENSE`, external: true },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Tech Logos for LogoBar
// ---------------------------------------------------------------------------

export const TECH_LOGOS = [
  "React",
  "FastAPI",
  "TypeScript",
  "PostgreSQL",
  "Docker",
  "Tailwind CSS",
] as const;
