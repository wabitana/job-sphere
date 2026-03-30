
import { Link } from "react-router-dom";
import { FaGoogle, FaApple, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
export default function Login(){

return(

<div className="h-screen grid grid-cols-2 bg-gray-100">

{/* LEFT SIDE (ILLUSTRATION AREA) */}

<div className="flex items-center justify-center bg-gray-50">

<img
src="/login-illustration.png"
alt="login"
className="w-2/3"
/>

</div>


{/* RIGHT SIDE (LOGIN FORM) */}

<div className="flex items-center justify-center">

<div className="bg-white p-10 rounded-lg shadow w-96">

{/* LOGO */}

<div className="flex justify-center mb-6">

<div className="bg-blue-700 text-white px-4 py-2 rounded font-bold">
JOBSPHERE
</div>

</div>

<h2 className="text-2xl font-semibold mb-6 text-center">
Log in to your account
</h2>

{/* EMAIL */}

<input
className="border w-full p-3 mb-4 rounded"
placeholder="Email"
/>

{/* PASSWORD */}

<input
type="password"
className="border w-full p-3 mb-4 rounded"
placeholder="Password"
/>

{/* LOGIN BUTTON */}

<button className="bg-blue-700 text-white w-full p-3 rounded mb-5">
Login
</button>


{/* DIVIDER */}

<div className="flex items-center gap-3 mb-5">

<div className="flex-1 h-px bg-gray-300"></div>

<span className="text-gray-500 text-sm">
OR
</span>

<div className="flex-1 h-px bg-gray-300"></div>

</div>


{/* SOCIAL LOGIN */}

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


{/* SIGNUP LINK */}

<p className="text-center text-sm">
  Don’t have an account?

  <Link
    to="/signup"
    className="text-blue-600 ml-1 hover:underline"
  >
    Create account
  </Link>
</p>

</div>

</div>

</div>

)
}