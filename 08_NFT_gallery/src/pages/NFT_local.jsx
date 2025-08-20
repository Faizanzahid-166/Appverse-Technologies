import React, { useEffect, useState } from "react";

function NFT_local() {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  // NFT_local.jsx (top of the file)
const ipfsToHttp = (url) => {
  if (!url) return "";
  if (url.startsWith("ipfs://")) {
    return url.replace("ipfs://", "https://ipfs.io/ipfs/");
  }
  return url;
};


  const fetchNFTs = async () => {
    try {
      const response = await fetch(
        "https://deep-index.moralis.io/api/v2/nft/0xBC4CA0EDA7647A8AB7C2061C2E118A18A936F13D?chain=eth&format=decimal&limit=12",
        {
          headers: {
            "X-API-Key": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjRjYzc1YjU4LWYwMTQtNDczZS1iMjU5LWJkMjU3YjM1NmMyMyIsIm9yZ0lkIjoiNDY1OTQyIiwidXNlcklkIjoiNDc5MzUxIiwidHlwZSI6IlBST0pFQ1QiLCJ0eXBlSWQiOiIwYWJjY2I5Ni1iYmI2LTQ5YjktOWJjYS1lYjRhZjU3ZGIyYzEiLCJpYXQiOjE3NTU2MzMwNzQsImV4cCI6NDkxMTM5MzA3NH0.wjg4HSD4p-38kajRyjhXzx70u-ETEuwWiShJfljasqk", // replace with your Moralis API key
          },
        }
      );

      console.log("fetch",response);
      
      const data = await response.json();
      console.log("NFT",data);
      
      const nftList = data.result.map((nft) => {
        const metadata = nft.metadata ? JSON.parse(nft.metadata) : null;
        console.log(metadata);
        
        return {
          name: metadata?.name || "No Name",
          image: metadata?.image || "",
        };
      });

      setNfts(nftList);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching NFTs:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNFTs();
  }, []);

  if (loading) return <p className="text-center mt-10 h-100">Loading NFTs...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 bg-gradient-to-br from-purple-700/30 via-pink-600/20 to-cyan-500/20 ">
    {nfts.map((nft, index) => (
  <div key={index} className="border rounded-lg p-2 shadow-lg hover:scale-105 transition-transform">
    <img
      src={ipfsToHttp(nft.image)} // use the function here
      alt={nft.name}
      className="w-full h-48 object-cover rounded-md"
    />
    <h2 className="text-center mt-2 font-semibold"> NFT #{index + 1}</h2>
  </div>
))}

    </div>
  );
}

export default NFT_local;
