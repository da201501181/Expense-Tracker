import React from "react";
import { Formik } from "formik";

import Spinner from "../Spinner/Spinner";
import "./Form.css";

const Form = props => {
  let headerText = "Sign In";
  let redirectLink = (
    <p className="redirectLink">
      Don't have an account ?{""}
      <button
        type="button"
        className="btn btn-link"
        onClick={props.showSignUpContainer}
      >
        Sign Up
      </button>
    </p>
  );
  let error = null;
  if (props.authModeSignUp) {
    headerText = "Sign Up";
    redirectLink = (
      <p className="redirectLink">
        Already have an account ?{""}
        <button
          type="button"
          className="btn btn-link"
          onClick={props.showSignInContainer}
        >
          Sign In
        </button>
      </p>
    );
  }
  if (props.isLoading) {
    redirectLink = null;
  }
  if (props.error) {
    if (props.error === "EMAIL_EXISTS") {
      error = <p>Email already exists</p>;
    }
    if (props.error === "INVALID_PASSWORD") {
      error = <p>Password is incorrect</p>;
    }
    if (props.error === "EMAIL_NOT_FOUND") {
      error = <p>Email address is incorrect</p>;
    }
  }
  return (
    <Formik
      initialValues={{ email: "", password: "", confirmPassword: "" }}
      validate={values => {
        // same as above, but feel free to move this into a class method now.
        let errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        if (!values.password) {
          errors.password = "Required";
        } else if (values.password.length < 6) {
          errors.password = "Password must be at least 6 characters long";
        }
        if (props.authModeSignUp && !values.confirmPassword) {
          errors.confirmPassword = "Required";
        } else if (
          props.authModeSignUp &&
          values.password !== values.confirmPassword
        ) {
          errors.confirmPassword = "Password not matching";
        }
        return errors;
      }}
      onSubmit={(
        values,
        { setSubmitting, setErrors /* setValues and other goodies */ }
      ) => {
        const authData = {
          email: values.email,
          password: values.password
        };
        props.onFormSubmit(authData);
      }}
      render={({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit} className="login-box">
          <div className="lb-header">
            <h1>{headerText}</h1>
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className={
              errors.email && touched.email
                ? "text-input error u-form-group"
                : "text-input u-form-group"
            }
          />
          {touched.email &&
            errors.email && (
              <div className="input-feedback">{errors.email}</div>
            )}
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            className={
              errors.password && touched.password
                ? "text-input error u-form-group"
                : "text-input u-form-group"
            }
          />
          {touched.password &&
            errors.password && (
              <div className="input-feedback">{errors.password}</div>
            )}

          {props.authModeSignUp ? (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
              className={
                errors.confirmPassword && touched.confirmPassword
                  ? "text-input error u-form-group"
                  : "text-input u-form-group"
              }
            />
          ) : null}
          {touched.confirmPassword &&
            errors.confirmPassword && (
              <div className="input-feedback">{errors.confirmPassword}</div>
            )}
          {error}
          {props.isLoading ? (
            <Spinner />
          ) : (
            <div className="submitButton">
              <button type="submit">{headerText}</button>
            </div>
          )}

          {redirectLink}
        </form>
      )}
    />
  );
};
export default Form;
