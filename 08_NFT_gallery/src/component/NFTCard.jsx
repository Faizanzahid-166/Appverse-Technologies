// src/components/NFTCard.jsx
import React from "react";
import {Link} from 'react-router'

const NFTCard = ({ nft }) => {
  return (
    <Link to={`/nft/${nft.id}`}>
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform">
      <img src={nft.image} alt={nft.name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="font-bold text-lg">{nft.name}</h2>
        <p className="text-gray-500 text-sm">by {nft.artist}</p>
        <p className="mt-2 font-semibold">{nft.price} ETH</p>
      </div>
    </div>
    </Link>
  );
};

export default NFTCard;
