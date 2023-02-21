import { useState, useEffect } from "react";
import { getAvailableCakes } from "./Api";
import { CakeGridItem } from "./CakeGridItem";

export const Shop = () => {
  const [availableCakes, setAvailableCakes] = useState([]);
  const [order, setOrder] = useState([]);

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
          <button id="shop-button" className="buttons">
            Przejdź dalej
          </button>
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
