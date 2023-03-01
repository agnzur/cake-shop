export const SummaryItem = ({ quantity, name, price }) => {
  return (
    <div className="summary-item-container">
      <div>
        {quantity} x {name}
      </div>
      <div>{price * quantity} zł</div>
    </div>
  );
};
