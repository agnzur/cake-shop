import { OrderedCake } from "../OrderedCake";

interface AddToCartButtonProps {
  order: OrderedCake[];
  setOrder: (order: OrderedCake[]) => void;
  cakeId: number;
  cakeName: string;
  cakePrice: number;
}

export const AddToCartButton = ({
  order,
  setOrder,
  cakeId,
  cakeName,
  cakePrice,
}: AddToCartButtonProps): React.ReactElement => {
  const currentCake = order.find((x) => x.id === cakeId);
  const numberOfCakes = currentCake === undefined ? 0 : currentCake.quantity;

  const saveOrderInSessionStorage = (order: OrderedCake[]) => {
    sessionStorage.setItem("order", JSON.stringify(order));
  };

  const addNewCake = (): void => {
    const newOrder = [
      ...order,
      { id: cakeId, quantity: 1, name: cakeName, price: cakePrice },
    ];
    setOrder(newOrder);
    saveOrderInSessionStorage(newOrder);
  };

  const increaseQuantity = (): void => {
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

  const removeCake = (): void => {
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
