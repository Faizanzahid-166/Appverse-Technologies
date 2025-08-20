// src/context/NFTContext.jsx
import React, { createContext, useContext, useState, useMemo } from "react";
import { NFTS } from "../data/NFT_data_gallery.js";


const NFTContext = createContext();

export const NFTProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");

  // filtered + sorted NFTs
  const filteredNFTs = useMemo(() => {
    let result = [...NFTS];

    // 🔍 Search filter
    if (search.trim() !== "") {
      result = result.filter(
        (nft) =>
          nft.name.toLowerCase().includes(search.toLowerCase()) ||
          nft.artist.toLowerCase().includes(search.toLowerCase())
      );
    }

    // 🎨 Category filter
    if (category !== "All") {
      result = result.filter((nft) => nft.category === category);
    }

    // 🔄 Sorting
    if (sortBy === "PriceLowHigh") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "PriceHighLow") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "Newest") {
      result.sort(
        (a, b) => new Date(b.dateMinted) - new Date(a.dateMinted)
      );
    } else if (sortBy === "Oldest") {
      result.sort(
        (a, b) => new Date(a.dateMinted) - new Date(b.dateMinted)
      );
    }

    return result;
  }, [search, category, sortBy]);

  return (
    <NFTContext.Provider
      value={{
        search,
        setSearch,
        category,
        setCategory,
        sortBy,
        setSortBy,
        filteredNFTs,
      }}
    >
      {children}
    </NFTContext.Provider>
  );
};

export const useNFTs = () => useContext(NFTContext);
