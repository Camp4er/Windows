import { useState } from "react";
import { FaWindows } from "react-icons/fa";
import StartMenu from "./StartMenu";

const StartButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Start Button */}
      <button
        className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaWindows size={20} className="text-white" />
      </button>

      {/* Start Menu Popup */}
      {isOpen && <StartMenu closeMenu={() => setIsOpen(false)} />}
    </div>
  );
};

export default StartButton;
