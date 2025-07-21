import * as Yup from "yup";

function validateMobileNo(value)
{
  //  value=value.target.value;
    let returnvalue=false;
let allowedNumbers=['7','8','6','9'];
   
    if( value!=null && value.length>1 && allowedNumbers.includes(value.charAt(0)) )
    {
        returnvalue=true;
    }
    return returnvalue;
}

export const forrmikInitialValues={
    dob: '',
    color:'',
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
}

export const formikValidation=Yup.object().shape(
    {
        firstname:Yup.string().required("First Name is required") 
         .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "). 
         min(5).max(10),

         isEducated:Yup.string().required("Education is required"), 
        mobileNo: Yup.string().ensure().when('isEducated', {
            is: 'yes',
            then: Yup.string().required().min(10,"mmobile number 1").
            max(10)
             .matches(/^[0-9\s]+$/, "Only alphabets are allowed for this field ").
             test("invalid","invalid Mobile NO ${value}",
             (value)=> validateMobileNo (value) )
            
          }),


          color: Yup.array().ensure().when(['isEducated'], {
            is: 'yes',
            then:
             Yup.array().
             required('Permission not checked').min(2).max(2)
          }),

          educationQualifications: Yup.array().ensure().when('isEducated', {
            is: 'yes',
            then: Yup.array().of(
                Yup.object().shape({
                    course:Yup.string().required("course is required")
    
                })
                
             ),
             
          })

     
    }
);

//export default  {validation,forrmikInitialValues};