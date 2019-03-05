import { Tabs, Radio } from "antd";
import React from "react";
import Intro from "./Intro";

const TabPane = Tabs.TabPane;

class LeftTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: "left"
        };
    }

    handleModeChange = e => {
        const mode = e.target.value;
        this.setState({ mode });
    };

    render() {
        const { mode } = this.state;
        return (
            <div>
                {/*  <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
                    <Radio.Button value="top">Horizontal</Radio.Button>
                    <Radio.Button value="left">Vertical</Radio.Button>
                    </Radio.Group> */}
                <Tabs
                    defaultActiveKey="1"
                    tabPosition={mode}
                    style={{ height: 300 }}
                >
                    <TabPane tab="Week 1" key="1">
                        <Intro />
                    </TabPane>
                    <TabPane tab="Week 2" key="2">
                        COnTENt Of
                        awdlknjawdkjbawdlkwblkawabwlkdbalwkdhbawbhdlkhwb
                    </TabPane>
                    <TabPane tab="Week 3" key="3">
                        <Intro />
                    </TabPane>
                    <TabPane tab="Week 4" key="4">
                        <Intro />
                    </TabPane>
                    <TabPane tab="Week 5" key="5">
                        <Intro />
                    </TabPane>
                    <TabPane tab="Week 6" key="6">
                        <Intro />
                    </TabPane>
                    <TabPane tab="Week 7" key="7">
                        <Intro />
                    </TabPane>
                    <TabPane tab="Week 8" key="8">
                        <Intro />
                    </TabPane>
                    <TabPane tab="Week 9" key="9">
                        <Intro />
                    </TabPane>
                    <TabPane tab="Week 10" key="10">
                        <Intro />
                    </TabPane>
                    <TabPane tab="Week 11" key="11">
                        <Intro />
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}
export default LeftTable;
