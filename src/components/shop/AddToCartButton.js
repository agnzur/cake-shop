export const AddToCartButton = ({
  order,
  setOrder,
  cakeId,
  cakeName,
  cakePrice,
}) => {
  const currentCake = order.find((x) => x.id === cakeId);
  const numberOfCakes = currentCake === undefined ? 0 : currentCake.quantity;

  const saveOrderInSessionStorage = (order) => {
    sessionStorage.setItem("order", JSON.stringify(order));
  };

  const addNewCake = () => {
    const newOrder = [
      ...order,
      { id: cakeId, quantity: 1, name: cakeName, price: cakePrice },
    ];
    setOrder(newOrder);
    saveOrderInSessionStorage(newOrder);
  };

  const increaseQuantity = () => {
    const newOrder = order.map((x) => {
      if (x.id !== cakeId) return x;
      return {
        id: cakeId,
        name: cakeName,
        quantity: x.quantity + 1,
        price: cakePrice,
      };
    });

    setOrder(newOrder);
    saveOrderInSessionStorage(newOrder);
  };

  const removeCake = () => {
    const newOrder = order
      .map((x) => {
        if (x.id !== cakeId) return x;
        return {
          id: cakeId,
          name: cakeName,
          quantity: x.quantity - 1,
          price: cakePrice,
        };
      })
      .filter((x) => x.quantity > 0);

    setOrder(newOrder);
    saveOrderInSessionStorage(newOrder);
  };

  return (
    <div>
      {numberOfCakes > 0 ? (
        <div>
          <button
            className="order-widget-info add-to-cart-button"
            onClick={removeCake}
          >
            -
          </button>
          <span className="number-of-cakes-info">{numberOfCakes}</span>
          <button
            className="order-widget-info add-to-cart-button"
            onClick={increaseQuantity}
          >
            +
          </button>
        </div>
      ) : (
        <button
          className="order-widget-info add-to-cart-button"
          onClick={addNewCake}
        >
          Dodaj
        </button>
      )}
    </div>
  );
};
