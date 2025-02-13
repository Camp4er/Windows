import { useState, useEffect, useRef } from "react";
import { FaRegEye, FaSort, FaRedo, FaImage, FaUndo, FaTerminal, FaFolderOpen, FaTrash, FaThumbtack, FaFileArchive, FaCopy, FaInfoCircle } from "react-icons/fa";
import { useWindowManager } from "../NewWindow/WindowManagerContext";


interface ContextMenuProps {
 rightClickedIcon: string | null;
}


export default function ContextMenu({ rightClickedIcon }: ContextMenuProps) {
 const [menuPosition, setMenuPosition] = useState<{
 x: number;
 y: number;
 } | null>(null);
 const [showViewOptions, setShowViewOptions] = useState(false);
 const [showSortOptions, setShowSortOptions] = useState(false);
 const menuRef = useRef<HTMLUListElement>(null);
 const { openWindow } = useWindowManager(); // Access openWindow


 useEffect(() => {
 const handleRightClick = (event: MouseEvent) => {
 // Check if the right-click originated from the taskbar or a window
 if (isTaskbarClick(event.target) || isWindowClick(event.target)) {
 return; // Ignore the right-click
 }


 event.preventDefault(); // Prevent default right-click menu
 setMenuPosition({ x: event.clientX, y: event.clientY });
 };


 const handleClickAway = (event: MouseEvent) => {
  if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
    setMenuPosition(null);
    setShowViewOptions(false);
    setShowSortOptions(false);
  }
};


 document.addEventListener("contextmenu", handleRightClick);
 document.addEventListener("click", handleClickAway);


 return () => {
 document.removeEventListener("contextmenu", handleRightClick);
 document.removeEventListener("click", handleClickAway);
 };
 }, []);


 const isTaskbarClick = (target: EventTarget | null): boolean => {
  if (!(target instanceof Node)) return false;
  const element = target as Element; // Cast to Element
  return (
    element.classList.contains("taskbar") ||
    element.closest(".taskbar") !== null
  );
};

const isWindowClick = (target: EventTarget | null): boolean => {
  if (!(target instanceof Node)) return false;
  const element = target as Element; // Cast to Element
  return (
    element.classList.contains("window") ||
    element.closest(".window") !== null
  );
};


 const handleOpenTerminal = () => {
 openWindow("Administrator: Windows PowerShell", "/icons/bash.png");
 setMenuPosition(null); // Close the context menu after opening Terminal
 };


 if (!menuPosition) return null; // Don't render if menu is not visible


 const renderDesktopMenuItems = () => (
 <>
 <li
 className="hover:bg-gray-700 px-3 py-2 cursor-pointer flex items-center"
 onClick={() => {
 setShowViewOptions(!showViewOptions);
 setShowSortOptions(false);
 }}
 >
 <FaRegEye className="mr-2" /> View
 {showViewOptions && (
 <ul className="absolute left-full top-0 bg-gray-800 text-white shadow-md rounded-md p-2 text-sm w-48">
 <li className="hover:bg-gray-700 px-3 py-2 cursor-pointer">
 Large Icons
 </li>
 <li className="hover:bg-gray-700 px-3 py-2 cursor-pointer">
 Medium Icons
 </li>
 <li className="hover:bg-gray-700 px-3 py-2 cursor-pointer">
 Small Icons
 </li>
 <li className="hover:bg-gray-700 px-3 py-2 cursor-pointer">
 Auto Arrange Icons
 </li>
 <li className="hover:bg-gray-700 px-3 py-2 cursor-pointer">
 Align Icons to Grid
 </li>
 </ul>
 )}
 </li>
 <li
 className="hover:bg-gray-700 px-3 py-2 cursor-pointer flex items-center"
 onClick={() => {
 setShowSortOptions(!showSortOptions);
 setShowViewOptions(false);
 }}
 >
 <FaSort className="mr-2" /> Sort By
 {showSortOptions && (
 <ul className="absolute left-full top-0 bg-gray-800 text-white shadow-md rounded-md p-2 text-sm w-48">
 <li className="hover:bg-gray-700 px-3 py-2 cursor-pointer">
 Name
 </li>
 <li className="hover:bg-gray-700 px-3 py-2 cursor-pointer">
 Size
 </li>
 <li className="hover:bg-gray-700 px-3 py-2 cursor-pointer">
 Item Type
 </li>
 <li className="hover:bg-gray-700 px-3 py-2 cursor-pointer">
 Date Modified
 </li>
 </ul>
 )}
 </li>
 <li className="hover:bg-gray-700 px-3 py-2 cursor-pointer flex items-center">
 <FaRedo className="mr-2" /> Refresh
 </li>
 <li className="hover:bg-gray-700 px-3 py-2 cursor-pointer flex items-center">
 <FaImage className="mr-2" /> Change Wallpaper
 </li>
 <li className="hover:bg-gray-700 px-3 py-2 cursor-pointer flex items-center">
 <FaUndo className="mr-2" /> Undo Delete
 </li>
 
 <li
 className="hover:bg-gray-700 px-3 py-2 cursor-pointer flex items-center"
 onClick={handleOpenTerminal}
 >
 <FaTerminal className="mr-2" /> Open in Terminal
 </li>
 </>
 );


 const handleOpen = () => {
 if (rightClickedIcon) {
 openWindow(rightClickedIcon, "/icons/app.png");
 setMenuPosition(null);
 }
 };


 const handlePinToQuickAccess = () => {
 //openWindow(rightClickedIcon, "/icons/app.png");
 setMenuPosition(null);
 };


 const renderIconMenuItems = () => (
 <>
 <li className="hover:bg-gray-700 px-3 py-2 cursor-pointer flex items-center" onClick={handleOpen}>
 <FaFolderOpen className="mr-2" /> Open
 </li>
 <li className="hover:bg-gray-700 px-3 py-2 cursor-pointer flex items-center">
 <FaTrash className="mr-2" /> Delete
 </li>
 <li className="hover:bg-gray-700 px-3 py-2 cursor-pointer flex items-center" onClick={handlePinToQuickAccess}>
 <FaThumbtack className="mr-2" /> Pin to Quick Access
 </li>
 <li className="hover:bg-gray-700 px-3 py-2 cursor-pointer flex items-center">
 <FaFileArchive className="mr-2" /> Compress to ZIP file
 </li>
 <li className="hover:bg-gray-700 px-3 py-2 cursor-pointer flex items-center">
 <FaCopy className="mr-2" /> Copy as path
 </li>
 <li className="hover:bg-gray-700 px-3 py-2 cursor-pointer flex items-center">
 <FaInfoCircle className="mr-2" /> Properties
 </li>
 <li
 className="hover:bg-gray-700 px-3 py-2 cursor-pointer flex items-center"
 onClick={handleOpenTerminal}
 >
 <FaTerminal className="mr-2" /> Open in Terminal
 </li>
 </>
 );


 return (
 <ul
 className="absolute bg-gray-800 text-white shadow-md rounded-md p-2 text-sm w-48"
 style={{ top: menuPosition.y, left: menuPosition.x }}
 ref={menuRef}
 >
 {rightClickedIcon ? renderIconMenuItems() : renderDesktopMenuItems()}
 </ul>
 );
}