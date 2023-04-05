import { useState, useEffect } from "react";
import { ClientInputs } from "./ClientInputs";
import { SubmitButton } from "./SubmitButton";
import { SummaryItem } from "./SummaryItem";
import { OrderedCake } from "../OrderedCake";

const getTomorrowDate = () => {
  const tomorrow = new Date();
  tomorrow.setDate(new Date().getDate() + 1);
  return tomorrow;
};

export const Summary = (): React.ReactElement => {
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [orderDate, setOrderDate] = useState<Date>(getTomorrowDate());
  const [order, setOrder] = useState<OrderedCake[]>([]);

  useEffect(() => {
    const orderString = sessionStorage.getItem("order");
    if (orderString === null) return;
    const orderFromSessionStorage = JSON.parse(orderString);
    if (orderFromSessionStorage !== null) setOrder(orderFromSessionStorage);
  }, []);

  const getTotalSum = (): number => {
    return order.map((x) => x.price * x.quantity).reduce((a, c) => a + c, 0);
  };

  return (
    <div>
      <div className="heading summary-heading">Twoje zamówienie</div>
      <div id="summary-section">
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
        <div className="total-sum-container">
          <div className="total-sum">
            <div>Suma</div>
            <div>{getTotalSum()} zł</div>
          </div>
        </div>
        <ClientInputs
          setName={setName}
          setLastName={setLastName}
          setEmail={setEmail}
          setOrderDate={setOrderDate}
          name={name}
          lastName={lastName}
          email={email}
          orderDate={orderDate}
        />
      </div>
      <SubmitButton
        name={name}
        lastName={lastName}
        email={email}
        orderDate={orderDate}
        order={order}
      />
    </div>
  );
};
