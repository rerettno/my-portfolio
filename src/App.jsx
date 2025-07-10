//  import { useState } from "react";
// export default App;
import { Routes, Route } from "react-router-dom";
//import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="min-h-screen font-sans">
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
