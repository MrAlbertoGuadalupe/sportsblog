import React from "react";


export default function EditArticle(props) {

  return (
    <div>
      <form className="login-form" onSubmit={(e) => {
          e.preventDefault();
          props.editPost(props.article.id);
        }}>
        <input

          placeholder="Title"
          onChange={props.handleEditChange}
          butt = {props.currentEditId}
          value={props.editTitle}
          name="title"
          id={props.article.id}

        />

      <input

          placeholder="Body"
          value={props.editBody}
          onChange={props.handleEditChange}
          name="body"
        />
        <input
            placeholder="Img_Url"
            onChange={props.handleEditChange}
            name="img_url"
            value={props.editimgurl}

            name="img_url"
          />

      <button type="submit"

          >
          Edit article
        </button>
      </form>
    </div>
  );
}

// value={props.login.email}
// Or <a href="">register now!</a>
