import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-[#31a64a] bg-[#08285c] px-6 py-6 text-white/80">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm md:text-base">
          © 2026 Tontine Chain. Transparent. Sans Intermédiaire. Ensemble.
        </p>
        <div className="flex items-center gap-6 text-sm md:text-base">
          <a href="#" className="transition hover:text-white">
            Confidentialité
          </a>
          <a href="#" className="transition hover:text-white">
            Conditions
          </a>
          <a href="#" className="transition hover:text-white">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}
