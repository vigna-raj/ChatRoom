import React from 'react'
import logo from "D:\\projects\\ChatApplication\\src\\assets\\logo.jpg"
const Homepage = () => {
  return (
    <div className="container flex justify-center w-screen items-center h-screen mx-auto ">
        <div className="left mx-20  w-1/3" >
            <img src={logo} alt="" className="w-60"/>
            <p className=" mx-8 text-2xl ">Chatroom helps you connect with people for short lived conversations .</p>
        </div>
        <div className="right bg-gray-100 rounded-2xl py-2 flex flex-col items-center justify-center w-1/4 px-3 ">
            <input type="text" placeholder="Enter Name" className="rounded-md w-full border-gray-200 border-2 p-3 my-2 "/>
            <input type="text" placeholder="Enter Room Id" className=" rounded-md w-full border-gray-200 border-2 p-3 my-2" />
            <button className="bg-gradient-to-r from-[#fa8cff] via-[#9182ff] to-[#0476ff] text-white w-full rounded-full p-3 my-2 active:ring active:ring-orange-600">Join Room</button>
        
            <hr className="h-px my-2 bg-gray-300 border-0 w-full"/>
            <button className="bg-green-600 rounded-full px-5 py-2 my-4 text-white  hover:bg-green-500 active:ring active:ring-green-600">Create New Room</button>
        </div>
    </div>
  )
}

export default Homepage
