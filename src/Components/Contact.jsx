import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Contact
          </h2>
          <p className="text-gray-600">
            Une question ou un besoin d’assistance sur TontineChain
          </p>
        </div>

        {/* Formulaire de renseigneement */}
        <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="text-sm text-gray-600">Nom</label>
              <input
                type="text"
                className="w-full mt-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-400"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                className="w-full mt-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-400"
                placeholder="Votre email"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-600">Message</label>
            <textarea
              rows="5"
              className="w-full mt-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-400"
              placeholder="Écrivez votre message..."
            ></textarea>
          </div>

          <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition">
            Envoyer
          </button>
        </div>

        <div className="text-center text-sm text-gray-500">
          Support disponible pour toutes demandes liées à la gestion des
          tontines
        </div>
      </div>
    </section>
  );
}
