import { ErrorMessage, Field, FormikProvider, useFormik } from "formik";
import { useEffect } from "react";
import { Card, NavLink } from "react-bootstrap";
import { useDispatch } from "react-redux"
import { Navigate, useHistory, useNavigate } from 'react-router-dom';
import * as Yup from "yup";




const validation=Yup.object().shape(
    {
        Username:Yup.string().required("Username is required").min(5).max(10),
        Password:Yup.string().required("Password is required"), 
       
       
      

    }
);


export function Joshuaformik(){

    const navigate=useNavigate();


    //  const history = useHistory();
    //  const handleClick = () => history.push('/goodbye');


    const dispatch= useDispatch();

    const formIk=   useFormik( {
        initialValues:{ Username:'',Password:''},
        onSubmit: values=>
        alert(values)
        

      ,  validationSchema:validation

})

function funct()
{
    navigate("/register/");   
}

function joshuafun()
{
    navigate("/joshuatabs/");
   
    //  dispatch({ type:'SHOWPOPUP' });
    // dispatch({ type:'UPDATEMODALDATA',payload:{'modalHeading':'Successfully Login',
    // body:[,{}] }  } );   
}

// function Paulfun()
// {
//     dispatch({ type:'SHOWPOPUP' });
//     dispatch({ type:'UPDATEMODALDATA',payload:{'modalHeading':'testing Paul',
//     body:[{ displayText:'hhh'},{displayText:'kkk'}],fieldValue:'Paul' }  } );   
// }

// function Peterfun()
// {
//     dispatch({ type:'SHOWPOPUP' });
//     dispatch({ type:'UPDATEMODALDATA',payload:{'modalHeading':'testing Peter',
//     body:[{ displayText:'bbb'},{displayText:'vvv'}],fieldValue:'Peter' }  } );   
// }

useEffect(() => {
      
    dispatch({ type:'UPDATEFORMIK',payload:{formik:formIk }} );
},[]);



    return(
        <>
         <FormikProvider value={formIk}>
         <Card>
         <Card.Body className="btn btn-dark">
         <center>
             <div className="btn btn-light" disabled>
             <center>  <h1>Login Form</h1></center>
        <form >
        <b>Username:</b><Field type="input" name="Username" className="btn btn-secondary" ></Field>
        <ErrorMessage>Username Required</ErrorMessage>
         <br></br>         <br></br>

         <b>Password:</b><Field type="input" name="Password" className="btn btn-secondary" ></Field>
         <ErrorMessage>Password Required</ErrorMessage>
         <br></br>      <br></br>

          <button align type="button" className="btn btn-dark " onClick={joshuafun} >Login</button>
   <NavLink onClick={funct}>For Register</NavLink>

         {/* Joshua:<Field type="input" name="joshua" onClick={joshuafun}></Field>
         <br></br>         <br></br>

         Paul:<Field type="input" name="Paul" onClick={Paulfun} ></Field>
         <br></br>         <br></br>

         Peter:<Field type="input" name="Peter" onClick={Peterfun}></Field>
    */}


        </form>
        </div>
        </center>
        </Card.Body>
        </Card>
        </FormikProvider>
        </>
    )
}