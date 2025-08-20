// src/components/Sort.jsx
import React from "react";
import { useNFTs } from "../context/NFTContext";

const Sort = () => {
  const { sortBy, setSortBy } = useNFTs();

  return (
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      className="border p-2 rounded"
    >
      <option value="Newest">Newest</option>
      <option value="Oldest">Oldest</option>
      <option value="PriceLowHigh">Price: Low → High</option>
      <option value="PriceHighLow">Price: High → Low</option>
    </select>
  );
};

export default Sort;
