import { ErrorMessage, Field } from "formik";

export function TabTwo()
{

return <><br></br>
  Stret1 : <Field name="street1" type="text"></Field> 
  <ErrorMessage name="street1"></ErrorMessage>  
                <br></br>  <br></br>   <br></br> 
    street2 : <Field name="street2" type="text"></Field>
    <ErrorMessage name="street2"></ErrorMessage>  
                <br></br>  
</>

}