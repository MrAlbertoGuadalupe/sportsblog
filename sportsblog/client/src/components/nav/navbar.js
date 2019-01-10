import React from 'react';
import { Icon } from "antd";
import ReactTooltip from 'react-tooltip'
import "./navbar.css";

export default function NavBar(props) {
  return (
    <header className = "navbar">
    <a><img src={ require('../media/logo.webp')} className = "logohead"  style={{ height: "150px" }} alt={'home'}
      onClick={() => props.handleViewChange('default')} /></a>
      <Icon

        data-tip="React-tooltip"
        className = "profileicon"
        type="logout"
        style={{ fontSize: "30px", color: "white" }}

        onClick={() => props.logout()}
      />
    <a data-tip data-for="happyFace"> <Icon
      className = "profileicon"
      type="user"
      style={{ fontSize: "30px", color: "white" }}

      onClick={() => props.handleViewChange('Login')}
    /> </a>

    <ReactTooltip id='happyFace' type='error'>

    <span>You are logged in</span>
    </ReactTooltip> 

      <Icon
        className = "profileicon"
        type=""
        style={{ fontSize: "30px", color: "pink" }}

        onClick={() => props.logout()}
      />


    </header>

          )
}
