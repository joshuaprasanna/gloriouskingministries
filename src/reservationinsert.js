import React, { useState, useEffect } from "react";
import axios from "axios";
import * as Yup from "yup";
import { Form, Formik, Field } from "formik";
import * as HERBUI from "react-bootstrap";
// import Swal from "sweetalert2";
import { FormGroup } from "react-bootstrap";
import Loadingservices from "./Loadingservices";

// import LoadingServices from "../LoadingServices";
// import Swal from "sweetalert2";
const subvalidation = Yup.object().shape({
    id: Yup.string().required(" id Required"),
    name: Yup.string().required("name Required"),
    email: Yup.string().required(" email Required"),
    arraivaldate: Yup.string().required("arraivaldate Required"),
    departuredate: Yup.string().required("departuredate Required"),
    flightnumber: Yup.string().required(" flightnumber Required"),
    specialrequest: Yup.string().required(" specialrequest Required"),

});
const formNames = {
  id: "",
  name: "",
  email: "",
  arraivaldate: "",
  departuredate: "",
  flightnumber: "",
  specialrequest: "",

};
export default function Reservationinsert() {
  //   const [defaultValues, setDefaultValues] = useState({});

  const submitDetails = (values) => {
    Loadingservices.submitstoppageDetails1(values)
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
          validationSchema={subvalidation}

      onSubmit={submitDetails}
    >
      {({ touched, errors }) => (
        <Form>
          <center>
            <div style={{border:"1px solid black", width:"1200px"}}  class="rounded">
            <h1>Flight Reservation Form</h1>
          
            <FormGroup className="form-group">
              <label>
                ID:
                <Field type="text" id="id" className="form-control" name="id" />
                {touched.id && errors.id ? (
                  <span className="err" style={{color:"red"}}>{errors.id}</span>
                ) : null}
              </label>
            </FormGroup>
            <FormGroup className="form-group">
              <label>
                Name:
                <Field
                  type="text"
                  id="name"
                  className="form-control"
                  name="name"
                />
                {touched.name && errors.name ? (
                  <span className="err" style={{color:"red"}}>{errors.name}</span>
                ) : null}
              </label>
            </FormGroup>
            <FormGroup className="form-group">
              <label>
              Email:
                <Field
                  type="text"
                  id="email"
                  className="form-control"
                  name="email"
                />
                {touched.email && errors.email ? (
                  <span className="err" style={{color:"red"}}>{errors.email}</span>
                ) : null}
              </label>
            </FormGroup>
            <FormGroup className="form-group">
              <label>
              Arraivaldate:
                <Field
                  type="text"
                  id="arraivaldate"
                  className="form-control"
                  name="arraivaldate"
                />
                {touched.arraivaldate && errors.arraivaldate ? (
                  <span className="err" style={{color:"red"}}>{errors.arraivaldate}</span>
                ) : null}
              </label>
            </FormGroup>
            <FormGroup className="form-group">
              <label>
              Departuredate:
                <Field
                  type="text"
                  id="departuredate"
                  className="form-control"
                  name="departuredate"
                />
                {touched.departuredate && errors.departuredate ? (
                  <span className="err" style={{color:"red"}}>{errors.departuredate}</span>
                ) : null}
              </label>
            </FormGroup>
            <FormGroup className="form-group">
              <label>
              Flightnumber:
                <Field
                  type="text"
                  id="flightnumber"
                  className="form-control"
                  name="flightnumber"
                />
                {touched.flightnumber && errors.flightnumber ? (
                  <span className="err" style={{color:"red"}}>{errors.flightnumber}</span>
                ) : null}
              </label>
            </FormGroup>
            <FormGroup className="form-group">
              <label>
              Specialrequest:
                <Field
                  type="text"
                  id="specialrequest"
                  className="form-control"
                  name="specialrequest"
                />
                {touched.specialrequest && errors.specialrequest ? (
                  <span className="err" style={{color:"red"}}>{errors.specialrequest}</span>
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
            </button></div>
          </center>
        </Form>
      )}
    </Formik>
  );
}
