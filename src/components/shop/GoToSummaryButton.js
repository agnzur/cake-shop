import { Link } from "react-router-dom";
export const GoToSummaryButton = ({ orderQuantity }) => {
  const isButtonDisabled = orderQuantity === 0;
  return (
    <Link to="/summary?">
      {" "}
      <button
        id="go-to-summary-button"
        disabled={isButtonDisabled}
        className={
          isButtonDisabled
            ? "go-to-summary-button-disabled"
            : "go-to-summary-button-enabled"
        }
      >
        Przejdź dalej
      </button>
    </Link>
  );
};
