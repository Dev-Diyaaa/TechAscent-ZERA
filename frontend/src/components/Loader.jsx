import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 3.8 }}
      className="fixed inset-0 z-[100] bg-[#050509] flex items-center justify-center pointer-events-none"
    >
      <div className="text-center">

        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-20 h-20 mx-auto rounded-full border border-purple-500/50
          shadow-[0_0_40px_rgba(168,85,247,0.45)] flex items-center justify-center"
        >
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-3 h-3 rounded-full bg-purple-400"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-purple-400 tracking-[0.35em] text-sm"
        >
          SYSTEM AWAKENING
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-3 text-gray-500 tracking-[0.25em] text-xs"
        >
          SEARCHING FOR SIGNALS...
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-3 text-gray-400 tracking-[0.25em] text-xs"
        >
          CONNECTION FOUND
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.7, duration: 0.6 }}
          className="mt-8 text-4xl font-bold tracking-[0.3em]"
        >
          ZERA
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.1 }}
          className="mt-3 text-purple-300 tracking-[0.3em] text-xs"
        >
          ONLINE
        </motion.p>

      </div>
    </motion.div>
  );
}

export default Loader;