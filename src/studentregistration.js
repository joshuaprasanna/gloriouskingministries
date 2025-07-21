import { ErrorMessage, Field } from "formik";
import { useEffect } from "react";

function Studentregistration1({formikDetails})
{
        
     return  formikDetails.form!=undefined && 
     formikDetails.form.values.educationDetails.map(
            (educationQualifications,index)=>{

return <> 
      { (index==0)? <> <button key={`testButton${index}`} type="button" style={{color:"green"}}
      onClick={ ()=> formikDetails.push({
        course:'',
        univercity:'',
        marks:''  
      }) } > &nbsp;Add Education Details + </button>  </> :''}
     <br/><br/>
       course:  <Field type="text" name={`educationDetails[${index}].course`} key={`educationDetails[${index}].course`} ></Field>
       <ErrorMessage  name={`educationDetails[${index}].course`} key={`erroreducationDetails[${index}].course`} />
     &nbsp; &nbsp; 
     univercity:  <Field type="text" name={`educationDetails[${index}].univercity`} key={`educationDetails[${index}].univercity`}  ></Field>
     &nbsp; &nbsp; 
     marks:  <Field type="text" name={`educationDetails[${index}].marks`} key ={`erreducationDetails[${index}].marks`} ></Field>   
     
     { (index!=0)? <> <button type="button" key={`rm${index}`} style={{color:"red"}} 
     onClick={ ()=> { formikDetails.remove()} } > Remove </button> </> :''}
     
     

</>

            }


        )


    }

export default  Studentregistration1;   
