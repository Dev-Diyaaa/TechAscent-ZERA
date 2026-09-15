import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Powers from "./components/Powers";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import StoryIntro from "./components/StoryIntro";
import Origin from "./components/Origin";
import Chatbot from "./components/Chatbot";
import Mission from "./components/Mission";
import ScrollProgress from "./components/ScrollProgress";
import zeraImage from "./assets/zera.png";
import Contact from "./components/Contact";
import Welcome from "./pages/Welcome";
const particles = [
  { left: 8, top: 20, duration: 4, delay: 0.2 },
  { left: 18, top: 65, duration: 5, delay: 1 },
  { left: 27, top: 35, duration: 3, delay: 0.5 },
  { left: 39, top: 80, duration: 6, delay: 1.5 },
  { left: 48, top: 18, duration: 4, delay: 0.8 },
  { left: 56, top: 55, duration: 5, delay: 0.3 },
  { left: 65, top: 30, duration: 3.5, delay: 1.2 },
  { left: 74, top: 75, duration: 6, delay: 0.4 },
  { left: 83, top: 22, duration: 4.5, delay: 1.8 },
  { left: 91, top: 48, duration: 5, delay: 0.7 },
  { left: 12, top: 88, duration: 3, delay: 1.4 },
  { left: 32, top: 12, duration: 4, delay: 0.6 },
  { left: 44, top: 45, duration: 5.5, delay: 1.1 },
  { left: 70, top: 90, duration: 3.5, delay: 0.9 },
  { left: 96, top: 15, duration: 6, delay: 0.1 },
];

function Home() {
  
  const [showIntro, setShowIntro] = useState(true);

  // Show the story first
  if (showIntro) {
    return (
      <StoryIntro onComplete={() => setShowIntro(false)} />
    );
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#080512] text-white">
      <Loader />
      <ScrollProgress />

      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 md:px-16 lg:px-24"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.38, 0.68, 0.38],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="hero-backdrop hero-backdrop-one"
          />

          <motion.div
            animate={{
              scale: [1.08, 1, 1.08],
              opacity: [0.32, 0.58, 0.32],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="hero-backdrop hero-backdrop-two"
          />

          <motion.div
            animate={{
              scale: [1, 1.18, 1],
              opacity: [0.3, 0.52, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="hero-backdrop hero-backdrop-three"
          />

          <div className="hero-grid absolute inset-0" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#080512_82%)]" />
          <div className="hero-scanlines absolute inset-0" />
        </div>

        {particles.map((particle, index) => (
          <motion.div
            key={index}
            className="absolute h-1 w-1 rounded-full bg-purple-400/60"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mb-6 flex items-center gap-3"
            >
              <Sparkles className="h-4 w-4 text-purple-400" />

              <span className="text-xs uppercase tracking-[0.35em] text-purple-300">
                Connection Established
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-6xl font-black leading-none tracking-tight md:text-8xl"
            >
              <span className="block text-white">ZERA</span>

              <span className="mt-3 block bg-gradient-to-r from-purple-300 via-violet-400 to-indigo-500 bg-clip-text text-3xl font-semibold text-transparent md:text-5xl">
                GUARDIAN OF THE UNHEARD
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-8 max-w-xl text-base leading-8 text-gray-400 md:text-lg"
            >
              In a world filled with unheard voices, one guardian rises.
              ZERA harnesses the power of connection, courage, and energy
              to protect those who need a voice.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <motion.button
                onClick={() =>
                  document
                    .getElementById("origin")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="hero-cta-primary group flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold"
              >
                SEND A SIGNAL
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                onClick={() => setShowIntro(true)}
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="hero-cta-secondary rounded-full px-6 py-3 text-sm font-medium text-gray-200"
              >
                REPLAY ORIGIN
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="hero-micro-stats"
            >
              <div className="hero-micro-stat">
                <span className="hero-micro-label">LISTEN</span>
                <strong>24/7</strong>
              </div>

              <div className="hero-micro-stat">
                <span className="hero-micro-label">UNITY</span>
                <strong>12.4K</strong>
              </div>

              <div className="hero-micro-stat">
                <span className="hero-micro-label">SAFE</span>
                <strong>99.2%</strong>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="hero-visual-shell relative flex items-center justify-center"
          >
            <div className="hero-visual-glow absolute inset-0" />
            <div className="hero-grid absolute inset-0 opacity-30" />

            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.25, 0.6, 0.25],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="hero-backdrop hero-backdrop-four"
            />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="hero-ring hero-ring-large absolute"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 36,
                repeat: Infinity,
                ease: "linear",
              }}
              className="hero-ring hero-ring-medium absolute"
            />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 42,
                repeat: Infinity,
                ease: "linear",
              }}
              className="hero-ring hero-ring-small absolute"
            />

            <motion.div
              animate={{ y: [0, -12, 0], opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="hero-float-orb absolute inset-x-[18%] bottom-[13%] h-32 rounded-full bg-purple-500/20 blur-3xl"
            />

            <motion.div
              initial={{ opacity: 0, x: -18, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="hero-floating-badge left-4 top-6 md:left-8 md:top-10"
            >
              <span className="hero-status-dot" />
              CONNECTION ACTIVE
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="hero-floating-badge bottom-6 right-4 md:bottom-10 md:right-8"
            >
              CITY SIGNALS
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hero-stat-card top-10 right-6 md:right-8"
            >
              <span className="hero-stat-label">Signal Reach</span>
              <strong>12.4K</strong>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="hero-stat-card bottom-10 left-6 md:left-8"
            >
              <span className="hero-stat-label">Threat Scan</span>
              <strong>99.2%</strong>
            </motion.div>

            <div className="hero-core-panel relative z-10">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="hero-core-shell"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.45, 0.9, 0.45],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="hero-core-pulse absolute inset-6 rounded-full"
                />

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="hero-core-ring hero-core-ring-primary absolute inset-0"
                />

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="hero-core-ring hero-core-ring-secondary absolute inset-3"
                />

                <div className="hero-core-orb absolute inset-12">
                  <motion.img
                    src={zeraImage}
                    alt="ZERA - Guardian of the Unheard"
                    initial={{ opacity: 0, scale: 0.9, y: 18 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.1, delay: 0.3 }}
                    className="hero-visual-image"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Origin Section */}
      <section id="origin">
        <Origin />
      </section>

      <section id="powers">
        <Powers />
      </section>

      <section id="mission">
        <Mission />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Chatbot />
    </div>
  );
}
function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  if (showWelcome) {
    return <Welcome onBegin={() => setShowWelcome(false)} />;
  }

  return <Home />;
}

export default App;
