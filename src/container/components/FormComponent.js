import React from "react";
import { Formik } from "formik";

const FormComponent = () => (
  <Formik
    initialValues={{ name: "", email: "" }}
    validate={(values) => {
      // console.log(values)
      const errors = {};
      if (!values.name) {
        errors.name = "Enter Your Name";
      }
      // Name
      if (!values.email) {
        errors.email = "E-mail Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid E-mail address";
      }
      // E-mail
      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleSubmit,
      isSubmitting,
    }) => (
      <form onSubmit={handleSubmit}>
        <div className="errorBoundaries">
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            className="inputFill"
            onChange={handleChange}
            value={values.name}
          />
          <p className="error">{errors.name && touched.name && errors.name}</p>
        </div>
        <div className="errorBoundaries">
          <input
            type="email"
            name="email"
            className="inputFill"
            placeholder="Enter a email address"
            onChange={handleChange}
            value={values.email}
          />
          <p className="error">
            {errors.email && touched.email && errors.email}
          </p>
        </div>
        <textarea
          type="text"
          name="message"
          className="messageInput"
          rows={6}
          cols={48}
        ></textarea>
        <button type="submit" disabled={isSubmitting} className="formBtn">
          SUBMIT
        </button>
      </form>
    )}
  </Formik>
);
export default FormComponent;