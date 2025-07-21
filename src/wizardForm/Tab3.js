import { ErrorMessage, Field } from "formik";

export function TabThree()
{

return <><br></br>
 tenthMarks   : <Field name="tenthMarks" type="text"></Field> 
 <br></br> <br></br>  
 <ErrorMessage name="tenthMarks"></ErrorMessage>  
                <br></br> 
    Inter marks : <Field name="interMarks" type="text"></Field> 
    <ErrorMessage name="interMarks"></ErrorMessage>  
                <br></br> 
 </>

}