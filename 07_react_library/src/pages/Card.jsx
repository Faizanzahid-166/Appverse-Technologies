import React, { useState } from "react";
import { Card, Button, Model } from "../components/index.js";
import styledData from "../data/styledData.js";

const CardPage = () => {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (item) => {
    setSelected(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelected(null);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gray-900 flex flex-col items-center p-6">
      
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white animate-bounce">
        Explore Fancy Cards
      </h1>
      <p className="text-center mb-8 max-w-2xl text-white/80">
        Discover creative card styles without images. Each card has a unique color, gradient, or effect.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-items-center w-full max-w-6xl">
        {styledData.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            content={
              <div className={`h-40 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg ${item.style} transition-transform duration-300 group-hover:scale-105`}>
                {item.genre}
              </div>
            }
            footer={
              <Button
                onClick={() => openModal(item)}
                variant="primary"
                className="mt-2 transition-colors duration-300 hover:bg-blue-600"
              >
                View Details
              </Button>
            }
            className="w-60 rounded-lg overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          />
        ))}
      </div>

      {/* Modal */}
      <Model isOpen={isOpen} onClose={closeModal}>
        {selected && (
          <div className="space-y-3 text-black text-center">
            <p className="font-bold text-lg">
              <strong>Title:</strong> {selected.title}
            </p>
            <div
              className={`h-48 rounded-lg flex items-center justify-center text-white font-bold text-2xl ${selected.style}`}
            >
              {selected.genre}
            </div>
            <p className="mt-4">
              <strong>Genre:</strong> {selected.genre}
            </p>
          </div>
        )}
      </Model>
    </div>
  );
};

export default CardPage;
