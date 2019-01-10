import React from 'react';
import { Icon } from "antd";
import "./navbar.css";

export default function NavBar(props) {
  return (
    <header className = "navbar">
    <a><img src={ require('../media/logo.webp')} className = "logohead"  style={{ height: "150px" }} alt={'home'}
      onClick={() => props.handleViewChange('default')} /></a>
      <Icon
        className = "profileicon"
        type="logout"
        style={{ fontSize: "30px", color: "pink" }}

        onClick={() => props.logout()}
      />
    <Icon
      className = "profileicon"
      type="user"
      style={{ fontSize: "30px", color: "white" }}

      onClick={() => props.handleViewChange('Login')}
    />

    </header>

          )
}
