import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Formik, Field } from "formik";
import * as HERBUI from "react-bootstrap";
// import Swal from "sweetalert2";
import { FormGroup } from "react-bootstrap";
import Loadingservices from "./Loadingservices";
// import LoadingServices from "../LoadingServices";
// import Swal from "sweetalert2";
// const userValidationSchema = Yup.object().shape({
//   cfmsId: Yup.string().required(" Required"),
// });
const formNames = {
  id: "",
  lastname: "",
  firstName: "",
  email: "",
};
export default function Student() {
  //   const [defaultValues, setDefaultValues] = useState({});

  const submitDetails = (values) => {
    Loadingservices.submitstoppageDetails(values)
      .then((res) => {
        console.log(res.data);

        if (res.data) {
          alert("Success");
        } else {
          alert("failure");
        }
      })
      .catch(() => {
        console.log("Exception Occured 71 ");
      });
  };

  return (
    <Formik
      initialValues={formNames}
      //     validationSchema={subvalidation}

      onSubmit={submitDetails}
    >
      {({ touched, errors }) => (
        <Form>
          <center>
            <FormGroup className="form-group">
              <label>
                ID
                <Field type="text" id="id" className="form-control" name="id" />
                {touched.id && errors.id ? (
                  <span className="err">{errors.id}</span>
                ) : null}
              </label>
            </FormGroup>
            <FormGroup className="form-group">
              <label>
                FirstName
                <Field
                  type="text"
                  id="firstName"
                  className="form-control"
                  name="firstName"
                />
                {touched.firstName && errors.firstName ? (
                  <span className="err">{errors.firstName}</span>
                ) : null}
              </label>
            </FormGroup>
            <FormGroup className="form-group">
              <label>
                lAST Name
                <Field
                  type="text"
                  id="lastname"
                  className="form-control"
                  name="lastname"
                />
                {touched.lastname && errors.lastname ? (
                  <span className="err">{errors.lastname}</span>
                ) : null}
              </label>
            </FormGroup>
            <FormGroup className="form-group">
              <label>
                email
                <Field
                  type="email"
                  id="email"
                  className="form-control"
                  name="email"
                />
                {touched.email && errors.email ? (
                  <span className="err">{errors.email}</span>
                ) : null}
              </label>
            </FormGroup>
            <br />
            <button
              type="submit"
              style={{
                backgroundColor: "green",
                border: "1px solid white",
                color: "white",
              }}
            >
              SUBMIT
            </button>
          </center>
        </Form>
      )}
    </Formik>
  );
}
