import { TECH_LOGOS } from "./constants";
import { useScrollAnimation } from "./animations";

export function LogoBar() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`border-y border-zinc-800/50 bg-[#09090b] py-10 px-6 lg:px-[120px] transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <span className="text-[13px] font-medium text-zinc-500 tracking-[3px] uppercase">
          Built with
        </span>
        <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-12">
          {TECH_LOGOS.map((name) => (
            <span
              key={name}
              className="text-sm font-medium text-zinc-500 opacity-40"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
