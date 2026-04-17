import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BanknoteArrowUp, BadgeCheck } from "lucide-react";

export default function Contact() {
  const [pot, setPot] = useState(240000);

  useEffect(() => {
    const interval = setInterval(() => {
      setPot((value) => (value >= 265000 ? 240000 : value + 5000));
    }, 1300);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="contact"
      className="diagonal-lines-bg overflow-hidden px-6 py-16 text-white"
    >
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.35 }}
          className="text-3xl font-bold md:text-5xl"
        >
          Prêt à Démarrer Votre Tontine ?
        </motion.h2>
        <p className="mx-auto mt-5 max-w-4xl text-base text-white/85 md:text-xl">
          Rejoignez l'avenir de la finance collective. Transparente, sans
          intermédiaire et conçue pour les communautés.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-6 flex w-fit items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm"
        >
          <BanknoteArrowUp className="h-4 w-4 text-[#7fe48a]" />
          <span>
            Simulation cagnotte live :
            <strong className="ml-1 text-white">
              {pot.toLocaleString("fr-FR")} FCFA
            </strong>
          </span>
          <BadgeCheck className="h-4 w-4 text-[#7fe48a]" />
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 rounded-xl bg-[#45b152] px-7 py-3 text-base font-medium transition hover:bg-[#3ea64a] md:text-lg"
        >
          Commencer Maintenant
        </motion.button>
      </div>
    </section>
  );
}
