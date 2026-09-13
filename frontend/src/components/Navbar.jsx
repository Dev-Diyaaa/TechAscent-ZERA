import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Origin", href: "#origin" },
    { name: "Powers", href: "#powers" },
    { name: "Mission", href: "#mission" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#090712]/80 px-6 py-4 text-white backdrop-blur-md sm:px-10 lg:px-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-2xl font-bold tracking-[0.25em] text-purple-400"
        >
          ZERA
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="text-sm text-gray-300 transition hover:text-purple-400"
            >
              {link.name}
            </motion.a>
          ))}

          <motion.a
            href="#chatbot"
            whileHover={{ y: -1, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full bg-purple-600 px-5 py-2 text-sm font-semibold transition hover:bg-purple-500"
          >
            Send a Signal
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.96 }}
          className="rounded-lg p-2 text-xl text-gray-300 transition hover:bg-white/10 hover:text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-[#130b22] p-5 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  whileHover={{ x: 2 }}
                  className="text-gray-300 transition hover:text-purple-400"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                href="#chatbot"
                onClick={closeMenu}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full bg-purple-600 px-5 py-3 text-center font-semibold transition hover:bg-purple-500"
              >
                Send a Signal
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;