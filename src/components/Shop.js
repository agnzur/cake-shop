import { AddToCartButon } from "./AddToCartButton";
import { useState, useEffect } from "react";
import { getAvailableCakes } from "./Api";
import { CakeGridItem } from "./CakeGridItem";

export const Shop = () => {
  const [itemsCount, setItemsCount] = useState(0);
  const [availableCakes, setAvailableCakes] = useState([]);

  useEffect(() => {
    getAvailableCakes().then((x) => {
      setAvailableCakes(x);
    });
  }, []);

  return (
    <>
      <div className="cart-container">
        <div className="icon-container">
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/shopping-cart--v1.png"
            id="cart-icon"
          />
        </div>
        <div id="cart-quantity">{itemsCount}</div>
        <div id="shop-button-container">
          <button id="shop-button" className="buttons">
            Przejdź dalej
          </button>
        </div>
      </div>
      <div className="heading">Składanie zamówienia</div>
      <AddToCartButon setItemsCount={setItemsCount} />
      <div className="grid-container">
        <div id="order-grid">
          {availableCakes.map((cake) => {
            return (
              <CakeGridItem
                cakeName={cake.name}
                key={cake.id}
                cakeImage={cake.imageUrl}
                cakePrice={cake.price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
