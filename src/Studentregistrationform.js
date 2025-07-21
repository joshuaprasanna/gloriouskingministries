import axios from "axios";
import { Field, FieldArray, FormikProvider, useFormik } from "formik"
import { useEffect, useState } from "react";
import States from "./StudentAddressDependency"
import Studentregistration1 from "./studentregistration"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
 export default function Studentregistration()

{


    const navigate=useNavigate();

    const dispatch= useDispatch();
    const formIk=useFormik( {
        

        initialValues:{
            enableReinitialize:true,
            name:"",
            fathername:"",
            gender:"",
            dob:"",
            lan:"", 
            states:'',
            districts:"",
            department:"",
            maincourse:"",

            educationDetails:[
                {
                  course:"",
                  univercity:"",
                  marks:""  
                }
            ],
           
            
    },
    onSubmit:values=>{
        alert(JSON.stringify(values) );
         console.log(JSON.stringify(values));
    }})

    function joshuafun()
    {
        navigate("/joshuatabs");   
    
    }
    



    function showDeptt(){
        dispatch({ type:'SHOWPOPUP' });
        dispatch({ type:'UPDATEMODALDATA',payload:{'modalHeading':'choose department',
        body:[{ displayText:'BSC DEPARTMENT'},{displayText:'BCOM DEPARTMENT'}],fieldValue:'department' }  } );
    
    }
    
    function showMaincrse(){
        dispatch({ type:'SHOWPOPUP' });
        dispatch({ type:'UPDATEMODALDATA',payload:{'modalHeading':'choose maincourse',
        body:[{ displayText:'PHYSICS'},{displayText:'ECONOMICS'}],fieldValue:'maincourse' }  } );
    
    }

    function showsubcourse(){
        dispatch({ type:'SHOWPOPUP' });
        dispatch({ type:'UPDATEMODALDATA',payload:{'modalHeading':'choose subcourse',
        body:[{ displayText:'ECE'},{displayText:'CSE'}],fieldValue:'subcourse' }  } );
    
    }
    useEffect(() => {
      
        dispatch({ type:'UPDATEFORMIK',payload:{formik:formIk }} );
    },[]);
    

return(
<>

<FormikProvider value={formIk} >
<form onSubmit={formIk.handleSubmit} key="from1" >
<div style={{textAlign:"center"}} key="maindev">
<h1 style={{textAlign:"center", color:"red"}} key="h1dev">STUDENT REGISTRATION FORM</h1>
NAME:&nbsp;&nbsp;<Field type="text " name="name" key="name"></Field>
<br/><br/>
FATHERNAME:&nbsp;&nbsp;<Field type="text " name="fathername" key="fathername"></Field>
<br/><br/>
GENDER:&nbsp;  <Field type="radio" name="gender" value="male" key="male" />Male&nbsp;  <Field type="radio" name="gender" value="female" key="female" /> Female&nbsp;
<Field type="radio" name="gender" value="transgender" key="transgender"/>Transgender
<br/><br/>
DATE OF BIRTH:&nbsp;&nbsp;<Field type="date" name="dob" key="dob"/><br/><br/>

KNOWN LANGUAGES:&nbsp;<Field type="checkbox" name="lan" value="telugu"  key="telugu" /> TELUGU&nbsp;
<Field type="checkbox" name="lan" value="english" key="eng"/> ENGLISH&nbsp;
<Field type="checkbox" name="lan" value="hindi" key="hindi" /> HINDI<br/><br/>

CHOOSE DEPT: <Field type="input" name="department" onClick={showDeptt} ></Field>&nbsp;

MAIN COURSE: <Field type="input" name="maincourse" onClick={showMaincrse} ></Field>&nbsp;
SUB COURSE: <Field type="input" name="subcourse" onClick={showsubcourse} ></Field>
<br></br><br></br>

<FieldArray name="educationDetails" >
{

(formikDetails)=> {


 return   <Studentregistration1 formikDetails={formikDetails}    ></Studentregistration1>

}
}
</FieldArray> 
<br/><br/>



<States value={formIk} key="statekey"></States> 



      </div>







      <br/><br/>



<div style={{textAlign:"center"}} key="subDiv"> <button type="submit" key="bynSubkey" onClick={joshuafun}> Submit</button></div>
     
 </form>

</FormikProvider>


</>
)





}