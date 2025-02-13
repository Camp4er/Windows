import Image from "next/image";
import React from "react";

const MobileView = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="flex flex-col items-center">
        {/* Triangle Warning Sign */}
        <div className="relative w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[100px] border-b-yellow-500 mb-4">
         <Image src="/icons/exclamation.png" alt="danger icon" width={80} height={80} />
        </div>
        
        {/* Warning Message */}
        <h1 className="text-3xl font-bold text-center mb-2">
          Caution: Mobile View Detected
        </h1>
        <p className="text-center text-lg">
          This website is only visible on screens wider than 1024px. Please switch to a larger device for the best experience.
        </p>
      </div>
    </div>
  );
};

export default MobileView;
