import { Link } from "react-router";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
      <h1 className="text-4xl font-bold mb-6">Welcome to E-Commerce</h1>
      <p className="text-lg text-gray-600 mb-8">
        Sign up or login to access your dashboard.
      </p>
      <div className="flex gap-4">
        <Link
          to="/signup"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
