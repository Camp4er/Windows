import React, { useEffect, useState } from "react";

interface GalleryViewerProps {
  images: string[]; // Array of image URLs
}

export default function GalleryViewer({ images }: GalleryViewerProps) {
  const [currentImage, setCurrentImage] = useState<number | null>(null);

  useEffect(() => {
    console.log("Opening Gallery Viewer with images:", images); // Debug log
  }, [images]); // Runs only when `images` changes

  const handleImageClick = (index: number) => {
    setCurrentImage(index); // Open the clicked image
  };

  const closeImage = () => {
    setCurrentImage(null); // Close the fullscreen image
  };

  const nextImage = () => {
    if (currentImage !== null && currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    }
  };

  const prevImage = () => {
    if (currentImage !== null && currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
  };

  return (
    <div className="h-full w-full bg-gray-800 text-white p-4 flex flex-col">
      {/* Image Grid */}
      <div className="grid grid-cols-3 gap-4 overflow-y-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer overflow-hidden rounded"
            onClick={() => handleImageClick(index)}
          >
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="object-cover w-full h-32 hover:scale-105 transition-transform duration-200"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen View */}
      {currentImage !== null && (
        <div className="fixed mt-12 p-3 inset-0 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white bg-red-600 p-2 rounded"
            onClick={closeImage}
          >
            Close
          </button>
          {/* Previous Button */}
          <button
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-4 rounded-full bg-gray-600 hover:bg-gray-500 ${
              currentImage === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={prevImage}
            disabled={currentImage === 0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M15 8a.5.5 0 0 0-.5-.5H2.707l4.147-4.146a.5.5 0 0 0-.708-.708l-5 5a.5.5 0 0 0 0 .708l5 5a.5.5 0 0 0 .708-.708L2.707 8.5H14.5a.5.5 0 0 0 .5-.5z" />
            </svg>{" "}
          </button>
          {/* Current Image */}
          <img
            src={images[currentImage]}
            alt={`Fullscreen image ${currentImage + 1}`}
            className="max-w-full max-h-full"
          />
          {/* Next Button */}
          <button
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-4 rounded-full bg-gray-600 hover:bg-gray-500 ${
              currentImage === images.length - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={nextImage}
            disabled={currentImage === images.length - 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              viewBox="0 0 16 16"
            >
              <path d="M1 8a.5.5 0 0 0 .5.5h11.793l-4.147 4.146a.5.5 0 0 0 .708.708l5-5a.5.5 0 0 0 0-.708l-5-5a.5.5 0 0 0-.708.708L13.293 7.5H1.5A.5.5 0 0 0 1 8z" />
            </svg>{" "}
          </button>
        </div>
      )}
    </div>
  );
}
