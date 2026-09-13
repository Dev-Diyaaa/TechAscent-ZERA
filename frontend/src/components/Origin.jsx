import { motion } from "framer-motion";
import { ArrowDown, Radio, Shield, Sparkles } from "lucide-react";

import awakening from "../assets/story-awakening.png";
import power from "../assets/story-power.png";

const originPoints = [
  {
    icon: Radio,
    number: "01",
    title: "THE AWAKENING",
    text: "ZERA awakens inside a forgotten energy chamber, where dormant technology responds to the unheard voices of the city.",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "THE CONNECTION",
    text: "The violet energy flowing through her is more than a weapon. It connects her to people whose voices have been ignored.",
  },
  {
    icon: Shield,
    number: "03",
    title: "THE PURPOSE",
    text: "ZERA discovers that true power comes from listening, understanding, and standing between vulnerable people and danger.",
  },
];

export default function Origin() {
  return (
    <section
      id="origin"
      className="relative overflow-hidden bg-[#0b0615] px-6 py-28 text-white md:px-16 lg:px-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-20 h-96 w-96 rounded-full bg-purple-700/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-5 flex items-center gap-3 text-xs tracking-[0.4em] text-purple-300">
            <span className="h-px w-10 bg-purple-400" />
            ORIGIN PROTOCOL
          </p>

          <h2 className="text-4xl font-black tracking-tight md:text-6xl">
            EVERY POWER
            <span className="block bg-gradient-to-r from-purple-300 to-indigo-500 bg-clip-text text-transparent">
              HAS A PURPOSE.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
            ZERA was not created to rule the world. She was awakened to hear
            what others could not—and to protect the people whose voices had
            been forgotten.
          </p>
        </motion.div>

        {/* Main Origin Content */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-black/40">
  {/* Blurred background fills the card */}
  <img
    src={awakening}
    alt=""
    className="absolute inset-0 h-full w-full scale-110 object-cover opacity-30 blur-2xl"
  />

  {/* Complete image */}
  <div className="relative flex min-h-[520px] items-center justify-center">
    <img
      src={awakening}
      alt="ZERA awakening"
      className="relative z-10 max-h-[650px] w-full object-contain"
    />
  </div>

  {/* Dark cinematic overlay */}
  <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black via-black/20 to-transparent" />

  {/* Text */}
  <div className="absolute bottom-6 left-6 z-30">
    <p className="text-xs tracking-[0.3em] text-purple-300">
      SYSTEM STATUS
    </p>

    <p className="mt-2 text-2xl font-bold">
      CONNECTION ACTIVE
    </p>
  </div>
</div>
            <motion.div
  animate={{ y: [0, -10, 0] }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute -bottom-12 right-[-20px] z-40 hidden w-48 overflow-hidden rounded-2xl border border-purple-500/40 bg-[#10091d] p-2 shadow-2xl shadow-purple-900/40 md:block"
>
  <div className="flex h-64 items-center justify-center overflow-hidden rounded-xl bg-black">
    <img
      src={power}
      alt="ZERA discovering her powers"
      className="h-full w-full object-contain"
    />
  </div>
</motion.div>
          </motion.div>

          {/* Story Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="space-y-8"
          >
            {originPoints.map((point, index) => {
              const Icon = point.icon;

              return (
                <motion.div
                  key={point.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  className="flex gap-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10">
                    <Icon className="h-5 w-5 text-purple-300" />
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-3">
                      <span className="text-xs tracking-[0.25em] text-purple-400">
                        {point.number}
                      </span>

                      <h3 className="text-lg font-bold tracking-wide">
                        {point.title}
                      </h3>
                    </div>

                    <p className="leading-7 text-gray-400">
                      {point.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            <div className="border-t border-white/10 pt-8">
              <button
                onClick={() =>
                  document
                    .getElementById("powers")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group flex items-center gap-3 text-sm font-semibold tracking-widest text-purple-300 transition hover:text-white"
              >
                DISCOVER HER ABILITIES
                <ArrowDown className="h-4 w-4 transition group-hover:translate-y-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}