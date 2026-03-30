import { Link } from "react-router-dom";
import { FaGoogle, FaApple, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
export default function Signup(){

return(

<div className="h-screen grid grid-cols-2 bg-gray-100">

{/* LEFT SIDE - SIGNUP FORM */}

<div className="flex items-center justify-center">

<div className="bg-white p-10 rounded-lg shadow w-96">

{/* LOGO */}

<div className="flex justify-center mb-6">

<div className="bg-blue-700 text-white px-4 py-2 rounded font-bold">
JOBSPHERE
</div>

</div>

<h2 className="text-2xl font-semibold mb-6 text-center">
Create your account
</h2>

{/* FORM */}

<input
className="border w-full p-3 mb-3 rounded"
placeholder="First name"
/>

<input
className="border w-full p-3 mb-3 rounded"
placeholder="Last name"
/>

<input
className="border w-full p-3 mb-3 rounded"
placeholder="Email"
/>

<input
type="password"
className="border w-full p-3 mb-3 rounded"
placeholder="Password"
/>

<input
type="password"
className="border w-full p-3 mb-5 rounded"
placeholder="Confirm Password"
/>

<button className="bg-blue-700 text-white w-full p-3 rounded mb-5">
Create account
</button>

{/* OR DIVIDER */}

<div className="flex items-center gap-3 mb-5">

<div className="flex-1 h-px bg-gray-300"></div>

<span className="text-gray-500 text-sm">
OR
</span>

<div className="flex-1 h-px bg-gray-300"></div>

</div>

{/* SOCIAL SIGNUP */}

<div className="flex justify-center gap-4 mb-6">

  <button className="border p-3 rounded hover:bg-gray-100">
    <FaGoogle className="text-red-500 text-lg" />
  </button>

  <button className="border p-3 rounded hover:bg-gray-100">
    <FaApple className="text-black text-lg" />
  </button>

  <button className="border p-3 rounded hover:bg-gray-100">
    <FaFacebookF className="text-blue-600 text-lg" />
  </button>

  <button className="border p-3 rounded hover:bg-gray-100">
    <FaLinkedinIn className="text-blue-700 text-lg" />
  </button>

</div>

{/* LOGIN LINK */}

<p className="text-center text-sm">
  Already have an account?

  <Link
    to="/login"
    className="text-blue-600 ml-1 cursor-pointer"
  >
    Login
  </Link>
</p>

</div>

</div>


{/* RIGHT SIDE - ILLUSTRATION */}

<div className="flex items-center justify-center bg-gray-50">

<img
src="/signup-illustration.png"
alt="signup"
className="w-3/4"
/>

</div>

</div>

)
}