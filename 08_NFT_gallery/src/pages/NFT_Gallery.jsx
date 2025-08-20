import React, { useState } from "react";
import {NFTCard,} from "../component/index.js";
import { useNFTs } from "../context/NFTContext.jsx";

function NFT_Gallery() {

       const { filteredNFTs } = useNFTs();

  return (

   <div className=" mx-auto p-6 bg-gradient-to-br from-blue-800 via-gray-900  to-cyan-500">
      <h1 className="text-3xl font-bold mb-6">NFT Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       
       {filteredNFTs.length > 0 ? (
          filteredNFTs.map((nft) => <NFTCard key={nft.id} nft={nft} />)
        ) : (
          <p className="text-gray-500">No NFTs found</p>
        )}
    
      </div>
    
    </div>
  )
}

export default NFT_Gallery
