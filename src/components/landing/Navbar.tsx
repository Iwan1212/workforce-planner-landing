import { useState, useEffect, useCallback } from "react";
import { CalendarRange, Menu, X } from "lucide-react";
import { NAV_LINKS, GITHUB_URL } from "./constants";
import { GitHubIcon } from "./GitHubIcon";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09090b]/80 backdrop-blur-xl border-b border-zinc-800"
          : "bg-[#09090b]/80 backdrop-blur-sm border-b border-zinc-800/50"
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between h-16 px-6 lg:px-10">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <CalendarRange className="w-6 h-6 text-blue-500" />
          <span className="text-zinc-50 text-lg font-semibold">
            Workforce Planner
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-zinc-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-400 hover:text-zinc-50 transition-colors"
          >
            Docs
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-zinc-700 text-sm font-medium text-zinc-300 hover:border-zinc-500 hover:text-zinc-50 transition-all"
          >
            <GitHubIcon className="w-4 h-4" />
            GitHub ⭐
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-zinc-50 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-[#09090b]/95 backdrop-blur-xl z-40">
          <div className="flex flex-col items-center justify-center gap-8 pt-20">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="text-2xl text-zinc-300 hover:text-zinc-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobile}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-zinc-50 hover:bg-zinc-800 transition-all"
            >
              <GitHubIcon className="w-5 h-5" />
              GitHub ⭐
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
