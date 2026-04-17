import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  Shield,
  Users,
  ArrowUpRight,
  Clock3,
  CheckCircle2,
  Mic,
} from "lucide-react";

const features = [
  {
    icon: "shield",
    title: "Registres Immuables",
    text: "Chaque transaction est horodatée et enregistrée de façon permanente pour une transparence totale.",
  },
  {
    icon: "users",
    title: "Finance Collective",
    text: "Mettez vos ressources en commun avec des membres de confiance et accédez aux fonds quand c'est votre tour.",
  },
  {
    icon: "trend",
    title: "Déblocage Automatique",
    text: "Les fonds sont automatiquement libérés au bénéficiaire lorsque toutes les contributions sont complètes.",
  },
  {
    icon: "clock",
    title: "Suivi en Temps Réel",
    text: "Surveillez les contributions, paiements et statut du bénéficiaire en temps réel.",
  },
  {
    icon: "check",
    title: "Règles Transparentes",
    text: "Définissez des règles claires pour le montant, la fréquence et l'ordre des bénéficiaires dès le départ.",
  },
  {
    icon: "voice",
    title: "Assistance Vocale en Langue Locale",
    text: "Un accompagnement vocal en langue souche pour faciliter l'usage de la plateforme et garantir une intégration équitable pour tous.",
  },
];

function renderFeatureIcon(name) {
  if (name === "users") return <Users className="h-5 w-5 text-[#3fae52]" />;
  if (name === "trend")
    return <ArrowUpRight className="h-5 w-5 text-[#3fae52]" />;
  if (name === "clock") return <Clock3 className="h-5 w-5 text-[#3fae52]" />;
  if (name === "check")
    return <CheckCircle2 className="h-5 w-5 text-[#3fae52]" />;
  if (name === "voice") return <Mic className="h-5 w-5 text-[#3fae52]" />;
  return <Shield className="h-5 w-5 text-[#3fae52]" />;
}

export default function Probleme() {
  return (
    <section className="bg-white px-6 py-14">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[#08285c] md:text-5xl">
            Pourquoi Tontine Chain ?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-500 md:text-xl">
            Conçu pour les communautés qui valorisent la transparence, la
            confiance et la coopération financière.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_20px_rgba(15,23,42,0.04)] transition hover:border-[#73c683]"
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-[#e8f5eb]">
                {renderFeatureIcon(feature.icon)}
              </div>
              <h3 className="text-xl font-semibold text-[#0b2251]">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500 md:text-base">
                {feature.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
