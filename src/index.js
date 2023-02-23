import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./components/home/home.css";
import "./components/shop/shop.css";
import "./components/summary/summary.css";
import "./components/orderConfirmation/orderConfirmation.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
