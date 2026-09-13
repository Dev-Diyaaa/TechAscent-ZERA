import { motion } from "framer-motion";
import {
  FaHeart,
  FaShieldAlt,
  FaHandHoldingHeart,
} from "react-icons/fa";

const values = [
  {
    icon: <FaHeart />,
    title: "Listen",
    description:
      "Every voice matters. ZERA listens to people who feel ignored, unseen, or unheard.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Protect",
    description:
      "She stands against fear, injustice, and silence to create a safer world for everyone.",
  },
  {
    icon: <FaHandHoldingHeart />,
    title: "Empower",
    description:
      "ZERA helps people find their courage, confidence, and strength to move forward.",
  },
];

function Mission() {
  return (
    <section
      id="mission"
      className="relative overflow-hidden bg-[#090712] px-6 py-24 text-white sm:px-10 lg:px-20"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-purple-700/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-[-100px] h-96 w-96 rounded-full bg-indigo-600/20 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-purple-400">
            ZERA'S PURPOSE
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Every Unheard Voice Deserves to Be Heard.
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
            ZERA exists for those who feel invisible, ignored, or powerless.
            Her mission is to listen without judgment, protect without fear,
            and help people discover the strength within themselves.
          </p>
        </motion.div>

        {/* Mission content */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-md sm:p-10">
              <h3 className="text-2xl font-semibold text-purple-300">
                A Guardian Beyond Superpowers
              </h3>

              <p className="mt-5 leading-8 text-gray-300">
                ZERA believes that true strength is not only about defeating
                enemies. Sometimes, strength means speaking up, asking for
                help, protecting someone vulnerable, or simply being there for
                another person.
              </p>

              <p className="mt-5 leading-8 text-gray-400">
                Through empathy, courage, and action, she turns silence into
                hope and helplessness into possibility.
              </p>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-flex rounded-full bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-500/30"
              >
                SEND A SIGNAL
              </motion.a>
            </div>
          </motion.div>

          {/* Right side values */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -3, scale: 1.01 }}
                className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-purple-500/50 hover:bg-purple-500/[0.06]"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-purple-500/15 text-2xl text-purple-400">
                  {value.icon}
                </div>

                <div>
                  <h4 className="text-xl font-semibold">{value.title}</h4>
                  <p className="mt-2 leading-7 text-gray-400">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Mission;