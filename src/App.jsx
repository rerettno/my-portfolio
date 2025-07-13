//  import { useState } from "react";
// export default App;
import { Routes, Route } from "react-router-dom";
//import Navbar from "./components/navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

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
