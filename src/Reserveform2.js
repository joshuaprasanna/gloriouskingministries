import { ErrorMessage, Field, FieldArray, FormikProvider, useFormik } from "formik";
import { Col, Container, FormGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export function Reserved()
{

 

return(

    
        <>
<FormikProvider >
<Container >
<form>

     
Name: <Field type="text" name="name"  placeholder="First name"  /> 

    </form>  
    </Container>
    </FormikProvider>

        </>


    
)
}