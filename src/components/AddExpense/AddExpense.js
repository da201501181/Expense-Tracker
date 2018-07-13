import React from "react";
import { Formik } from "formik";

const Form = props => {
  return (
    <Formik
      initialValues={{
        date: "",
        category: "Volvo",
        description: "",
        amount: 0.0
      }}
      validate={values => {
        // same as above, but feel free to move this into a class method now.
        let errors = {};

        if (!values.date) {
          errors.date = "Required";
        }
        return errors;
      }}
      onSubmit={values => {
        const formData = {
          date: values.date,
          category: values.category,
          description: values.description,
          amount: values.amount
        };
        props.onFormSubmit(formData);
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
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div>
              <h1>Add expense</h1>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Date </label>
              <div className="col-sm-9">
                <input
                  className="form-control"
                  type="date"
                  name="date"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.date}
                  className={
                    errors.date && touched.date
                      ? "text-input error u-form-group"
                      : "text-input u-form-group"
                  }
                />
              </div>
            </div>
            {touched.date &&
              errors.date && (
                <div className="input-feedback">{errors.date}</div>
              )}
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">category</label>
              <div className="col-sm-9">
                <select
                  name="category"
                  className="form-control"
                  onChange={handleChange}
                  value={values.category}
                >
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Description</label>
              <div className="col-sm-9">
                <textarea
                  className="form-control"
                  name="description"
                  placeholder="Description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  className={
                    errors.description && touched.description
                      ? "text-input error u-form-group"
                      : "text-input u-form-group"
                  }
                />
              </div>
              {touched.description &&
                errors.description && (
                  <div className="input-feedback">{errors.description}</div>
                )}
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Description</label>
              <div className="col-sm-9">
                <input
                  className="form-control"
                  type="number"
                  name="amount"
                  placeholder="0.0"
                  onChange={handleChange}
                  value={values.amount}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Add Expense
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={props.modalClosed}
            >
              Close
            </button>
          </form>
        </div>
      )}
    />
  );
};
export default Form;
