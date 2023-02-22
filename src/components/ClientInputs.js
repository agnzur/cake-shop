export const ClientInputs = () => {
  return (
    <div className="inputs-container">
      <div className="field-container">
        <label htmlFor="name-field">Imię</label>
        <input id="name-field" className="client-data-field"></input>
      </div>
      <div className="field-container">
        <label htmlFor="last-name-field">Nazwisko</label>
        <input id="last-name-field" className="client-data-field"></input>
      </div>
      <div className="field-container">
        <label htmlFor="email-field">E-mail</label>
        <input id="email-field" className="client-data-field"></input>
      </div>
      <div className="field-container">
        <label htmlFor="date-field">Data realizacji zamówienia</label>
        <input
          id="date-field"
          type="date"
          className="client-data-field"
        ></input>
      </div>
    </div>
  );
};
