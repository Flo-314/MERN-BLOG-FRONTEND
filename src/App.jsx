import {useEffect} from "react";
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
function App() {
  const fechApi = async () => {
    try {
      const link = "https://floblogapi.herokuapp.com/api/posts";
      let data = await fetch(link);

      data = await data.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fechApi();
  }, []);

  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Blog />} path="/blog" />
          <Route element={<Writers />} path="/writers" />
        </Routes>
        <Footer />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
