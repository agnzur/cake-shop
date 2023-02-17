export const AddToCartButon = ({ setItemsCount }) => {
  return (
    <button
      className="add-button"
      onClick={() => {
        setItemsCount((x) => x + 1);
      }}
    >
      Do koszyka
    </button>
  );
};
