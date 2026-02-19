import {
  CalendarRange,
  Activity,
  Users,
  SlidersHorizontal,
  CalendarCheck,
  ShieldCheck,
} from "lucide-react";
import { FEATURES } from "./constants";
import { useScrollAnimation } from "./animations";
import type { FeatureData } from "./constants";

// Map icon name strings to lucide components
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  "calendar-range": CalendarRange,
  activity: Activity,
  users: Users,
  "sliders-horizontal": SlidersHorizontal,
  "calendar-check": CalendarCheck,
  "shield-check": ShieldCheck,
};

function FeatureCard({ feature, index }: { feature: FeatureData; index: number }) {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = ICON_MAP[feature.icon];

  return (
    <div
      ref={ref}
      className={`stagger-${index + 1} group rounded-[20px] bg-zinc-900 border border-zinc-800 hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)] p-8 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Icon container with gradient bg */}
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-400/10 flex items-center justify-center mb-5">
        {Icon && <Icon className="w-6 h-6 text-blue-400" />}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-zinc-50 mb-3">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-[15px] text-zinc-400 leading-relaxed mb-4">
        {feature.description}
      </p>

      {/* Tag pill */}
      <span className="inline-flex px-3 py-1 rounded-full border border-zinc-700 text-xs font-medium text-zinc-500">
        {feature.tag}
      </span>
    </div>
  );
}

export function Features() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" className="bg-[#09090b] py-24 lg:py-32 px-6 lg:px-[120px]">
      {/* Section header */}
      <div
        ref={ref}
        className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl lg:text-[44px] tracking-[-0.5px] leading-tight mb-4">
          <span className="text-zinc-400 font-normal">Everything you need to</span>
          <br />
          <span className="text-zinc-50 font-bold">manage your team's capacity</span>
        </h2>
        <p className="text-lg text-zinc-400 mt-4">
          From drag-and-drop scheduling to real-time overallocation alerts.
        </p>
      </div>

      {/* Feature cards grid */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {FEATURES.map((feature, index) => (
          <FeatureCard key={feature.title} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
}
