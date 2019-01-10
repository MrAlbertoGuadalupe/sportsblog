import React from "react";

import "./form.css";

function RegisterForm(props) {
  return (
    <form className="login-form" onSubmit={props.registerUser}>
      <h2>Register</h2>

      <input
        placeholder="Username"
        name="email"
        value={props.email}
        onChange={props.typingRegister}
      />
      <br />

      <input
        placeholder="Password"
        name="password"
        value={props.password}
        onChange={props.typingRegister}
      />

    <input
        type="password"
        placeholder="Enter Password Again"
        name="password_confirmation"
        value={props.password_confirmation}
        onChange={props.typingRegister}
      />
    <button type="submit" className="login-form-button">
        Register
      </button>
    </form>
  );
}

export default RegisterForm;
