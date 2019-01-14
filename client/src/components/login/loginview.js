import React from "react";
import LoginForm from "./loginform.js";
import RegForm from "./regform.js";
import { Form, Icon, Input, Button, Checkbox } from "antd";
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
        handleRegisterChange={props.handleRegisterChange}
        register={props.register}
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
