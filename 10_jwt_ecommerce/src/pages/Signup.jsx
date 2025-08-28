import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";

export default function Signup() {
  const { signup, error } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); signup(form); };

  return (
    <div className="flex flex-col items-center justify-center mt-20  ">

      <div className="w-full max-w-md  bg-[#ffffff] rounded-xl shadow-md py-2 px-8 ">

     	<h1 class="text-blue-500 text-[28px] text-center mt-3 py-6" >Sign Up</h1>

      <form onSubmit={handleSubmit} class="grid gap-10 self-center">
        <input name="name" placeholder="Name" onChange={handleChange} required className="w-full bg-gray-700 text-white border-0 rounded-md p-2 focus:bg-gray-600 focus:outline-none 
			              transition ease-in-out duration-150 placeholder-gray-300 "/>

        <input name="email" type="email" placeholder="Email" onChange={handleChange} required className="w-full bg-gray-700 text-white border-0 rounded-md p-2 focus:bg-gray-600 focus:outline-none 
			              transition ease-in-out duration-150 placeholder-gray-300 "/>

        <input name="password" type="password" placeholder="Password" onChange={handleChange} required  className="w-full bg-gray-700 text-white border-0 rounded-md p-2 focus:bg-gray-600 focus:outline-none 
			              transition ease-in-out duration-150 placeholder-gray-300 "/>

        <button class=" bg-cyan-500 w-1/2 text-white border-0 rounded-md p-2 focus:bg-blue-600 focus:outline-none transition ease-in-out duration-150 ml-22 " type="submit">Sign Up</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}
