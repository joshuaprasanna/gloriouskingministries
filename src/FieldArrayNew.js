import { ErrorMessage, Field } from "formik";
import { useEffect } from "react";

function FieldArrayNew({formikDetails})
{
        
     return  formikDetails.form!=undefined && 
     formikDetails.form.values.educationQualifications.map(
            (educationDetails,index)=>{

return <> 
      { (index==0)? <> <button type="button" 
      onClick={ ()=> formikDetails.push({
        course:'',
        univercity:'',
        marks:''  
      }) } > Add </button> <br></br><br></br><br></br> </> :''}
      <br></br><br></br><br></br> 
       course:  <Field type="text" name={`educationQualifications[${index}].course`}  ></Field>
       <ErrorMessage  name={`educationQualifications[${index}].course`}/>
     &nbsp; &nbsp; 
     univercity:  <Field type="text" name={`educationQualifications[${index}].univercity`}  ></Field>
     &nbsp; &nbsp; 
     marks:  <Field type="text" name={`educationQualifications[${index}].marks`} ></Field>   
     
     { (index!=0)? <> <button type="button" 
     onClick={ ()=> { formikDetails.remove()} } > Remove </button> <br></br><br></br><br></br> </> :''}
     
     

</>

            }


        )


    }

export default  FieldArrayNew;   
