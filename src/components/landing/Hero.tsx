
// ---------------------------------------------------------------------------
// Timeline Mockup (right side of hero)
// ---------------------------------------------------------------------------

const TIMELINE_ROWS = [
  { name: "Anna K.", bars: [{ color: "bg-green-500", left: "5%", width: "30%" }, { color: "bg-blue-500", left: "38%", width: "25%" }] },
  { name: "Jan M.", bars: [{ color: "bg-red-500", left: "10%", width: "40%" }, { color: "bg-yellow-500", left: "55%", width: "20%" }] },
  { name: "Kasia W.", bars: [{ color: "bg-indigo-400", left: "0%", width: "25%" }, { color: "bg-violet-400", left: "30%", width: "35%" }] },
  { name: "Piotr S.", bars: [{ color: "bg-blue-500", left: "15%", width: "45%" }] },
  { name: "Ola N.", bars: [{ color: "bg-green-500", left: "5%", width: "20%" }, { color: "bg-indigo-400", left: "50%", width: "30%" }] },
  { name: "Tomek R.", bars: [{ color: "bg-violet-400", left: "20%", width: "35%" }, { color: "bg-yellow-500", left: "60%", width: "25%" }] },
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

function TimelineMockup() {
  return (
    <div className="w-full max-w-[480px] rounded-2xl border border-zinc-800 bg-zinc-900 shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden">
      {/* Window chrome */}
      <div className="flex items-center gap-2 h-9 px-4 bg-zinc-800">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-2 text-xs font-medium text-zinc-500">
          Workforce Planner — Timeline View
        </span>
      </div>

      {/* Timeline body */}
      <div className="bg-[#0f0f12] p-4 space-y-2">
        {/* Month headers */}
        <div className="flex">
          <div className="w-20 shrink-0" />
          <div className="flex-1 flex">
            {MONTHS.map((m) => (
              <span key={m} className="flex-1 text-[9px] text-zinc-500 text-center">
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* Rows */}
        {TIMELINE_ROWS.map((row) => (
          <div key={row.name} className="flex items-center h-6">
            <span className="w-20 shrink-0 text-[10px] font-medium text-zinc-400 truncate">
              {row.name}
            </span>
            <div className="flex-1 relative h-4">
              {row.bars.map((bar, i) => (
                <div
                  key={i}
                  className={`absolute top-0 h-full rounded ${bar.color}`}
                  style={{ left: bar.left, width: bar.width }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Floating Cards
// ---------------------------------------------------------------------------

function FloatingCards() {
  return (
    <>
      {/* Anna K. profile card */}
      <div className="absolute -top-2 -right-4 rotate-3 w-[170px] rounded-xl border border-zinc-800 bg-zinc-900 p-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-400 shrink-0" />
          <div>
            <p className="text-xs font-semibold text-zinc-50">Anna K.</p>
            <p className="text-[10px] text-zinc-400">Frontend · 80%</p>
          </div>
        </div>
        <div className="mt-2 h-1 rounded-full bg-zinc-800">
          <div className="h-full w-4/5 rounded-full bg-green-500" />
        </div>
      </div>

      {/* Overallocation alert */}
      <div className="absolute bottom-16 -left-6 -rotate-2 w-[200px] rounded-xl bg-red-500/10 border border-red-500/20 px-3.5 py-2.5 shadow-[0_6px_24px_rgba(239,68,68,0.08)]">
        <div className="flex items-center gap-2">
          <span className="text-sm">⚠0</span>
          <span className="text-[11px] font-medium text-red-400">
            Jan M. overallocated: 120%
          </span>
        </div>
      </div>

      {/* Holidays card */}
      <div className="absolute bottom-2 right-0 rotate-2 rounded-[10px] bg-zinc-800 px-3 py-2 shadow-[0_6px_20px_rgba(0,0,0,0.3)]">
        <span className="text-[11px] font-medium text-zinc-400">
          3 holidays this month 🇳🇱
        </span>
      </div>
    </>
  );
}

// ---------------------------------------------------------------------------
// Hero Section
// ---------------------------------------------------------------------------

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#09090b]">
      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            left: "48%",
            top: "-100px",
            background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            left: "62%",
            top: "200px",
            background: "radial-gradient(circle, rgba(167,139,250,0.1) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Dot grid overlay */}
      <div className="absolute inset-0 bg-dot-pattern opacity-5 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-0 py-20 lg:py-[140px]">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[60px]">
          {/* Left column */}
          <div className="flex-1 max-w-[660px]">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-700 bg-zinc-900/60 mb-8">
              <span className="text-indigo-400 text-[13px]">✦</span>
              <span className="text-[13px] font-medium text-zinc-400">
                Open Source · MIT License · Self-Hosted
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold tracking-[-1.8px] leading-[1.05] text-zinc-50 mb-6">
              Plan your workforce.
              <br />
              <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Not your spreadsheets.
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg lg:text-xl text-zinc-400 leading-relaxed max-w-[540px] mb-8">
              Open-source allocation tool for IT teams. See who works on what, at
              what capacity — with drag-and-drop simplicity.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <a
                href="#login"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-base font-semibold shadow-[0_8px_32px_rgba(59,130,246,0.25)] hover:shadow-[0_8px_32px_rgba(59,130,246,0.4)] transition-all"
              >
                Get Started →
              </a>
              <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-zinc-700 text-zinc-300 text-base font-medium hover:border-zinc-500 hover:text-zinc-50 transition-all">
                <span className="text-xs text-zinc-400">▶</span>
                Watch Demo
              </button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 pt-4">
              {/* Avatar stack */}
              <div className="flex -space-x-2.5">
                {["bg-blue-500", "bg-indigo-400", "bg-violet-400", "bg-cyan-400"].map((color, i) => (
                  <div
                    key={i}
                    className={`w-7 h-7 rounded-full ${color} border-2 border-[#09090b]`}
                  />
                ))}
              </div>
              <span className="text-sm text-zinc-500">Trusted by 50+ IT teams</span>
              <span className="text-sm font-medium text-yellow-500">★ 4.9</span>
            </div>
          </div>

          {/* Right column — Timeline mockup */}
          <div className="relative w-full max-w-[480px] lg:w-[480px]">
            <TimelineMockup />
            <FloatingCards />
          </div>
        </div>
      </div>
    </section>
  );
}
