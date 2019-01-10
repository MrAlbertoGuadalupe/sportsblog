import React from "react";


export default function CreateComment(props) {
  return (
    <div>
      <Form className="login-form" onSubmit={props.createComment}>
        <Input
          prefix={<icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Title"
          onChange={props.handleCommentChange}
          value={props.ecommenttitle}
          name="title"
        />

        <Input
          prefix={<icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Body"
          value={props.ecommentbody}
          onChange={props.handleCommentChange}
          name="body"
        />

        <Button type="submit" className="login-form-button">
          create comment
        </Button>
      </Form>
    </div>
  );
}
// value={props.login.email}
// Or <a href="">register now!</a>
