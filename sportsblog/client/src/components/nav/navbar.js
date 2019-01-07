import React from 'react';
import { Icon } from "antd";


export default function NavBar(props) {
  return (
    <header>
    <Icon
      type="user"
      style={{ fontSize: "30px", color: "white" }}

      onClick={() => props.handleViewChange('Login')}
    />
  
    </header>

          )
}
