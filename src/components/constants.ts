export interface BreadcrumbProps {
    path: string[]; //current path
    onNavigate: (newPath:string[]) => void; //function to handle navigation
}

export interface ContentAreaProps {
    path: string[];
}

export const skills = [
    { name: "HTML", type: "Language", size: "1.5 MB", added: "01/2023" },
    { name: "CSS", type: "Language", size: "1.2 MB", added: "01/2023" },
    { name: "JavaScript", type: "Language", size: "2.3 MB", added: "02/2023" },
    { name: "React.js", type: "Library", size: "3.4 MB", added: "03/2023" },
    { name: "Node.js", type: "Runtime", size: "2.8 MB", added: "04/2023" },
    { name: "Bootstrap", type: "Framework", size: "1.8 MB", added: "05/2023" },
    { name: "DBMS", type: "Concept", size: "2.1 MB", added: "06/2023" },
    { name: "jQuery", type: "Library", size: "1.0 MB", added: "07/2023" },
    { name: "VS Code", type: "Tool", size: "200 MB", added: "08/2023" },
    { name: "GitHub", type: "Platform", size: "N/A", added: "09/2023" },
    { name: "MongoDB", type: "Database", size: "5.6 MB", added: "10/2023" },
    { name: "Next.js", type: "Framework", size: "2.9 MB", added: "11/2023" },
  ];
  