export const AddToCartButton = ({
  numberOfCakes,
  setOrder,
  cakeId,
  cakeName,
  cakePrice,
}) => {
  const addNewCake = () => {
    setOrder((order) => {
      return [
        ...order,
        { id: cakeId, quantity: 1, name: cakeName, price: cakePrice },
      ];
    });
  };

  const increaseQuantity = () => {
    setOrder((order) => {
      return order.map((x) => {
        if (x.id !== cakeId) return x;
        return {
          id: cakeId,
          name: cakeName,
          quantity: x.quantity + 1,
          price: cakePrice,
        };
      });
    });
  };

  const removeCake = () => {
    setOrder((order) => {
      return order
        .map((x) => {
          if (x.id !== cakeId) return x;
          if (x.quantity === 1) return undefined;
          return {
            id: cakeId,
            name: cakeName,
            quantity: x.quantity - 1,
            price: cakePrice,
          };
        })
        .filter((x) => x !== undefined);
    });
  };

  return (
    <>
      {numberOfCakes > 0 ? (
        <div>
          <button
            id="cart-button"
            className="order-widget-info"
            onClick={removeCake}
          >
            -
          </button>
          <span className="number-of-cakes-info">{numberOfCakes}</span>
          <button
            id="cart-button"
            className="order-widget-info"
            onClick={increaseQuantity}
          >
            +
          </button>
        </div>
      ) : (
        <button
          id="cart-button"
          className="order-widget-info"
          onClick={addNewCake}
        >
          Dodaj
        </button>
      )}
    </>
  );
};
