import { useState, useEffect } from "react";
import { ClientInputs } from "./ClientInputs";
import { SubmitButton } from "./SubmitButton";
import { SummaryItem } from "./SummaryItem";

const getTomorrowDate = () => {
  const tomorrow = new Date();
  tomorrow.setDate(new Date().getDate() + 1);
  return tomorrow;
};

export const Summary = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [orderDate, setOrderDate] = useState(getTomorrowDate());
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const orderFromSessionStorage = JSON.parse(sessionStorage.getItem("order"));
    if (orderFromSessionStorage !== null) setOrder(orderFromSessionStorage);
  }, []);

  const getTotalSum = () => {
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
