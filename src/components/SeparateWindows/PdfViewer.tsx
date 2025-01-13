import React from "react";

export default function PDFViewer() {
  return (
    <div className="h-full w-full bg-gray-800 text-white flex items-center justify-center">
      <iframe
        src="/pdf/PoorvaSaxenaResume6.pdf"
        className="h-full w-full border-none"
        title="PDF Viewer"
      ></iframe>
    </div>
  );
}
