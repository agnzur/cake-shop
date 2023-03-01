import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Topbar } from "./components/Topbar";
import { Home } from "./components/home/Home";
import { Footer } from "./components/Footer";
import { Shop } from "./components/shop/Shop";
import { Summary } from "./components/summary/Summary";
import { OrderConfirmation } from "./components/orderConfirmation/OrderConfirmation";

function App() {
  return (
    <>
      <Topbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/confirmation" element={<OrderConfirmation />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
