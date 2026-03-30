import Navbar from "../components/Navbar"
import JobCard from "../components/JobCard"
import { useContext, useState } from "react"
import { JobContext } from "../context/JobContext"

export default function Home(){

const { jobList, savedJobs } = useContext(JobContext)

const [search,setSearch] = useState("")
const [type,setType] = useState("")

const filteredJobs = jobList.filter(job =>
job.title.toLowerCase().includes(search.toLowerCase()) &&
(type ? job.type === type : true)
)

return(

<div className="bg-gray-100 min-h-screen">

<Navbar/>

{/* HERO SECTION */}

<div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white px-10 py-16 flex items-center justify-between rounded-b-3xl">

  {/* LEFT TEXT */}
  <div className="max-w-lg">
    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
      Find Your Dream Job with Ease
    </h1>

    <p className="text-lg opacity-90">
      Search, Apply, and Track Job Applications <br />
      All in One Place
    </p>
  </div>

  {/* RIGHT IMAGE */}
 <div className="hidden md:block transform -translate-x-10">
  <img
    src="/hero.png"
    alt="hero"
    className="w-[200px]"
  />
</div>

</div>

{/* MAIN CONTENT */}

<div className="grid grid-cols-12 gap-6 p-8">

{/* FILTER SIDEBAR */}

<div className="col-span-3 bg-gray-100 p-5 rounded-xl shadow-sm w-full max-w-sm">

  <h2 className="text-xl font-semibold mb-4 text-center">
    Filter
  </h2>

  {/* Date Posted */}
  <div className="mb-4">
    <p className="text-sm mb-1">Date Posted</p>
    <select className="w-full border rounded-md p-2 text-sm bg-white">
      <option>Last 24 Hours</option>
      <option>Last 7 Days</option>
      <option>Last 30 Days</option>
    </select>
  </div>

  {/* Job Type */}
  <div className="mb-4">
    <p className="text-sm mb-2">Job Type</p>

    <div className="border rounded-md p-3 bg-white space-y-2 text-sm">
      {[
        "Full-time",
        "Part-time",
        "Contract",
        "Volunteer",
        "Internship",
        "Remote",
        "Hybrid",
        "On-Site",
      ].map((item, i) => (
        <label key={i} className="flex items-center gap-2">
          <input type="checkbox" className="accent-blue-600" />
          {item}
        </label>
      ))}
    </div>
  </div>

  {/* Location */}
  <div className="mb-4">
    <p className="text-sm mb-1">Location</p>
    <input
      type="text"
      placeholder="Enter your location"
      className="w-full border rounded-md p-2 text-sm bg-white"
    />
  </div>

  {/* Experience Level */}
  <div className="mb-4">
    <p className="text-sm mb-1">Experience Level</p>
    <select className="w-full border rounded-md p-2 text-sm bg-white">
      <option>Beginner</option>
      <option>Intermediate</option>
      <option>Expert</option>
    </select>
  </div>

  {/* Salary Range */}
  <div className="mb-4">
    <p className="text-sm mb-2">Salary Range</p>

    <input
      type="range"
      min="20"
      max="2000"
      className="w-full accent-blue-600"
    />

    <div className="flex justify-between text-xs text-gray-500 mt-1">
      <span>20</span>
      <span>2,000</span>
    </div>
  </div>

  {/* Manual Input */}
  <div className="mb-4">
    <p className="text-sm mb-1">Input Manually</p>
    <div className="flex gap-2">
      <input
        type="number"
        placeholder="From"
        className="w-1/2 border rounded-md p-2 text-sm"
      />
      <input
        type="number"
        placeholder="To"
        className="w-1/2 border rounded-md p-2 text-sm"
      />
    </div>
  </div>

  {/* Currency */}
  <div className="mb-4">
    <p className="text-sm mb-1">Currency</p>
    <select className="w-full border rounded-md p-2 text-sm bg-white">
      <option>Dollar</option>
      <option>Euro</option>
      <option>Birr</option>
    </select>
  </div>

  {/* Reset Button */}
  <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
    Reset all filter
  </button>

</div>

{/* JOB LIST */}

<div className="col-span-6">

{/* SEARCH BAR */}

<div className="flex gap-3 mb-6">

<input
placeholder="Job title, Keywords, or Company"
className="border p-3 rounded w-full"
onChange={e=>setSearch(e.target.value)}
/>

<button className="bg-blue-600 text-white px-6 rounded">
Search
</button>

</div>

{/* JOB CARDS */}

<div className="space-y-4">

{filteredJobs.map((job,index)=>(
<JobCard key={index} job={job}/>
))}

</div>

</div>

{/* SAVED JOBS */}

<div className="col-span-3 bg-white p-5 rounded-2xl shadow-sm">

  <h2 className="font-semibold text-lg mb-4">
    Saved Jobs
  </h2>

  {savedJobs.length === 0 ? (
    <p className="text-gray-500 text-sm">
      No saved jobs yet
    </p>
  ) : (
    <div className="space-y-3">
      {savedJobs.map((job, index) => (
        <div
          key={index}
          className="flex items-center gap-3 border-b pb-2"
        >
          <img
            src={job.logo}
            className="w-8 h-8 rounded"
          />

          <div>
            <p className="text-sm font-medium">
              {job.title}
            </p>
            <p className="text-xs text-gray-500">
              {job.company}
            </p>
          </div>
        </div>
      ))}
    </div>
  )}

</div>




</div>

</div>

)
}