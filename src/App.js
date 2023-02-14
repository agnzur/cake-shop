import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Topbar } from "./components/Topbar";
import { Home } from "./components/Home";

function App() {
  return (
    <>
      <Topbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
