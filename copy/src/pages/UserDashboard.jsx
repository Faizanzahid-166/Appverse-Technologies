import { useAuth } from "../context/AuthContext.jsx";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg text-center mt-[10rem]">
      <h2 className="text-2xl font-bold mb-2">Welcome, {user?.name}</h2>
      <p className="text-gray-600 mb-4">Email: {user?.email}</p>
      <button
        onClick={logout}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
      >
        Logout
      </button>
    </div>
  );
}
