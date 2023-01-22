import React from "react";
// import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Hero from "./Components/Hero";
import Crousel from "./Components/Crousel";
import Portal from "./Components/Portal";
import SearchGuide from "./Components/SearchGuide";
import LocalSite from "./Components/LocalSite";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="/searchguide" element={<SearchGuide />} />
          <Route path="/localsites" element={<LocalSite />} />
        </Routes>
      </Router>
    </>
  );
}
