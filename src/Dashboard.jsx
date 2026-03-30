import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaUserCircle,
  FaBell,
  FaBriefcase,
  FaClipboardList,
  FaStar,
  FaRegHeart,
  FaChartLine,
  FaEnvelope,
} from "react-icons/fa";

export default function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">

      {/* TOP NAV */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow p-4 flex justify-between items-center"
      >
        <h1 className="text-2xl font-bold text-blue-700">JOBSPHERE</h1>

        <div className="flex items-center gap-4">
          <button className="relative">
            <FaBell className="text-gray-600 text-xl" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full animate-pulse">
              3
            </span>
          </button>

          <div className="flex items-center gap-2 cursor-pointer">
            <FaUserCircle className="text-3xl text-gray-700" />
            <span className="hidden md:inline font-medium">John Doe</span>
          </div>

          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </motion.div>

      {/* MAIN CONTENT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="p-8 max-w-7xl mx-auto space-y-8"
      >
        {/* WELCOME */}
        <div>
          <h2 className="text-3xl font-bold mb-2">Welcome back, John! 👋</h2>
          <p className="text-gray-600">Here's what's happening with your job applications today.</p>
        </div>

        {/* QUICK STATS */}
        <div className="grid md:grid-cols-4 gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow flex flex-col items-start"
          >
            <FaClipboardList className="text-blue-500 text-3xl mb-2" />
            <p className="text-gray-500">Applications</p>
            <h3 className="text-2xl font-bold mt-2">12</h3>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow flex flex-col items-start"
          >
            <FaBriefcase className="text-green-500 text-3xl mb-2" />
            <p className="text-gray-500">Interviews</p>
            <h3 className="text-2xl font-bold mt-2">3</h3>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow flex flex-col items-start"
          >
            <FaRegHeart className="text-red-500 text-3xl mb-2" />
            <p className="text-gray-500">Saved Jobs</p>
            <h3 className="text-2xl font-bold mt-2">7</h3>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow flex flex-col items-start"
          >
            <FaStar className="text-yellow-400 text-3xl mb-2" />
            <p className="text-gray-500">Recommendations</p>
            <h3 className="text-2xl font-bold mt-2">5</h3>
          </motion.div>
        </div>

        {/* DASHBOARD SECTIONS */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* RECENT APPLICATIONS */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-xl shadow"
          >
            <h3 className="text-lg font-semibold mb-4">Recent Applications</h3>
            <div className="space-y-4">
              <div className="flex justify-between border-b pb-2">
                <div>
                  <p className="font-medium">Frontend Developer</p>
                  <p className="text-sm text-gray-500">Google</p>
                </div>
                <span className="text-yellow-600 text-sm">Pending</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <div>
                  <p className="font-medium">Backend Engineer</p>
                  <p className="text-sm text-gray-500">Amazon</p>
                </div>
                <span className="text-blue-600 text-sm">Interview</span>
              </div>

              <div className="flex justify-between">
                <div>
                  <p className="font-medium">Full Stack Dev</p>
                  <p className="text-sm text-gray-500">Microsoft</p>
                </div>
                <span className="text-red-600 text-sm">Rejected</span>
              </div>
            </div>
          </motion.div>

          {/* MESSAGES / NOTIFICATIONS */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-xl shadow space-y-4"
          >
            <h3 className="text-lg font-semibold mb-4">Messages</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer transition">
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-blue-500" />
                  <p className="text-sm">New message from HR at Google</p>
                </div>
                <span className="text-xs text-gray-400">2h ago</span>
              </div>

              <div className="flex items-center justify-between p-2 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer transition">
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-blue-500" />
                  <p className="text-sm">Interview schedule update - Amazon</p>
                </div>
                <span className="text-xs text-gray-400">5h ago</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* QUICK LINKS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-6 rounded-xl shadow grid grid-cols-3 md:grid-cols-6 gap-4"
        >
          <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded hover:bg-blue-100 transition cursor-pointer">
            <FaClipboardList className="text-blue-500 text-2xl mb-2" />
            <span className="text-xs font-medium">Applications</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-green-50 rounded hover:bg-green-100 transition cursor-pointer">
            <FaBriefcase className="text-green-500 text-2xl mb-2" />
            <span className="text-xs font-medium">Interviews</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-red-50 rounded hover:bg-red-100 transition cursor-pointer">
            <FaRegHeart className="text-red-500 text-2xl mb-2" />
            <span className="text-xs font-medium">Saved Jobs</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-yellow-50 rounded hover:bg-yellow-100 transition cursor-pointer">
            <FaStar className="text-yellow-500 text-2xl mb-2" />
            <span className="text-xs font-medium">Recommendations</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-purple-50 rounded hover:bg-purple-100 transition cursor-pointer">
            <FaChartLine className="text-purple-500 text-2xl mb-2" />
            <span className="text-xs font-medium">Analytics</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-pink-50 rounded hover:bg-pink-100 transition cursor-pointer">
            <FaUserCircle className="text-pink-500 text-2xl mb-2" />
            <span className="text-xs font-medium">Profile</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}