export const folderData = {
  MainFolders: {
    OneDrive: {
      type: "folder",
      dateModified: "2024-12-01",
      contents: {
        Attachments: {
          type: "folder",
          dateModified: "2024-12-01",
          contents: {}, // Empty folder
        },
        Desktop: {
          type: "folder",
          dateModified: "2024-12-01",
          contents: "Refers to all desktop folders", // Placeholder for dynamic reference
        },
        Downloads: {
          type: "folder",
          dateModified: "2024-12-01",
          contents: {}, // Empty folder
        },
        Pictures: {
          type: "folder",
          dateModified: "2024-12-01",
          contents: {}, // Empty folder
        },
      },
    },
    "This PC": {
      type: "folder",
      dateModified: "2024-12-01",
      contents: {
        "OS (C:)": {
          type: "drive",
          storage: "500GB",
          dateModified: "2024-12-01",
          contents: {
            game: {
              type: "folder",
              dateModified: "2024-12-01",
              contents: {
                "Snake.tsx": {
                  type: "file",
                  extension: ".tsx",
                  dateModified: "2024-12-01",
                  description: "Opens the Snake game in another window",
                },
              },
            },
            users: {
              type: "folder",
              dateModified: "2024-12-01",
              contents: {
                "Default User 100000": {
                  type: "folder",
                  dateModified: "2024-12-01",
                  contents: {
                    Desktop: {
                      type: "folder",
                      contents: {},
                      dateModified: "2024-12-01",
                    },
                    Documents: {
                      type: "folder",
                      contents: {},
                      dateModified: "2024-12-01",
                    },
                    Downloads: {
                      type: "folder",
                      contents: {},
                      dateModified: "2024-12-01",
                    },
                    Favorites: {
                      type: "folder",
                      contents: {},
                      dateModified: "2024-12-01",
                    },
                    Links: {
                      type: "folder",
                      contents: {},
                      dateModified: "2024-12-01",
                    },
                    Music: {
                      type: "folder",
                      contents: {},
                      dateModified: "2024-12-01",
                    },
                    OneDrive: {
                      type: "folder",
                      contents: {},
                      dateModified: "2024-12-01",
                    },
                    Pictures: {
                      type: "folder",
                      contents: {},
                      dateModified: "2024-12-01",
                    },
                    "Saved Games": {
                      type: "folder",
                      contents: {},
                      dateModified: "2024-12-01",
                    },
                    Videos: {
                      type: "folder",
                      contents: {},
                      dateModified: "2024-12-01",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    Network: {
      type: "folder",
      dateModified: "2024-12-01",
      contents: {
        banner: {
          message: "This folder is empty. Configure network settings.",
        },
      },
    },
  },
  Public: {
    type: "folder",
    dateModified: "2024-12-01",
    contents: {
      "Public Documents": {
        type: "folder",
        contents: {},
        dateModified: "2024-12-01",
      },
      Downloads: { type: "folder", contents: {}, dateModified: "2024-12-01" },
      Music: { type: "folder", contents: {}, dateModified: "2024-12-01" },
      Pictures: { type: "folder", contents: {}, dateModified: "2024-12-01" },
      Videos: { type: "folder", contents: {}, dateModified: "2024-12-01" },
    },
  },
};

type FolderContent = { name: string; type: "file" | "folder" };
type FolderData = {
  [key: string]: FolderContent[]; // Allows dynamic string keys
};

export const folderIcons: { [key: string]: string } = {
  "This PC": "/icons/share.png",
  Documents: "/icons/share.png",
  Desktop: "/icons/share.png",
  Downloads: "/icons/share.png",
};

export const sectionOne = {
  Home: {
    name: "Home",
    type: "sidebar1",
    icons: "/icons/share.png",
    id: "1",
    children: [
      { name: "Quick Access", type: "dropdownfolder" },
      { name: "Favorites", type: "dropdownfolder" },
      { name: "Recent", type: "dropdownfolder" },
    ],
  },
  Gallery: {
    name: "Gallery",
    type: "sidebar2",
    icons: "/icons/share.png",
    id: "1",
    children: "self",
  },
};

export const sectionTwo = {
  Dekstop: {
    name: "Dekstop",
    type: "sidebar3",
    icons: "/icons/share.png",
    id: "1",
    children: {},
  },
  Documents: {
    name: "Documents",
    type: "sidebar4",
    icons: "/icons/share.png",
    id: "1",
    children: {
      Resume: {
        name: "Resume",
        type: "file",
        dateModified: "2024-12-01",
        size: "118 KB",
        icons: "/icons/share.png",
        id: "2",
        onClick: () => {
          // <iframe
          //       src="@/public/pdf/PoorvaSaxenaResume6.pdf"
          //       width="100%"
          //       height="400px"
          //     ></iframe>
        },
      },
    },
  },
  Projects: {
    name: "Projects",
    type: "sidebar5",
    icons: "/icons/share.png",
    id: "1",
    children: {
      "Project A": {
        name: "Project A",
        type: "folder",
        dateModified: "2024-12-01",
        size: "118 KB",
        icons: "/icons/share.png",
        id: "2",
        children: {
          Description: {
            name: "Description",
            type: "file",
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "3",
          },
          "Github Repo": {
            name: "Github Repo",
            type: "file",
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "3",
            onClick: () => {
              window.open("https://github.com/Camp4er", "_blank");
            },
          },
          "Live Demo": {
            name: "Live Demo",
            type: "file",
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "3",
            onClick: () => {
              window.open("https://github.com/Camp4er", "_blank");
            },
          },
          "View Images": {
            name: "View Images",
            type: "file",
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "3",
            children: {
              "Image 1": {
                name: "Image 1",
                type: "file",
                dateModified: "2024-12-01",
                size: "118 KB",
                icons: "/icons/share.png",
                id: "4",
              },
              "Image 2": {
                name: "Image 2",
                type: "file",
                dateModified: "2024-12-01",
                size: "118 KB",
                icons: "/icons/share.png",
                id: "4",
              },
            },
          },
        },
      },
      "Project B": {
        name: "Project B",
        type: "folder",
        dateModified: "2024-12-01",
        size: "118 KB",
        icons: "/icons/share.png",
        id: "2",
        children: {
          Description: {
            name: "Description",
            type: "file",
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "3",
          },
          "Github Repo": {
            name: "Github Repo",
            type: "file",
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "3",
            onClick: () => {
              window.open("https://github.com/Camp4er", "_blank");
            },
          },
          "Live Demo": {
            name: "Live Demo",
            type: "file",
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "3",
            onClick: () => {
              window.open("https://github.com/Camp4er", "_blank");
            },
          },
          "View Images": {
            name: "View Images",
            type: "file",
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "3",
            children: {
              "Image 1": {
                name: "Image 1",
                type: "file",
                dateModified: "2024-12-01",
                size: "118 KB",
                icons: "/icons/share.png",
                id: "4",
              },
              "Image 2": {
                name: "Image 2",
                type: "file",
                dateModified: "2024-12-01",
                size: "118 KB",
                icons: "/icons/share.png",
                id: "4",
              },
            },
          },
        },
      },
    },
  },
  Skills: {
    name: "Skills",
    type: "sidebar6",
    icons: "/icons/share.png",
    id: "1",
    children: {
      "Languages, Libraries & Frameworks": {
        name: "Languages & Frameworks",
        type: "folder",
        dateModified: "2024-12-01",
        size: "118 KB",
        icons: "/icons/share.png",
        id: "2",
        children: {
          HTML: {
            name: "HTML",
            type: "file",
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "3",
            onClick: () => {
              window.open("https://html.com/document", "_blank");
            },
          },
          CSS: {
            name: "CSS",
            type: "file",
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "3",
            onClick: () => {
              window.open("https://devdocs.io/css", "_blank");
            },
          },
          JavaScript: {
            name: "JavaScript",
            type: "file",
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "3",
            onClick: () => {
              window.open(
                "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                "_blank"
              );
            },
          },
          "React.js": {
            name: "React",
            type: "file",
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "3",
            onClick: () => {
              window.open(
                "https://reactjs.org/docs/getting-started.html",
                "_blank"
              );
            },
          },
          "Next.js": {
            name: "Next.js",
            type: "file",
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "3",
            onClick: () => {
              window.open("https://nextjs.org/docs/getting-started", "_blank");
            },
          },
          "Node.js": {
            name: "Node",
            type: "file",
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "3",
            onClick: () => {
              window.open("https://nodejs.org/en/docs/", "_blank");
            },
          },
          Bootstrap: {
            name: "Bootstrap",
            type: "file",
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "3",
            onClick: () => {
              window.open("https://getbootstrap.com/docs/", "_blank");
            },
          },
          DBMS: {
            name: "DBMS",
            type: "file",
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "3",
            onClick: () => {
              window.open("https://dev.mysql.com/doc/", "_blank");
            },
          },
          jQuery: {
            name: "jQuery",
            type: "file",
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "3",
            onClick: () => {
              window.open("https://api.jquery.com/", "_blank");
            },
          },
        },
      },
      "Tools & Software": {
        name: "Tools & Software",
        type: "folder",
        dateModified: "2024-12-01",
        size: "118 KB",
        icons: "/icons/share.png",
        id: "2",
        children: {
          VSCode: {
            name: "VSCode",
            type: "file",
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "3",
            onClick: () => {
              window.open("https://code.visualstudio.com/", "_blank");
            },
          },
          GitHub: {
            name: "GitHub",
            type: "file",
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "3",
            onClick: () => {
              window.open("https://github.com/", "_blank");
            },
          },
          MongoDB: {
            name: "MongoDB",
            type: "file",
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "3",
            onClick: () => {
              window.open("https://www.mongodb.com/", "_blank");
            },
          },
        },
      },
      "Soft Skills": {
        name: "Soft Skills",
        type: "folder",
        dateModified: "2024-12-01",
        size: "118 KB",
        icons: "/icons/share.png",
        id: "2",
        children: {
          Communication: {
            name: "Communication",
            type: "file",
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "3",
          },
          "Problem Solving": {
            name: "Problem Solving",
            type: "file",
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "3",
          },
          Teamwork: {
            name: "Teamwork",
            type: "file",
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "3",
          },
          "Creative Thinking": {
            name: "Creative Thinking",
            type: "file",
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "3",
          },
          "Decision Making ": {
            name: "Decision Making ",
            type: "file",
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "3",
          },
          Management: {
            name: "Management ",
            type: "file",
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "3",
          },
        },
      },
    },
  },
  Experience: {
    name: "Experience",
    type: "sidebar7",
    icons: "/icons/share.png",
    id: "1",
    children: "self",
  },
  Contact: {
    name: "Contact",
    type: "sidebar8",
    icons: "/icons/share.png",
    id: "1",
    children: {
      Email: {
        name: "Email",
        type: "file",
        dateModified: "2024-12-01",
        size: "118 KB",
        icons: "/icons/share.png",
        id: "2",
        onClick: () => {
          window.open("mailto:saxenapoorva2004@gmail.com", "_blank");
        },
      },
      LinkedIn: {
        name: "LinkedIn",
        type: "file",
        dateModified: "2024-12-01",
        size: "118 KB",
        icons: "/icons/share.png",
        id: "2",
        onClick: () => {
          window.open(
            "https://www.linkedin.com/in/poorva-saxena-983642256/",
            "_blank"
          );
        },
      },
      Github: {
        name: "Github",
        type: "file",
        dateModified: "2024-12-01",
        size: "118 KB",
        icons: "/icons/share.png",
        id: "2",
        onClick: () => {
          window.open("https://github.com/Camp4er", "_blank");
        },
      },
      Twitter: {
        name: "Twitter",
        type: "file",
        dateModified: "2024-12-01",
        size: "118 KB",
        icons: "/icons/share.png",
        id: "2",
        onClick: () => {
          window.open("https://twitter.com/Camp4er", "_blank");
        },
      },
    },
  },
};

export const sectionThree = {
  OneDrive: {
    name: "OneDrive",
    type: "sidebar9",
    icons: "/icons/share.png",
    id: "1",
    children: {
      Attachments: {
        name: "Attachments",
        type: "folder",
        dateModified: "2024-12-01",
        size: "118 KB",
        icons: "/icons/share.png",
        id: "2",
        children: "self",
      },
      Dekstop: {
        name: "Dekstop",
        type: "folder",
        dateModified: "2024-12-01",
        size: "118 KB",
        icons: "/icons/share.png",
        id: "2",
        children: "self",
      },
      Downloads: {
        name: "Downloads",
        type: "folder",
        dateModified: "2024-12-01",
        size: "118 KB",
        icons: "/icons/share.png",
        id: "2",
        children: "self",
      },
      Pictures: {
        name: "Pictures",
        type: "folder",
        dateModified: "2024-12-01",
        size: "118 KB",
        icons: "/icons/share.png",
        id: "2",
        children: "self",
      },
    },
  },
  "This PC": {
    name: "This PC",
    type: "sidebar10",
    icons: "icons/share.png",
    id: "1",
    children: {
      "OS (C:)": {
        name: "OS (C:)",
        type: "folder",
        dateModified: "2024-12-01",
        size: "118 KB",
        icons: "/icons/share.png",
        id: "2",
        children: {
          Game: {
            name: "Game",
            type: "folder",
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "3",
            children: {
              Snakeats: {
                name: "Snakeats",
                type: "file",
                dateModified: "2024-12-01",
                size: "118 KB",
                icons: "/icons/share.png",
                id: "4",
                onclick: () => {},
              },
            },
          },
          users: {
            type: "folder",
            dateModified: "2024-12-01",
            size: "118 KB",
            icons: "/icons/share.png",
            id: "3",
            children: {
              "Default user 1000000": {
                name: "Default user 1000000",
                type: "folder",
                dateModified: "2024-12-01",
                size: "118 KB",
                icons: "/icons/share.png",
                id: 4,
                children: {
                  Dekstop: {
                    name: "Dekstop",
                    type: "folder",
                    dateModified: "2024-12-01",
                    size: "118 KB",
                    icons: "/icons/share.png",
                    id: "5",
                    children: "self",
                  },
                  Documents: {
                    name: "Documents",
                    type: "folder",
                    dateModified: "2024-12-01",
                    size: "118 KB",
                    icons: "/icons/share.png",
                    id: "5",
                    children: "self",
                  },
                  Downloads: {
                    name: "Downloads",
                    type: "folder",
                    dateModified: "2024-12-01",
                    size: "118 KB",
                    icons: "/icons/share.png",
                    id: "5",
                    children: "self",
                  },
                  Favorites: {
                    name: "Favorites",
                    type: "folder",
                    dateModified: "2024-12-01",
                    size: "118 KB",
                    icons: "/icons/share.png",
                    id: "5",
                    children: "self",
                  },
                  Links: {
                    name: "Links",
                    type: "folder",
                    dateModified: "2024-12-01",
                    size: "118 KB",
                    icons: "/icons/share.png",
                    id: "5",
                    children: "self",
                  },
                  Music: {
                    name: "Music",
                    type: "folder",
                    dateModified: "2024-12-01",
                    size: "118 KB",
                    icons: "/icons/share.png",
                    id: "5",
                    children: "self",
                  },
                  "One Drive": {
                    name: "One Drive",
                    type: "folder",
                    dateModified: "2024-12-01",
                    size: "118 KB",
                    icons: "/icons/share.png",
                    id: "5",
                    children: "self",
                  },
                  Pictures: {
                    name: "Pictures",
                    type: "folder",
                    dateModified: "2024-12-01",
                    size: "118 KB",
                    icons: "/icons/share.png",
                    id: "5",
                    children: "self",
                  },
                  "Saved games": {
                    name: "Saved games",
                    type: "folder",
                    dateModified: "2024-12-01",
                    size: "118 KB",
                    icons: "/icons/share.png",
                    id: "5",
                    children: "self",
                  },
                  Videos: {
                    name: "Videos",
                    type: "folder",
                    dateModified: "2024-12-01",
                    size: "118 KB",
                    icons: "/icons/share.png",
                    id: "5",
                    children: "self",
                  },
                }
              },
              Public: {
                name: "Public",
                type: "folder",
                dateModified: "2024-12-01",
                size: "118 KB",
                icons: "/icons/share.png",
                id: 4,
                children: {
                  "Public Documents": {
                    name: "Public Documents",
                    type: "folder",
                    dateModified: "2024-12-01",
                    size: "118 KB",
                    icons: "/icons/share.png",
                    id: "5",
                    children: "self",
                  },
                  "Public Downloads": {
                    name: "Public Downloads",
                    type: "folder",
                    dateModified: "2024-12-01",
                    size: "118 KB",
                    icons: "/icons/share.png",
                    id: "5",
                    children: "self",
                  },
                  "Public Music": {
                    name: "Public Music",
                    type: "folder",
                    dateModified: "2024-12-01",
                    size: "118 KB",
                    icons: "/icons/share.png",
                    id: "5",
                    children: "self",
                  },
                  "Public Pictures": {
                    name: "Public Pictures",
                    type: "folder",
                    dateModified: "2024-12-01",
                    size: "118 KB",
                    icons: "/icons/share.png",
                    id: "5",
                    children: "self",
                  },
                  "Public Videos": {
                    name: "Public Videos",
                    type: "folder",
                    dateModified: "2024-12-01",
                    size: "118 KB",
                    icons: "/icons/share.png",
                    id: "5",
                    children: "self",
                  },
                }
              }
            },
          },
        },
      },
    },
  },
  "Network": {
    name: "Network",
    type: "sidebar11",
    icons: "/icons/share.png",
    id: "1",
    children: "self",
  }
};

// Combine all sections into one exportable object
export const sidebarData = { ...sectionOne, ...sectionTwo, ...sectionThree };
