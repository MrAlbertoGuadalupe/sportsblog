import React from "react";
import CreateArticle from "./createarticle.js";
import EditArticle from "./editarticle.js";
import Comm from "./comments.js";
// import { Comment, Avatar, Form, List, Input } from "antd";
import "./articles.css";

export default function Articles(props) {
  return props.holddata ? (
    <div className="articleList">
      {props.holddata.map(index => (
        <div className="baggy" key={index.id}>
          <h2 className="title">{index.title}</h2>
          <p className="body">{index.body}</p>
          {props.editID === index.id ?
            <div>
              <EditArticle
                article={index}
                editPost={props.editPost}
                handleEditChange={props.handleEditChange}
                editBody={props.editBody}
                editTitle={props.editTitle}
                currentEditId={props.currentTitleEditId}
                val={index.id}
              />
</div> : (
  <div>
  <button
  type="submit"
  className="butt"
  value={index.id}
  onClick={props.deletePost}
>
  Delete button
</button>

<button
type="submit"
className="butt"
value={index.id}
onClick={() => {
  props.toggleState(index.id)
}}
>
Edit button
</button>
</div>

)}
        </div>
      ))}
      <CreateArticle
        deletePost={props.deletePost}
        handleCreateChange={props.handleCreateChange}
        createtitle={props.createtitle}
        createbody={props.createbody}
        createPost={props.createPost}
      />
    </div>
  ) : (
    <div>loading</div>
  );
}
