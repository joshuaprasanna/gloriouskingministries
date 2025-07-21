import React, { useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { Field, FieldArray, FormikProvider, useFormik } from "formik"
import { useNavigate } from 'react-router-dom';

export  function Nivaspopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const Studentlist = () => setShow(true);
  const handleShows = () => setShow(true);


  const navigate=useNavigate();


  function Studentlist()
  {
      navigate("/Studentlist");   
  
  }



  const formIk=useFormik( {
        


  initialValues:{
    enableReinitialize:true,
    Username:"",
    Password:"",
   

  
   
    
},
onSubmit:values=>{
alert(JSON.stringify(values) );
 console.log(JSON.stringify(values));
}})















  return (
    <>
      {/* <button class="rounded-sm" onClick={handleShow} style={{backgroundColor:"white",}}>
      
      </button> */}


{/* <button onClick={handleShow} style={{backgroundColor:"#e09626",border:"1px #e09626",height:"40px"}}>LOGIN</button>

&nbsp;&nbsp;&nbsp;<button onClick={Studentlist} style={{backgroundColor:"#f0869f",border:"1px #e09626",height:"40px"}}>Student List</button> */}


      <Modal show={show} onHide={handleClose} style={{}} >
        <Modal.Header style={{backgroundColor:"#69b53e"}} closeButton>
          <Modal.Title ><Row md={12}><b style={{color:"white"}}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login</b></Row></Modal.Title>
        </Modal.Header>



        <FormikProvider value={formIk} >
<form onSubmit={formIk.handleSubmit} key="from1" >
     <Modal.Body>
      
     
    
    
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
    <input type="text" placeholder='User ID' required style={{border:"1px solid #b7c0c4"}} ></input>
     <br></br> <br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
      <input type="password" placeholder='*****' required style={{border:"1px solid #b7c0c4"}} ></input>
     <br></br> <br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
    <button type="submit" style={{backgroundColor:"#10a3de",border:"white",height:"30px", width:"100px",color:"white"}}> Sign In</button>
  
      </Modal.Body></form></FormikProvider>
        <Modal.Footer style={{backgroundColor:"#29314a"}} >
     {/* <Row> <b>Username:</b> &nbsp;&nbsp;<input type="text " name="name" key="name"></input>
      <b> Password:</b>&nbsp;&nbsp;<input type="text " name="name" key="name"></input></Row> */}

{/* <button type="submit" style={{backgroundColor:"#eb9167"}}  onClick={handleShows} > Submit</button>
<br></br>
<br></br>

          <button onClick={handleClose} style={{backgroundColor:"#c2d9ff"}}>
            Close
          </button> */}
          
          {/* <button  onClick={handleClose}>
            Save Changes
          </button> */}
        </Modal.Footer >
      </Modal>
    </>
  );
}

;