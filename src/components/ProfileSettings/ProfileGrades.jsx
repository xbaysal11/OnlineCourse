import React, { Component } from "react";

import styled from "styled-components";
import Table from "fast-table";
const columns = [
    {
        title: "0",
        align: "left",
        dataIndex: "key",
        // sortEnable: true,
        order: true,
        fixed: "left",
        width: 100,
        render: text => <span>{text}</span>,
        onCell: () => ({ color: "#F9C152" })
    },
    {
        title: "1",
        dataIndex: "key0",
        width: 100,
        fixed: "left",
        sortEnable: true
    },
    {
        title: "2",
        dataIndex: "key1",
        width: 100
        // bodyStyle: { background: "#999999", color: "#11A1FF" }
    },
    {
        title: "3",
        align: "left",
        dataIndex: "key2",
        width: 130
    },
    {
        title: "4",
        align: "left",
        dataIndex: "key3",
        width: 120
    },
    {
        title: "5",
        align: "left",
        fixed: "right",
        dataIndex: "key4",
        width: 100
    }
];

const dataSource = [
    { key: 0, key0: "a", key1: "b", key2: "c", key3: "d", key4: "e" }
];
class ProfileGrades extends Component {
    render() {
        return (
            <Wrapper>
                <Table
                    // bordered={true}
                    columns={columns}
                    dataSource={dataSource}
                />
            </Wrapper>
        );
    }
}

export default ProfileGrades;
const Wrapper = styled.form`
    background: #fff;
    padding: 2em;
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
    margin: 24px 12px 52px 12px;
    min-height: 50%;
`;
