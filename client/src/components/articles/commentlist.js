import React from "react";

export default function CommentList(props) {
  return props.holdcommentdata ? (

    <div className="commentList">
    {props.holdcommentdata.map(index => (
                 <div className= "baggy" key={index}>
                   {console.log(index)}

              <h4>{index.commentbody}</h4>


            </div>

          ))}

    </div>

): <div>from comment list</div>
}
