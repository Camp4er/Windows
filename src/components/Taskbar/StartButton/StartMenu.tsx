import { useEffect } from "react";
import { FaSearch, FaPowerOff } from "react-icons/fa";

const pinnedApps = [
  { name: "GitHub", icon: "/icons/github.png" },
  { name: "VSCode", icon: "/icons/vscode.png" },
  { name: "WebStorm", icon: "/icons/webstorm.png" },
  { name: "PyCharm", icon: "/icons/pycharm.png" },
  { name: "Postman", icon: "/icons/postman.png" },
  { name: "Docker", icon: "/icons/docker.png" },
  { name: "Chrome", icon: "/icons/chrome.png" },
  { name: "Edge", icon: "/icons/edge.png" },
];

const StartMenu = ({ closeMenu }: { closeMenu: () => void }) => {
  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".start-menu")) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="start-menu absolute bottom-12 left-0 w-80 bg-gray-900 text-white rounded-lg shadow-lg p-3">
      {/* Search Bar */}
      <div className="relative mb-3">
        <FaSearch className="absolute left-3 top-2 text-gray-400" />
        <input
          type="text"
          placeholder="Type here to search"
          className="w-full bg-gray-800 rounded-full px-10 py-2 text-sm focus:outline-none"
        />
      </div>

      {/* Pinned Apps */}
      <div>
        <h3 className="text-sm text-gray-400">Pinned</h3>
        <div className="grid grid-cols-4 gap-3 mt-2">
          {pinnedApps.map((app) => (
            <div key={app.name} className="flex flex-col items-center text-center">
              <img src={app.icon} alt={app.name} className="w-10 h-10 rounded-md" />
              <span className="text-xs">{app.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Power Button */}
      <div className="mt-3 flex justify-between items-center">
        <span className="text-sm">Vova Ushenko</span>
        <button className="p-2 hover:bg-gray-800 rounded-md">
          <FaPowerOff className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default StartMenu;
