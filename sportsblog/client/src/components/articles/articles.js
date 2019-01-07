import React from 'react';

export default function Articles(props) {
  return (
    <div className="articleList">
    {props.holddata.map(index => (
                 <div className= "baggy" key={index}>

              <p>{index.title}</p>
              <p>{index.body}</p>

              
            </div>

          ))}

    </div>
)}
