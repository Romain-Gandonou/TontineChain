import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { UserPlus, UsersRound, HandCoins, BadgeCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: "group",
    title: "Créer le Groupe",
    text: "Configurez votre tontine avec les règles, le nombre de membres et les montants de contribution.",
  },
  {
    number: "02",
    icon: "add",
    title: "Ajouter les Membres",
    text: "Invitez des membres de confiance à rejoindre et définissez l'ordre de rotation des bénéficiaires.",
  },
  {
    number: "03",
    icon: "pay",
    title: "Suivre les Paiements",
    text: "Les membres contribuent selon le calendrier. Toutes les transactions sont enregistrées de façon immuable.",
  },
  {
    number: "04",
    icon: "done",
    title: "Déblocage Auto",
    text: "Les fonds sont automatiquement libérés au bénéficiaire actuel une fois le cycle complet.",
  },
];

function renderStepIcon(name) {
  if (name === "add") return <UserPlus className="h-4 w-4" />;
  if (name === "pay") return <HandCoins className="h-4 w-4" />;
  if (name === "done") return <BadgeCheck className="h-4 w-4" />;
  return <UsersRound className="h-4 w-4" />;
}

export default function Solution() {
  return (
    <section id="solution" className="bg-[#edf1f6] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[#08285c] md:text-5xl">
            Comment Ça Marche ?
          </h2>
          <p className="mt-3 text-base text-slate-500 md:text-xl">
            Simple, transparent et automatisé du début à la fin.
          </p>
        </div>

        <div className="mx-auto mt-6 h-1.5 w-full max-w-3xl overflow-hidden rounded-full bg-slate-300/80">
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{ x: "0%" }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 1 }}
            className="h-full w-full bg-linear-to-r from-[#45b152] to-[#6fd37a]"
          />
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.3, delay: index * 0.07 }}
              className="text-center"
            >
              <div className="text-4xl font-bold tracking-wide text-[#b8dac0] md:text-5xl">
                {step.number}
              </div>
              <div className="mt-2 inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white px-2.5 py-1 text-[11px] text-slate-500">
                {renderStepIcon(step.icon)}
                Étape validée
              </div>
              <h3 className="mt-3 text-xl font-semibold text-[#0b2251] md:text-2xl">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500 md:text-base">
                {step.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
