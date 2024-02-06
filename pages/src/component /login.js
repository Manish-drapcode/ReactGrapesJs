import { React, Component } from "react";
import { Formik } from "formik";
import "./login.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Link } from "react-router-dom";
class Login extends Component {
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
      console.log(values.password);
      errors.password = "Required";
    }

    return errors;
  };

  async handleSubmit(values, setSubmitting) {
    const url = "http://localhost:3003/user/login";
    const data = {
      email: values.email,
      password: values.password,
    };
    try {
      const response = await axios.get(url, { params: data });

      sessionStorage.setItem("token", response.data);
      const { history } = this.props;
      history.push("/lists");
    } catch (eror) {
      console.log(eror);
    }

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
                      <span>
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
                      <p>
                        if not already a user....
                        <Link to="/signup"> signup</Link>
                      </p>
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
