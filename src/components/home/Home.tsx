import { Link } from "react-router-dom";

export const Home = (): React.ReactElement => {
  return (
    <div id="background-image">
      <div className="order-button-container">
        <Link to="/shop">
          <button id="order-button">Złóż zamówienie </button>
        </Link>
      </div>
    </div>
  );
};
