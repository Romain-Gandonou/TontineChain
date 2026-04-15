import React from "react";

export default function Stats() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        {/* Titre */}
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Un marché massif et actif
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Les tontines représentent un pilier essentiel de l’épargne informelle
          au Bénin, avec des flux financiers importants et une adoption très
          large.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-3xl font-extrabold text-green-600">
              60 – 70 %
            </h3>
            <p className="mt-2 text-gray-600">
              des adultes participent à une tontine
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-3xl font-extrabold text-blue-600">
              400M – 600M $
            </h3>
            <p className="mt-2 text-gray-600">circulent chaque année</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-3xl font-extrabold text-gray-900">
              Marché informel
            </h3>
            <p className="mt-2 text-gray-600">
              sans sécurité ni traçabilité fiable
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
