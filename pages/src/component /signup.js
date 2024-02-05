import { React, Component } from "react";
import { Formik } from "formik";

import "bootstrap/dist/css/bootstrap.css";
class Signup extends Component {
  constructor(props) {
    super(props);

    this.initialState = { email: "", password: "" };
  }
  Validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }

    return errors;
  };

  handleSubmit(values, setSubmitting) {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }

  render() {
    return (
      <>
        <div className="container d-flex justify-content-center align-content-center ">
          <div className="card w-50 p-15 m-15 text-white h-50px">
            <h3>Login</h3>
            <div className="card-body vh-50">
              <div id="formdetails">
                <Formik
                  initialValues={this.initialState}
                  validate={(values) => this.Validate(values)}
                  onSubmit={(values, { setSubmitting }) =>
                    this.handleSubmit(values, setSubmitting)
                  }
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <span className="display-block">
                        {errors.email && touched.email && errors.email}
                      </span>
                      <br />

                      <input
                        type="text"
                        id="password"
                        name="password"
                        placeholder="Enter Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      <span>
                        {errors.password && touched.password && errors.password}
                      </span>
                      <input
                        type="submit"
                        value="Submit"
                        disabled={isSubmitting}
                      />
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Signup;
