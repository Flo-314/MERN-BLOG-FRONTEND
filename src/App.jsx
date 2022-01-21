import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Writers from "./components/writers/Writers";
import Home from "./components/Home/Home";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Blog />} path="/blog" />
        <Route element={<Writers />} path="/writers" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
