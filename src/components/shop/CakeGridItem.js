import { AddToCartButton } from "./AddToCartButton";

export const CakeGridItem = ({
  cakeId,
  cakeName,
  cakeImage,
  cakePrice,
  setOrder,
  order,
}) => {
  return (
    <div className="order-widget">
      <img src={cakeImage} className="cake-image order-widget-info" />
      <div className="order-widget-info">{cakeName}</div>
      <div className="order-widget-info">
        Cena: <span className="cake-price">{cakePrice}</span> zł
      </div>
      <AddToCartButton
        order={order}
        setOrder={setOrder}
        cakeId={cakeId}
        cakeName={cakeName}
        cakePrice={cakePrice}
      />
    </div>
  );
};
