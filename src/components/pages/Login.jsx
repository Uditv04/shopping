import React from 'react';

const Login = () => {
  return (
    <>
      <div className="signup w-full min-h-screen flex items-center justify-center bg-[#fce3fe] p-6 sm:p-10 lg:p-[60px]">
        <div className="container w-full max-w-xs sm:max-w-md lg:max-w-lg bg-white py-8 px-6 sm:py-10 sm:px-12 lg:py-10 lg:px-16 shadow-md">
          <h1 className="text-center font-bold text-2xl sm:text-3xl lg:text-4xl mb-6 lg:mb-8">Sign Up</h1>
          <div className="fields flex flex-col gap-4 sm:gap-6 lg:gap-8">
            <input
              className="border border-black rounded-2xl h-10 px-4 text-sm sm:text-base"
              type="text"
              placeholder="Enter Username"
            />
            <input
              className="border border-black rounded-2xl h-10 px-4 text-sm sm:text-base"
              type="email"
              placeholder="Enter Email"
            />
            <input
              className="border border-black rounded-2xl h-10 px-4 text-sm sm:text-base"
              type="password"
              placeholder="Enter Password"
            />
          </div>
          <button className="w-full h-10 sm:h-12 mt-6 sm:mt-8 border border-black rounded-full bg-pink-400 hover:bg-pink-500 transition ease-in-out duration-300 transform hover:scale-105">
            Continue
          </button>
          <p className="login text-center text-sm sm:text-md font-medium mt-4 sm:mt-6">
            Already have an account? <span className="text-[#ff4141] font-semibold cursor-pointer">Login here</span>
          </p>
          <div className="terms-conditions flex items-center gap-2 sm:gap-4 mt-6 text-xs sm:text-sm">
            <input type="checkbox" />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
