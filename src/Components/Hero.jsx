import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ShieldCheck, Wallet, TrendingUp } from "lucide-react";

function renderBadgeIcon(name) {
  if (name === "wallet") {
    return <Wallet className="h-3.5 w-3.5 text-[#7fe48a]" />;
  }
  if (name === "trend") {
    return <TrendingUp className="h-3.5 w-3.5 text-[#7fe48a]" />;
  }
  return <ShieldCheck className="h-3.5 w-3.5 text-[#7fe48a]" />;
}

function Bouton({ nom, variant = "primary" }) {
  const classes =
    variant === "primary"
      ? "bg-[#45b152] text-white hover:bg-[#3ea64a]"
      : "border border-white/30 bg-transparent text-white hover:bg-white/10";

  return (
    <button
      className={`rounded-xl px-5 py-3 text-base font-medium transition ${classes}`}
    >
      {nom}
    </button>
  );
}

export default function Hero() {
  return (
    <section id="accueil" className="dot-grid-bg px-6 pb-12 pt-28 text-white">
      <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          <div className="inline-flex rounded-full border border-[#3eaf56] px-4 py-1.5 text-xs tracking-[0.16em] text-[#3eaf56] sm:text-sm">
            PLATEFORME DE TONTINE NUMÉRIQUE
          </div>

          <h1 className="text-4xl font-bold leading-[1.1] md:text-6xl">
            La Finance
            <br />
            Collective,
            <br />
            <span className="text-[#4fbe5a]">Réinventée</span>
          </h1>

          <p className="max-w-2xl text-base text-white/85 md:text-xl">
            Créez des groupes d'épargne rotatifs transparents et sans
            intermédiaire avec des registres immuables et une distribution
            automatique des fonds.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <Bouton nom="Créer une Tontine" />
            <Bouton nom="Voir le Tableau de Bord" variant="secondary" />
          </div>

          <div className="flex flex-wrap gap-2 pt-1 text-xs text-white/85">
            {[
              { icon: "shield", label: "Audit Smart-Contract" },
              { icon: "wallet", label: "Wallet Mobile Money" },
              { icon: "trend", label: "Scoring temps réel" },
            ].map(({ icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5"
              >
                {renderBadgeIcon(icon)}
                {label}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="grid grid-cols-2 gap-3"
        >
          {[
            "https://res.cloudinary.com/dla8wr5qj/image/upload/v1776442935/01_fwpvvl.avif",
            "https://res.cloudinary.com/dla8wr5qj/image/upload/v1776442973/02_vqvew8.avif",
            "https://res.cloudinary.com/dla8wr5qj/image/upload/v1776443009/03_krndeb.avif",
            "https://res.cloudinary.com/dla8wr5qj/image/upload/v1776444933/09_btfozq.webp",
          ].map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className="overflow-hidden rounded-2xl border border-white/30 bg-white/10"
            >
              <img
                src={img}
                alt="Communauté Tontine"
                className="h-40 w-full object-cover md:h-56"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
