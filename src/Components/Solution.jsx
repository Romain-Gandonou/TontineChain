import React from "react";

export default function Solution() {
  return (
    <section id="solution" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Une solution simple et fiable
          </h2>
          <p className="text-gray-600 text-lg">
            TontineChain sécurise les tontines grâce à des règles définies à
            l'avance et exécutées automatiquement. Aucun membre ne peut modifier
            ou détourner les fonds.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-gray-800 mb-2">
              Registres immuables
            </h3>
            <p className="text-sm text-gray-600">
              Chaque transaction est enregistrée de manière permanente pour
              garantir la transparence.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-gray-800 mb-2">
              Gestion collective
            </h3>
            <p className="text-sm text-gray-600">
              Les membres contribuent selon des règles communes clairement
              définies.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-gray-800 mb-2">
              Déblocage automatique
            </h3>
            <p className="text-sm text-gray-600">
              Les fonds sont libérés automatiquement au bénéficiaire sans
              intervention humaine.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-gray-800 mb-2">
              Règles transparentes
            </h3>
            <p className="text-sm text-gray-600">
              L’ordre des bénéficiaires et les conditions sont définis dès le
              départ.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-gray-800 mb-2">
              Suivi en temps réel
            </h3>
            <p className="text-sm text-gray-600">
              Visualisez les contributions et l’évolution de la tontine à tout
              moment.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-gray-800 mb-2">
              Sécurité des fonds
            </h3>
            <p className="text-sm text-gray-600">
              Les règles sont appliquées automatiquement et ne peuvent pas être
              modifiées.
            </p>
          </div>
        </div>

        <div className="space-y-10">
          <h2 className="text-xl md:text-3xl font-bold text-center text-gray-900">
            Comment ça fonctionne
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-lg font-semibold text-green-600">01</div>
              <h3 className="font-medium text-gray-800">Créer une tontine</h3>
              <p className="text-sm text-gray-600">
                Définissez les règles, le montant et le nombre de participants.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-lg font-semibold text-green-600">02</div>
              <h3 className="font-medium text-gray-800">Ajouter les membres</h3>
              <p className="text-sm text-gray-600">
                Invitez les participants et définissez l’ordre des
                bénéficiaires.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-lg font-semibold text-green-600">03</div>
              <h3 className="font-medium text-gray-800">Cotiser</h3>
              <p className="text-sm text-gray-600">
                Chaque membre contribue selon les règles définies.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-lg font-semibold text-green-600">04</div>
              <h3 className="font-medium text-gray-800">Recevoir les fonds</h3>
              <p className="text-sm text-gray-600">
                Le bénéficiaire reçoit automatiquement les fonds au bon moment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
