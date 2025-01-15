"use client"

import Desktop from "@/components/Desktop";
import { WindowManagerProvider } from "@/components/NewWindow/WindowManagerContext";
import React from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import MobileView from "@/Medium&SmallerView/MobileView";

const Page = () => {
  // Define your media query (768px corresponds to tablets and below)
  const isLaptopOrBigger = useMediaQuery("(min-width: 1024px)");

  return (
    <div>
      {isLaptopOrBigger ? (
        <WindowManagerProvider>
          <Desktop />
        </WindowManagerProvider>
      ) : (
        <MobileView/> // Render an alternate component for smaller screens
      )}
    </div>
  );
};

export default Page;
