// src/components/Search.jsx
import React from "react";
import { useNFTs } from "../context/NFTContext";

function Search() {

  const { search, setSearch } = useNFTs();
  return (
    <>
      <input
      type="text"
      placeholder="Search NFTs or artists..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border px-2 py-2 rounded w-full md:w-1/3"
      />
    </>
  );
};



export default Search


