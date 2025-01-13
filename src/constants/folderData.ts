import { FileItem } from "@/components/FileExplorer/FileExplorer";
import  NotepadOpener  from "@/components/SeparateWindows/NotepadOpener";

// Create a data structure to map IDs to content
const contentMap = {
  "3.1": "This is the About section description...",
  "5.1.1": "This is the Project A description...",
  // Add more IDs and content as needed
};

export const sectionOne = {
  Home: {
    name: "Home",
    type: "folder" as const,
    icons: "/icons/3d-house.png",
    id: 1,
    children: [] as FileItem[],
  },
  Gallery: {
    name: "Gallery",
    type: "folder" as const,
    icons: "/icons/gallery.png",
    id: 2,
    children: [] as FileItem[],
  },
};

export const sectionTwo = {
  About: {
    name: "About",
    type: "folder" as const,
    icons: "/icons/user-folder.png",
    id: 3,
    children: [
      {
        name: "Description",
        type: "file" as const,
        icons: "/icons/notepad.png",
        id: 3.1,
        dateModified: "08-01-2025",
        size: "118 KB",
        // onClick: () => {
        //   console.log("onClick event triggered");
        //   NotepadOpener("3.1");
        // }
      }
    ],
  },
  Documents: {
    name: "Documents",
    type: "folder" as const,
    icons: "/icons/curriculum-vitae.png",
    id: 4,
    children: [
      {
        name: "Resume",
        type: "file" as const,
        dateModified: "2024-12-01",
        size: "118 KB",
        icons: "/icons/share.png",
        id: 4.1,
        onClick: () => {
        },
      },
    ],
  },
  Projects: {
    name: "Projects",
    type: "folder" as const,
    icons: "/icons/blueprint.png",
    id: 5,
    children: [
      {
        name: "Project A",
        type: "folder" as const,
        dateModified: "2024-12-01",
        size: "118 KB",
        icons: "/icons/share.png",
        id: 5.1,
        children: [
          {
            name: "Description",
            type: "file" as const,
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/notepad.png",
            id: "5.1.1",
            // onClick: () => openWindow(
            //   "Notepad",
            //   "/icons/notepad.png",
            //   <Notepad/>
            // ),
          },
          {
            name: "Github Repo",
            type: "file" as const,
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "5.1.2",
            onClick: () => {
              window.open("https://github.com/Camp4er", "_blank");
            },
          },
          {
            name: "Live Demo",
            type: "file" as const,
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "5.1.3",
            onClick: () => {
              window.open("https://github.com/Camp4er", "_blank");
            },
          },
          {
            name: "View Images",
            type: "folder" as const,
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "5.1.4",
            children: [
              {
                name: "Image 1",
                type: "file" as const,
                dateModified: "2024-12-01",
                size: "118 KB",
                icons: "/icons/share.png",
                id: "5.1.4.1",
              },
              {
                name: "Image 2",
                type: "file" as const,
                dateModified: "2024-12-01",
                size: "118 KB",
                icons: "/icons/share.png",
                id: "5.1.4.2",
              },
            ],
          },
        ],
      },
      {
        name: "Project B",
        type: "folder" as const,
        dateModified: "2024-12-01",
        size: "118 KB",
        icons: "/icons/share.png",
        id: 5.2,
        children: [
          {
            name: "Description",
            type: "file" as const,
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/notepad.png",
            id: "5.2.1",
          },
          {
            name: "Github Repo",
            type: "file" as const,
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "5.2.2",
            onClick: () => {
              window.open("https://github.com/Camp4er", "_blank");
            },
          },
          {
            name: "Live Demo",
            type: "file" as const,
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "5.2.3",
            onClick: () => {
              window.open("https://github.com/Camp4er", "_blank");
            },
          },
          {
            name: "View Images",
            type: "file" as const,
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "5.2.4",
            children: [
              {
                name: "Image 1",
                type: "file" as const,
                dateModified: "2024-12-01",
                size: "118 KB",
                icons: "/icons/share.png",
                id: "5.2.4.1",
              },
              {
                name: "Image 2",
                type: "file" as const,
                dateModified: "2024-12-01",
                size: "118 KB",
                icons: "/icons/share.png",
                id: "5.2.4.2",
              },
            ],
          },
        ],
      },
      {
        name: "Project C",
        type: "folder" as const,
        dateModified: "2024-12-01",
        size: "118 KB",
        icons: "/icons/share.png",
        id: 5.3,
        children: [
          {
            name: "Description",
            type: "file" as const,
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "5.3.1",
          },
          {
            name: "Github Repo",
            type: "file" as const,
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "5.3.2",
            onClick: () => {
              window.open("https://github.com/Camp4er", "_blank");
            },
          },
          {
            name: "Live Demo",
            type: "file" as const,
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "5.3.3",
            onClick: () => {
              window.open("https://github.com/Camp4er", "_blank");
            },
          },
          {
            name: "View Images",
            type: "file" as const,
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "5.3.4",
            children: [
              {
                name: "Image 1",
                type: "file" as const,
                dateModified: "2024-12-01",
                size: "118 KB",
                icons: "/icons/share.png",
                id: "5.3.4.1",
              },
              {
                name: "Image 2",
                type: "file" as const,
                dateModified: "2024-12-01",
                size: "118 KB",
                icons: "/icons/share.png",
                id: "5.3.4.2",
              },
            ],
          },
        ],
      },
      {
        name: "Project D",
        type: "folder" as const,
        dateModified: "2024-12-01",
        size: "118 KB",
        icons: "/icons/share.png",
        id: 5.4,
        children: [
          {
            name: "Description",
            type: "file" as const,
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "5.4.1",
          },
          {
            name: "Github Repo",
            type: "file" as const,
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "5.4.2",
            onClick: () => {
              window.open("https://github.com/Camp4er", "_blank");
            },
          },
          {
            name: "Live Demo",
            type: "file" as const,
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "5.4.3",
            onClick: () => {
              window.open("https://github.com/Camp4er", "_blank");
            },
          },
          {
            name: "View Images",
            type: "file" as const,
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "5.4.4",
            children: [
              {
                name: "Image 1",
                type: "file" as const,
                dateModified: "2024-12-01",
                size: "118 KB",
                icons: "/icons/share.png",
                id: "5.4.4.1",
              },
              {
                name: "Image 2",
                type: "file" as const,
                dateModified: "2024-12-01",
                size: "118 KB",
                icons: "/icons/share.png",
                id: "5.4.4.2",
              },
            ],
          },
        ],
      },

    ],
  },
  Skills: {
    name: "Skills",
    type: "folder" as const,
    icons: "/icons/skills.png",
    id: 6,
    children: [
      {
        name: "Languages & Frameworks",
        type: "folder" as const,
        dateModified: "2024-12-01",
        size: "118 KB",
        icons: "/icons/share.png",
        id: 6.1,
        children: [
          {
            name: "HTML",
            type: "file" as const,
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "6.1.1",
            onClick: () => {
              window.open("https://html.com/document", "_blank");
            },
          },
          {
            name: "CSS",
            type: "file" as const,
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "6.1.2",
            onClick: () => {
              window.open("https://devdocs.io/css", "_blank");
            },
          },
          {
            name: "JavaScript",
            type: "file" as const,
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "6.1.3",
            onClick: () => {
              window.open(
                "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                "_blank"
              );
            },
          },
          {
            name: "React",
            type: "file" as const,
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "6.1.4",
            onClick: () => {
              window.open(
                "https://reactjs.org/docs/getting-started.html",
                "_blank"
              );
            },
          },
          {
            name: "Next.js",
            type: "file" as const,
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "6.1.5",
            onClick: () => {
              window.open("https://nextjs.org/docs/getting-started", "_blank");
            },
          },
          {
            name: "Node",
            type: "file" as const,
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "6.1.6",
            onClick: () => {
              window.open("https://nodejs.org/en/docs/", "_blank");
            },
          },
          {
            name: "Bootstrap",
            type: "file" as const,
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "6.1.7",
            onClick: () => {
              window.open("https://getbootstrap.com/docs/", "_blank");
            },
          },
          {
            name: "DBMS",
            type: "file" as const,
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "6.1.8",
            onClick: () => {
              window.open("https://dev.mysql.com/doc/", "_blank");
            },
          },
          {
            name: "jQuery",
            type: "file" as const,
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "6.1.9",
            onClick: () => {
              window.open("https://api.jquery.com/", "_blank");
            },
          },
        ],
      },
      {
        name: "Tools & Software",
        type: "folder" as const,
        dateModified: "2024-12-01",
        size: "118 KB",
        icons: "/icons/share.png",
        id: "6.2",
        children: [
          {
            name: "VSCode",
            type: "file" as const,
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "6.2.1",
            onClick: () => {
              window.open("https://code.visualstudio.com/", "_blank");
            },
          },
          {
            name: "GitHub",
            type: "file" as const,
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "6.2.2",
            onClick: () => {
              window.open("https://github.com/", "_blank");
            },
          },
          {
            name: "MongoDB",
            type: "file" as const,
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "6.2.3",
            onClick: () => {
              window.open("https://www.mongodb.com/", "_blank");
            },
          },
        ],
      },
      {
        name: "Soft Skills",
        type: "folder" as const,
        dateModified: "2024-12-01",
        size: "118 KB",
        icons: "/icons/share.png",
        id: "6.3",
        children: [
          {
            name: "Communication",
            type: "file" as const,
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "6.3.1",
            onClick: () => {
              window.open("https://www.cadreworks.org/resources/communication-skills", "_blank");
            }
          },
          {
            name: "Problem Solving",
            type: "file" as const,
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "6.3.2",
            onclick: () => {
              window.open("https://www.thebalancemoney.com/problem-solving-skills-with-examples-2063764", "_blank");
            }
          },
          {
            name: "Teamwork",
            type: "file" as const,
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "6.3.3",
            onclick: () => {
              window.open("https://www.thebalancemoney.com/list-of-teamwork-skills-2063773", "_blank");
            }
          },
          {
            name: "Creative Thinking",
            type: "file" as const,
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "6.3.4",
            onclick: () => {
              window.open("https://rockcontent.com/blog/creative-thinking-skills/", "_blank");
            }
          },
          {
            name: "Decision Making ",
            type: "file" as const,
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "6.3.5",
            onClick: () => {
              window.open("https://www.theforage.com/blog/skills/decision-making-skills", "_blank");
            }
          },
          {
            name: "Management ",
            type: "file" as const,
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "6.3.6",
            onClick: () => {
              window.open("https://corporatefinanceinstitute.com/resources/management/management-skills/#:~:text=Management%20skills%20can%20be%20defined,solving%20problems%20when%20they%20occur.", "_blank");
            }
          },
        ],
      },
    ],
  },
  Experience: {
    name: "Experience",
    type: "folder" as const,
    icons: "/icons/suitcase.png",
    id: 7,
    children: [
      {
        name: "Frontend50",
        type: "file" as const,
        icons: "/icons/suitcase.png",
        id: 7.1,
      },{
        name: "LeopardRuns Innovation Technology",
        type: "file" as const,
        icons: "/icons/suitcase.png",
        id: 7.2,
      },
    ],
  },
  Contact: {
    name: "Contact",
    type: "folder" as const,
    icons: "/icons/phone-book.png",
    id: 8,
    children: [
      {
        name: "Email",
        type: "file" as const,
        dateModified: "2024-12-01",
        size: "118 KB",
        icons: "/icons/share.png",
        id: 8.1,
        onClick: () => {
          window.open("mailto:saxenapoorva2004@gmail.com", "_blank");
        },
      },
      {
        name: "LinkedIn",
        type: "file" as const,
        dateModified: "2024-12-01",
        size: "118 KB",
        icons: "/icons/share.png",
        id: 8.2,
        onClick: () => {
          window.open(
            "https://www.linkedin.com/in/poorva-saxena-983642256/",
            "_blank"
          );
        },
      },
      {
        name: "Github",
        type: "file" as const,
        dateModified: "2024-12-01",
        size: "118 KB",
        icons: "/icons/share.png",
        id: 8.3,
        onClick: () => {
          window.open("https://github.com/Camp4er", "_blank");
        },
      },
      {
        name: "Twitter",
        type: "file" as const,
        dateModified: "2024-12-01",
        size: "118 KB",
        icons: "/icons/share.png",
        id: 8.4,
        onClick: () => {
          window.open("https://twitter.com/Camp4er", "_blank");
        },
      },
    ],
  },
};

export const sectionThree = {
  OneDrive: {
    name: "OneDrive",
    type: "folder" as const,
    icons: "/icons/onedrive.png",
    id: 9,
    children: [
      {
        name: "Attachments",
        type: "folder" as const,
        dateModified: "2024-12-01",
        size: "118 KB",
        icons: "/icons/share.png",
        id: 9.1,
      },
      {
        name: "Dekstop",
        type: "folder" as const,
        dateModified: "2024-12-01",
        size: "118 KB",
        icons: "/icons/share.png",
        id: 9.2,
      },
      {
        name: "Downloads",
        type: "folder" as const,
        dateModified: "2024-12-01",
        size: "118 KB",
        icons: "/icons/share.png",
        id: 9.3,
      },
      {
        name: "Pictures",
        type: "folder" as const,
        dateModified: "2024-12-01",
        size: "118 KB",
        icons: "/icons/share.png",
        id: 9.4,
      },
    ],
  },
  "This PC": {
    name: "This PC",
    type: "folder" as const,
    icons: "/icons/computer.png",
    id: 10,
    children: [
      {
        name: "OS (C:)",
        type: "folder" as const,
        dateModified: "2024-12-01",
        size: "118 KB",
        icons: "/icons/share.png",
        id: 10.1,
        children: [
          {
            name: "Game",
            type: "folder" as const,
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "10.1.1",
            children: [
              {
                name: "Snakeats",
                type: "file" as const,
                dateModified: "2024-12-01",
                size: "118 KB",
                icons: "/icons/share.png",
                id: "10.1.1.1",
                onclick: () => {},
              },
            ],
          },
          {
            name: "Users",
            type: "folder" as const,
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "10.1.2",
            children: [
              {
                name: "Default user 1000000",
                type: "folder" as const,
                dateModified: "2024-12-01",
                size: "118 KB",
                icons: "/icons/share.png",
                id: "10.1.2.1",
                children: [
                  {
                    name: "Dekstop",
                    type: "folder" as const,
                    dateModified: "2024-12-01",
                    size: "118 KB",
                    icons: "/icons/share.png",
                    id: "10.1.2.1.1",
                  },
                  {
                    name: "Documents",
                    type: "folder" as const,
                    dateModified: "2024-12-01",
                    size: "118 KB",
                    icons: "/icons/share.png",
                    id: "10.1.2.1.2",
                  },
                  {
                    name: "Downloads",
                    type: "folder" as const,
                    dateModified: "2024-12-01",
                    size: "118 KB",
                    icons: "/icons/share.png",
                    id: "10.1.2.1.3",
                  },
                  {
                    name: "Favorites",
                    type: "folder" as const,
                    dateModified: "2024-12-01",
                    size: "118 KB",
                    icons: "/icons/share.png",
                    id: "10.1.2.1.4",
                  },
                  {
                    name: "Links",
                    type: "folder" as const,
                    dateModified: "2024-12-01",
                    size: "118 KB",
                    icons: "/icons/share.png",
                    id: "10.1.2.1.5",
                  },
                  {
                    name: "Music",
                    type: "folder" as const,
                    dateModified: "2024-12-01",
                    size: "118 KB",
                    icons: "/icons/share.png",
                    id: "10.1.2.1.6",
                  },
                  {
                    name: "One Drive",
                    type: "folder" as const,
                    dateModified: "2024-12-01",
                    size: "118 KB",
                    icons: "/icons/share.png",
                    id: "10.1.2.1.7",
                  },
                  {
                    name: "Pictures",
                    type: "folder" as const,
                    dateModified: "2024-12-01",
                    size: "118 KB",
                    icons: "/icons/share.png",
                    id: "10.1.2.1.8",
                  },
                  {
                    name: "Saved games",
                    type: "folder" as const,
                    dateModified: "2024-12-01",
                    size: "118 KB",
                    icons: "/icons/share.png",
                    id: "10.1.2.1.9",
                  },
                  {
                    name: "Videos",
                    type: "folder" as const,
                    dateModified: "2024-12-01",
                    size: "118 KB",
                    icons: "/icons/share.png",
                    id: "10.1.2.1.10",
                  },
                ],
              },
              {
                name: "Public",
                type: "folder" as const,
                dateModified: "2024-12-01",
                size: "118 KB",
                icons: "/icons/share.png",
                id: "10.1.2.2",
                children: [
                  {
                    name: "Public Documents",
                    type: "folder" as const,
                    dateModified: "2024-12-01",
                    size: "118 KB",
                    icons: "/icons/share.png",
                    id: "10.1.2.2.1",
                  },
                  {
                    name: "Public Downloads",
                    type: "folder" as const,
                    dateModified: "2024-12-01",
                    size: "118 KB",
                    icons: "/icons/share.png",
                    id: "10.1.2.2.2",
                  },
                  {
                    name: "Public Music",
                    type: "folder" as const,
                    dateModified: "2024-12-01",
                    size: "118 KB",
                    icons: "/icons/share.png",
                    id: "10.1.2.2.3",
                  },
                  {
                    name: "Public Pictures",
                    type: "folder" as const,
                    dateModified: "2024-12-01",
                    size: "118 KB",
                    icons: "/icons/share.png",
                    id: "10.1.2.2.4",
                  },
                  {
                    name: "Public Videos",
                    type: "folder" as const,
                    dateModified: "2024-12-01",
                    size: "118 KB",
                    icons: "/icons/share.png",
                    id: "10.1.2.2.5",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  Network: {
    name: "Network",
    type: "folder" as const,
    icons: "/icons/world-grid.png",
    id: 11,
  },
};

// Combine all sections into one exportable object
export const sidebarData: FileItem[] = [
  ...Object.values(sectionOne),
  ...Object.values(sectionTwo),
  ...Object.values(sectionThree),
];
