// import React from 'react'
import { Link } from "react-router-dom"
import { useState } from "react"
const Captainlogin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
const [CaptainData, setCaptainData] = useState('')

  

  const SubmitHandler = (e) => {
    e.preventDefault();
   setCaptainData({
     email: email,
     CaptainData,
     password
   })

    setEmail('')
    setPassword('')
  }
  return (
    <div className="p-7 flex flex-col justify-between h-screen"> 
    <div>
      <img  className="w-20 mb-2" src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
      <form onSubmit={(e)=>{
         SubmitHandler(e)
         }}>
        <h3 className="text-lg font-medium mb-2">What`s your email</h3>
        
        <input
         required 
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
        type="email" 
        placeholder="email@example.com"
        />

        <h3 className="text-lg font-medium mb-2">Enter Password</h3>

        <input
         required
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          type="password"
         placeholder="password" 
         />

        <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base">
          Login</button>
        
      </form>
      <p className="text-center">Join a fleet? <Link to='/Captain-Signup' className="text-blue-600">Register as a Captain</Link></p>
    </div>
    <div>
      <Link
      to='/login'
      className="bg-[#c25f31] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base">
        Sign in as User</Link>
    </div>
    </div>
  )
}



export default Captainlogin

