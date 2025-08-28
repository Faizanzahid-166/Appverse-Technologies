import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";

export default function Login() {
  const { login, error } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); login(form); };

  return (
    <div class="flex flex-col items-center justify-center mt-25">

        	<div class="w-full max-w-md bg-[#ffffff] rounded-xl shadow-md py-2 px-8 ">
      <h1 class="text-green-500 text-[28px] text-center font-bold mt-3 py-6" >Login</h1>
      <form onSubmit={handleSubmit} className="grid gap-10 self-center">
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required className="w-full bg-gray-700 text-white border-0 rounded-md p-2 focus:bg-gray-600 focus:outline-none 
			              transition ease-in-out duration-150 placeholder-gray-300 "/>

        <input name="password" type="password" placeholder="Password" onChange={handleChange} required  className="w-full bg-gray-700 text-white border-0 rounded-md p-2 focus:bg-gray-600 focus:outline-none 
			              transition ease-in-out duration-150 placeholder-gray-300 "/>
        <button class=" bg-cyan-500 w-1/2 text-white border-0 rounded-md p-2 focus:bg-blue-600 focus:outline-none transition ease-in-out duration-150 ml-22 " type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>

    </div>
  );
}
