export const SummaryItem = ({ quantity, name, price }) => {
  return (
    <div className="summary-item-container">
      <div className="summary-item">
        {quantity} x {name}
      </div>
      <div className="summary-item">{price * quantity} zł</div>
    </div>
  );
};
