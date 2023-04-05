import { OrderedCake } from "../OrderedCake";
import { AddToCartButton } from "./AddToCartButton";

interface CakeGridItemProps {
  cakeId: number;
  cakeName: string;
  cakeImage: string;
  cakePrice: number;
  setOrder: (order: OrderedCake[]) => void;
  order: OrderedCake[];
}

export const CakeGridItem = ({
  cakeId,
  cakeName,
  cakeImage,
  cakePrice,
  setOrder,
  order,
}: CakeGridItemProps): React.ReactElement => {
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
