import { useParams } from "react-router-dom"
import { jobs } from "../data/jobs"
import Navbar from "../components/Navbar"

export default function JobDetails(){

const { title } = useParams()

const job = jobs.find(j => j.title === title)

return(

<div className="bg-gray-100 min-h-screen">

<Navbar/>

{/* Search bar */}
<div className="flex justify-center mt-6">
  <div className="flex bg-white rounded-full shadow px-4 py-2 w-[600px]">
    <input 
      className="flex-1 outline-none px-3"
      placeholder="Job title, Keywords, or Company name"
    />
    <input 
      className="w-40 outline-none border-l px-3"
      placeholder="Location"
    />
    <button className="bg-blue-600 text-white px-6 py-2 rounded-full">
      Search
    </button>
  </div>
</div>

<div className="flex gap-8 p-10 justify-center">

{/* LEFT SIDE JOB DETAILS */}
<div className="bg-white shadow rounded-xl p-8 w-[700px]">

<div className="flex justify-between items-center">

<div className="flex items-center gap-4">
<img 
src="https://logo.clearbit.com/amazon.com"
className="w-12"
/>

<div>
<h1 className="text-2xl font-bold">{job.title}</h1>
<p className="text-gray-500">{job.company}</p>
</div>
</div>

<button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
Apply now
</button>

</div>


{/* JOB INFO */}
<div className="grid grid-cols-2 gap-6 mt-8 text-gray-700">

<div>
<p className="font-semibold">Job type:</p>
<p>Full-time</p>
</div>

<div>
<p className="font-semibold">Location:</p>
<p>{job.location}</p>
</div>

<div>
<p className="font-semibold">Experience:</p>
<p>5 years</p>
</div>

<div>
<p className="font-semibold">Applicants:</p>
<p>40</p>
</div>

</div>


{/* DESCRIPTION */}
<div className="mt-8">

<h2 className="font-bold text-lg mb-2">
Job description
</h2>

<p className="text-gray-600 leading-relaxed">
{job.description}
</p>

</div>


{/* RESPONSIBILITIES */}
<div className="mt-6">

<h2 className="font-bold text-lg mb-2">
Key Responsibilities
</h2>

<ul className="list-disc ml-6 text-gray-600 space-y-2">
<li>Design user-centric interfaces for web and mobile apps</li>
<li>Conduct usability testing and research</li>
<li>Create wireframes and prototypes</li>
<li>Collaborate with product managers and developers</li>
<li>Stay updated with UI/UX trends</li>
</ul>

</div>

</div>


{/* RIGHT SIDE RELATED JOBS */}
<div className="bg-white shadow rounded-xl p-6 w-[280px] h-fit">

<h2 className="font-bold text-lg mb-4">
Related Jobs
</h2>

{jobs.slice(0,4).map((j,index)=>(
<div 
key={index}
className="flex items-center gap-3 border rounded-lg p-3 mb-3 hover:shadow"
>

<div className="bg-green-500 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm">
UX
</div>

<div>
<p className="text-sm font-semibold">
{j.title}
</p>

<p className="text-xs text-gray-500">
{j.company}
</p>

<p className="text-xs text-gray-400">
Remote • $200-$800
</p>
</div>

</div>
))}

</div>

</div>

</div>

)

}