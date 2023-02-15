import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Topbar } from "./components/Topbar";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Topbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
