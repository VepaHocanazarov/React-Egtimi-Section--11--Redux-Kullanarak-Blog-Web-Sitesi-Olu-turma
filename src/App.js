import React from "react";
import Navbar from "./Component/Navbar";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Post from "./Component/Post";


function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:name" element={<Post />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
