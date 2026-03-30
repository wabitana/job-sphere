import { createContext, useState } from "react";
import { jobs } from "../data/jobs";

export const JobContext = createContext();

export function JobProvider({ children }) {

const [jobList, setJobList] = useState(jobs);
const [savedJobs, setSavedJobs] = useState([]);

function toggleBookmark(job){

const exists = savedJobs.find(j => j.title === job.title)

if(exists){
setSavedJobs(savedJobs.filter(j => j.title !== job.title))
}else{
setSavedJobs([...savedJobs, job])
}

}

return (
<JobContext.Provider value={{jobList, savedJobs, toggleBookmark}}>
{children}
</JobContext.Provider>
)

}