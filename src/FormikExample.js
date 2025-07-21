import { ErrorMessage, Field, FieldArray, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";


function FormikExample(){




    // const validation=Yup.object().shape(
    //     {
    //         Name:Yup.string().required("First Name is required").min(5).max(10),
    //         isEducated:Yup.string().required("Education is required"), 
           
    //         mobileNo: Yup.string().ensure().when('isEducated', {
    //             is: 'yes',
    //             then: Yup.string().required()
    //             .test("invalid","invalid Mobile NO ${value}", (value)=> validateMobileNo(value) ),
    //           }),
   
    //      educationQualifications:Yup.array().of(
    //         Yup.object().shape({
    //             course:Yup.string().required("course is required")

    //         })
            
    //      )
    //     }
    // );



    const formIk=useFormik( {
        enableReinitialize:true,

        initialValues:{
          
            Name:'',
           
            Hno:'',
            Adress:'',
            isEducated:'',
            cfss:[
                {
                  react:'',
                  struts:'',
                  springboot:''  
                }
            ]  
            
        },
       onSubmit:values=>{
           alert(JSON.stringify(values) );
        //    console.log(JSON.stringify(values));
       },
   
    //    validationSchema:validation
    });

    
function clrarCourse()
{
//   alert(formIk.values.Name);  
    formIk.setFieldValue("Adress","hello");
    formIk.setFieldValue("cfss",[
        {
          react:'',
          struts:'',
          springboot:''  
        }
    ]  );
}


    return(

        <>
        <FormikProvider  value={formIk}>
            <form onSubmit={formIk.handleSubmit}>
        Name:<input type="text" name="firstname" value={formIk.values.firstname} onChange={formIk.handleChange}></input>
        <br/><br/>
        {/* <ErrorMessage  Name="name"/> */}

        Hno:<input type="number" name="houseno" onChange={formIk.handleChange}></input>
        <br/><br/>
        Adress:<Field type="text" name="Adress"></Field>

        <br/><br/>


        <button type="submit"> Submit</button>
 Is educated  <Field type="radio"  name="isEducated" value="yes" /> Yes &nbsp;
    <Field type="radio"  name="isEducated" value="No"  onClick={clrarCourse}/> No
    <br></br>
   
<br></br>
<br></br>
{ formIk.values.isEducated=='yes' &&

        <FieldArray name="cfss">
            {
        (formikDetails1)=>{
            console.log(formikDetails1);
        
     return   formikDetails1.form.values.cfss.map(
            (educationDetails,index)=>{


                return <> 
                 { (index==0)? <> <button type="button" onClick={ ()=> formikDetails1.push() } > Add </button> <br></br><br></br><br></br> </> :''}
      <br></br><br></br><br></br> 

            react:  <Field type="text" name={`cfss[${index}].react`}  ></Field>
            &nbsp; &nbsp; 
            struts:  <Field type="text" name={`cfss[${index}].struts`}  ></Field>
            &nbsp; &nbsp;
            springboot:  <Field type="text" name={`cfss[${index}].springboot`}  ></Field>

            { (index!=0)? <> <button type="button" onClick={ ()=> { formikDetails1.remove()} } > Remove </button> <br></br><br></br><br></br> </> :''}




        
          


            



</>

        }
     )
    }
    }
        

         </FieldArray>  } 
        </form>
        </FormikProvider>
        </>
    )
}
export default FormikExample;