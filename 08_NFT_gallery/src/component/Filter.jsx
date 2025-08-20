// src/components/Filter.jsx
import React from "react";
import { useNFTs } from "../context/NFTContext";

const Filter = () => {
  const { category, setCategory } = useNFTs();

  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="border p-2 rounded"
    >
      <option value="All">All</option>
      <option value="Art">Art</option>
      <option value="Photography">Photography</option>
      <option value="3D">3D</option>
      {/* add more categories if your data has them */}
    </select>
  );
};

export default Filter;
