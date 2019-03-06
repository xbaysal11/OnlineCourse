import React, { Component } from "react";
import styled, { css } from "styled-components";

class Admin extends Component {
    render() {
        return (
            <Personal>
                {/* <Header>
                    <img src="#" alt="" />
                    <p>email</p>
                    <div class="dropdown">
                        <button class="dropbtn">
                            <img src="#" alt="" />
                        </button>
                        <div class="dropdown-content">
                            <a href="#">About</a>
                            <a href="#">Settings</a>
                            <a href="#">Log out</a>
                        </div>
                    </div>
                </Header> */}
                <Middle>
                    <Sidebar>
                        <a href="#">link 1</a>
                        <a href="#">link 2</a>
                        <a href="#">link 3</a>
                    </Sidebar>
                    <Content>
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </Content>
                </Middle>
            </Personal>
        );
    }
}
export default Admin;

const Personal = styled.div`
    background-color: red;
`;
// const Header = styled.div`
//     display: flex;
//     justify-content: space-between;
//     background-color: green;
// `;
const Middle = styled.div`
    display: flex;
    height: 60vh;
`;
const Sidebar = styled.div`
    background-color: brown;
    display: flex;
    width: 15vw;
    text-align: center;
    a {
        margin: 10px 0;
    }
    flex-direction: column;
`;
const Content = styled.div`
    text-align: center;
    background-color: blue;
    /* display: flex; */
    width: 85vw;
    input {
        width: 50vw;
        margin: 10px 0;
    }
`;
