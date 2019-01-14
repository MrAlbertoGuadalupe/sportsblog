import React from "react";
import { Comment, Button, Avatar, Form, List, Input } from "antd";

import "./articles.css";

export default function Comm(props) {
return (
  <div>
  <Button type="primary" htmlType="submit" className="login-form-button"

  className = "butt"
  onClick = {props.createComment}
  >Add new comment
</Button>
  <Input placeholder="add a comment">

  </Input>
  </div>
)
}
