import { useState, useEffect } from "react";

export default function ContextMenu() {
  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const handleRightClick = (event: MouseEvent) => {
      event.preventDefault(); // Prevent default right-click menu
      setMenuPosition({ x: event.clientX, y: event.clientY });
    };

    const handleClickAway = () => setMenuPosition(null); // Hide menu on click anywhere else

    document.addEventListener("contextmenu", handleRightClick);
    document.addEventListener("click", handleClickAway);

    return () => {
      document.removeEventListener("contextmenu", handleRightClick);
      document.removeEventListener("click", handleClickAway);
    };
  }, []);

  if (!menuPosition) return null; // Don't render if menu is not visible

  return (
    <ul
      className="absolute bg-gray-800 text-white shadow-md rounded-md p-2 text-sm w-48"
      style={{ top: menuPosition.y, left: menuPosition.x }}
    >
      <li className="hover:bg-gray-700 px-3 py-2 cursor-pointer">🔄 Refresh</li>
      <li className="hover:bg-gray-700 px-3 py-2 cursor-pointer">🖼 Change Wallpaper</li>
      <li className="hover:bg-gray-700 px-3 py-2 cursor-pointer">🗑 Empty Recycle Bin</li>
      <li className="hover:bg-gray-700 px-3 py-2 cursor-pointer">⚙ Display Settings</li>
      <li className="hover:bg-gray-700 px-3 py-2 cursor-pointer">🎨 Personalize</li>
      <li className="hover:bg-gray-700 px-3 py-2 cursor-pointer">🖥 Open in Terminal</li>
    </ul>
  );
}
