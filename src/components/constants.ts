interface BreadcrumbProps {
    path: string[]; //current path
    onNavigate: (newPath:string[]) => void; //function to handle navigation
}

interface ContentAreaProps {
    path: string[];
}