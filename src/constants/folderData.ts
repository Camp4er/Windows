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
    children: [
      {
        name: "Screenshot 11-02-2025 074849",
        type: "PNG file",
        icons: "/icons/image.png",
        id: 2.1,
        dateModified: "11-02-2025",
        size: "805 KB",
      },
      {
        name: "Screenshot 11-02-2025 074924",
        type: "PNG file",
        icons: "/icons/image.png",
        id: 2.2,
        dateModified: "11-02-2025",
        size: "135 KB",
      },
      {
        name: "Screenshot 11-02-2025 074956",
        type: "PNG file",
        icons: "/icons/image.png",
        id: 2.3,
        dateModified: "11-02-2025",
        size: "196 KB",
      },
      {
        name: "Screenshot 11-02-2025 075042",
        type: "PNG file",
        icons: "/icons/image.png",
        id: 2.4,
        dateModified: "11-02-2025",
        size: "101 KB",
      },
      {
        name: "Screenshot 11-02-2025 075051",
        type: "PNG file",
        icons: "/icons/image.png",
        id: 2.5,
        dateModified: "11-02-2025",
        size: "95 KB",
      },
      {
        name: "Screenshot 11-02-2025 075109",
        type: "PNG file",
        icons: "/icons/image.png",
        id: 2.6,
        dateModified: "11-02-2025",
        size: "72 KB",
      },
      {
        name: "Screenshot 11-02-2025 075118",
        type: "PNG file",
        icons: "/icons/image.png",
        id: 2.7,
        dateModified: "11-02-2025",
        size: "69 KB",
      },
      {
        name: "Screenshot 11-02-2025 075150",
        type: "PNG file",
        icons: "/icons/image.png",
        id: 2.8,
        dateModified: "11-02-2025",
        size: "410 KB",
      },
      {
        name: "Screenshot 11-02-2025 075211",
        type: "PNG file",
        icons: "/icons/image.png",
        id: 2.9,
        dateModified: "11-02-2025",
        size: "277 KB",
      },
      {
        name: "Screenshot 11-02-2025 075258",
        type: "PNG file",
        icons: "/icons/image.png",
        id: "2.11",
        dateModified: "11-02-2025",
        size: "54 KB",
      },
      {
        name: "Screenshot 11-02-2025 075328",
        type: "PNG file",
        icons: "/icons/image.png",
        id: "2.12",
        dateModified: "11-02-2025",
        size: "560 KB",
      },
      {
        name: "Screenshot 11-02-2025 075531",
        type: "PNG file",
        icons: "/icons/image.png",
        id: "2.13",
        dateModified: "11-02-2025",
        size: "190 KB",
      },
    ],
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
      },
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
        name: "Shopper",
        type: "folder" as const,
        dateModified: "13-05-2024",
        size: "752.2 KB",
        icons: "/projects/shopper/shopper_logo.png",
        id: 5.1,
        children: [
          {
            name: "Description",
            type: "file" as const,
            dateModified: "13-05-2024",
            size: "2.2 KB",
            icons: "/icons/notepad.png",
            id: "5.1.1",
          },
          {
            name: "Github Repo",
            type: "file" as const,
            dateModified: "13-05-2024",
            size: "",
            icons: "/icons/github.svg",
            id: "5.1.2",
            onClick: () => {
              window.open(
                "https://github.com/Camp4er/e-commerce-website",
                "_blank"
              );
            },
          },
          {
            name: "Live Demo",
            type: "file" as const,
            dateModified: "13-05-2024",
            size: "",
            icons: "/icons/desktop.png",
            id: "5.1.3",
            onClick: () => {
              window.open(
                "https://main--statuesque-dusk-74b82b.netlify.app/",
                "_blank"
              );
            },
          },
          {
            name: "View Images",
            type: "file" as const,
            dateModified: "13-05-2024",
            size: "750 KB",
            icons: "/icons/gallery.png",
            id: "5.1.4",
          },
        ],
      },
      {
        name: "Zappify",
        type: "folder" as const,
        dateModified: "16-07-2024",
        size: "1.57 MB",
        icons: "/projects/zappify/logo.svg",
        id: 5.2,
        children: [
          {
            name: "Description",
            type: "file" as const,
            dateModified: "16-07-2024",
            size: "2.3 KB",
            icons: "/icons/notepad.png",
            id: "5.2.1",
          },
          {
            name: "Github Repo",
            type: "file" as const,
            dateModified: "16-07-2024",
            size: "",
            icons: "/icons/github.svg",
            id: "5.2.2",
            onClick: () => {
              window.open("https://github.com/Camp4er/Zapp-clone", "_blank");
            },
          },
          {
            name: "Live Demo",
            type: "file" as const,
            dateModified: "16-07-2024",
            size: "",
            icons: "/icons/desktop.png",
            id: "5.2.3",
            onClick: () => {
              window.open("https://zappify.netlify.app/", "_blank");
            },
          },
          {
            name: "View Images",
            type: "file" as const,
            dateModified: "16-07-2024",
            size: "1.57 MB",
            icons: "/icons/gallery.png",
            id: "5.2.4",
          },
        ],
      },
      {
        name: "BlogText",
        type: "folder" as const,
        dateModified: "10-11-2024",
        size: "965.2 KB",
        icons: "/projects/blogtext/icon.png",
        id: 5.3,
        children: [
          {
            name: "Description",
            type: "file" as const,
            dateModified: "10-11-2024",
            size: "8.2 KB",
            icons: "/icons/notepad.png",
            id: "5.3.1",
          },
          {
            name: "Github Repo",
            type: "file" as const,
            dateModified: "10-11-2024",
            size: "",
            icons: "/icons/github.svg",
            id: "5.3.2",
            onClick: () => {
              window.open("https://github.com/Camp4er/BlogText", "_blank");
            },
          },
          {
            name: "View Images",
            type: "file" as const,
            dateModified: "10-11-2024",
            size: "957 KB",
            icons: "/icons/gallery.png",
            id: "5.3.4",
          },
        ],
      },
      {
        name: "GPT-3",
        type: "folder" as const,
        dateModified: "12-05-2024",
        size: "865.1 KB",
        icons: "/icons/science.png",
        id: 5.4,
        children: [
          {
            name: "Description",
            type: "file" as const,
            dateModified: "12-05-2024",
            size: "5.1 KB",
            icons: "/icons/notepad.png",
            id: "5.4.1",
          },
          {
            name: "Github Repo",
            type: "file" as const,
            dateModified: "12-05-2024",
            size: "",
            icons: "/icons/github.svg",
            id: "5.4.2",
            onClick: () => {
              window.open("https://github.com/Camp4er/GPT-3", "_blank");
            },
          },
          {
            name: "Live Demo",
            type: "file" as const,
            dateModified: "12-05-2024",
            size: "",
            icons: "/icons/desktop.png",
            id: "5.4.3",
            onClick: () => {
              window.open(
                "https://main--legendary-cendol-69ad02.netlify.app/",
                "_blank"
              );
            },
          },
          {
            name: "View Images",
            type: "file" as const,
            dateModified: "12-05-2024",
            size: "860 KB",
            icons: "/icons/gallery.png",
            id: "5.4.4",
          },
        ],
      },
      {
        name: "Heat Map",
        type: "folder" as const,
        dateModified: "02-05-2024",
        size: "571.8 KB",
        icons: "/projects/heatmap/desert.png",
        id: 5.5,
        children: [
          {
            name: "Description",
            type: "file" as const,
            dateModified: "02-05-2024",
            size: "3.8 KB",
            icons: "/icons/notepad.png",
            id: "5.5.1",
          },
          {
            name: "Github Repo",
            type: "file" as const,
            dateModified: "02-05-2024",
            size: "",
            icons: "/icons/github.svg",
            id: "5.5.2",
            onClick: () => {
              window.open("https://github.com/Camp4er/Heat-Map", "_blank");
            },
          },
          {
            name: "Live Demo",
            type: "file" as const,
            dateModified: "02-05-2024",
            size: "",
            icons: "/icons/desktop.png",
            id: "5.5.3",
            onClick: () => {
              window.open(
                "https://clinquant-donut-3bfcbf.netlify.app/",
                "_blank"
              );
            },
          },
          {
            name: "View Images",
            type: "file" as const,
            dateModified: "02-05-2024",
            size: "568 KB",
            icons: "/icons/gallery.png",
            id: "5.5.4",
          },
        ],
      },
      {
        name: "To-do List",
        type: "folder" as const,
        dateModified: "17-04-2024",
        size: "366.9 KB",
        icons: "/icons/to-do-list.png",
        id: 5.6,
        children: [
          {
            name: "Description",
            type: "file" as const,
            dateModified: "17-04-2024",
            size: "1.9 KB",
            icons: "/icons/notepad.png",
            id: "5.6.1",
          },
          {
            name: "Github Repo",
            type: "file" as const,
            dateModified: "17-04-2024",
            size: "",
            icons: "/icons/github.svg",
            id: "5.6.2",
            onClick: () => {
              window.open("https://github.com/Camp4er/TodoList", "_blank");
            },
          },
          {
            name: "Live Demo",
            type: "file" as const,
            dateModified: "17-04-2024",
            size: "",
            icons: "/icons/desktop.png",
            id: "5.6.3",
            onClick: () => {
              window.open(
                "https://gorgeous-pastelito-e4e467.netlify.app/",
                "_blank"
              );
            },
          },
          {
            name: "View Images",
            type: "file" as const,
            dateModified: "17-04-2024",
            size: "365 KB",
            icons: "/icons/gallery.png",
            id: "5.6.4",
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
              window.open("https://www.typescriptlang.org/", "_blank");
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
              window.open(
                "https://www.cadreworks.org/resources/communication-skills",
                "_blank"
              );
            },
          },
          {
            name: "Problem Solving",
            type: "file" as const,
            dateModified: "",
            size: "",
            icons: "/icons/problem-solving.png",
            id: "6.3.2",
            onclick: () => {
              window.open(
                "https://www.thebalancemoney.com/problem-solving-skills-with-examples-2063764",
                "_blank"
              );
            },
          },
          {
            name: "Teamwork",
            type: "file" as const,
            dateModified: "",
            size: "",
            icons: "/icons/partners.png",
            id: "6.3.3",
            onclick: () => {
              window.open(
                "https://www.thebalancemoney.com/list-of-teamwork-skills-2063773",
                "_blank"
              );
            },
          },
          {
            name: "Creative Thinking",
            type: "file" as const,
            dateModified: "",
            size: "",
            icons: "/icons/design-thinking.png",
            id: "6.3.4",
            onclick: () => {
              window.open(
                "https://rockcontent.com/blog/creative-thinking-skills/",
                "_blank"
              );
            },
          },
          {
            name: "Decision Making ",
            type: "file" as const,
            dateModified: "",
            size: "",
            icons: "/icons/decision-making.png",
            id: "6.3.5",
            onClick: () => {
              window.open(
                "https://www.theforage.com/blog/skills/decision-making-skills",
                "_blank"
              );
            },
          },
          {
            name: "Management ",
            type: "file" as const,
            dateModified: "",
            size: "",
            icons: "/icons/management.png",
            id: "6.3.6",
            onClick: () => {
              window.open(
                "https://corporatefinanceinstitute.com/resources/management/management-skills/#:~:text=Management%20skills%20can%20be%20defined,solving%20problems%20when%20they%20occur.",
                "_blank"
              );
            },
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
        dateModified: "18-06-2024",
        id: 7.1,
      },
      {
        name: "LRIT",
        type: "file" as const,
        icons: "/icons/suitcase.png",
        dateModified:"01-04-2024",
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
                icons: "/icons/app.png",
                id: "10.1.2.2",
                children: [
                  {
                    name: "Public Documents",
                    type: "folder" as const,
                    dateModified: "12-05-2001",
                    size: "",
                    icons: "/icons/app.png",
                    id: "10.1.2.2.1",
                  },
                  {
                    name: "Public Downloads",
                    type: "folder" as const,
                    dateModified: "12-05-2001",
                    size: "",
                    icons: "/icons/app.png",
                    id: "10.1.2.2.2",
                  },
                  {
                    name: "Public Music",
                    type: "folder" as const,
                    dateModified: "12-05-2001",
                    size: "",
                    icons: "/icons/app.png",
                    id: "10.1.2.2.3",
                  },
                  {
                    name: "Public Pictures",
                    type: "folder" as const,
                    dateModified: "12-05-2001",
                    size: "",
                    icons: "/icons/app.png",
                    id: "10.1.2.2.4",
                  },
                  {
                    name: "Public Videos",
                    type: "folder" as const,
                    dateModified: "12-05-2001",
                    size: "",
                    icons: "/icons/app.png",
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
