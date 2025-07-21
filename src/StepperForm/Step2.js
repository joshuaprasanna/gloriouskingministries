import { ErrorMessage, Field } from "formik";

export function Step2()
{


    return <>  <br></br><br></br> 
    ADDRESS1:<Field type="text" name="address1"></Field>
    <ErrorMessage name="address1"></ErrorMessage>
    <br></br><br></br> 
    ADDRESS2:<Field type="text" name="address2"></Field>
    <ErrorMessage name="address2"></ErrorMessage>
    

    </>
   
}