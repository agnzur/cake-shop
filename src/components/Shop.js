export const Shop = () => {
  return (
    <>
      <div className="cart-container">
        <div className="icon-container">
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/shopping-cart--v1.png"
            id="cart-icon"
          />
        </div>
        <div id="cart-info">0</div>
        <div id="shop-button-container">
          <button id="shop-button" className="buttons">
            Przejdź dalej
          </button>
        </div>
      </div>

      <div className="grid-container">
        <div className="heading">Składanie zamówienia</div>
      </div>
    </>
  );
};
