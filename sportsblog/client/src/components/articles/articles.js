import React from 'react';
import Comm from './comments.js'
import {
  Comment, Avatar, Form, Button, List, Input,
} from 'antd';
import './articles.css';

export default function Articles(props) {
  return (
    <div className="articleList">
    {props.holddata.map(index => (
                 <div className= "baggy" key={index.id}>

              <p>{index.title}</p>
              <p>{index.body}</p>

<Comm />
            </div>

          ))}

    </div>
)}
