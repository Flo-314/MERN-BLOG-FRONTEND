import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";

import "./App.css";
import theme from "../Theme";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Writers from "./components/writers/Writers";
import Home from "./components/Home/Home";
import BlogPost from "./components/blogpost/BlogPost";
function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Blog />} path="/posts" />
          <Route element={""} path="/posts/category/:id" />

          <Route element={<BlogPost />} path="/posts/:id" />

          <Route element={<Writers />} path="/writers" />
        </Routes>
        <Footer />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
