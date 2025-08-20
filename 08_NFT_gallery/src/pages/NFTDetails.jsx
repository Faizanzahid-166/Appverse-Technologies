// src/pages/NFTDetails.jsx
import React from "react";
import { useParams, Link } from "react-router";
import { NFTS } from "../data/NFT_data_gallery";
import NotFound from './NotFound.jsx'

const NFTDetails = () => {
  const { id } = useParams();
  const nft = NFTS.find((item) => item.id === id);

  if (!nft) {
    return (
     <NotFound />
    );
  }

  return (
    <div className="container mx-auto p-6 ">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={nft.image}
          alt={nft.name}
          className="w-full md:w-1/2 h-auto rounded-lg"
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{nft.name}</h1>
          <p className="text-gray-500 mb-2">by {nft.artist}</p>
          <p className="font-semibold mb-4">{nft.price} ETH</p>
          <p className="mb-4">{nft.description}</p>

          <div className="mb-4">
            <h2 className="font-bold mb-2">Attributes:</h2>
            <ul className="list-disc list-inside">
              {nft.attributes.map((attr, idx) => (
                <li key={idx}>
                  <span className="font-semibold">{attr.trait_type}:</span>{" "}
                  {attr.value}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-gray-500">Minted: {nft.dateMinted}</p>

          <Link
            to="/nft_gallery"
            className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Back to Gallery
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NFTDetails;
