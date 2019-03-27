import React, { Component } from "react";
import SplitPane from "react-split-pane";
import styled from "styled-components";

import CodeEditor from "./CodeEditor";
//import Console from "./Console";

class Ide extends Component {
    render() {
        return (
            <Wrapper>
                <SplitPane split="vertical" minSize={50} defaultSize={"70%"}>
                    <CodeEditor />
                    <CodeEditor />
                </SplitPane>
            </Wrapper>
        );
    }
}
export default Ide;

const Wrapper = styled.div`
    width: 100%;
    height: 450px;
    position: relative;
    & .Resizer.vertical {
        position: relative;
        display: block;
        min-width: 10px;
        cursor: col-resize;
        &:after {
            content: "";
            width: 2px;
            height: 20px;
            background: #ccc;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
        }
    }
`;
