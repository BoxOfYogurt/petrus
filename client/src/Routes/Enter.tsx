import React, { useState } from "react";
import { Login } from "../Components/Enter_Components/Login";
import { Register } from "../Components/Enter_Components/Register";
import { EnterTypes } from "../Types/EnterTypes";

const InitValue = true;

export const Enter: React.FC = () => {
  const [registered, setRegistered] = useState(InitValue);
  return (
    <div className="enterContainer">
      <section>
        {registered ? (
          <Login setRegistered={setRegistered} />
        ) : (
          <Register setRegistered={setRegistered} />
        )}
      </section>
    </div>
  );
};
