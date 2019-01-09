import React from "react";
// import { Form, Icon, Input, Button, Checkbox } from "antd";

export default function EditArticle(props) {

  return (
    <div>
      <form className="login-form" onSubmit={(e) => {
          e.preventDefault();
          props.editPost(props.article.id);
        }}>
        <input
          prefix={<icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Title"
          onChange={props.handleEditChange}
          butt = {props.currentEditId}
          value={props.editTitle}
          name="title"
          id={props.article.id}

        />

        <input
          prefix={<icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Body"
          value={props.editBody}
          onChange={props.handleEditChange}
          name="body"
        />

        <button type="submit" className="login-form-button"
          val ={props.val}
          >
          Edit article
        </button>
      </form>
    </div>
  );
}

// value={props.login.email}
// Or <a href="">register now!</a>
