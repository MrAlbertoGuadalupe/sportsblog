import React from "react";
import CreateArticle from "./createarticle.js";
import Comm from "./comments.js";
// import { Comment, Avatar, Form, List, Input } from "antd";
import "./articles.css";

export default function Articles(props) {
  return props.holddata ? (
    <div className="articleList">
      {props.holddata.map(index => (
        <div className="baggy" key={index.id}>
          <p className = "title">{index.title}</p>
          <p className = "body">{index.body}</p>
          <button
          type= "submit"
          className = "butt"
          onClick = {props.deletepost}
          >Delete button
          </button>
          <button
          type= "submit"
          className = "butt"
          onClick = {props.updatepost}
          >Edit
          </button>
          <input placeholder="edit an article">

          </input>
          

          <Comm />

        </div>
      ))}

    </div>
  ) : (
    <div>loading</div>
  );
}
