import { useContext } from "react";
import { JobContext } from "../context/JobContext";
import { Link } from "react-router-dom";
import { FiBookmark, FiShare2 } from "react-icons/fi";

export default function JobCard({ job }) {
  const { toggleBookmark, savedJobs } = useContext(JobContext);

  const isSaved = savedJobs.find((j) => j.title === job.title);

  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm border mb-4 flex justify-between items-start hover:shadow-md transition">

      {/* LEFT SIDE */}
      <div className="flex gap-4">
        <img
          src={job.logo}
          alt="logo"
          className="w-12 h-12 rounded-lg object-contain border"
        />

        <div>
          <h2 className="font-semibold text-lg">{job.title}</h2>

          <p className="text-gray-500 text-sm">{job.company}</p>

          <p className="text-sm text-gray-400">
            {job.location} • {job.type}
          </p>

          <p className="text-sm text-gray-400">
            {job.currency} {job.salary}
          </p>

          <p className="text-gray-500 text-sm mt-1 line-clamp-2">
            {job.description}
          </p>

          <Link
            to={`/job/${job.title}`}
            className="text-blue-600 text-sm font-medium mt-1 inline-block"
          >
            View Details
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col items-center gap-3">
        <button onClick={() => toggleBookmark(job)}>
          <FiBookmark
            className={`text-xl ${
              isSaved ? "text-blue-600 fill-blue-600" : "text-gray-400"
            }`}
          />
        </button>

        <button>
          <FiShare2 className="text-xl text-gray-400" />
        </button>
      </div>
    </div>
  );
}