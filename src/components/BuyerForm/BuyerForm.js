import React, { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";

const BuyerForm = ({ handleButton }) => {
  const [emailConfirmation, setEmailConfirmation] = useState(false);
  const [user, setUser] = useState({});

  const handleCompletePurchase = (e) => {
    e.preventDefault();
    handleButton(user);
  };

  const handleName = (e) => {
    const value = e.target.value;
    setUser({ ...user, name: value });
  };
  const handleTel = (e) => {
    const value = e.target.value;
    setUser({ ...user, tel: value });
  };
  const handleChangeEmail = (e) => {
    const email = document.getElementById("email").value;
    const email2 = document.getElementById("email2").value;
    if (email2 === email) {
      const value = e.target.value;
      setUser({ ...user, email: value });
      return setEmailConfirmation(true);
    }
    return setEmailConfirmation(false);
  };

  return (
    <div className="m-auto">
        <form className="flex flex-col w-80 rounded border-2 border-black p-8 m-auto">
          <label>Nombre y apellido:</label>
          <input onChange={handleName} type="text" id="name" />
          <label>Teléfono:</label>
          <input onChange={handleTel} type="tel" id="tel" />
          <label>Email:</label>
          <input onChange={handleChangeEmail} type="email" id="email" />
          <label>Confimación del Email:</label>
          <input
            autoComplete="off"
            onChange={handleChangeEmail}
            className={emailConfirmation ? "" : "text-red-400"}
            type="email"
            id="email2"
          />
          <br />
          <CustomButton
            handleButton={handleCompletePurchase}
            pmt="Finalizar compra"
            disabled={!user.name || !user.tel || !user.email}
          />
        </form>
    </div>
  );
};

export default BuyerForm;
