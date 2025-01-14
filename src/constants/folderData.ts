import { FileItem } from "@/components/FileExplorer/FileExplorer";

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
        dateModified: "17-04-2024",
        size: "1.60 KB",
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
        dateModified: "18-07-2024",
        size: "118 KB",
        icons: "/icons/pdf.png",
        id: 4.1,
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
            type: "folder" as const,
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
            type: "folder" as const,
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
            type: "folder" as const,
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
        dateModified: "01-12-2024",
        size: "",
        icons: "/icons/languages.png",
        id: 6.1,
        children: [
          {
            name: "HTML",
            type: "file" as const,
            dateModified: "24-11-1995",
            size: "150 KB",
            icons: "/icons/html.png",
            id: "6.1.1",
            onClick: () => {
              window.open("https://html.com/document", "_blank");
            },
          },
          {
            name: "CSS",
            type: "file" as const,
            dateModified: "17-12-1996",
            size: "250 KB",
            icons: "/icons/text.png",
            id: "6.1.2",
            onClick: () => {
              window.open("https://devdocs.io/css", "_blank");
            },
          },
          {
            name: "JavaScript",
            type: "file" as const,
            dateModified: "16-09-1995",
            size: "1.5 MB",
            icons: "/icons/js.png",
            id: "6.1.3",
            onClick: () => {
              window.open(
                "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                "_blank"
              );
            },
          },
          {
            name: "TypeScript",
            type: "file" as const,
            dateModified: "1-10-2012",
            size: "2.5 MB",
            icons: "/icons/typescript.png",
            id: "6.1.4",
            onClick: () => {
              window.open(
                "https://www.typescriptlang.org/",
                "_blank"
              );
            },
          },
          {
            name: "React",
            type: "file" as const,
            dateModified: "29-05-2013",
            size: "10 MB",
            icons: "/icons/science.png",
            id: "6.1.5",
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
            dateModified: "25-10-2016",
            size: "20 MB",
            icons: "/icons/nextjs-icon-svgrepo-com.svg",
            id: "6.1.6",
            onClick: () => {
              window.open("https://nextjs.org/docs/getting-started", "_blank");
            },
          },
          {
            name: "Node",
            type: "file" as const,
            dateModified: "27-05-2009",
            size: "50 MB",
            icons: "/icons/nodejs.png",
            id: "6.1.7",
            onClick: () => {
              window.open("https://nodejs.org/en/docs/", "_blank");
            },
          },
          {
            name: "Bootstrap",
            type: "file" as const,
            dateModified: "19-08-2011",
            size: "10 MB",
            icons: "/icons/bootstrap.png",
            id: "6.1.8",
            onClick: () => {
              window.open("https://getbootstrap.com/docs/", "_blank");
            },
          },
          {
            name: "DBMS",
            type: "file" as const,
            dateModified: "",
            size: "",
            icons: "/icons/database.png",
            id: "6.1.9",
            onClick: () => {
              window.open("https://dev.mysql.com/doc/", "_blank");
            },
          },
          {
            name: "jQuery",
            type: "file" as const,
            dateModified: "14-01-2006",
            size: "30 KB",
            icons: "/icons/web.png",
            id: "6.1.10",
            onClick: () => {
              window.open("https://api.jquery.com/", "_blank");
            },
          },
        ],
      },
      {
        name: "Tools & Software",
        type: "folder" as const,
        dateModified: "",
        size: "",
        icons: "/icons/3d-print.png",
        id: "6.2",
        children: [
          {
            name: "VSCode",
            type: "file" as const,
            dateModified: "",
            size: "",
            icons: "/icons/vscode.svg",
            id: "6.2.1",
            onClick: () => {
              window.open("https://code.visualstudio.com/", "_blank");
            },
          },
          {
            name: "GitHub",
            type: "file" as const,
            dateModified: "",
            size: "",
            icons: "/icons/github.svg",
            id: "6.2.2",
            onClick: () => {
              window.open("https://github.com/", "_blank");
            },
          },
          {
            name: "MongoDB",
            type: "file" as const,
            dateModified: "",
            size: "",
            icons: "/icons/database-storage.png",
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
        dateModified: "",
        size: "",
        icons: "/icons/competence.png",
        id: "6.3",
        children: [
          {
            name: "Communication",
            type: "file" as const,
            dateModified: "",
            size: "",
            icons: "/icons/chat.png",
            id: "6.3.1",
            onClick: () => {
              window.open("https://www.cadreworks.org/resources/communication-skills", "_blank");
            }
          },
          {
            name: "Problem Solving",
            type: "file" as const,
            dateModified: "",
            size: "",
            icons: "/icons/problem-solving.png",
            id: "6.3.2",
            onclick: () => {
              window.open("https://www.thebalancemoney.com/problem-solving-skills-with-examples-2063764", "_blank");
            }
          },
          {
            name: "Teamwork",
            type: "file" as const,
            dateModified: "",
            size: "",
            icons: "/icons/partners.png",
            id: "6.3.3",
            onclick: () => {
              window.open("https://www.thebalancemoney.com/list-of-teamwork-skills-2063773", "_blank");
            }
          },
          {
            name: "Creative Thinking",
            type: "file" as const,
            dateModified: "",
            size: "",
            icons: "/icons/design-thinking.png",
            id: "6.3.4",
            onclick: () => {
              window.open("https://rockcontent.com/blog/creative-thinking-skills/", "_blank");
            }
          },
          {
            name: "Decision Making ",
            type: "file" as const,
            dateModified: "",
            size: "",
            icons: "/icons/decision-making.png",
            id: "6.3.5",
            onClick: () => {
              window.open("https://www.theforage.com/blog/skills/decision-making-skills", "_blank");
            }
          },
          {
            name: "Management ",
            type: "file" as const,
            dateModified: "",
            size: "",
            icons: "/icons/management.png",
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
        name: "LRIT",
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
        dateModified: "01-04-2004",
        size: "10 MB",
        icons: "/icons/gmail.png",
        id: 8.1,
        onClick: () => {
          window.open("mailto:saxenapoorva2004@gmail.com", "_blank");
        },
      },
      {
        name: "LinkedIn",
        type: "file" as const,
        dateModified: "28-12-2002",
        size: "50 MB",
        icons: "/icons/linkedin.png",
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
        dateModified: "08-02-2008",
        size: "100 MB",
        icons: "/icons/github.svg",
        id: 8.3,
        onClick: () => {
          window.open("https://github.com/Camp4er", "_blank");
        },
      },
      {
        name: "Twitter",
        type: "file" as const,
        dateModified: "21-03-2006",
        size: "20 MB",
        icons: "/icons/twitter.png",
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
        dateModified: "12-05-2001",
        size: "",
        icons: "/icons/app.png",
        id: 9.1,
      },
      {
        name: "Dekstop",
        type: "folder" as const,
        dateModified: "12-05-2001",
        size: "",
        icons: "/icons/app.png",
        id: 9.2,
      },
      {
        name: "Downloads",
        type: "folder" as const,
        dateModified: "12-05-2001",
        size: "",
        icons: "/icons/app.png",
        id: 9.3,
      },
      {
        name: "Pictures",
        type: "folder" as const,
        dateModified: "12-05-2001",
        size: "",
        icons: "/icons/app.png",
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
        dateModified: "12-05-2001",
        size: "",
        icons: "/icons/app.png",
        id: 10.1,
        children: [
          {
            name: "Game",
            type: "folder" as const,
            dateModified: "12-05-2001",
            size: "12 KB",
            icons: "/icons/app.png",
            id: "10.1.1",
            children: [
              {
                name: "Snakeats",
                type: "file" as const,
                dateModified: "12-05-2001",
                size: "12 KB",
                icons: "/icons/snake.png",
                id: "10.1.1.1",
              },
            ],
          },
          {
            name: "Users",
            type: "folder" as const,
            dateModified: "12-05-2001",
            size: "",
            icons: "/icons/app.png",
            id: "10.1.2",
            children: [
              {
                name: "Default user 1000000",
                type: "folder" as const,
                dateModified: "12-05-2001",
                size: "",
                icons: "/icons/app.png",
                id: "10.1.2.1",
                children: [
                  {
                    name: "Dekstop",
                    type: "folder" as const,
                    dateModified: "12-05-2001",
                    size: "",
                    icons: "/icons/app.png",
                    id: "10.1.2.1.1",
                  },
                  {
                    name: "Documents",
                    type: "folder" as const,
                    dateModified: "12-05-2001",
                    size: "",
                    icons: "/icons/app.png",
                    id: "10.1.2.1.2",
                  },
                  {
                    name: "Downloads",
                    type: "folder" as const,
                    dateModified: "12-05-2001",
                    size: "",
                    icons: "/icons/app.png",
                    id: "10.1.2.1.3",
                  },
                  {
                    name: "Favorites",
                    type: "folder" as const,
                    dateModified: "12-05-2001",
                    size: "",
                    icons: "/icons/app.png",
                    id: "10.1.2.1.4",
                  },
                  {
                    name: "Links",
                    type: "folder" as const,
                    dateModified: "12-05-2001",
                    size: "",
                    icons: "/icons/app.png",
                    id: "10.1.2.1.5",
                  },
                  {
                    name: "Music",
                    type: "folder" as const,
                    dateModified: "12-05-2001",
                    size: "",
                    icons: "/icons/app.png",
                    id: "10.1.2.1.6",
                  },
                  {
                    name: "One Drive",
                    type: "folder" as const,
                    dateModified: "12-05-2001",
                    size: "",
                    icons: "/icons/app.png",
                    id: "10.1.2.1.7",
                  },
                  {
                    name: "Pictures",
                    type: "folder" as const,
                    dateModified: "12-05-2001",
                    size: "",
                    icons: "/icons/app.png",
                    id: "10.1.2.1.8",
                  },
                  {
                    name: "Saved games",
                    type: "folder" as const,
                    dateModified: "12-05-2001",
                    size: "",
                    icons: "/icons/app.png",
                    id: "10.1.2.1.9",
                  },
                  {
                    name: "Videos",
                    type: "folder" as const,
                    dateModified: "12-05-2001",
                    size: "",
                    icons: "/icons/app.png",
                    id: "10.1.2.1.10",
                  },
                ],
              },
              {
                name: "Public",
                type: "folder" as const,
                dateModified: "12-05-2001",
                size: "",
                icons: "/icons/share.png",
                id: "10.1.2.2",
                children: [
                  {
                    name: "Public Documents",
                    type: "folder" as const,
                    dateModified: "12-05-2001",
                    size: "",
                    icons: "/icons/share.png",
                    id: "10.1.2.2.1",
                  },
                  {
                    name: "Public Downloads",
                    type: "folder" as const,
                    dateModified: "12-05-2001",
                    size: "",
                    icons: "/icons/share.png",
                    id: "10.1.2.2.2",
                  },
                  {
                    name: "Public Music",
                    type: "folder" as const,
                    dateModified: "12-05-2001",
                    size: "",
                    icons: "/icons/share.png",
                    id: "10.1.2.2.3",
                  },
                  {
                    name: "Public Pictures",
                    type: "folder" as const,
                    dateModified: "12-05-2001",
                    size: "",
                    icons: "/icons/share.png",
                    id: "10.1.2.2.4",
                  },
                  {
                    name: "Public Videos",
                    type: "folder" as const,
                    dateModified: "12-05-2001",
                    size: "",
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
