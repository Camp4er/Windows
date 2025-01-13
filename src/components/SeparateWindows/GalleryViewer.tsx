import React, { useState } from "react";

interface GalleryViewerProps {
  images: string[]; // Array of image URLs
}

export default function GalleryViewer({ images }: GalleryViewerProps) {
  const [currentImage, setCurrentImage] = useState<number | null>(null);

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
      <div className="grid grid-cols-3 gap-4">
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
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white bg-red-600 p-2 rounded"
            onClick={closeImage}
          >
            Close
          </button>
          <button
            className="absolute left-4 top-1/2 text-white bg-gray-600 p-2 rounded"
            onClick={prevImage}
            disabled={currentImage === 0}
          >
            Previous
          </button>
          <img
            src={images[currentImage]}
            alt={`Fullscreen image ${currentImage + 1}`}
            className="max-w-full max-h-full"
          />
          <button
            className="absolute right-4 top-1/2 text-white bg-gray-600 p-2 rounded"
            onClick={nextImage}
            disabled={currentImage === images.length - 1}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
