import { ErrorMessage, Field } from "formik";

export function Joshtwo()
{



    return<>
      Outbox : <Field name="Outbox" type="text"></Field>  <br></br>   <br></br>
      <ErrorMessage name="Outbox"></ErrorMessage>  
      Inbox : <Field name="Inbox" type="text"></Field>  <br></br>   <br></br>
      <ErrorMessage name="Inbox"></ErrorMessage>  


    
    </>
}
