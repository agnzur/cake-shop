export async function placeOrderDetails(
  name,
  lastName,
  email,
  orderDate,
  order
) {
  console.log("Dane klienta:");
  console.log({
    name: name,
    lastName: lastName,
    email: email,
    orderDate: orderDate,
  });
  console.log("Szczegóły zamówienia:");
  console.log(order);
  return "ab120";
}
