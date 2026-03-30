import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import JobDetails from "./pages/JobDetails"
import SavedJobs from "./pages/SavedJobs"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

import Applications from "./pages/Applications";
import Companies from "./pages/Companies";
import Contact from "./pages/Contact";


function App(){

return (

<Routes>

<Route path="/" element={<Home />} />
<Route path="/job/:title" element={<JobDetails />} />
<Route path="/saved" element={<SavedJobs />} />
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />

<Route path="/applications" element={<Applications />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/contact" element={<Contact />} />

</Routes>

)

}

export default App