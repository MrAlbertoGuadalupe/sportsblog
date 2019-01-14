import React from 'react';
import { Menu, Icon } from 'antd';
import "./navbar.css";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default function NavBarTemplate(props) {
  return (

      <Menu

      style={{ background: "#252D39", color: "white"}}



      // onClick={this.handleClick}
      // selectedKeys={[this.state.current]}
        mode="horizontal"
      >

        <a className = "logohead" ><img src={ require('../media/logo.webp')}  style={{ height: "80px" }} alt={'home'}
          onClick={() => props.handleViewChange('default')} /></a>
          

        <Menu.Item>
        <Menu.Item onClick={() => props.handleViewChange('default')}>
         <Icon
          className = "home"
          type="home"
          style={{ fontSize: "20px", color: "white" }}



        />
        Home
        </Menu.Item>
        </Menu.Item>
        <SubMenu title={<span className="submenu-title-wrapper"><Icon type="bar-chart" />Stats</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item onClick={() => props.handleViewChange('Login')}>
         <Icon
          className = "profileicon"
          type="user"
          style={{ fontSize: "20px", color: "white" }}


        />
        Login
        </Menu.Item>
        <Menu.Item>
        <Icon

          data-tip="React-tooltip"
          className = "profileicon"
          type="logout"
          style={{ fontSize: "20px", color: "white" }}

          onClick={() => props.logout()}
        />Logout
        </Menu.Item>

      </Menu>

    )
  }
  // onClick={this.handleClick}
  // selectedKeys={[this.state.current]}
  // <a className = "profileicon" href="https://ant.design" target="_blank" rel="noopener noreferrer">Login</a>
