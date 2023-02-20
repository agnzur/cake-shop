export const CakeGridItem = ({
  cakeId,
  cakeName,
  cakeImage,
  cakePrice,
  setOrder,
}) => {
  const addNewCake = () => {
    setOrder((order) => {
      return [...order, { id: cakeId, quantity: 1 }];
    });
  };
  return (
    <div className="order-widget">
      <img src={cakeImage} className="cake-image order-widget-info" />
      <div className="order-widget-info">{cakeName}</div>
      <div className="order-widget-info">
        Cena: <span className="cake-price">{cakePrice}</span> zł
      </div>
      <button
        id="cart-button"
        className="order-widget-info"
        onClick={addNewCake}
      >
        Dodaj
      </button>
    </div>
  );
};
