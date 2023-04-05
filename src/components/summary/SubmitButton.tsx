import { useNavigate } from "react-router-dom";
import { placeOrderDetails } from "./Api";
import { OrderedCake } from "../OrderedCake";

interface SubmitButtonProps {
  name: string;
  lastName: string;
  email: string;
  orderDate: Date;
  order: OrderedCake[];
}

export const SubmitButton = ({
  name,
  lastName,
  email,
  orderDate,
  order,
}: SubmitButtonProps): React.ReactElement => {
  const navigate = useNavigate();

  const isButtonDisabled = (): boolean => {
    const numRegex = new RegExp("[0-9]");
    const charactersRegex = new RegExp("^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$");
    if (name.length < 3) return true;
    if (numRegex.test(name)) return true;
    if (!charactersRegex.test(name)) return true;
    if (lastName.length < 3) return true;
    if (numRegex.test(lastName)) return true;
    if (!charactersRegex.test(lastName)) return true;
    if (email.length < 3) return true;
    if (!email.includes("@")) return true;
    if (orderDate < new Date()) return true;
    return false;
  };

  const onSubmitClicked = async (): Promise<void> => {
    const orderNumber = await placeOrderDetails({
      name,
      lastName,
      email,
      orderDate,
      order,
    });

    navigate("/confirmation?orderNumber=" + orderNumber);
  };

  return (
    <div className="submit-button-container">
      <button
        id="submit-button"
        className={isButtonDisabled() ? "submit-disabled" : "submit-enabled"}
        disabled={isButtonDisabled()}
        onClick={onSubmitClicked}
      >
        Potwierdź
      </button>
    </div>
  );
};
