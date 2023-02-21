import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Topbar } from "./components/Topbar";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { Shop } from "./components/Shop";
import { ZmienionyArr } from "./ZmienionyArr";

function App() {
  return (
    <>
      <Topbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />

          <Route path="/summary" />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
