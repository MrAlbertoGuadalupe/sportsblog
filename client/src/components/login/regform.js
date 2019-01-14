import React from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import "./form.css";

export default function RegForm(props) {
  return (
    <Form className="login-form" onSubmit={props.registerUser}>
      <h2>Register</h2>

      <Input
        placeholder="Username"
        name="email"
        autocomplete="email"
        value={props.register.email}
        onChange={props.handleRegisterChange}
      />


      <Input
        placeholder="Password"
        name="password"
        autocomplete="password"
        type="password"
        value={props.register.password}
        onChange={props.handleRegisterChange}
      />

    <Input
        placeholder="Enter Password Again"
        name="password_confirmation"
        autocomplete="password"
        type="password"
        value={props.register.password_confirmation}
        onChange={props.handleRegisterChange}
      />
    <Button type="primary" htmlType="submit" className="login-form-button">
        Register
      </Button>
    </Form>
  );
}
