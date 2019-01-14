import React from "react";
import { Comment, Button, Avatar, Form, List, Input } from "antd";

export default function CreateArticle(props) {
  return (
    <div className = "createarticle">
      <Form className="createarticleForm" onSubmit={props.createPost}>
        <Input
          prefix={<icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Title"
          onChange={props.handleCreateChange}
          value={props.createtitle}
          name="title"
        />

      <Input
          prefix={<icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Body"
          value={props.createbody}
          onChange={props.handleCreateChange}
          name="body"
        />
        <Input

            placeholder="Insert Image Link"
            value={props.createimgurl}
            onChange={props.handleCreateChange}
            src={props.createimgurl}
            name="img_url"
          />

      <Button type="primary" htmlType="submit" className="login-form-button">
          create article
        </Button>
      </Form>
    </div>
  );
}
// value={props.login.email}
// Or <a href="">register now!</a>
