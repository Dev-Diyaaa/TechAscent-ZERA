import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);

    updateScrollProgress();

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return (
    <motion.div
      className="fixed left-0 top-0 z-[200] h-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500"
      style={{ width: `${scrollProgress}%` }}
    />
  );
}

export default ScrollProgress;