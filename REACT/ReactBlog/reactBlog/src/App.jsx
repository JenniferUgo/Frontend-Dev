// import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewBlog from "./Pages/NewBlog";

function App() {
  return (
    <div className="App-Component">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<NewBlog />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
