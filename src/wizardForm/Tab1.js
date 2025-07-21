const { Field, ErrorMessage } = require("formik");

export function TabOne()
{


    return<> <br></br>
    FirstName : <Field name="firstname" type="text"></Field>  <br></br>   <br></br>
                <ErrorMessage name="firstname"></ErrorMessage>  
                <br></br> 
    LastName : <Field name="lastname" type="text"></Field>   
    <br></br>  
    <ErrorMessage name="lastname"></ErrorMessage>  

     </>


}