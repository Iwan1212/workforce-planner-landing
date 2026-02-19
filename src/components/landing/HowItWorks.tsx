import { STEPS } from "./constants";
import { useScrollAnimation } from "./animations";
import type { StepData } from "./constants";

function StepCard({ step }: { step: StepData }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`stagger-${step.number} flex flex-col items-center text-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Numbered gradient circle */}
      <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-blue-500 via-indigo-400 to-violet-400 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
        <span className="text-[28px] font-bold text-white">{step.number}</span>
      </div>

      {/* Title */}
      <h3 className="text-[22px] font-semibold text-zinc-50 mb-3">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-base text-zinc-400 leading-relaxed max-w-[280px]">
        {step.description}
      </p>
    </div>
  );
}

function DashedLine() {
  return (
    <div className="hidden lg:flex items-center justify-center pt-8 w-20">
      <div className="w-full border-t-2 border-dashed border-zinc-700" />
    </div>
  );
}

export function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="how-it-works" className="bg-[#09090b] py-24 lg:py-32 px-6 lg:px-[120px]">
      {/* Section header */}
      <div
        ref={ref}
        className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl lg:text-[44px] font-bold text-zinc-50 tracking-[-0.5px]">
          Up and running in 3 steps
        </h2>
      </div>

      {/* Steps with dashed lines */}
      <div className="max-w-[1200px] mx-auto">
        {/* Desktop: horizontal */}
        <div className="hidden lg:flex items-start justify-between">
          {STEPS.map((step, i) => (
            <div key={step.number} className="contents">
              <div className="w-[320px]">
                <StepCard step={step} />
              </div>
              {i < STEPS.length - 1 && <DashedLine />}
            </div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden flex flex-col items-center gap-12 relative">
          {/* Vertical connecting line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px border-l-2 border-dashed border-zinc-700" />

          {STEPS.map((step) => (
            <div key={step.number} className="relative z-10">
              <StepCard step={step} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
