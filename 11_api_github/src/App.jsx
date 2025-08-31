import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./RTK/userSlice.js";
import { useGetUserQuery } from "./services/githubapi.js";

function App() {
  const [username, setUsername] = useState("faizanzahid-166");
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.user);

  // RTK Query hook
  const { data: queryData, isLoading } = useGetUserQuery(username);

   // Choose which data source to use for profile image (Thunk or RTK Query)
  const profileImage = data?.avatar_url || queryData?.avatar_url;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">

         {/* Profile Image - Top Right */}
          {profileImage && (
           <img
           src={profileImage}
           alt="Profile"
           className="w-20 h-20 rounded-full border-2 border-blue-500 shadow-md mb-3 mx-auto"
           />
        )}

        <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">
          GitHub User Profile
        </h1>
        
        {/* Input Field */}
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="border border-gray-300 rounded-lg p-2 w-full mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {/* Fetch Button */}
        <button
          onClick={() => dispatch(fetchUser(username))}
          className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition"
        >
          Fetch with Thunk
        </button>

        {/* Redux Thunk Data */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-700">Redux Thunk Data:</h2>
          {loading && <p className="text-yellow-500 mt-2">Loading...</p>}
          {error && <p className="text-red-500 mt-2">Error: {error}</p>}
          {data && (
            <p className="mt-2 text-gray-800">
              {data.name} – {data.public_repos} repos
            </p>
          )}
        </div>

        {/* RTK Query Data */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-700">RTK Query Data:</h2>
          {isLoading && <p className="text-yellow-500 mt-2">Loading...</p>}
          {queryData && (
            <p className="mt-2 text-gray-800">
              {queryData.name} – {queryData.followers} followers
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
