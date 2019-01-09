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
          <button
            type="submit"
            className="butt"
            value={index.id}
            onClick={props.deletePost}
          >
            Delete button
          </button>
          <EditArticle
            article={index}
            editPost={props.editPost}
            handleEditChange={props.handleEditChange}
            editTody={props.editBody}
            editTitle={props.editTitle}
          
          />
          <Comm />
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
