import React, { Component } from "react";
import { PageHeader } from "../components";
import styled from "styled-components";

class MyCourses extends Component {
    render() {
        return (
            <>
                <PageHeader background="linear-gradient(to right, #990033,#802249)">
                    <Head>
                        See the courses you can take <br/>for free
                    </Head>
                </PageHeader>
            </>
        );
    }
}

export default MyCourses;

const Head = styled.h3`
    color: #fff;
`;
