import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div id="background-image">
        <div id="order-button-container">
          <Link to="/shop">
            <button id="order-button" className="buttons">
              Złóż zamówienie{" "}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
