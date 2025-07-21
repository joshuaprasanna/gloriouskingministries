import { ErrorMessage, Field, FieldArray, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
 
function FormikWithRadioButton()
{

   const validation= Yup.object().shape(
        {
           
            array:Yup.array().of( Yup.object().shape({
                gender:Yup.string().required("gender").nullable(),
                marks:Yup.string().required("marks").nullable()
            })) 
        }
    );

    


    const formik=useFormik({
        initialValues:{
            // subject:'',
            // test:false,
            // marks:'',
            // ckSubject:'',
             array:[
                {gender:'',marks:'' },
                {gender:'',marks:''}
            ]
       },
       validationSchema :validation,
       onSubmit:values=>{
           alert(JSON.stringify(values));
       }

    })

    function test()
    {
        
        formik.setFieldValue("test",true);
    }

    function test1()
    {
        
        formik.setFieldValue("test",false);
    }


return (
<>
<FormikProvider value={formik}>
<form onSubmit={formik.handleSubmit}>

{/* Subject  :  <input type="radio" value="english" name="subject" onClick={(event)=>{formik.handleChange(event);test()}  }   ></input> English <br></br>
            <input type="radio"  name="subject" value="telugu"  onClick={(event)=>{formik.handleChange(event);test1()}  } ></input> Telugu


            <input type="checkbox" value="english" name="ckSubject" onClick={(event)=>{formik.handleChange(event);test()}  }   ></input> English <br></br>
            <input type="checkbox"  name="ckSubject" value="telugu"  onClick={(event)=>{formik.handleChange(event);test1()}  } ></input> Telugu
 */}

{/* { (formik.values.test==true)? <>Marks  <input type="text" value={formik.values.marks} onChange={formik.handleChange} name="marks"></input>
</>:'' } */}
{/* 
{ (formik.values.test==true)? 
:'';
} */}

<FieldArray name="array">
  {
  (parentObj) =>
  {
console.log(parentObj.form.values.array);     
    
return (<> 
{parentObj.form.values.array.map( (obj,index)=>
{
    
  return   <> 
    { index==0 ? <button type="button" onClick={ ()=>parentObj.push({ gender:'',marks:''})  }> + </button> :''  }
  
  Gender :<Field type="text"  name={`array[${index}].gender`} />
  <ErrorMessage name={`array[${index}].gender`}></ErrorMessage>
 
    Marks : <Field type="text" name={`array[${index}].marks`} />
    <br></br><br></br>
    </>


}
) }



</>)

    
  }
 
  
}
</FieldArray>

{JSON.stringify(formik.errors) }
<br></br><br></br><br></br>
<button type="submit"> validate</button>
</form>
</FormikProvider>
</>


)

}

export default FormikWithRadioButton;
