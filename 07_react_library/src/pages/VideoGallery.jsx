import React, { useState } from "react";
import { Card, Button, Model } from "../components/index.js";
import videos from "../data/videos.js";

const VideoGallery = () => {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (video) => {
    setSelected(video);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelected(null);
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-4xl sm:text-5xl font-bold mb-8 animate-bounce">
        Fancy Video Cards
      </h1>
      <p className="text-center mb-10 max-w-2xl text-white/80">
        Each card shows a video preview. Click “View Video” to see it larger.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {videos.map((video) => (
          <Card
            key={video.id}
            title={video.title}
            content={
              <div className="h-40 w-full rounded overflow-hidden relative group">
                <video
                  src={video.src}
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-30 p-2 text-center text-white font-semibold">
                  {video.title}
                </div>
              </div>
            }
            footer={
              <Button
                onClick={() => openModal(video)}
                variant="primary"
                className="mt-2 transition-colors duration-300 hover:bg-blue-600"
              >
                View Video
              </Button>
            }
            className="w-60 rounded-lg overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          />
        ))}
      </div>

      {/* Modal */}
      <Model isOpen={isOpen} onClose={closeModal}>
        {selected && (
          <div className="flex flex-col items-center space-y-4 w-full">
            <h2 className="text-2xl font-bold text-black">{selected.title}</h2>
            <video
              src={selected.src}
              controls
              autoPlay
              loop
              muted
              className="w-full sm:w-3/4 h-auto max-h-[70vh] rounded"
            />
          </div>
        )}
      </Model>
    </div>
  );
};

export default VideoGallery;
