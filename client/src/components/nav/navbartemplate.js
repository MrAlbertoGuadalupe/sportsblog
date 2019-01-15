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
        <SubMenu title={<span className="submenu-title-wrapper"><Icon type="shopping" />Shopping</span>}>
          <MenuItemGroup title="Shopping">
            <Menu.Item key="setting:1">Tickets</Menu.Item>
            <Menu.Item key="setting:2">Amazon</Menu.Item>
            <Menu.Item key="setting:2">MLB Shop</Menu.Item>
          </MenuItemGroup>

        </SubMenu>
        <Menu.Item onClick={() => props.handleViewChange("Coming Soon")}>
        <Icon

          className = "stats"
          type="bar-chart"
          style={{ fontSize: "20px", color: "white" }}
        />Stats
        </Menu.Item>
        <Menu.Item onClick={() => props.handleViewChange("Coming Soon")} >
        <Icon
          href="mailto:yankeessportssite@gmail.com"
          className = "mailicon"
          type="mail"
          style={{ fontSize: "20px", color: "white" }}
        />Contact us
        </Menu.Item>
        <Menu.Item onClick={() => props.handleViewChange("About")}   >
        <Icon

          className = "mailicon"
          type="book"
          style={{ fontSize: "20px", color: "white" }}
        />About Us
        </Menu.Item>

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
