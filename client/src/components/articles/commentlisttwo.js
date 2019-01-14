import {
  Comment, Icon, Tooltip, Avatar,
} from 'antd';
import moment from 'moment';
import React from "react";

export default function CommentListTwo(props) {
  return props.holdcommentdata ? (
    <div className="commentList">
    {props.holdcommentdata.map(index => (
      <div>
        {console.log(index)}
      <Comment
        author={<a>{index.email}</a>}
        avatar={(
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="user name"
          />
        )}
        content={(
          <p>{index.commentbody}</p>
        )}
        datetime={(
          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        )}
      />
  </div>
))}
</div>
  ): <div>from comment list</div>

}
