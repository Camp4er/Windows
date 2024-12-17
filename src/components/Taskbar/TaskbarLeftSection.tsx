import React, { useState, useRef, useEffect } from "react";
import ContactPanel from "./ContactPanel";

export default function TaskbarLeftSection() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Close panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setIsContactOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleContactPanel = () => {
    setIsContactOpen(!isContactOpen);
  };

  return (
    <div className="relative">
      <button
        className="text-white py-2 cursor-pointer rounded-md"
        onClick={toggleContactPanel}
      >
        Contact Me
      </button>

      {/* Sliding Panel */}
      {isContactOpen && (
        <div
          ref={panelRef}
          className="absolute bottom-full left-0 mb-2 w-auto z-50 transform transition-transform duration-300 bg-gray-500 rounded"
          style={{ transform: isContactOpen ? "translateX(0)" : "translateX(-100%)" }}
        >
          <ContactPanel />
        </div>
      )}
    </div>
  );
}
