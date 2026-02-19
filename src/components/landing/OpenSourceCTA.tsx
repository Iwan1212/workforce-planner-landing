import { LockOpen, Server, Shield } from "lucide-react";
import { GITHUB_URL } from "./constants";
import { GitHubIcon } from "./GitHubIcon";
import { useScrollAnimation } from "./animations";

const OS_FEATURES = [
  { icon: LockOpen, label: "MIT Licensed" },
  { icon: Server, label: "Self-Hosted" },
  { icon: Shield, label: "Full Data Ownership" },
] as const;

export function OpenSourceCTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="community"
      className="relative bg-[#09090b] py-24 lg:py-32 overflow-hidden"
    >
      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            left: "14%",
            top: "-50px",
            background: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full blur-3xl"
          style={{
            left: "56%",
            top: "100px",
            background: "radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)",
          }}
        />
      </div>

      <div
        ref={ref}
        className={`relative z-10 max-w-[1200px] mx-auto px-6 lg:px-0 flex flex-col items-center text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Heading */}
        <h2 className="text-4xl lg:text-[48px] font-bold text-zinc-50 tracking-[-1px] mb-4">
          Built in the open.
        </h2>

        {/* Description */}
        <p className="text-lg lg:text-xl text-zinc-400 leading-relaxed max-w-[560px] mb-8">
          Free forever. No vendor lock-in. Your data, your servers, your rules.
        </p>

        {/* GitHub CTA button */}
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-zinc-50 text-[#09090b] text-base font-semibold shadow-[0_4px_24px_rgba(250,250,250,0.08)] hover:bg-white transition-all mb-4"
        >
          <GitHubIcon className="w-5 h-5" />
          View on GitHub →
        </a>

        {/* Star text */}
        <p className="text-sm text-zinc-500 mb-12">
          ⭐ Star us — it helps more than you think
        </p>

        {/* OS features row */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          {OS_FEATURES.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="w-4 h-4 text-zinc-400" />
              <span className="text-sm text-zinc-400">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
