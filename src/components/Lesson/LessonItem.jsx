import React, { Component } from "react";
import PT from "prop-types";
import styled from "styled-components";
import { Progress } from "antd";

import { colors } from "../../config";

class LessonItem extends Component {
    static propTypes = {
        lesson: PT.object.isRequired,
        background: PT.string
    };

    render() {
        const { progress, available, title } = this.props.lesson;
        return (
            <LessonList>
                <LessonTitle background={this.props.background} href="/">
                    {available === true ? (
                        <>
                            <Dote />

                            <>
                                {title}
                                <br />
                                <div style={{ width: 140 }}>
                                    <Progress
                                        percent={progress * 100}
                                        size="small"
                                        showInfo={false}
                                    />
                                </div>
                            </>
                        </>
                    ) : (
                        <Disabled>{title}</Disabled>
                    )}
                </LessonTitle>
            </LessonList>
        );
    }
}
export default LessonItem;

const Disabled = styled.div`
    color: gray;
    cursor: not-allowed;
`;

const Dote = styled.span`
    left: 1.5rem;
    display: block;
    font-weight: normal;
    height: 8px;
    position: absolute;
    width: 8px;
    top: 1.3em;
    z-index: -1;
    background: rgb(255, 255, 255);
    border-width: 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.07);
    border-image: initial;
    border-radius: 100%;
`;

const LessonList = styled.li`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    &::before {
        content: "";
        bottom: 0px;
        top: auto;
        height: 1px;
        position: absolute;
        right: 0px;
        left: 3rem;
        background: transparent;
    }
`;
const LessonTitle = styled.a`
    font-size: 0.9em;
    background: ${props => props.background};
    color: rgba(0, 0, 0, 0.84);
    font-weight: normal;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    padding-right: 1rem;
    min-height: 2.5rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    position: relative;
    z-index: 1;
    width: 100%;
    padding-left: 3rem;
    &:hover {
        color: ${colors.blue};
        background: rgba(241, 222, 250, 0.275);
    }
    &:hover::before {
        transform: scale(1);
        background: ${colors.blue};
    }
    &::before {
        content: "";
        transform: scale(0.1);
        border-radius: 100%;
        left: calc(1.5rem);
        top: 1.3em;
        height: 8px;
        position: absolute;
        width: 8px;
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    }
    &::after {
        content: "";
        opacity: 0;
        transform: translateX(-92px);
        width: 0px;
        background: ${colors.blue};
        border-radius: 4px;
        left: calc(1.5rem);
        top: 1.3em;
        height: 8px;
        position: absolute;
        width: 8px;
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    }
`;
