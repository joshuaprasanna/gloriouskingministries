import { ErrorMessage, Field } from "formik";

export function Step3()
{
    
  return <> <br></br><br></br> 
  PassName:<Field type="text" name="passName"></Field>
    <ErrorMessage name="passName"></ErrorMessage>
    <br></br><br></br> 
    Center:<Field type="text" name="center"></Field>
    <ErrorMessage name="center"></ErrorMessage>
    
   </>  

}