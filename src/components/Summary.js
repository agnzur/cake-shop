import { ClientInputs } from "./ClientInputs";
import { SubmitButton } from "./SubmitButton";
import { SummaryItem } from "./SummaryItem";

export const Summary = ({ order }) => {
  console.log(order);
  const getTotalSum = () => {
    return order.map((x) => x.price * x.quantity).reduce((a, c) => a + c, 0);
  };
  return (
    <>
      <div className="heading summary-heading">Twoje zamówienie</div>

      <div id="summary-section">
        <div className="summary-details-conatiner">
          <div className="summary-details">
            {order.map((x) => (
              <SummaryItem
                key={x.id}
                quantity={x.quantity}
                name={x.name}
                price={x.price}
              />
            ))}
          </div>
        </div>
        <div className="total-sum-container">
          <div className="total-sum">
            <div>Suma</div>
            <div>{getTotalSum()} zł</div>
          </div>
        </div>
        <ClientInputs />
      </div>
      <SubmitButton />
    </>
  );
};
