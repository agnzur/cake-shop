import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAvailableCakes } from "./Api";
import { CakeGridItem } from "./CakeGridItem";

export const Shop = ({ order, setOrder }) => {
  const [availableCakes, setAvailableCakes] = useState([]);

  useEffect(() => {
    getAvailableCakes().then((x) => {
      setAvailableCakes(x);
    });
  }, []);

  const orderQuantity = order.map((x) => x.quantity).reduce((a, c) => a + c, 0);

  return (
    <>
      <div className="cart-container">
        <div className="icon-container">
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/shopping-cart--v1.png"
            id="cart-icon"
          />
        </div>
        <div id="cart-quantity">{orderQuantity}</div>
        <div id="shop-button-container">
          <Link to="/summary?">
            {" "}
            <button id="shop-button">Przejdź dalej</button>
          </Link>
        </div>
      </div>
      <div className="heading">Składanie zamówienia</div>

      <div className="grid-container">
        <div id="order-grid">
          {availableCakes.map((cake) => {
            return (
              <CakeGridItem
                cakeId={cake.id}
                cakeName={cake.name}
                key={cake.id}
                cakeImage={cake.imageUrl}
                cakePrice={cake.price}
                setOrder={setOrder}
                order={order}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
