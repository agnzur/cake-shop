import { Link } from "react-router-dom";

export const SubmitButton = ({ name, lastName, email, orderDate }) => {
  const isButtonDisabled = () => {
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
  };

  return (
    <div className="submit-button-container">
      <Link to="/confirmation">
        <button
          id="submit-button"
          className={isButtonDisabled() ? "submit-disabled" : "submit-enabled"}
          disabled={isButtonDisabled()}
        >
          Potwierdź
        </button>
      </Link>
    </div>
  );
};
