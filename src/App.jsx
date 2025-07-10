//  import { useState } from "react";
// export default App;
import { Routes, Route } from "react-router-dom";
//import Navbar from "./components/navbar";
import Home from "./pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="min-h-screen font-sans">
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
