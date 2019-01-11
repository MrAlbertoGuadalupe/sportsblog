import React from "react";
import CreateArticle from "./createarticle.js";
import EditArticle from "./editarticle.js";
import Comm from "./comments.js";
import CommentList from "./commentlist.js"


import "./articles.css";

export default function Articles(props) {
  return props.holddata && props.holdcommentdata ? (
    <div className="articleList">
      {props.holddata.map(index => (
        <div className="baggy" key={index.id}>
          <h1 className="title">{index.title}</h1>
          <img className= "artpic" alt={index.img_url} src={index.img_url}/>
          <h3 className="body">{index.body}</h3>
          {props.editID === index.id ?
            <div>
              <EditArticle
                article={index}
                editPost={props.editPost}
                handleEditChange={props.handleEditChange}
                editBody={props.editBody}
                editTitle={props.editTitle}
                currentEditId={props.currentTitleEditId}
                editimgurl={props.editimgurl}
                val={index.id}
              />
</div> : (
  <div>
  <button
  type="submit"
  value={index.id}
  onClick={props.deletePost}
>
  Delete button
</button>

<button
type="submit"
value={index.id}
onClick={() => {
  props.toggleState(index.id)
}}
>
Edit button
</button>
<form onSubmit={props.createComment}>
<input
  prefix={<icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
  placeholder="comment title"
  onChange={props.handleCommentChange}
  value={props.newcommenttitle}
  name="title"
/>

<input
  prefix={<icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
  placeholder="comment body"
  value={props.newcommentbody}
  onChange={props.handleCommentChange}
  name="body"
/>
<button type="submit">
  send your comment
</button>
</form>
<CommentList
  holdcommentdata = {props.holdcommentdata}/>
</div>

)}
        </div>
      ))}
      <CreateArticle
        className= "baggy"
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
