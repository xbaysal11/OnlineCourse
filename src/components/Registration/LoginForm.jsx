import React, { Component } from "react";
import { Formik } from "formik";
import { Input as InputAntd, Button } from "antd";

class LoginForm extends Component {
    render() {
        return (
            <Formik>
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <InputAntd
                            placeholder="Basic usage"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />

                        {errors.email && touched.email && errors.email}
                        <InputAntd
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        {errors.password && touched.password && errors.password}
                        <Button type="submit" disabled={isSubmitting}>
                            Submit
                        </Button>
                    </form>
                )}
            </Formik>
        );
    }
}
export default LoginForm;
