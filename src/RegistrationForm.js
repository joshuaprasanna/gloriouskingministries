import { Field, FormikProvider, useFormik } from "formik"
import { Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

export function Register() 
{
    const navigate=useNavigate();


    const formIk=   useFormik( {
        initialValues:{ Email:'',Username:'',Password:'',ConfirmPassword:''},
        onSubmit: values=>
        alert(values)
}) 
function joshuafun()
{
    navigate("/joshua/");   

}

    return(

        <>
        <FormikProvider value={formIk}>
        <Card>
  <Card.Body className="btn btn-dark">
        <center> <h1>Registration Form</h1></center>
            <center>
         <b>Email:    </b><Field type="input" name="Email" className="btn btn-secondary" ></Field>
         <br></br>         <br></br>

         <b>Username:  </b><Field type="input" name="Username" className="btn btn-secondary" ></Field>         <br></br>
         <br></br> 

         <b>Password:</b><Field type="input" name="Password" className="btn btn-secondary" ></Field>         <br></br>
         <br></br>

         <b>ConfirmPassword:</b><Field type="input" name="ConfirmPassword" className="btn btn-secondary" ></Field>
         <br></br><br></br>

         <button align type="button" className="btn btn-light " onClick={joshuafun} >Submit</button>
         </center>
         </Card.Body>
</Card>  
         </FormikProvider>
        </>
    )
  
}