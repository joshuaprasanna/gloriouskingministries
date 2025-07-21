import { ErrorMessage, Field, FieldArray, FormikProvider, useFormik } from "formik";
import { Col, Container, FormGroup } from "react-bootstrap";
export function ReservationForm()
{
    const initial=useFormik({
        initialValues:{
            name:"",
            gender:""
        },
        onSubmit:values=>{
            alert(JSON.stringify(values));
        }
    });
    return(
        <>
        
<FormikProvider value={initial} >
    <form onSubmit={initial.handleSubmit} >
        name:<Field type="text" name="name"></Field>
        GENDER:&nbsp;  <Field type="radio" name="gender" value="male"  />Male&nbsp;  <Field type="radio" name="gender" value="female"  /> Female&nbsp;
<Field type="radio" name="gender" value="transgender"/>Transgender
<br/><br/>
                              <button type="submit"  > Submit</button>

    </form>
</FormikProvider>

        
        </>
    )
} 