import React, { Component } from "react";
import PT from "prop-types";
import { ModalContext } from "./ModalManager.jsx";

class OpenModal extends Component {
    static propTypes = {
        name: PT.string.isRequired,
        openModal: PT.func.isRequired
    };
    constructor() {
        super();
        this.open_modal = this.open_modal.bind(this);
    }
    open_modal() {
        this.props.openModal(this.props.name);
    }
    render() {
        return (
            <span
                className={`OpenModal ${this.props.name}`}
                onClick={this.open_modal}
            >
                {this.props.children}
            </span>
        );
    }
}

export default React.forwardRef((props, ref) => (
    <ModalContext.Consumer>
        {value => <OpenModal {...{ ...props, ...value }} ref={ref} />}
    </ModalContext.Consumer>
));
