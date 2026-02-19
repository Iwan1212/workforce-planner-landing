import { Users, Zap, Timer } from "lucide-react";
import { useScrollAnimation } from "./animations";

const METRICS = [
  { icon: Users, label: "80+ employees" },
  { icon: Zap, label: "Real-time updates" },
  { icon: Timer, label: "< 2 min setup" },
] as const;

export function ProductShowcase() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`bg-[#09090b] border-y border-zinc-800 py-24 lg:py-32 px-6 lg:px-[120px] transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-3xl lg:text-[40px] font-bold text-zinc-50 tracking-[-0.5px] mb-12">
          See it in action
        </h2>

        {/* Screenshot placeholder */}
        <div className="w-full max-w-[960px] h-[340px] md:h-[540px] rounded-2xl border border-zinc-700 bg-zinc-900 shadow-[0_24px_80px_rgba(0,0,0,0.6)] flex items-center justify-center p-10">
          <p className="text-sm text-zinc-500 text-center max-w-[500px]">
            Full-screen screenshot: Workforce Planner timeline view with 10+
            employees and color-coded allocations
          </p>
        </div>

        {/* Metrics row */}
        <div className="flex flex-wrap items-center justify-center gap-12 pt-10">
          {METRICS.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <Icon className="w-5 h-5 text-cyan-400" />
              <span className="text-base font-medium text-zinc-300">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
