import { motion } from "framer-motion";
import {
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";

function Contact() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-[#06050b] px-6 py-20 text-white sm:px-10 lg:px-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-700/15 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-purple-400">
            CONTACT ZERA
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Your Voice Matters.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
            Whether you need guidance, support, or simply someone to listen,
            ZERA is here to receive your signal.
          </p>

         <motion.button
  onClick={() => window.dispatchEvent(new Event("open-zera-chatbot"))}
  whileHover={{ scale: 1.03, y: -1 }}
  whileTap={{ scale: 0.98 }}
  className="mt-8 rounded-full bg-purple-600 px-7 py-3 font-semibold transition hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-500/30"
>
  SEND A SIGNAL
</motion.button>
        </motion.div>

        <div className="my-14 h-px bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h3 className="text-2xl font-bold tracking-wider">ZERA</h3>
            <p className="mt-2 text-sm text-gray-500">
              Guardian of the Unheard.
            </p>
          </div>

          <div className="flex gap-4">
            <motion.a
              href="#"
              aria-label="Instagram"
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-purple-500 hover:text-purple-400"
            >
              <FaInstagram />
            </motion.a>

            <motion.a
              href="#"
              aria-label="GitHub"
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-purple-500 hover:text-purple-400"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="#"
              aria-label="LinkedIn"
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-purple-500 hover:text-purple-400"
            >
              <FaLinkedinIn />
            </motion.a>
          </div>

          <motion.button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-purple-500 hover:text-purple-400"
          >
            <FaArrowUp />
          </motion.button>
        </div>

        <div className="mt-10 text-center text-sm text-gray-600">
          © 2026 ZERA. Built for the unheard.
        </div>
      </div>
    </section>
  );
}

export default Contact;