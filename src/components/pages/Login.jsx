import React from 'react'

const Login = () => {
  return (
    <>
      <div className="signup w-[100%] min-h-screen absolute bg-[#fce3fe] p-[60px]">
        <div className="container w-[600px] h-[510px] bg-white m-auto py-10 px-16">
          <h1 className='m-4 mx-[155px] font-bold text-4xl'>Sign Up</h1>
          <div className="fields flex flex-col gap-8">
            <input className='border border-black rounded-2xl h-8' type="text" placeholder='  Enter Username' />
            <input className='border border-black rounded-2xl h-8' type="email" placeholder='  Enter Email' />
            <input className='border border-black rounded-2xl h-8' type="password" placeholder='  Enter Password' />
          </div>
          <button className=' w-[340px] h-[32px]  m-8 mx-14 border border-black rounded-full bg-pink-400 hover:bg-pink-500 transition ease-in-out duration-300 transform hover:scale-105'>Continue</button>
          <p className="login text-md font-medium">Already have an account? <span className='text-[#ff4141] font-semibold'>Login here</span></p>
          <div className="terms-conditions flex gap-4 mt-8 text-sm">
            <input type="checkbox" name="" id="" />
            <p>By continuing,I agree to the terms of use & privacy policy.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login