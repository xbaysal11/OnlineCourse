import React, { Component } from 'react';
import { Row, Col, Icon, Menu, Button, Layout } from 'antd';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'


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
      <Bg>
        <Layout >
          <Layout.Header>
            <Row>
              <Col span={18} offset={3}>
                <Menu
                  onClick={this.handleClick}
                  selectedKeys={[this.state.current]}
                  mode="horizontal"
                  theme="dark"
                  style={{ lineHeight: '64px' }}
                >

                  <Menu.Item key="mail">
                    <NavLink to="/">  <Icon type="mail" />Navigation One  </NavLink>
                  </Menu.Item>


                  <Menu.Item key="app">
                    <NavLink to="/syllabus"><Icon type="appstore" />Navigation </NavLink>
                  </Menu.Item>

                  <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Create</span>}>
                    <MenuItemGroup title="Item 1">
                      <Menu.Item key="setting:1">Option 1</Menu.Item>
                      <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </MenuItemGroup>
                  </SubMenu>

                  <SearchItem placeholder="Search"></SearchItem>

                  <Button className={"head_btn1"}>Log in</Button>
                  <Button className={"head_btn2"}>Register</Button>

                </Menu>
              </Col>
            </Row>
          </Layout.Header>
        </Layout>
      </Bg>

    );
  }
}

export default Header;

const SearchItem = styled.input`
  background-color:#EEE;
  border: 1px solid #EEE;
  width: 15rem;
  border-radius: 5px;
  color: #222;
  height:2rem;
  &::-webkit-input-placeholder {
    padding-left:20px;
}
;`
const Bg = styled.div`
  .head_btn1{
  margin-left:6rem;
  }
  .head_btn2{
    margin-left:1rem;
  }`;