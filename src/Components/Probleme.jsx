import React from "react";

export default function Probleme() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* TITRE */}
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Un problème réel et sous-estimé
        </h2>

        {/* Texte accroche  */}
        <p className="text-gray-600 text-lg leading-relaxed">
          Au Bénin, entre 15 % et 20 % des participants aux tontines sont
          confrontés à des incidents majeurs : détournement de fonds, manque de
          transparence et mauvaise gestion.
        </p>

        {/* cartes des problemess */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-gray-800 mb-2">
              Détournement de fonds
            </h3>
            <p className="text-sm text-gray-600">
              Des participants perdent leur argent à cause de gestionnaires
              malhonnêtes.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-gray-800 mb-2">
              Manque de transparence
            </h3>
            <p className="text-sm text-gray-600">
              Les membres n'ont pas de visibilité claire sur les transactions.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-gray-800 mb-2">
              Conséquences sociales
            </h3>
            <p className="text-sm text-gray-600">
              Ces problèmes entraînent stress, conflits familiaux et perte de
              confiance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
