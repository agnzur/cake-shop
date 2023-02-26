export const OrderConfirmation = () => {
  const queryString = window.location.search;
  console.log(queryString);
  const url = new URLSearchParams(queryString);
  const orderNumber = url.get("orderNumber");

  return (
    <div className="heading-container">
      <div id="confirmation-heading">
        Dziękujemy za złożenie zamówienia!
        <div id="order-number">Twój numer zamówienia to: {orderNumber}</div>
      </div>
    </div>
  );
};
