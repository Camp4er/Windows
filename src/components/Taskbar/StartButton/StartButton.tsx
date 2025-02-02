import { useState } from "react";
import StartMenu from "./StartMenu";

const StartButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Start Button */}
      <button
        className="flex items-center justify-center rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src="/icons/Windows.png"
          alt="Windows icon"
          width={30}
          height={30}
        />
      </button>

      {/* Start Menu Popup */}
      {isOpen && <StartMenu closeMenu={() => setIsOpen(false)} />}
    </div>
  );
};

export default StartButton;
