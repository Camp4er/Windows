import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LockScreen({ onUnlock }: { onUnlock: () => void }) {
  const [time, setTime] = useState(new Date());
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Listen for any key press to unlock
    const handleKeyPress = (event: KeyboardEvent) => {
      event.preventDefault();
      setIsUnlocked(true); // Trigger animation
      setTimeout(onUnlock, 600); // Wait for animation to complete
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [onUnlock]);

  return (
    <motion.div
  className="fixed inset-0 flex flex-col items-center justify-center"
  initial={{ y: 0 }}
  animate={isUnlocked ? { y: "-100vh" } : { y: 0 }}
  transition={{ duration: 0.6, ease: "easeInOut" }}
  onClick={() => {
    setIsUnlocked(true);
    setTimeout(onUnlock, 600);
  }}
>
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/background/img4.jpg')",
    }}
  />

  {/* Clock Display */}
  <h1
    className="text-white text-6xl font-semibold z-10"
    style={{ position: "relative" }}
  >
    {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
  </h1>
  <p
    className="text-white text-xl z-10"
    style={{ position: "relative" }}
  >
    {time.toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long" })}
  </p>

  {/* "Press Any Key" Text */}
  <p
    className="text-white mt-6 text-lg animate-pulse cursor-pointer z-10"
    style={{ position: "relative" }}
  >
    Click or press any key to continue...
  </p>
</motion.div>
  );
}
