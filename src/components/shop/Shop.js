import { useState, useEffect } from "react";
import { getAvailableCakes } from "../Api";
import { CakeGridItem } from "./CakeGridItem";
import { GoToSummaryButton } from "./GoToSummaryButton";

export const Shop = () => {
  const [availableCakes, setAvailableCakes] = useState([]);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    getAvailableCakes().then((x) => {
      setAvailableCakes(x);
    });
  }, []);

  useEffect(() => {
    const orderFromSessionStorage = JSON.parse(sessionStorage.getItem("order"));
    if (orderFromSessionStorage !== null) setOrder(orderFromSessionStorage);
  }, []);

  const orderQuantity = order.map((x) => x.quantity).reduce((a, c) => a + c, 0);

  return (
    <>
      <div className="cart-area-container">
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/shopping-cart--v1.png"
          id="cart-icon"
        />
        <div id="cart-quantity">{orderQuantity}</div>
        <GoToSummaryButton orderQuantity={orderQuantity} />
      </div>

      <div className="heading">Składanie zamówienia</div>
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
    </>
  );
};
