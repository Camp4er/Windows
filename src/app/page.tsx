"use client"

import Desktop from "@/components/Desktop";
import { WindowManagerProvider } from "@/components/NewWindow/WindowManagerContext";
import React, { useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import MobileView from "@/Medium&SmallerView/MobileView";
import BootScreen from "@/components/PreLogin/BootScreen";
import LockScreen from "@/components/PreLogin/LockScreen";

const Page = () => {
  // Define your media query (768px corresponds to tablets and below)
  const isLaptopOrBigger = useMediaQuery("(min-width: 1024px)");

  const [screen, setScreen] = useState("boot");

  return (
    <div>
      {isLaptopOrBigger ? (
        <WindowManagerProvider>
          {screen === "boot" && <BootScreen onComplete={() => setScreen("lockscreen")} />}
      {screen === "lockscreen" && <LockScreen onUnlock={() => setScreen("desktop")} />}
      {screen === "desktop" && <Desktop />}
        </WindowManagerProvider>
      ) : (
        <MobileView/> // Render an alternate component for smaller screens
      )}
    </div>
  );
};

export default Page;
