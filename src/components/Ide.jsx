import React, { Component } from "react";
import SplitPane from "react-split-pane";
import styled from "styled-components";
import { Button as BTN } from "antd";

import CodeEditor from "./CodeEditor";
import Console from "./Console";

class Ide extends Component {
    render() {
        return (
            <Wrapper>
                <IdeWrapper>
                    <SplitPane
                        split="vertical"
                        minSize={50}
                        defaultSize={"60%"}
                    >
                        <CodeEditor />
                        <Console />
                    </SplitPane>
                </IdeWrapper>
                <Button>Run!</Button>
            </Wrapper>
        );
    }
}
export default Ide;

const IdeWrapper = styled.div`
    margin: 1em;
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
const Wrapper = styled.div``;
const Button = styled(BTN)`
    position: absolute;
    top: 0;
    right: 0;
`;
