import React from "react";
import { Comment, Button, Avatar, Form, List, Input } from "antd";

export default function EditArticle(props) {

  return (
    <div>
      <Form className="login-form" onSubmit={(e) => {
          e.preventDefault();
          props.editPost(props.article.id);
        }}>
        <Input

          placeholder="Title"
          onChange={props.handleEditChange}
          butt = {props.currentEditId}
          value={props.editTitle}
          name="title"
          id={props.article.id}

        />

      <Input

          placeholder="Body"
          value={props.editBody}
          onChange={props.handleEditChange}
          name="body"
        />
      <Input
            placeholder="Enter Img Url"
            onChange={props.handleEditChange}
            name="img_url"
            value={props.editimgurl}

            name="img_url"
          />

        <Button type="primary" htmlType="submit" className="login-form-button">


          Edit article
        </Button>
      </Form>
    </div>
  );
}

// value={props.login.email}
// Or <a href="">register now!</a>
