import React from "react";
import heroImg from "../hero.jpg";

function Bouton({ nom }) {
  return (
    <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">
      {nom}
    </button>
  );
}

export default function Hero() {
  return (
    <section className="pt-28 pb-16 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Texte */}
        <div className="space-y-6 text-center md:text-left">
          <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
            Solution sécurisée basée sur la blockchain
          </div>

          {/* Titre */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Sécurisez vos tontines <br />
            <span className="text-green-600">de manière simple et fiable</span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg">
            TontineChain permet de gérer vos tontines avec transparence,
            fiabilité et automatisation. Évitez les pertes, les retards et les
            risques de fraude.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Bouton nom="Commencer" />

            <button className="px-6 py-3 rounded-xl font-semibold border-2 border-green-600 text-green-700 bg-white hover:bg-green-50 hover:shadow-md transition-all duration-300">
              Comment ça marche
            </button>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src={heroImg}
            alt="TontineChain illustration"
            className="w-full max-w-md rounded-2xl shadow-lg hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </section>
  );
}
