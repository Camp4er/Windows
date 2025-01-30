import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BootScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete(); // Move to Lock Screen
    }, 3000); // 3-second boot time

    return () => clearTimeout(timer);
  }, [onComplete]);

  return isVisible ? (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 1.5 }}
    >
      {/* Fake Windows Logo */}
      <div className="text-white text-5xl font-bold">⊞</div>

      {/* Loading Text */}
      <p className="text-white mt-4">Starting Up...</p>
    </motion.div>
  ) : null;
}
