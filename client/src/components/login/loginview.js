import React from "react";
import LoginForm from "./loginform.js";
import RegForm from "./regform.js";
import "./login.css";

export default function LoginView(props) {
  return (
    <div>
      <LoginForm
        handleLogin={props.handleLogin}
        handleChange={props.handleChange}
        login={props.login}
      />
      <RegForm
        userSubmitted={props.userSubmitted}
        registerUser={props.registerUser}
        typingRegister={props.typingRegister}
      />
    </div>
  );
}
// handleViewChange={this.setView}
// handleChange={this.handleChange}
//   handleRegisterChange={this.handleRegisterChange}
//   handleLogin={this.handleLogin}
//   login={this.state.login}
//   register={this.state.register}