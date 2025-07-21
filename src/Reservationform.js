

import { ErrorMessage, Field, FieldArray, FormikProvider, useFormik } from "formik";
import { Col, Container, FormGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export function Reservation()
{

 
  const validation=Yup.object().shape(
    {
      name:Yup.string().required(" Name is required").min(10).max(10),
      email:Yup.string().required(" Email is required").min(10).max(15),
      arraivaldate:Yup.string().required(" Arraivaldate is required").min(10).max(15),
      departuredate:Yup.string().required(" Departuredate is required").min(10).max(15),
      customRadioInline1:Yup.string().required(" Pickup  is required").min(10).max(15),
      number:Yup.string().required(" Flightnumber is required").min(10).max(15),
      //request:Yup.string().required(" Specialrequest is required"),

     

  
  }
);

  const navigate=useNavigate();

    const formIk=useFormik( {
        enableReinitialize:true,

        initialValues:{
            name:"",
            email:'',
            arraivaldate:'',
            departuredate:'',
            customRadioInline1:'',
            number:'',
           
            request:'',
           
        },
       onSubmit:values=>{
           alert(JSON.stringify(values) );
           console.log(JSON.stringify(values));
       },

       validationSchema:validation

    });

    // function home()
    // {
    //   //  navigate("/joshuatabs");   
    
    // }

    //  function reserved()
    //  {
    //      navigate("/reserved");   
    
    // }

return(

    
        <>
<FormikProvider value={formIk} >
<Container >
<form onSubmit={formIk.handleSubmit}>
<h1 >RESERVATION FORM</h1>
<br></br>
<div class="col-md-4 mb-3">
     
Name: <Field type="text" name="name" class="form-control" placeholder="First name"  /> <ErrorMessage name="name">
    { msg => <div style={{ color: 'red' }}>{msg}</div> }
</ErrorMessage>
 <br/>
Email: <Field type="text" name="email" class="form-control" placeholder="email"  /><ErrorMessage name="email">
    { msg => <div style={{ color: 'red' }}>{msg}</div> }
</ErrorMessage><br/>
Arraival Date: <Field type="date" name="arraivaldate" class="form-control" placeholder="arraival date"  /><ErrorMessage name="arraivaldate">
    { msg => <div style={{ color: 'red' }}>{msg}</div> }
</ErrorMessage><br/>
Departure Date: <Field type="date" name="departuredate" class="form-control" placeholder="departure date"  /> <ErrorMessage name="departuredate">
    { msg => <div style={{ color: 'red' }}>{msg}</div> }
</ErrorMessage><br/>
{/* Free Pickup:  <input type="radio" name="customRadioInline1" class="custom-control-Field"/>
 Yes

  <input type="radio" name="customRadioInline1" class="custom-control-Field"/>
  <label class="custom-control-label" for="customRadioInline2">No</label> */}



  Free Pickup:&nbsp;  <Field type="radio" name="customRadioInline1"   class="custom-control-Field" value="yes"  />Yes&nbsp; 
   <Field type="radio" name="customRadioInline1" value="No"  /> No&nbsp;
  <br/><br/>






  Flight Number: <Field type="text" name="number" class="form-control" placeholder="flight number"  /><ErrorMessage name="number">
    { msg => <div style={{ color: 'red' }}>{msg}</div> }
</ErrorMessage><br/>
 Special Request:<textarea class="form-control" name="request "  rows="4"></textarea><ErrorMessage name="request">
    { msg => <div style={{ color: 'red' }}>{msg}</div> }
</ErrorMessage><br/><br/>
 
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

 <button type="submit" class="btn btn-primary"  > Next</button>
 {/* <button type="submit" class="btn btn-secondary" onClick={home} style={{margin:"-400px"}}> Back</button> */}

</div>
    </form>  
    </Container>
    </FormikProvider>

        </>


    
)
}