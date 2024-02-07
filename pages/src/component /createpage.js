import { React, Component } from "react";
import { Formik } from "formik";
import axios from "axios";

class CreatePage extends Component {
  constructor(props) {
    super(props);
    this.initialValues = { name: "", comments: "" };
  }
  Validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.email = "Required";
    }
    // if (!values.comments) {
    //   errors.password = "Required";
    // }

    return errors;
  };

  async handleSubmit(values, setSubmitting) {
    const data = {
      name: values.name,
      comments: values.comments,
    };

    const url = "http://localhost:3003/pages/";
    try {
      const response = await axios.post(url, data, {
        headers: {
          authorization: sessionStorage.getItem("token"),
        },
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }
  render() {
    return (
      <>
        <Formik
          initialValues={this.initialValues}
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
              {console.log(values)}
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <span>{errors.name && touched.name && errors.name}</span>
              <br />

              <input
                type="text"
                id="comments"
                name="comments"
                placeholder="Enter comments"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.comments}
              />
              {/* <span>
                {errors.password && touched.password && errors.password}
              </span> */}

              <input type="submit" value="Submit" disabled={isSubmitting} />
            </form>
          )}
        </Formik>
      </>
    );
  }
}
export default CreatePage;
