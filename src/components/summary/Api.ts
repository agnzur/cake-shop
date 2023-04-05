import { OrderedCake } from "../OrderedCake";

interface placeOrderDetailsProps {
  name: string;
  lastName: string;
  email: string;
  orderDate: Date;
  order: OrderedCake[];
}

export async function placeOrderDetails({
  name,
  lastName,
  email,
  orderDate,
  order,
}: placeOrderDetailsProps) {
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
