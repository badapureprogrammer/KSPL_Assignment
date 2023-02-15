import React from "react";
import "./App.css";

// BootStrap File Link
import "bootstrap/dist/css/bootstrap.min.css";

// Router Version == "react-router-dom": "6.4.2"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// All pages Import Below
import Navbar from "./container/components/Navbar";
import Home from "./container/components/Home";
import Testimonial from "./container/components/Testimonial";
import Features from "./container/components/Features";
import About from "./container/components/About";
import Contact from "./container/components/Contact";

function App() {
  return (
    <div className="parent">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/testimonial" element={<Testimonial />}></Route>
          <Route path="/features" element={<Features />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
