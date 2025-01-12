import Dekstop from "@/components/Desktop";
import { WindowManagerProvider } from "@/components/NewWindow/WindowManagerOpener";
import Taskbar from "@/components/Taskbar/Taskbar";
import React from "react";

const page = () => {
  return (
    <div>
      <WindowManagerProvider>
        <Dekstop />
      </WindowManagerProvider>
    </div>
  );
};

export default page;
