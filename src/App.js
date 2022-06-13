import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./Navigation";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Services from "./Services";
import Error from "./Error";
import Menu from "./Menu";
import Blogs from "./Blogs";
import Blog from "./Blog";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
