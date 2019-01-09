import React from "react";
import { Form, Icon, Input, Button } from "antd";
import "./form.css";

function RegisterForm(props) {
  return (
    <Form className="login-form" onSubmit={props.handleRegister}>
      <h2>Register</h2>

      <Input
        prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
        placeholder="Username"
        onChange={props.handleRegisterChange}
        name="email"
        value={props.register.email}
      />
      <br />

      <Input
        prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
        type="password"
        placeholder="Password"
        onChange={props.handleRegisterChange}
        name="password"
        value={props.register.password}
      />

      <Input
        prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
        type="password"
        placeholder="Enter Password Again"
        onChange={props.handleRegisterChange}
        name="password_confirmation"
        value={props.register.password_confirmation}
      />
      <Button type="submit" className="login-form-button">
        Register
      </Button>
    </Form>
  );
}

export default RegisterForm;
