import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { io } from "socket.io-client";
import logo from "D:\\projects\\ChatApplication\\src\\assets\\logo1.jpg";

const Chatpage = () => {
  const socket = useRef(null);
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);
  const msgRef = useRef(null);
  const param = useParams();

  const sendMSG = () => {
    if (msgRef.current.value.trim()) {
      socket.current.emit("123", { sender: "something", msg: msgRef.current.value });
      msgRef.current.value = "";
    }
  };
  
  useEffect(() => {
    socket.current = io("http://localhost:3000");
    
    socket.current.on("123", (payload) => {
      setMessages((prevMessages) => [...prevMessages, payload]);
    });

    return () => {
      socket.current.off("123");
      socket.current.disconnect();
    };
  }, []);


  return (
    <div className='bg-gray-700'>
    <div className="navbar fixed w-full flex justify-between space-x-5 px-20 py-3 bg-white">
        <div className="left flex space-x-5">
          <div>
          <div className='font-bold font-serif px-4 bg-green-300 rounded-full'> <p>RoomID :</p></div>
          <div className='font-bold font-serif text-center'> <p>{param.roomid}</p></div>
          </div>
        </div>
        <div className='Image'>
        <img src={logo} alt="" className="w-28"/>
        </div>
        <div className="right flex space-x-2">
            <button className="signup rounded-full bg-red-500 py-1 text-white p-2 hover:bg-red-700">Exit Room</button>    
        </div>
    </div>
    <div className='outline flex justify-center align-middle h-screen pt-16'>
      <div className='my-12 bg-gray-800 w-1/2 h-auto flex flex-col rounded-md pt-5 px-4 pb-2 text-white '>
        <div className="messages overflow-auto max-h-full flex flex-col flex-grow" ref={messagesEndRef}>
            {messages.map((obj,id)=>{
              return <div key={id} > 
                  <div className='sender '> {obj.sender}</div>
                  <div className='msg mb-2 text-black bg-slate-200 w-auto rounded-xl text-wrap p-2 inline-block'><p className='break-words'>{obj.msg}</p></div>
              </div>
            })}
        </div>
        <div className="input justify-center flex py-5 bg-inherit rounded-md">
            <input type="text" name="msg" placeholder='send message' ref={msgRef} className='w-full mx-5 rounded-full p-3 h-12 items-center align-middle text-black' />
            <button  onClick={sendMSG} className='send bg-gradient-to-r from-[#fa8cff] via-[#9182ff] to-[#0476ff] px-5 py-1 cursor-pointer mr-5 rounded-full active:ring active:ring-orange-600'>Send</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Chatpage
