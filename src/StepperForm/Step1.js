import { ErrorMessage, Field } from "formik";

export function Step1()
{
   
  return <> FirstName:    <Field type="text" name="firstName"></Field>
                          <ErrorMessage name="firstName"></ErrorMessage>
  <br></br><br></br>
  LastName:    <Field type="text" name="lastName"></Field>
                <ErrorMessage name="lastName"></ErrorMessage>
  </>  

}