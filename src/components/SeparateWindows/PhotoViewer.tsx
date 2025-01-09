import React from "react";

interface PhotoViewerProps {
  src: string;
}

const PhotoViewer = ({ src }: PhotoViewerProps) => {
  return (
    <div className="window bg-white border rounded-md shadow-md w-[600px] h-[500px] flex flex-col">
      <div className="bg-gray-200 p-2 font-semibold">Photo Viewer</div>
      <img src={src} alt="photo" className="w-full h-full object-contain" />
    </div>
  );
};

export default PhotoViewer;
