import { ErrorMessage, Field, FieldArray, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
function SampleFormik()
{

    const  validation = Yup.object().shape({
        email: Yup.string()
        
          // Format Validation
          .email("Invalid email address format")
        
          // Required Field Validation
          .required("Email is required"),
          firstName: Yup.string()  .required("Name is required"),
          lastName: Yup.string()  .required("Name is required")
      
      });

    const formik = useFormik({
        initialValues: 
        {
          firstName: '',
          lastName: '',
          email: '',
           friends:[
               {
                name:'',
                mobile:''   
               },{
                name:'',
                mobile:''   
               }
           ] 
        },
        
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
        validationSchema:validation
      });

   return (
<>
<FormikProvider value={formik} >
<form onSubmit={formik.handleSubmit}>

<label htmlFor="firstName">First Name</label>

<Field

  id="firstName"

  name="firstName"

  type="text"

 
/>
<ErrorMessage name="firstName" component="div"></ErrorMessage>

<label htmlFor="lastName">Last Name</label>

<Field

  id="lastName"

  name="lastName"

  type="text"

  
/>
<ErrorMessage name="lastName" component="div"></ErrorMessage>

<label htmlFor="email">Email Address</label>

<input

  id="email"

  name="email"

  type="email"

  onChange={formik.handleChange}

  value={formik.values.email}

/>
<br>
</br>
<br>
</br>
<br>
</br>

<FieldArray name="friends">
{
    (fieldValue)=>
    {
       console.log(fieldValue);
       
       return (
        <>
       
        {
            fieldValue.form.values.friends.map(
              (fieldList,index)=>{
                return <>
                <div key={index}>                
              <button onClick={()=>fieldValue.push()}>+</button>
                Name : <Field

id="name"

name={`friends.${index}.name`}

type="text"


/>
<br>
</br>
Mobile : <Field

  id="mobile"

  name={`friends.${index}.mobile`}

  type="text"

  
/>
<br>
</br>
<br>
</br>
</div>

                </>

              }  

            )
        }

        
        </>


       )
    }

}             

</FieldArray>
            

<button type="submit">Submit</button>

</form>
</FormikProvider>
</>

   )
   
   
    }

   export default SampleFormik; 