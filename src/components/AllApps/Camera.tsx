import Image from 'next/image';
import React, { useRef, useState, useEffect } from 'react';
import { FaHeart, FaTrash } from 'react-icons/fa';

const Camera: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [images, setImages] = useState<{ src: string; favorite: boolean }[]>([]);
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);

  // Start the video stream
  useEffect(() => {
    const startVideo = async () => {
      if (videoRef.current) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          videoRef.current.srcObject = stream;
        } catch (error) {
          console.error("Error accessing the camera: ", error);
        }
      }
    };

    startVideo();

    return () => {
      if (videoRef.current) {
        const stream = videoRef.current.srcObject as MediaStream;
        if (stream) {
          const tracks = stream.getTracks();
          tracks.forEach(track => track.stop());
        }
      }
    };
  }, []);

  // Capture image from video
  const captureImage = () => {
    if (canvasRef.current && videoRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
        const newImageSrc = canvasRef.current.toDataURL('image/png');
        // setImageSrc(newImageSrc);
        setImages((prevImages) => [...prevImages, { src: newImageSrc, favorite: false }]);
      }
    }
  };

  // Toggle favorite status
  const toggleFavorite = (index: number) => {
    setImages((prevImages) =>
      prevImages.map((image, i) =>
        i === index ? { ...image, favorite: !image.favorite } : image
      )
    );
  };

  // Delete image
  const handleDelete = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
    if (currentImageIndex === index) {
      setCurrentImageIndex(null); // Reset current image index if deleted
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Camera</h1>
      
      <div className="relative mb-4">
        <video ref={videoRef} autoPlay className="w-full max-w-md rounded-lg border border-gray-700 shadow-lg" />
        <button
          onClick={captureImage}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg transition duration-200"
        >
          Capture
        </button>
      </div>

      <canvas ref={canvasRef} className="hidden" width={640} height={480}></canvas>

      {/* Show Gallery Button */}
      <button
        onClick={() => setShowGallery(!showGallery)}
        className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-200"
      >
        {showGallery ? "Hide Gallery" : "Show Gallery"}
      </button>

      {/* Gallery Section */}
      {showGallery && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-xl">
          {images.map((image, index) => (
            <div key={index} className={`relative rounded-lg overflow-hidden ${image.favorite ? 'border border-yellow-400' : ''}`}>
              <Image src={image.src} alt={`Captured ${index + 1}`} width={200} height={150} layout="responsive" onClick={() => setCurrentImageIndex(index)} />
              <div className="absolute top-0 right-0 p-2 flex space-x-2">
                <button onClick={() => toggleFavorite(index)} className={`text-lg ${image.favorite ? 'text-red-500' : 'text-gray-600'} hover:text-red-400`}>
                  <FaHeart />
                </button>
                <button onClick={() => handleDelete(index)} className="text-lg text-gray-600 hover:text-red-500">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Fullscreen View for Current Image */}
      {currentImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button onClick={() => setCurrentImageIndex(null)} className="absolute top-4 right-4 text-white bg-red-600 p-2 rounded">
            Close
          </button>
          <Image src={images[currentImageIndex].src} alt={`Fullscreen image ${currentImageIndex + 1}`} width={800} height={600} layout="responsive" />
        </div>
      )}
    </div>
  );
};

export default Camera;
