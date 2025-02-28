import Image from "next/image";
import React from "react";


type DesktopIconProps = {
 title: string;
 icon: string; // Link to an icon image or Tailwind icon class
 onClick: () => void;
 onContextMenu: (event: React.MouseEvent) => void; // Add onContextMenu
};


export default function DesktopIcon({ title, icon, onClick, onContextMenu }: DesktopIconProps) {
 return (
 <div
 onClick={onClick}
 onContextMenu={onContextMenu} // Add onContextMenu handler
 className="flex flex-col items-center cursor-pointer text-center py-[6px] px-4 rounded hover:bg-gray-800 max-w-18"
 >
 <div className="w-16 h-12 flex justify-center rounded-md">
 <Image src={icon} alt={`${title} icon`} width={40} height={10}/>
 </div>
 <span className="mt-1 text-xs">{title}</span>
 </div>
 );
}
