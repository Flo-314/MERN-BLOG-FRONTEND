import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={""} path="/" />
        <Route element={""} path="/shop" />
        <Route element={""} path="/shop/:id" />
        <Route element={""} path="/shop/checkout" />
        <Route element={""} path="/about" />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
