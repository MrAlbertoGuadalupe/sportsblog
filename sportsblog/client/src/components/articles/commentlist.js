import React from "react";

export default function CommentList(props) {
  return props.holdcommentdata ? (

    <div className="commentList">
    {props.holdcommentdata.map(index => (
                 <div className= "baggy" key={index}>

              <p>{index.title}</p>
              <p>{index.body}</p>


            </div>

          ))}

    </div>

): <div>from comment list</div>
}
