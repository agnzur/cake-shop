interface SummaryItemProps {
  quantity: number;
  name: string;
  price: number;
}

export const SummaryItem = ({
  quantity,
  name,
  price,
}: SummaryItemProps): React.ReactElement => {
  return (
    <div className="summary-item-container">
      <div>
        {quantity} x {name}
      </div>
      <div>{price * quantity} zł</div>
    </div>
  );
};
