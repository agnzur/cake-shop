import { Link } from "react-router-dom";

export const SubmitButton = ({ name, lastName, email, orderDate }) => {
  const numRegex = new RegExp("[0-9]");
  const isButtonDisabled =
    name.length < 3 ||
    numRegex.test(name) ||
    numRegex.test(lastName) ||
    lastName.length < 3 ||
    email.length < 3 ||
    !email.includes("@") ||
    orderDate < new Date();

  return (
    <div className="submit-button-container">
      <Link to="/confirmation">
        <button
          id="submit-button"
          className={isButtonDisabled ? "submit-disabled" : "submit-enabled"}
          disabled={isButtonDisabled}
        >
          Potwierdź
        </button>
      </Link>
    </div>
  );
};
