import React, { Component } from "react";
import MarkdownText from "../MarkdownText";
import styled from "styled-components";
import { colors } from "../../config";

const tldr_title = `
## TL;DR Title
`;
const tldr = `
**Сертификаты получают студенты набравшие 50 баллов, студенты набравшие 75 баллов и выше 
получают сертификат с отличием.** 
`;

class Tldr extends Component {
    render() {
        return (
            <TTldr>
                <MarkdownText text={tldr_title} />
                <MarkdownText text={tldr} />
            </TTldr>
        );
    }
}
export default Tldr;

const TTldr = styled.div`
    margin: 16px 0;
    padding: 16px;
    border: 1px solid ${colors.blue};
    border-radius: 6px;
    background: ${colors.blue_light};
`;
