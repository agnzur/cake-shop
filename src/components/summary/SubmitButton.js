import { Link } from "react-router-dom";

export const SubmitButton = ({ name, lastName, email, orderDate }) => {
  const isButtonDisabled =
    name.length < 3 ||
    lastName.length < 3 ||
    email.length < 3 ||
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
