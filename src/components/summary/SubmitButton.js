import { Link } from "react-router-dom";

export const SubmitButton = ({ name, lastName, email, orderDate }) => {
  const numRegex = new RegExp("[0-9]");
  const charactersRegex = new RegExp("^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$");
  const isButtonDisabled =
    name.length < 3 ||
    numRegex.test(name) ||
    !charactersRegex.test(name) ||
    lastName.length < 3 ||
    numRegex.test(lastName) ||
    !charactersRegex.test(lastName) ||
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
