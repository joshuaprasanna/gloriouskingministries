import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { ErrorMessage, Field, Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom"
import axios from "axios";
//import SweetAlert2 from 'react-sweetalert2';
import Swal from 'sweetalert2';
export function Practisepagesss()

{
    const formIk = useFormik({
        initialValues: {
          userid: "",
          password: "",
        },
        validationSchema: Yup.object({
          userid: Yup.string().required("Please Enter The Username"),
          password: Yup.string()
            .required("Please Enter The Password")
            .matches(
              /^(?=.*[A-Z])(?=.*[0-9])/,
              "Password must contain at least one capital letter and one number"
            )
            .min("6", "min 6 are required")
            .max("10", "not exceed rthan 10"),
        }),
        onSubmit: (values) => {
          // naviagte("/https://www.yutube.com")
        //   window.location.href = "https://www.youtube.com";
        axios.post("http://10.10.0.57:9123/prac/test",values).then((res)=>{
            console.log("response", res?.data)         
            if(res?.data.scode==="01"){
                //alert("Inserted Successfulluy")
                Swal.fire("Inserted Successfulluy", "", "success");
            }
            else{
                alert("Submission Failed");
            }
        })
        },
      });
     
      function Reset() {
       // alert("ssssssssss");
        formIk.setFieldValue("userid", "");
        formIk.setFieldValue("password", "");
      }
     
 

      return (
        <>
        <div style={{backgroundColor:"#f0f5f5"}}>
        <center>
          <FormikProvider value={formIk}>
            <Form onChange={formIk?.handleChange} onSubmit={formIk?.handleSubmit}>
              <div className="loginn">
                <div style={{backgroundColor:"#5d706e"}}><h2 style={{fontSize:"45px",fontFamily:"sans-serif",fontWeight:"bold",color:"white",fontVariant:"all-petite-caps"}}>Login Form</h2></div>
                <h2>
                  <table style={{fontSize:"22px"}}>
                    <tr>
                      <td  >User Name</td>
                      <td>
                        :
                        <Field type="text" id="userid" name="userid" required />
                       
                        <ErrorMessage component="div" name="userid" style={{color:"red",fontSize:"17px"}} />
                      </td>
                      <br></br><br></br><br></br><br></br>
                    </tr>
                    <tr>
                      <td>Password</td>
                      <td>
                        :
                        <Field
                          type="password"
                          id="password"
                          name="password"
                          required
                        />
                        <ErrorMessage component="div" name="password" style={{color:"red",fontSize:"17px"}} />
                      </td>
                    </tr>
                    <br />
                    <tr>
                      <td></td>
                      <td>
                        <button
                          type="submit"
                          style={{ marginRight: 10,backgroundColor:"#5c966e",color:"white",borderColor:"white" }}
                          className=""
                        >
                          Submit
                        </button>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <button 
                          type="button"
                          style={{backgroundColor:"#ad5064",color:"white",borderColor:"white"}}
                          className=""
                          onClick={(e) => Reset()}
                        >
                          Reset
                        </button>
                      </td>
                    </tr>
                  </table>
                </h2>
              </div>
            </Form>
          </FormikProvider></center></div>
        </>
      );


}