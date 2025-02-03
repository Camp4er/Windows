import { useEffect } from "react";
import { FaSearch, FaPowerOff } from "react-icons/fa";

const pinnedApps = [
  { name: "Edge", icon: "/icons/edge.png" },
  { name: "Word", icon: "/icons/word.png" },
  { name: "Excel", icon: "/icons/excel.png" },
  { name: "PowerPoint", icon: "/icons/powerpoint.png" },
  { name: "Outlook", icon: "/icons/outlook.png" },
  { name: "Calendar", icon: "/icons/calendar.png" },
  { name: "Microsoft Store", icon: "/icons/store.png" },
  { name: "Photos", icon: "/icons/photos.png" },
  { name: "Spotify", icon: "/icons/spotify.png" },
  { name: "Xbox", icon: "/icons/xbox.png" },
  { name: "Instagram", icon: "/icons/instagram.png" },
  { name: "Messenger", icon: "/icons/messenger.png" },
];

const recommendedFiles = [
  { name: "Screenshot (32)", time: "Yesterday at 12:44 PM" },
  { name: "Screenshot (31)", time: "Friday at 11:56 AM" },
  { name: "Screenshot (30)", time: "Thursday at 11:10 PM" },
  { name: "Screenshot (29)", time: "Thursday at 11:09 PM" },
];

const StartMenu = ({ closeMenu }: { closeMenu: () => void }) => {
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
    <div className="start-menu absolute bottom-12 left-4 w-[650px] start-button text-white rounded-lg shadow-lg p-4">
      {/* Search Bar */}
      <div className="relative py-5">
        <FaSearch className="absolute left-4 bottom-[39%] text-gray-400" />
        <input
          type="text"
          placeholder="Search for apps, settings, and documents"
          className="w-full search rounded-full px-12 py-2 text-sm focus:outline-none border border-gray-700"
        />
      </div>

      {/* Pinned Apps */}
      <div className="mt-4">
        <h3 className="text-sm text-gray-400">Pinned</h3>
        <div className="grid grid-cols-6 gap-3 mt-2">
          {pinnedApps.map((app) => (
            <div key={app.name} className="flex flex-col items-center text-center">
              <img src={app.icon} alt={app.name} className="w-10 h-10" />
              <span className="text-xs">{app.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Files */}
      <div className="mt-4">
        <h3 className="text-sm text-gray-400">Recommended</h3>
        <ul className="mt-2 space-y-2">
          {recommendedFiles.map((file, index) => (
            <li key={index} className="flex justify-between text-sm hover:bg-zinc-800 p-2 rounded">
              <span>{file.name}</span>
              <span className="text-gray-400">{file.time}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom User & Power Button */}
      <div className="mt-4 flex justify-between items-center border-t border-zinc-700 pt-2">
        <span className="text-sm">Poorva Saxena</span>
        <button className="p-2 hover:bg-zinc-800 rounded-md">
          <FaPowerOff className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default StartMenu;
