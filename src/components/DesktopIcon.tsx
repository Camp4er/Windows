type DesktopIconProps = {
    title: string;
    icon: string; // Link to an icon image or Tailwind icon class
    onClick: () => void;
  };
  
  export default function DesktopIcon({ title, icon, onClick }: DesktopIconProps) {
    return (
      <div onClick={onClick} className="flex flex-col items-center cursor-pointer text-center py-[6px] px-4 rounded hover:bg-gray-800 max-w-18">
        <div className="w-16 h-12 flex justify-center rounded-md">
          <img src={icon} alt={`${title} icon`} className="w-10 h-10" />
        </div>
        <span className="mt-1 text-xs">{title}</span>
      </div>
    );
  }
  