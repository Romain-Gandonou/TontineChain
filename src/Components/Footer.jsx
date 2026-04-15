import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* petit description */}
        <div className="space-y-4">
          <h2 className="text-white text-xl font-bold">TontineChain</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Une solution sécurisée pour digitaliser et protéger les tontines
            grâce à la transparence et des règles automatisées.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-white font-semibold">Contact</h3>

          <p className="text-sm">
            Email :{" "}
            <span className="text-gray-300">gandonouromain244@gmail.com</span>
          </p>

          <p className="text-sm">
            Téléphone :{" "}
            <span className="text-gray-300">+229 01 68 11 26 58</span>
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-white font-semibold">Informations</h3>

          <a
            href="#acceuil"
            className="block text-sm hover:text-white transition"
          >
            Accueil
          </a>

          <a
            href="#solution"
            className="block text-sm hover:text-white transition"
          >
            Solution
          </a>

          <a
            href="#contact"
            className="block text-sm hover:text-white transition"
          >
            Contact
          </a>
        </div>
      </div>

      {/* BAS DU FOOTER */}
      <div className="border-t border-gray-800 mt-10 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} TontineChain. Tous droits réservés.
      </div>
    </footer>
  );
}
