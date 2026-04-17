import React, { useEffect, useMemo, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Users, ShieldCheck, ArrowLeftRight } from "lucide-react";

const targetStats = [
  { label: "Tontines Actives", value: 1248, suffix: "+", icon: "activity" },
  { label: "Membres", value: 5870, suffix: "+", icon: "users" },
  { label: "Transactions valides", value: 100, suffix: "%", icon: "shield" },
];

const simulatedTransactions = [
  "Awa K. a cotisé 25 000 FCFA",
  "Groupe AgriNord : paiement validé",
  "Nina D. a reçu son tour (120 000 FCFA)",
  "Cycle #18 clôturé sans défaut",
  "Nouveau membre ajouté au Groupe Coton",
];

function renderStatIcon(name) {
  if (name === "users") {
    return <Users className="h-4 w-4" />;
  }
  if (name === "shield") {
    return <ShieldCheck className="h-4 w-4" />;
  }
  return <Activity className="h-4 w-4" />;
}

export default function Stats() {
  const [counts, setCounts] = useState(targetStats.map(() => 0));
  const [feedIndex, setFeedIndex] = useState(0);

  useEffect(() => {
    const duration = 1300;
    const stepMs = 30;
    const totalSteps = duration / stepMs;
    let step = 0;

    const interval = setInterval(() => {
      step += 1;
      const progress = Math.min(step / totalSteps, 1);
      setCounts(targetStats.map((stat) => Math.round(stat.value * progress)));
      if (progress >= 1) clearInterval(interval);
    }, stepMs);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFeedIndex((current) => (current + 1) % simulatedTransactions.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const feedMessage = useMemo(
    () => simulatedTransactions[feedIndex],
    [feedIndex],
  );

  return (
    <section className="dot-grid-bg px-6 py-10 text-center text-white">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-6 md:grid-cols-3">
          {targetStats.map(({ label, suffix, icon }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="rounded-2xl border border-white/15 bg-white/5 p-4"
            >
              <div className="mb-2 flex items-center justify-center gap-2 text-[#7fe48a]">
                {renderStatIcon(icon)}
                <span className="text-[11px] uppercase tracking-widest text-white/70">
                  Live
                </span>
              </div>
              <h3 className="text-3xl font-semibold text-[#46b552] md:text-4xl">
                {counts[index].toLocaleString("fr-FR")}
                {suffix}
              </h3>
              <p className="mt-1 text-sm text-white/75 md:text-base">{label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-5 max-w-3xl rounded-xl border border-[#2d8f45] bg-[#0d3766] px-4 py-2">
          <div className="flex items-center justify-center gap-2 text-xs text-[#8de597]">
            <ArrowLeftRight className="h-3.5 w-3.5" />
            Simulation transactions en direct
          </div>
          <AnimatePresence mode="wait">
            <motion.p
              key={feedMessage}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mt-1 text-sm text-white/90"
            >
              {feedMessage}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
