import React, { useRef } from 'react'
import logo from "../assets/logo.jpg"
import data from "../../rooms.json"
import { useNavigate } from 'react-router-dom'
const Homepage = ({socket}) => {
  const roomid=useRef(null);
  const navigate=useNavigate();
  const name=useRef(null);
  const createRoom=async ()=>{
    
    while(true){
      const id=Math.floor(Math.random()*9000)+1000;
      if(data.roomids.find((rooms)=>{return rooms==id})) continue;
      roomid.current.value=id;
      socket.emit("createroom",{id});
      break;
    }
  }
  const joinRoom=()=>{
    if(!data.roomids.find((rooms)=>{return rooms==roomid.current.value})){
      alert("Room not found");
      roomid.current.value="";
    }
    else if(name.current.value==""){
      alert("Enter Name");
    }
    else{
      socket.emit("joinRoom",{room:roomid.current.value});
      navigate(`chat/${roomid.current.value}/${name.current.value}`);
    }
  }
  return (
    <div className="container flex justify-center w-screen items-center h-screen mx-auto ">
        <div className="left mx-20  w-1/3" >
            <img src={logo} alt="" className="w-60"/>
            <p className=" mx-8 text-2xl ">Chatroom helps you connect with people for short lived conversations .</p>
        </div>
        <div className="right bg-gray-100 rounded-2xl py-2 flex flex-col items-center justify-center w-1/4 px-3 ">
            <input type="text" placeholder="Enter Name" className="rounded-md w-full border-gray-200 border-2 p-3 my-2 " ref={name}/>
            <input type="text" placeholder="Enter Room Id" className=" rounded-md w-full border-gray-200 border-2 p-3 my-2" ref={roomid} />
            <button onClick={joinRoom}className="bg-gradient-to-r from-[#fa8cff] via-[#9182ff] to-[#0476ff] text-white w-full rounded-full p-3 my-2 active:ring active:ring-orange-600">Join Room</button>
        
            <hr className="h-px my-2 bg-gray-300 border-0 w-full"/>
            <button onClick={createRoom}className="bg-green-600 rounded-full px-5 py-2 my-4 text-white  hover:bg-green-500 active:ring active:ring-green-600">Create New Room</button>
        </div>
    </div>
  )
}

export default Homepage
