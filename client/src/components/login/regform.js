import React from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import "./form.css";

function RegisterForm(props) {
  return (
    <Form className="login-form" onSubmit={props.registerUser}>
      <h2>Register</h2>

      <Input
        placeholder="Username"
        name="email"
        autocomplete="email"
        value={props.email}
        onChange={props.typingRegister}
      />
      <br />

      <Input
        placeholder="Password"
        name="password"
        autocomplete="password"
        value={props.password}
        onChange={props.typingRegister}
      />

    <Input
        type="password"
        autocomplete="password"
        placeholder="Enter Password Again"
        name="password_confirmation"
        value={props.password_confirmation}
        onChange={props.typingRegister}
      />
    <Button type="primary" htmlType="submit" className="login-form-button">
        Register
      </Button>
    </Form>
  );
}

export default RegisterForm;
