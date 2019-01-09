import React from "react";
// import { Form, Icon, Input, Button, Checkbox } from "antd";

export default function CreateArticle(props) {
  return (
    <div>
      <form className="login-form" onSubmit={props.createPost}>
        <input
          prefix={<icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Title"
          onChange={props.handleCreateChange}
          value={props.createtitle}
          name="title"
        />

        <input
          prefix={<icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Body"
          value={props.createbody}
          onChange={props.handleCreateChange}
          name="body"
        />

        <button type="submit" className="login-form-button">
          create article
        </button>
      </form>
    </div>
  );
}
// value={props.login.email}
// Or <a href="">register now!</a>
