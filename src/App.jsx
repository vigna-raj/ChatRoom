
import Chatpage from "./components/Chatpage"
import Homepage from "./components/Homepage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage/>} />  
        <Route exact path="/chat/:roomid" element={<Chatpage/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
