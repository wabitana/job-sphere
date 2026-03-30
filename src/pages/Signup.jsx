import { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaApple, FaFacebookF, FaLinkedinIn } from "react-icons/fa";





export default function Signup() {

const navigate = useNavigate();

const [form, setForm] = useState({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
});
useEffect(() => {
  const token = localStorage.getItem("token");
  if (token) {
    navigate("/dashboard");
  }
}, []);

const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = async () => {
  if (form.password !== form.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  const res = await fetch("http://localhost:5000/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  const data = await res.json();

  if (res.ok) {
    alert("Account created successfully");
    navigate("/login");
  } else {
    alert(data.msg || "Error");
  }
};

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
name="firstName"
onChange={handleChange}
className="border w-full p-3 mb-3 rounded"
placeholder="First name"
/>

<input
name="lastName"
onChange={handleChange}
className="border w-full p-3 mb-3 rounded"
placeholder="Last name"
/>

<input
name="email"
onChange={handleChange}
className="border w-full p-3 mb-3 rounded"
placeholder="Email"
/>

<input
name="password"
onChange={handleChange}
type="password"
className="border w-full p-3 mb-3 rounded"
placeholder="Password"
/>

<input
name="confirmPassword"
onChange={handleChange}
type="password"
className="border w-full p-3 mb-5 rounded"
placeholder="Confirm Password"
/>

<button 
onClick={handleSubmit}
className="bg-blue-700 text-white w-full p-3 rounded mb-5">
Create account
</button>

{/* KEEP EVERYTHING ELSE SAME */}

<div className="flex items-center gap-3 mb-5">
<div className="flex-1 h-px bg-gray-300"></div>
<span className="text-gray-500 text-sm">OR</span>
<div className="flex-1 h-px bg-gray-300"></div>
</div>

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

<p className="text-center text-sm">
  Already have an account?
  <Link to="/login" className="text-blue-600 ml-1 cursor-pointer">
    Login
  </Link>
</p>

</div>
</div>

{/* RIGHT SIDE */}
<div className="flex items-center justify-center bg-gray-50">
<img src="/signup-illustration.png" alt="signup" className="w-3/4"/>
</div>

</div>
)
}