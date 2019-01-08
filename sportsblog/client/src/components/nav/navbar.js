import React from 'react';
import { Icon } from "antd";


export default function NavBar(props) {
  return (
    <header>
    <a><img src={ require('../media/logo.webp')} style={{ height: "150px" }} alt={'home'}  /></a>
    <Icon
      className = "profileicon"
      type="user"
      style={{ fontSize: "30px", color: "white" }}

      onClick={() => props.handleViewChange('Login')}
    />

    </header>

          )
}
// onClick={() => this.setView('mainView')}
