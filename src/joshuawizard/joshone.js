import { ErrorMessage, Field } from "formik";

export function Joshone()
{



    return<>
      Messages : <Field name="Messages" type="text"></Field>  <br></br>   <br></br>
      <ErrorMessage name="Messages"></ErrorMessage>  
      Spam : <Field name="Messages" type="text"></Field>  <br></br>   <br></br>
      <ErrorMessage name="Spam"></ErrorMessage>  


    
    </>
}
