import React, { PureComponent } from "react";
import PT from "prop-types";
import styled from "styled-components";
import { createBreakpoints } from "styled-breakpoints";

class Container extends PureComponent {
    static propTypes = {
        children: PT.any
    };

    render() {
        const { children } = this.props;
        return <ContainerBlock>{children}</ContainerBlock>;
    }
}

const { above } = createBreakpoints({
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px"
});

const ContainerBlock = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    ${above("sm")} {
        max-width: 540px;
    }
    ${above("md")} {
        max-width: 720px;
    }
    ${above("lg")} {
        max-width: 960px;
    }
    ${above("xl")} {
        max-width: 1140px;
    }
`;

export default Container;
