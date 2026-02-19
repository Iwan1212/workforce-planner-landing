import { useState } from "react";
import { X } from "lucide-react";
import { GITHUB_RELEASES_URL } from "./constants";

export function TopBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="flex items-center justify-center h-10 bg-zinc-900 border-b border-zinc-800 px-6 text-[13px]">
      <div className="flex items-center gap-2 flex-1 justify-center">
        <span className="text-zinc-400">🚀</span>
        <span className="text-zinc-400">
          New: v1.0 just launched — see what's new
        </span>
        <a
          href={GITHUB_RELEASES_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors"
        >
          Changelog →
        </a>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="text-zinc-500 hover:text-zinc-300 transition-colors ml-4"
        aria-label="Close announcement"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
