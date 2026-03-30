import { useContext } from "react";
import { JobContext } from "../context/JobContext";
import JobCard from "../components/JobCard";
import Navbar from "../components/Navbar";

export default function SavedJobs() {
  const { savedJobs } = useContext(JobContext);

  
  const demoSavedJobs = [
    {
      title: "UX Designer",
      type: "Remote",
      salary: "200 - 800",
      description: "Design user experiences and improve usability.",
      company: "Barone LLC.",
      logo: "https://logo.clearbit.com/behance.net",
      location: "Remote",
      currency: "$",
    },
    {
      title: "UI/UX Designer",
      type: "Remote",
      salary: "200 - 800",
      description: "Create user-friendly interfaces and experiences.",
      company: "Acme Co.",
      logo: "https://logo.clearbit.com/yahoo.com",
      location: "Remote",
      currency: "$",
    },
    {
      title: "UI/UX Designer",
      type: "Remote",
      salary: "200 - 800",
      description: "Design modern UI for web and mobile apps.",
      company: "Big Kahuna Burger Ltd.",
      logo: "https://logo.clearbit.com/yandex.com",
      location: "Remote",
      currency: "$",
    },
    {
      title: "UI/UX Designer",
      type: "Remote",
      salary: "200 - 800",
      description: "Work on UI systems and improve user flow.",
      company: "Biffco Enterprises Ltd.",
      logo: "https://logo.clearbit.com/tesla.com",
      location: "Remote",
      currency: "$",
    },
  ];

  // 👉 combine real saved jobs + demo ones
  const allJobs = [...demoSavedJobs, ...savedJobs];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-md mx-auto px-3 mt-5">
        <h1 className="text-xl font-semibold mb-4">
          Saved Jobs
        </h1>

        {allJobs.length === 0 ? (
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm border">
            <p className="text-gray-500 text-sm">
              No saved jobs yet
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {allJobs.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}