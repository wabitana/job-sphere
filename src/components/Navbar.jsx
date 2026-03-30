import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-8 py-3 shadow-sm bg-white">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="bg-blue-600 text-white font-bold px-2 py-1 rounded">
          JOB
        </div>
        <span className="font-semibold text-gray-800">SPHERE</span>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-8 text-gray-600 text-sm">
        <Link to="/" className="text-blue-600 font-medium">
          Job Search
        </Link>
        <Link to="/applications">My Applications</Link>
        <Link to="/companies">Companies</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3">
        <Link
          to="/login"
          className="px-4 py-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-50"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}