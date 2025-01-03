import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find(
      (user) => user.email === email && user.password === password
    );

    if (userExists) {
      localStorage.setItem("loggedInUser", JSON.stringify(userExists));
      setError("");
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      setError("Invalid email or password. Please try again.");
      toast.error("Invalid login attempt!", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex justify-center items-center min-h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] relative">
       
        <div className="relative w-full max-w-md bg-gray-900 bg-opacity-80 rounded-lg shadow-md p-8 z-10 mx-4">
          <h2 className="text-2xl font-bold text-center mb-6 text-white">
            Login
          </h2>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4 text-white">
              <label htmlFor="email" className="block text-white font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 p-2 border border-gray-300 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"/>
            </div>
            <div className="mb-4 text-white">
              <label htmlFor="password" className="block text-white font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full mt-2 p-2 border border-gray-300 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"/>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 mt-5 rounded-lg hover:bg-blue-700 transition duration-200" >
              Login
            </button>
            <p className="mt-4 text-center text-white">
              Don't have an account?{" "}
              <a href="/signup" className="text-blue-600 font-medium">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
