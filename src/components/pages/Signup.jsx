import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = formData;

    if (!name || !email || !password) {
      setError("All fields are required.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find((user) => user.email === email);

    if (userExists) {
      setError("User with this email already exists.");
      toast.error("User already exists!", {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
      });
    } else {
      users.push(formData);
      localStorage.setItem("users", JSON.stringify(users));
      setError("");
      toast.success("Signup successful! Redirecting to login...", {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
      });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex justify-center items-center min-h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] relative">

        <div className="relative w-full max-w-md bg-gray-900 bg-opacity-80 rounded-lg shadow-md p-8 text-white z-10 mx-4">
          <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-2 p-2 border border-gray-300 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-white font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 p-2 border border-gray-300 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-white font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full mt-2 p-2 border border-gray-300 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 mt-5 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Sign Up
            </button>

            <p className="mt-4 text-center text-white">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 font-medium">
                Log in
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
