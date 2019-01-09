import React from "react";

// import { Comment, Avatar, Form, List, Input } from "antd";
import "./articles.css";

export default function Comm(props) {
return (
  <div>
  <button
  type= "submit"
  className = "butt"
  onClick = {props.createpost}
  >Add new comment
  </button>
  <input placeholder="add a comment">

  </input>
  </div>
)
}
