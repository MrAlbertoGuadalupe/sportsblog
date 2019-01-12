import React from "react";

export default function CommentList(props) {
  return props.holdcommentdata ? (

    <div className="commentList">
    {props.holdcommentdata.map(index => (
                 <div className= "baggy" key={index}>
                   {console.log(index)}
              <p>{index.commenttitle}</p>
              <p>{index.commentbody}</p>
              <p>{index.post_id}</p>

            </div>

          ))}

    </div>

): <div>from comment list</div>
}
