// src/pages/Marvel.jsx
import React, { useState } from "react";
import { Card, Button, Model } from "../components/index.js";
import marvel from "../data/marvel.js"; // your marvel.js data

const Marvel = () => {
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
    <div className="p-6 flex flex-col text-white items-center bg-[#1f2b61]">

      {/* main headind */}
      <h1 className="font-bold text-start m-3 p-2 text-2xl">Popular Movies</h1>

      {/* Centered Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center w-full max-w-6xl">
        {marvel.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            content={
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-fit object-cover rounded transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            }
            footer={
              <Button
                onClick={() => openModal(item)}
                variant="primary"
                className="transition-colors duration-300 hover:bg-blue-600"
              >
                View Details
              </Button>
            }
            className="w-60 bg-white rounded-lg shadow-md overflow-hidden group 
                       hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          />
        ))}
      </div>

      {/* Modal */}
      <Model isOpen={isOpen} onClose={closeModal} title={selected?.title}>
   
          
        {selected && (
          <div className="space-y-3 tracking-normal">
            <p className="font-bold text-black">
              <strong>MOVIE:</strong> {selected.title}
            </p>
            <img
              src={selected.thumbnail}
              alt={selected.title}
              className="w-3/4 h-auto max-h-[70vh] object-contain mx-auto rounded"
            />
            <p className="mt-8 text-black">
              <strong>Genre:</strong> {selected.genre}
            </p>
          </div>
        )}
      </Model>
    </div>
  );
};

export default Marvel;
