export const OrderConfirmation = (): React.ReactElement => {
  function getOrderNumber() {
    const queryString: string = window.location.search;
    const url = new URLSearchParams(queryString);
    const orderNumber = url.get("orderNumber");
    if (orderNumber === null) throw new Error("Error! No order number!");
    return orderNumber;
  }

  return (
    <div className="heading-container">
      <div id="confirmation-heading">
        Dziękujemy za złożenie zamówienia!
        <div id="order-number">
          Twój numer zamówienia to: {getOrderNumber()}
        </div>
      </div>
    </div>
  );
};
