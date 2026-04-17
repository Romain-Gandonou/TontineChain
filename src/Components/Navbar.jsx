import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#31a64a] bg-[#08285c]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <motion.div
            initial={{ rotate: -8, scale: 0.9 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="grid h-11 w-11 place-items-center rounded-xl bg-[#31a64a] text-white shadow-md shadow-[#31a64a]/35"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-6 w-6"
            >
              <path d="M7 3v18M17 3v18M3 7h4m10 0h4M3 17h4m10 0h4M9 12h6" />
            </svg>
          </motion.div>
          <h1 className="text-xl font-semibold text-white md:text-2xl">
            Tontine Chain
          </h1>
          <motion.span
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden items-center gap-1 rounded-full border border-[#3eaf56] bg-[#0f3a68] px-2 py-1 text-[10px] text-[#8ee892] md:flex"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Hackathon Demo
          </motion.span>
        </div>

        <ul className="hidden items-center gap-1 text-sm font-medium text-white xl:flex">
          <li>
            <a
              href="#accueil"
              className="rounded-xl bg-[#45b152] px-4 py-2 text-white transition hover:bg-[#3ca248]"
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="px-3 py-2 transition hover:text-[#90dc8f]"
            >
              Créer Tontine
            </a>
          </li>
          {/* <li>
            <a
              href="#solution"
              className="px-3 py-2 transition hover:text-[#90dc8f]"
            >
              Tableau de Bord
            </a>
          </li> */}
          {/* <li>
            <a
              href="#solution"
              className="px-3 py-2 transition hover:text-[#90dc8f]"
            >
              Paiement
            </a>
          </li>
          <li>
            <a
              href="#solution"
              className="px-3 py-2 transition hover:text-[#90dc8f]"
            >
              Historique
            </a>
          </li> */}
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-white xl:hidden"
          aria-label="Ouvrir le menu"
        >
          ☰
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-3 overflow-hidden border-t border-[#1e4e88] bg-[#08285c] px-6 py-4 text-sm text-white xl:hidden"
          >
            <a href="#accueil" className="block">
              Accueil
            </a>
            <a href="#contact" className="block">
              Créer Tontine
            </a>
            <a href="#solution" className="block">
              Tableau de Bord
            </a>
            <a href="#solution" className="block">
              Paiement
            </a>
            <a href="#solution" className="block">
              Historique
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
