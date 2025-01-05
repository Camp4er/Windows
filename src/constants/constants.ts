import { FileItem } from "@/components/FileExplorer/FileExplorer";

export interface BreadcrumbProps {
  currentPath: FileItem[];
  onBreadcrumbClick: (index: number) => void;
  onBack?: () => void;
  onForward?: () => void;
  onReload?: () => void; 
}

export interface ContentAreaProps {
  path: string[];
  // folderContents: { [key: string]: { name: string; type: 'file' | 'folder' }[] };
  folderContents: any;
  onNavigate: (folderName: string) => void; // Add navigation handler for subfolders
}

export const skillsCard = [
    {name: "Languages & Frameworks", type: "File folder", size: "1.5 MB", datemodified: "01/2023", icon: "/icons/word.png"},
    {name: "Tools & Software", type: "File folder", size: "1.5 MB", datemodified: "01/2023", icon: "/icons/word.png"},
    {name: "Soft Skills", type: "File folder", size: "1.5 MB", datemodified: "01/2023", icon: "/icons/word.png"},
]

export const skills = [
  { name: "HTML", type: "Language", size: "1.5 MB", datemodified: "01/2023", icon: "/icons/word.png" },
  { name: "CSS", type: "Language", size: "1.2 MB", datemodified: "01/2023", icon: "/icons/word.png"  },
  { name: "JavaScript", type: "Language", size: "2.3 MB", datemodified: "02/2023", icon: "/icons/word.png"  },
  { name: "React.js", type: "Library", size: "3.4 MB", datemodified: "03/2023", icon: "/icons/word.png"  },
  { name: "Node.js", type: "Runtime", size: "2.8 MB", datemodified: "04/2023", icon: "/icons/word.png"  },
  { name: "Bootstrap", type: "Framework", size: "1.8 MB", datemodified: "05/2023", icon: "/icons/word.png"  },
  { name: "DBMS", type: "Concept", size: "2.1 MB", datemodified: "06/2023", icon: "/icons/word.png"  },
  { name: "jQuery", type: "Library", size: "1.0 MB", datemodified: "07/2023", icon: "/icons/word.png"  },
  { name: "VS Code", type: "Tool", size: "200 MB", datemodified: "08/2023", icon: "/icons/word.png"  },
  { name: "GitHub", type: "Platform", size: "N/A", datemodified: "09/2023", icon: "/icons/word.png"  },
  { name: "MongoDB", type: "Database", size: "5.6 MB", datemodified: "10/2023", icon: "/icons/word.png"  },
  { name: "Next.js", type: "Framework", size: "2.9 MB", datemodified: "11/2023", icon: "/icons/word.png"  },
];

export const mainFolders = ["OneDrive", "This PC", "Network", "Linux"];


// Main file
