import React, { Component} from "react";
import styled from "styled-components";


class WeekCounter extends Component {
    render() {
        return (
            <>
                <WeekCount>
                            <h5>WEEK</h5>
                           <h1>{this.props.children}</h1>
                </WeekCount>
            </>
        );
    }
}

export default WeekCounter;

const WeekCount = styled.div`
    h1 {
        margin-left: 17px;
        color: rgb(110, 118, 127);
    }
    h5 {
        color: rgb(110, 118, 127);
    }
`;

