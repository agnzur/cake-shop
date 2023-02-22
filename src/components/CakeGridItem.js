import { AddToCartButton } from "./AddToCartButton";

export const CakeGridItem = ({
  cakeId,
  cakeName,
  cakeImage,
  cakePrice,
  setOrder,
  order,
}) => {
  //todo: czy da sie to zapisac latwiej? chyba z pytajnikiem jakos -- max 5 minut

  const cakeInOrder = order.find((x) => x.id === cakeId);
  const numberOfCakes = cakeInOrder === undefined ? 0 : cakeInOrder.quantity;

  return (
    <div className="order-widget">
      <img src={cakeImage} className="cake-image order-widget-info" />
      <div className="order-widget-info">{cakeName}</div>
      <div className="order-widget-info">
        Cena: <span className="cake-price">{cakePrice}</span> zł
      </div>
      <AddToCartButton
        numberOfCakes={numberOfCakes}
        setOrder={setOrder}
        cakeId={cakeId}
        cakeName={cakeName}
        cakePrice={cakePrice}
      />
    </div>
  );
};
