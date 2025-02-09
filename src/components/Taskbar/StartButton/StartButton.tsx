import { useState } from "react";
import StartMenu from "./StartMenu";

const StartButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Start Button */}
      <div
        className="flex items-center justify-center rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src="/icons/Windows.png"
          alt="Windows icon"
          width={30}
          height={30}
        />
      </div>

      {/* Start Menu Popup */}
      {isOpen && <StartMenu closeMenu={() => setIsOpen(!isOpen)} />}
    </div>
  );
};

export default StartButton;
