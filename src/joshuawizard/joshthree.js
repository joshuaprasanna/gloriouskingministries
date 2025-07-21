import { ErrorMessage, Field } from "formik";

export function Joshthree()
{



    return<>
      Templates : <Field name="Messages" type="text"></Field>  <br></br>   <br></br>
      <ErrorMessage name="Templates"></ErrorMessage>  
      Recieved : <Field name="Recieved" type="text"></Field>  <br></br>   <br></br>
      <ErrorMessage name="Recieved"></ErrorMessage>  


    
    </>
}
