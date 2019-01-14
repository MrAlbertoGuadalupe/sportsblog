import React from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import "./form.css";

export default function LoginForm(props) {
  return (
    <div>
      <Form className="login-form" onSubmit={props.handleLogin}>
        <h2>Login</h2>

        <Input
          prefix={<icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Username"
          onChange={props.handleChange}
          value={props.login.email}
          name="email"
          autocomplete="email"
        />

      <Input
          prefix={<icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          placeholder="Password"
          autocomplete="password"
          onChange={props.handleChange}
          name="password"
          value={props.login.password}
        />

      <Button type="primary" htmlType="submit" className="login-form-button">
          Login
        </Button>
      </Form>
    </div>
  );
}
// value={props.login.email}
// Or <a href="">register now!</a>
