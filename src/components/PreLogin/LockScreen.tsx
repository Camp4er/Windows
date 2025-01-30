import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LockScreen({ onUnlock }: { onUnlock: () => void }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleUnlock = () => onUnlock(); // Move to desktop

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/icons/default_dark_compressed.jpg')" }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      onClick={handleUnlock}
    >
      {/* Clock Display */}
      <h1 className="text-white text-6xl font-semibold">
        {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </h1>
      <p className="text-white text-xl">
        {time.toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long" })}
      </p>

      {/* "Press Any Key" Text */}
      <motion.p
        className="text-white mt-6 text-lg animate-pulse cursor-pointer"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        Press any key to continue...
      </motion.p>
    </motion.div>
  );
}
