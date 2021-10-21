import { useState } from "react";
import { useFormik } from "formik";

const FormDemo = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      age: 18,
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "*Email is required";
      }
      if (!values.email.includes("@")) {
        errors.email = "*Email should be in proper format";
      }
      if(values.age > 60){
          errors.age = "*Age should be less than 60"
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log("Values : ", values);
    },
  });

  return (
    <div className="row">
      <div className="col-6 offset-3">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email ? (
              <div className="alert alert-danger">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="age">Age :</label>
            <input
              type="number"
              name="age"
              id="age"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.age}
            />
            {formik.errors.age ? 
                <div className="alert alert-danger">{formik.errors.age}</div>:
                null
            }
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Submit Form"
              className="btn btn-primary btn-sm"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormDemo;
