import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Topbar } from "./components/Topbar";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { Shop } from "./components/Shop";
import { Summary } from "./components/Summary";

function App() {
  const [order, setOrder] = useState([]);
  return (
    <>
      <Topbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={<Shop order={order} setOrder={setOrder} />}
          />
          <Route path="/summary" element={<Summary order={order} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
