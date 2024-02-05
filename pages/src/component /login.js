import { React, Component } from "react";
import { Formik } from "formik";
import "./login.css";
import "bootstrap/dist/css/bootstrap.css";
class Login extends Component {
  constructor(props) {
    super(props);

    this.initialState = { name: "", email: "", password: "", date: "" };
  }
  Validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    if (!values.date) {
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
        <div className="container d-flex justify-content-center align-content-center">
          <div className="card w-50 p-10 m-10 ">
            <h3 className="text-center">Signup</h3>
            <div className="card-body">
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
                      <label htmlFor="name">
                        Name{" "}
                        <span>
                          {errors.name && touched.name && errors.name}
                        </span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                      <br />
                      <label htmlFor="email">
                        Email{" "}
                        <span>
                          {errors.email && touched.email && errors.email}
                        </span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <br />
                      <label htmlFor="date">
                        Date Of birth{" "}
                        <span>
                          {errors.date && touched.date && errors.date}
                        </span>
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        placeholder="dd/mm/yy"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.date}
                      />
                      <br />
                      <label htmlFor="password">
                        Password{" "}
                        <span>
                          {errors.password &&
                            touched.password &&
                            errors.password}
                        </span>
                      </label>
                      <input
                        type="text"
                        id="password"
                        name="password"
                        placeholder="Enter Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />

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
export default Login;
