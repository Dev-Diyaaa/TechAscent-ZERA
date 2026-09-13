import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import awakening from "../assets/story-awakening.png";
import power from "../assets/story-power.png";
import flight from "../assets/story-flight.png";
import threat from "../assets/story-threat.png";
import battle from "../assets/story-battle.png";
import guardian from "../assets/story-guardian.png";

const chapters = [
  {
    title: "AWAKENING",
    image: awakening,
    text: "In a world where countless voices go unheard, ZERA awakens within a forgotten energy chamber. Something powerful is waiting to be discovered.",
  },
  {
    title: "FIRST POWER",
    image: power,
    text: "Violet energy flows through ZERA's hands. For the first time, she realizes that her power can protect more than just herself.",
  },
  {
    title: "FIRST FLIGHT",
    image: flight,
    text: "Learning to control the energy within her, ZERA rises above the city and sees the world from a new perspective.",
  },
  {
    title: "THE THREAT",
    image: threat,
    text: "A mysterious darkness spreads across the skyline. The city is in danger, and ZERA can no longer remain a silent observer.",
  },
  {
    title: "THE BATTLE",
    image: battle,
    text: "Shadow creatures emerge from the darkness. ZERA stands between danger and innocent lives, using her powers to defend those who cannot defend themselves.",
  },
  {
    title: "THE GUARDIAN",
    image: guardian,
    text: "After the darkness fades, ZERA understands her true purpose. Her greatest strength is not power alone, but the courage to listen and protect the unheard.",
  },
];

export default function StoryIntro({ onComplete }) {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      if (current < chapters.length - 1) {
        setCurrent((previous) => previous + 1);
      }
    }

    if (event.key === "ArrowLeft") {
      if (current > 0) {
        setCurrent((previous) => previous - 1);
      }
    }

    if (event.key === "Escape") {
      onComplete();
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [current, onComplete]);
  const nextChapter = () => {
    if (current < chapters.length - 1) {
      setCurrent(current + 1);
    }
  };

  const previousChapter = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const chapter = chapters[current];

return (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="min-h-screen overflow-hidden bg-[#080512] text-white"
  >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.99 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 overflow-hidden bg-black"
        >
          {/* Blurred background fills the screen */}
          <img
            src={chapter.image}
            alt=""
            className="absolute inset-0 h-full w-full scale-110 object-cover opacity-30 blur-2xl"
          />

          {/* Complete original image remains visible */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={chapter.image}
              alt={chapter.title}
              className="relative z-10 h-full w-full object-contain"
            />
          </div>

          {/* Cinematic overlays */}
          <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-black/85 via-black/35 to-transparent" />

          <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/85 via-transparent to-black/20" />

          {/* Header */}
          <div className="absolute left-8 top-8 z-30 md:left-16 md:top-12">
            <p className="text-xs tracking-[0.4em] text-purple-300">
              ZERA // ORIGIN PROTOCOL
            </p>
          </div>

          {/* Skip button */}
          <button
            onClick={onComplete}
            className="absolute right-6 top-8 z-30 rounded-full border border-white/30 px-4 py-2 text-xs uppercase tracking-widest text-white transition hover:border-purple-400 hover:bg-white hover:text-black md:right-16 md:top-12"
          >
            Skip Story
          </button>

          {/* Story text */}
          <div className="absolute bottom-24 left-8 z-30 max-w-xl md:bottom-28 md:left-16">
            <p className="mb-4 text-sm tracking-[0.35em] text-purple-300">
              CHAPTER {String(current + 1).padStart(2, "0")} /{" "}
              {String(chapters.length).padStart(2, "0")}
            </p>

            <h1 className="text-4xl font-bold tracking-[0.15em] md:text-7xl">
              {chapter.title}
            </h1>

            <div className="mt-5 h-px w-24 bg-purple-400" />

            <p className="mt-6 max-w-lg text-sm leading-7 text-gray-200 md:text-base">
              {chapter.text}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Previous Arrow */}
      <button
        onClick={previousChapter}
        disabled={current === 0}
        aria-label="Previous chapter"
        className="absolute left-5 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 text-2xl text-white transition hover:border-purple-400 hover:bg-purple-500/20 disabled:cursor-not-allowed disabled:opacity-20 md:left-8"
      >
        ←
      </button>

      {/* Next Arrow */}
      <button
        onClick={() => {
          if (current === chapters.length - 1) {
            onComplete();
          } else {
            nextChapter();
          }
        }}
        aria-label="Next chapter"
        className="absolute right-5 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 text-2xl text-white transition hover:border-purple-400 hover:bg-purple-500/20 md:right-8"
      >
        →
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-8 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2">
        {chapters.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to chapter ${index + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              index === current
                ? "w-10 bg-purple-400"
                : "w-2 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Final Button */}
      {current === chapters.length - 1 && (
        <motion.button
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={onComplete}
          className="absolute bottom-20 right-8 z-40 rounded-full bg-purple-500 px-6 py-3 text-sm font-semibold tracking-widest text-white shadow-lg shadow-purple-500/30 transition hover:bg-purple-400 md:right-16"
        >
          ENTER ZERA →
        </motion.button>
      )}
    </motion.div>
  );
}