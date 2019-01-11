import React from "react";


export default function CreateComment(props) {
  return (
    <div>
      <form className="login-form" onSubmit={props.createComment}>
        <input
          prefix={<icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Title"
          onChange={props.handleCommentChange}
          value={props.newcommenttitle}
          name="title"
        />

        <input
          prefix={<icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Body"
          value={props.newcommentbody}
          onChange={props.handleCommentChange}
          name="body"
        />

        <button type="submit" className="login-form-button">
          create comment
        </button>
      </form>
    </div>
  );
}
// value={props.login.email}
// Or <a href="">register now!</a>
