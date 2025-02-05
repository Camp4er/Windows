import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");

  // Handle button click events
  const handleButtonClick = (value: string) => {
    if (value === "C") {
      setDisplay("0");
    } else if (value === "CE") {
      setDisplay("0");
    } else if (value === "←") {
      setDisplay(display.length > 1 ? display.slice(0, -1) : "0");
    } else if (value === "=") {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay("Error");
      }
    } else if (value === "√") {
      setDisplay(Math.sqrt(parseFloat(display)).toString());
    } else if (value === "x²") {
      setDisplay((parseFloat(display) ** 2).toString());
    } else if (value === "1/x") {
      setDisplay((1 / parseFloat(display)).toString());
    } else {
      setDisplay(display === "0" ? value : display + value);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 h-full">
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-full h-full">
        <div className="text-white text-right text-2xl p-10 bg-gray-700 rounded">
          {display}
        </div>
        <div className="grid grid-cols-4 gap-2 mt-4">
          {[
            "%", "CE", "C", "←",
            "1/x", "x²", "√", "÷",
            "7", "8", "9", "×",
            "4", "5", "6", "-",
            "1", "2", "3", "+",
            "+/-", "0", ".", "="
          ].map((button) => (
            <button
              key={button}
              className={`p-4 text-white text-xl font-bold rounded hover:bg-gray-700 ${
                button === "=" ? "bg-orange-500 col-span-2" : "bg-gray-600"
              }`}
              onClick={() => handleButtonClick(button)}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
