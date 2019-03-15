import React, { Component } from "react";
import { Formik } from "formik";
import styled from "styled-components";

import {
    Form,
    Icon,
    Input as InputAntd,
    Button as ButtonAntd,
    Checkbox
} from "antd";

class LoginForm extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Formik>
                <Wrapper>
                    <h1>Log In</h1>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator("userName", {
                                rules: [
                                    {
                                        required: true,
                                        message: "Please input your username!"
                                    }
                                ]
                            })(
                                <Input
                                    prefix={
                                        <Icon
                                            type="user"
                                            style={{ color: "rgba(0,0,0,.25)" }}
                                        />
                                    }
                                    placeholder="Username"
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator("password", {
                                rules: [
                                    {
                                        required: true,
                                        message: "Please input your Password!"
                                    }
                                ]
                            })(
                                <Input
                                    prefix={
                                        <Icon
                                            type="lock"
                                            style={{ color: "rgba(0,0,0,.25)" }}
                                        />
                                    }
                                    type="password"
                                    placeholder="Password"
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator("remember", {
                                valuePropName: "checked",
                                initialValue: true
                            })(<Checkbox>Remember me</Checkbox>)}
                            <a className="login-form-forgot" href="">
                                Forgot password
                            </a>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                            >
                                Log in
                            </Button>
                            Or <a href="">register now!</a>
                        </Form.Item>
                    </Form>
                </Wrapper>
            </Formik>
        );
    }
}
const WrappedLoginForm = Form.create({ name: "login" })(LoginForm);

export default WrappedLoginForm;

const Button = styled(ButtonAntd)`
    width: 100%;
`;

const Wrapper = styled.div`
    text-align: center;
`;

const Input = styled(InputAntd)`
    max-width: 300px;
    padding: 0 auto;
`;

const a = styled.a`
    float: right;
`;
