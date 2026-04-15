import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Nom */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-linear-to-br from-green-500 to-blue-600 flex items-center justify-center text-white font-bold">
            TC
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-800">Tontine</h1>
            <span className="text-sm text-green-600">Chain</span>
          </div>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li>
            <a href="#acceuil" className="hover:text-green-600 transition">
              Accueil
            </a>
          </li>
          <li>
            <a href="#solution" className="hover:text-green-600 transition">
              Solution
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-green-600 transition">
              Contact
            </a>
          </li>
        </ul>

        <div className="hidden md:block">
          <a
            href="#demo"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Démo
          </a>
        </div>

        {/* petit ecran navbar */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* menu petit ecran */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">
          <a href="#acceuil" className="block text-gray-700">
            Accueil
          </a>
          <a href="#solution" className="block text-gray-700">
            Solution
          </a>
          <a href="#contact" className="block text-gray-700">
            Contact
          </a>

          <a
            href="#demo"
            className="block text-center bg-green-500 text-white py-2 rounded-lg"
          >
            Voir la démo
          </a>
        </div>
      )}
    </nav>
  );
}
