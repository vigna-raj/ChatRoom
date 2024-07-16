
import Chatpage from "./components/Chatpage"
import Homepage from "./components/Homepage"
import { io } from "socket.io-client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const socket= io("http://localhost:3000");

  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage socket={socket}/>} />  
        <Route exact path="/chat/:roomid" element={<Chatpage socket={socket}/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
