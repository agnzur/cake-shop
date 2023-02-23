export const ClientInputs = ({
  setName,
  setLastName,
  setEmail,
  setOrderDate,
  name,
  lastName,
  email,
  orderDate,
}) => {
  const orderDateString = orderDate.toISOString().split("T")[0];
  const orderDateChanged = (e) => {
    const stringDate = e.target.value;
    const date = new Date(stringDate);
    setOrderDate(date);
  };

  return (
    <div className="inputs-container">
      <div className="field-container">
        <label htmlFor="name-field">Imię</label>
        <input
          id="name-field"
          className="client-data-field"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>
      </div>
      <div className="field-container">
        <label htmlFor="last-name-field">Nazwisko</label>
        <input
          id="last-name-field"
          className="client-data-field"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        ></input>
      </div>
      <div className="field-container">
        <label htmlFor="email-field">E-mail</label>
        <input
          id="email-field"
          className="client-data-field"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>
      </div>
      <div className="field-container">
        <label htmlFor="date-field">Data realizacji zamówienia</label>
        <input
          id="date-field"
          type="date"
          className="client-data-field"
          onChange={orderDateChanged}
          value={orderDateString}
        ></input>
      </div>
    </div>
  );
};
