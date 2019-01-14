import React from "react";
import CreateArticle from "./createarticle.js";
import CreateComment from "./createcomment.js";
import EditArticle from "./editarticle.js";
import Comm from "./comments.js";
import CommentList from "./commentlist.js"
import CommentListTwo from "./commentlisttwo";
import { Comment, Button, Avatar, Form, List, Input } from "antd";
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
              <div>
                <Form className="login-form" id={index.id} onSubmit={props.createComment}>


                <Input

                    placeholder="Tell us what you think"
                    value={props.newcommentbody}
                    onChange={props.handleCommentChange}
                    name="commentbody"
                  />

                <Button type="primary" htmlType="submit" className="login-form-Button">
                    create comment
                  </Button>
                </Form>
              </div>


</div> : (
  <div>
  <Button type="primary" htmlType="submit" className="login-form-Button"

  value={index.id}
  onClick={props.deletePost}
>
  Delete Button
</Button>

<Button type="primary" htmlType="submit" className="login-form-Button"

value={index.id}
onClick={() => {
  props.toggleState(index.id)
}}
>
Edit Button
</Button>
<Button type="primary" htmlType="submit" className="login-form-Button"

value={index.id}
onClick={() => {
  props.toggleState(index.id)
}}
>
Create Comment
</Button>
{console.log(index)}

<CommentListTwo
  holdcommentdata = {index.comments}/>


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
        createimgurl={props.createimgurl}
        src ={props.createimgurl}
      />
    </div>
  ) : (
    <div>loading</div>
  );
}

//
// <CommentList
//   holdcommentdata = {props.holdcommentdata}/>
