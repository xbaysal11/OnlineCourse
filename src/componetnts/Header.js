import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Row, Col } from 'antd';
import { Button } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class Header extends Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <div>
    <Col span={18} offset={3}>
         <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <Icon type="mail" />Navigation One
        </Menu.Item>
        <Menu.Item key="app" disabled>
          <Icon type="appstore" />Navigation Two
        </Menu.Item>
        <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Create</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
       
        <Button>Log in</Button>
      <Button>Register</Button>
      </Menu>
      
      </Col>
      </div>
    );
  }
}

export default Header;

const Button = styled.button`
  color: red;
  background-color:blue;
`;