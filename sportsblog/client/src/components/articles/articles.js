import React from "react";
import Comm from "./comments.js";
import { Comment, Avatar, Form, List, Input } from "antd";
import "./articles.css";

export default function Articles(props) {
  return props.holddata ? (
    <div className="articleList">
      {props.holddata.map(index => (
        <div className="baggy" key={index.id}>
          <p>{index.title}</p>
          <p>{index.body}</p>
          <button
          type= "submit"
          deletepost = {props.deletePost}
          >Delete button
          </button>
          <Comm />
        </div>
      ))}

    </div>
  ) : (
    <div>loading</div>
  );
}
