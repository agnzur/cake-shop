import ReactDOM from "react-dom/client";
import "./index.css";
import "./components/home/home.css";
import "./components/shop/shop.css";
import "./components/summary/summary.css";
import "./components/orderConfirmation/orderConfirmation.css";
import App from "./App";

const rootElement = document.getElementById("root");
if (rootElement === null) throw new Error("Root not found.");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
