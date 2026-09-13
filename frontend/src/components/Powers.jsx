import { motion } from "framer-motion";
import {
  AudioLines,
  Shield,
  Sparkles,
  Wind,
  Zap,
} from "lucide-react";

import power from "../assets/story-power.png";
import flight from "../assets/story-flight.png";

const powers = [
  {
    icon: AudioLines,
    number: "01",
    title: "ECHO SENSE",
    description:
      "ZERA can sense unheard voices, distress signals, and emotional disturbances across the city.",
  },
  {
    icon: Zap,
    number: "02",
    title: "VIOLET PULSE",
    description:
      "She channels concentrated violet energy through her hands to defend people and disrupt threats.",
  },
  {
    icon: Wind,
    number: "03",
    title: "SKYBOUND",
    description:
      "By controlling energy around her body, ZERA can rise above the city and move at incredible speed.",
  },
  {
    icon: Shield,
    number: "04",
    title: "GUARDIAN SHIELD",
    description:
      "Her energy can form protective barriers capable of shielding innocent people from danger.",
  },
];

export default function Powers() {
  return (
    <section
      id="powers"
      className="relative overflow-hidden bg-[#080512] px-6 py-28 text-white md:px-16 lg:px-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-purple-700/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="mb-5 flex items-center gap-3 text-xs tracking-[0.4em] text-purple-300">
            <span className="h-px w-10 bg-purple-400" />
            ABILITY DATABASE
          </p>

          <h2 className="text-4xl font-black tracking-tight md:text-6xl">
            POWER IS NOT
            <span className="block bg-gradient-to-r from-purple-300 to-indigo-500 bg-clip-text text-transparent">
              THE PURPOSE.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
            Every ability ZERA possesses exists for one reason: to protect,
            connect, and give strength to those who need it most.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-[#10091d] p-3">
              <img
                src={power}
                alt="ZERA using her violet energy powers"
                className="h-[420px] w-full rounded-2xl object-contain"
              />

              <div className="absolute inset-3 rounded-2xl bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8">
                <p className="text-xs tracking-[0.3em] text-purple-300">
                  ENERGY OUTPUT
                </p>

                <p className="mt-2 text-2xl font-bold">
                  VIOLET CORE ACTIVE
                </p>
              </div>
            </div>

            {/* Floating Flight Image */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-10 -right-5 z-30 hidden w-48 rounded-2xl border border-purple-500/40 bg-[#10091d] p-2 shadow-2xl shadow-purple-900/40 md:block"
            >
              <img
                src={flight}
                alt="ZERA flying above the city"
                className="h-56 w-full rounded-xl object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Powers List */}
          <div className="space-y-5">
            {powers.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  whileHover={{ x: 8, y: -2, scale: 1.01 }}
                  className="group flex gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-purple-500/40 hover:bg-purple-500/[0.05]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10 transition group-hover:bg-purple-500/20">
                    <Icon className="h-5 w-5 text-purple-300" />
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-3">
                      <span className="text-xs tracking-[0.25em] text-purple-400">
                        {item.number}
                      </span>

                      <h3 className="font-bold tracking-wide">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-sm leading-7 text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-24 border-t border-white/10 pt-10 text-center"
        >
          <Sparkles className="mx-auto mb-4 h-6 w-6 text-purple-300" />

          <p className="text-xl font-medium text-gray-300 md:text-2xl">
            "The strongest signal is the one that reaches someone in need."
          </p>

          <p className="mt-4 text-xs tracking-[0.35em] text-purple-400">
            — ZERA // GUARDIAN PROTOCOL
          </p>
        </motion.div>
      </div>
    </section>
  );
}