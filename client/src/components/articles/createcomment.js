import React from "react";
import { Comment, Button, Avatar, Form, List, Input } from "antd";

export default function CreateComment(props) {
  return (
    <div>
      <Form className="login-form" onSubmit={props.createComment}>
        

      <Input
          prefix={<icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Body"
          value={props.newcommentbody}
          onChange={props.handleCommentChange}
          name="body"
        />

      <Button type="primary" htmlType="submit" className="login-form-button">
          create comment
        </Button>
      </Form>
    </div>
  );
}
// value={props.login.email}
// Or <a href="">register now!</a>
