
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import { useState } from "react"
import { Route, Routes } from "react-router-dom";
import Videos from "./Pages/Videos/Videos";

const App = () => {

  const [sidebar,setSidebar] = useState(true);
  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      {/* <Home sidebar ={sidebar}/> */}
      <Routes>
        <Route path="" element={<Home sidebar={sidebar}/>}/>
        <Route path='/videos/:categoryId/:videoiId' element={<Videos/>}/>
      </Routes>

    </div>
  )
}

export default App
