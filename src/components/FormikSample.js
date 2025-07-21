import { ErrorMessage, Field, FieldArray, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

function FormikSample()
{
 
        function validateMobileNo(value)
        {
          //  value=value.target.value;
            let returnvalue=false;
        let allowedNumbers=['7','8','6','9'];
           
            if( value!=null && value.length>1 && allowedNumbers.includes(value.charAt(0)) )
            {
                returnvalue=true;
            }
//alert(value+"----"+ returnvalue);
            return returnvalue;
        }


    const validation=Yup.object().shape(
        {
            firstname:Yup.string().required("First Name is required").min(5).max(10),
            isEducated:Yup.string().required("Education is required"), 
           
            mobileNo: Yup.string().ensure().when('isEducated', {
                is: 'yes',
                then: Yup.string().required()
                .test("invalid","invalid Mobile NO ${value}", (value)=> validateMobileNo(value) ),
              }),
   
         educationQualifications:Yup.array().of(
            Yup.object().shape({
                course:Yup.string().required("course is required")

            })
            
         )
        }
    );
  

    const formIk=useFormik( {
        enableReinitialize:true,

        initialValues:{
            institute:'',
            firstname:'',
            fathername:'',
            aadhaar:'',
                mobileNo:'',
                isEducated:'',
            educationQualifications:[
                {
                  course:'',
                  univercity:'',
                  marks:''  
                }
            ]
        },
       onSubmit:values=>{
           alert(JSON.stringify(values) );
       },
       validationSchema:validation

      
    });

function clrarCourse()
{
 // alert(formIk.values.firstname);  
    formIk.setFieldValue("fathername","testing");
    formIk.setFieldValue("educationQualifications",[
        {
          course:'',
          univercity:'',
          marks:''  
        }
    ]  );
}


return (
<>

<FormikProvider value={formIk} >
<form onSubmit={formIk.handleSubmit}>

    <select name="institute" onChange={formIk.handleChange} >
       <option value=""> --select------- </option>     
    <option value="1"> test inst1 </option>
    <option value="2"> test inst2 </option>
    <option value="3"> test inst3 </option>
    </select>

Name : <input type="text" name="firstname" value={formIk.values.firstname} onChange={formIk.handleChange}></input>
<br></br>
<ErrorMessage  name="firstname"/>
<br></br>
aadhaarNO <input type="number" step="any" maxLength="12" name="aadhaar" onChange={formIk.handleChange}></input>

<br></br>

Mobile NO <input type="text" name="mobileNo" onChange={formIk.handleChange} ></input>
<ErrorMessage  name="mobileNo"/>
<br></br>

Father Name : <Field type="text" name="fathername"  ></Field>

<br></br>
<br></br>
<br></br>

    Is educated  <Field type="radio"  name="isEducated" value="yes"/> Yes &nbsp;
    <Field type="radio"  name="isEducated" value="No" onClick={clrarCourse} /> No
    <br></br>
    <ErrorMessage  name="isEducated"/>
<br></br>
<br></br>
{ formIk.values.isEducated=='yes' &&
<FieldArray name="educationQualifications">
{
    (formikDetails)=>{

        console.log(formikDetails);
        
     return   formikDetails.form.values.educationQualifications.map(
            (educationDetails,index)=>{

return <> 
      { (index==0)? <> <button type="button" onClick={ ()=> formikDetails.push() } > Add </button> <br></br><br></br><br></br> </> :''}
      <br></br><br></br><br></br> 
       course:  <Field type="text" name={`educationQualifications[${index}].course`}  ></Field>
       <ErrorMessage  name={`educationQualifications[${index}].course`}/>
     &nbsp; &nbsp; 
     univercity:  <Field type="text" name={`educationQualifications[${index}].univercity`}  ></Field>
     &nbsp; &nbsp; 
     marks:  <Field type="text" name={`educationQualifications[${index}].marks`} ></Field>   
     
     { (index!=0)? <> <button type="button" onClick={ ()=> { formikDetails.remove()} } > Remove </button> <br></br><br></br><br></br> </> :''}
     
     

</>

            }


        )


    }



}

</FieldArray> }

<br></br>
<br></br>

<button type="submit"> Submit</button>
</form>
</FormikProvider>
</>

)



}

export default FormikSample;
