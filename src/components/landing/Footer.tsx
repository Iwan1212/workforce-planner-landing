import { CalendarRange, ExternalLink } from "lucide-react";
import { FOOTER_LINK_GROUPS, GITHUB_URL } from "./constants";
import { GitHubIcon } from "./GitHubIcon";

export function Footer() {
  return (
    <footer className="bg-[#08080d] border-t border-zinc-800/50">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-0 py-16 lg:py-20">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="space-y-3">
            <a href="#" className="inline-flex items-center gap-2">
              <CalendarRange className="w-5 h-5 text-blue-500" />
              <span className="text-zinc-50 text-base font-semibold">
                Workforce Planner
              </span>
            </a>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-[260px]">
              Open-source workforce allocation for IT teams.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-zinc-50 mb-3">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                    >
                      {link.label}
                      {link.external && (
                        <ExternalLink className="w-3 h-3 opacity-50" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-[13px] text-zinc-600">
              © 2025 Workforce Planner
            </span>
            <div className="flex items-center gap-4">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-zinc-400 transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
