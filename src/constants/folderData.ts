// export const folderData: FolderData = {
//     'This PC': [
//       { name: 'Desktop', type: 'folder' },
//       { name: 'Documents', type: 'folder' },
//       { name: 'Downloads', type: 'folder' },
//       { name: 'Projects', type: 'folder' },
//     ],
//     Desktop: [
//       { name: 'About', type: 'folder' },
//       { name: 'Resume.pdf', type: 'file' },
//     ],
//     Projects: [
//       { name: 'Portfolio', type: 'folder' },
//       { name: 'Snake Game.js', type: 'file' },
//     ],
//     About: [
//       { name: 'README.md', type: 'file' },
//     ],
//   };

export const folderData = {
  "MainFolders": {
    "OneDrive": {
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
                    Desktop: { type: "folder", contents: {}, dateModified: "2024-12-01" },
                    Documents: { type: "folder", contents: {}, dateModified: "2024-12-01" },
                    Downloads: { type: "folder", contents: {}, dateModified: "2024-12-01" },
                    Favorites: { type: "folder", contents: {}, dateModified: "2024-12-01" },
                    Links: { type: "folder", contents: {}, dateModified: "2024-12-01" },
                    Music: { type: "folder", contents: {}, dateModified: "2024-12-01" },
                    "OneDrive": { type: "folder", contents: {}, dateModified: "2024-12-01" },
                    Pictures: { type: "folder", contents: {}, dateModified: "2024-12-01" },
                    "Saved Games": { type: "folder", contents: {}, dateModified: "2024-12-01" },
                    Videos: { type: "folder", contents: {}, dateModified: "2024-12-01" },
                  },
                },
              },
            },
          },
        },
      },
    },
    "Network": {
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
      "Public Documents": { type: "folder", contents: {}, dateModified: "2024-12-01" },
      Downloads: { type: "folder", contents: {}, dateModified: "2024-12-01" },
      Music: { type: "folder", contents: {}, dateModified: "2024-12-01" },
      Pictures: { type: "folder", contents: {}, dateModified: "2024-12-01" },
      Videos: { type: "folder", contents: {}, dateModified: "2024-12-01" },
    },
  },
};


  type FolderContent = { name: string; type: 'file' | 'folder' };
type FolderData = {
  [key: string]: FolderContent[]; // Allows dynamic string keys
};


  export const folderIcons: { [key: string]: string } = {
    'This PC': '/icons/share.png',
    Documents: '/icons/share.png',
    Desktop: '/icons/share.png',
    Downloads: '/icons/share.png',
  };
  