import React from "react";
import { EnterTypes } from "../../Types/EnterTypes";
import { useForm } from "../../Hooks/useForm";

export const Login: React.FC<EnterTypes> = ({ setRegistered }) => {
  const { formData, formDispatch } = useForm({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="entry-form-header">
        <h1>Sign In</h1>
      </div>
      <form className="entry-form" onSubmit={handleSubmit}>
        <section className="entry-form-section">
          <div className="entry-form-item">
            <input
              name="username"
              className="entry-form-input"
              type="text"
              placeholder="Username"
              onChange={formDispatch}
              value={username}
            />
          </div>
        </section>
        <section className="entry-form-section">
          <div className="entry-form-item">
            <input
              name="password"
              className="entry-form-input"
              type="password"
              placeholder="Password"
              onChange={formDispatch}
              value={password}
            />
          </div>
        </section>
        <section className="entry-form-section"></section>
        <section className="entry-form-section"></section>
      </form>
    </>
  );
};
