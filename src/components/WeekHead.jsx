import React, { Component } from 'react';

class WeekHead extends Component {
    render() {
        return (
            <div>
            {this.props.children}
            </div>
        );
    }
}

export default WeekHead;