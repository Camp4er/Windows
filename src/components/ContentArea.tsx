// import Image from "next/image";
// import React from "react";
// import { ContentAreaProps } from "../constants/constants";
// import SkillsMain from "./FileExplorer/Skills/SkillsMain";

// const ContentArea = ({
//   path,
//   folderContents,
//   onNavigate,
// }: ContentAreaProps) => {
//   const currentFolder = path[path.length - 1]; //Get current folder
//   const contents = folderContents[currentFolder] || []; // Get contents of current folder

//   const renderContent = () => {
//     switch (currentFolder) {
//       case "Home":
//         return (
//           <div>
//             <h2>Quick Access</h2>
//             <h2>Favorites</h2>
//             <h2>Recent</h2>
//           </div>
//         );
//       case "Gallery":
//         return (
//           <div className="grid grid-cols-4 gap-4">
//             <Image
//               src="/icons/windows.png"
//               alt="Image 1"
//               width={100}
//               height={100}
//             />
//             <Image
//               src="/icons/word.png"
//               alt="Image 2"
//               width={100}
//               height={100}
//             />
//           </div>
//         );
//       case "Desktop":
//         return <div>{/* Render desktop files */}</div>;
//       case "Documents":
//         return (
//           <div>
//             <a
//               href="/pdf/PoorvaSaxenaResume6.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Open Resume
//             </a>
//           </div>
//         );
//       case "Projects":
//         return (
//           <div>
//             <h2>Projects</h2>
//             {/* Render project cards */}
//           </div>
//         );
//       case "Skills":
//         return (
//           <div>
//             <SkillsMain />
//             {/* Render skill folders */}
//           </div>
//         );
//       case "Experience":
//         return <div>{/* Render internship folders */}</div>;
//       default:
//         return <div>Select a folder</div>;
//     }
//   };

//   // return <div>{renderContent()}</div>;
//   return (
//     <div className="p-4 bg-gray-900 text-white flex-1">
//       {contents.length > 0 ? (
//         <table className="w-full">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Type</th>
//             </tr>
//           </thead>
//           <tbody>
//             {contents.map((item) => (
//               <tr
//                 key={item.name}
//                 className="cursor-pointer"
//                 onClick={() => item.type === "folder" && onNavigate(item.name)}
//               >
//                 <td>{item.name}</td>
//                 <td>{item.type}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No contents available</p>
//       )}
//     </div>
//   );
// };

// export default ContentArea;


import Image from "next/image";
import React from "react";
import { ContentAreaProps } from "../constants/constants";
import SkillsMain from "./FileExplorer/Skills/SkillsMain";

const ContentArea = ({
  path,
  folderContents,
  onNavigate,
}: ContentAreaProps) => {
  const currentFolder = path[path.length - 1]; // Get the current folder
  const contents = folderContents[currentFolder] || []; // Get the contents of the current folder

  // Custom rendering for specific folders
  const renderSpecialFolder = () => {
    switch (currentFolder) {
      case "Home":
        return (
          <div>
            <h2>Quick Access</h2>
            <h2>Favorites</h2>
            <h2>Recent</h2>
          </div>
        );
      case "Gallery":
        return (
          <div className="grid grid-cols-4 gap-4">
            <Image
              src="/icons/windows.png"
              alt="Image 1"
              width={100}
              height={100}
            />
            <Image
              src="/icons/word.png"
              alt="Image 2"
              width={100}
              height={100}
            />
          </div>
        );
      case "Desktop":
        return <div>{/* Render desktop files */}</div>;
      case "Documents":
        return (
          <div>
            <a
              href="/pdf/PoorvaSaxenaResume6.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Resume
            </a>
          </div>
        );
      case "Projects":
        return (
          <div>
            <h2>Projects</h2>
            {/* Render project cards */}
          </div>
        );
      case "Skills":
        return (
          <SkillsMain
            currentFolder={currentFolder}
            folderContents={folderContents}
            onNavigate={(folderName) => onNavigate(folderName)} // Pass navigation handler
          />
        );
      case "Experience":
        return <div>{/* Render internship folders */}</div>;
      default:
        return null;
    }
  };

  return (
    <div className="p-4 bg-gray-900 text-white flex-1">
      {/* Render special folder contents first */}
      {renderSpecialFolder() || (
        // Render general folder contents if no special case is matched
        contents.length > 0 ? (
          <table className="w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {contents.map((item) => (
                <tr
                  key={item.name}
                  className="cursor-pointer"
                  onClick={() =>
                    item.type === "folder" && onNavigate(item.name)
                  }
                >
                  <td>{item.name}</td>
                  <td>{item.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No contents available</p>
        )
      )}
    </div>
  );
};

export default ContentArea;
