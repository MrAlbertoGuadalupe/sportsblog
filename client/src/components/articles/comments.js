import React from "react";


import "./articles.css";

export default function Comm(props) {
return (
  <div>
  <button
  type= "submit"
  className = "butt"
  onClick = {props.createComment}
  >Add new comment
</button>
  <input placeholder="add a comment">

  </input>
  </div>
)
}
