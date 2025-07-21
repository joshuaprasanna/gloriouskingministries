import { ErrorMessage, Field } from "formik";

function FormBaiscDetails({formIk})
{
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
    

return <> 
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
DOB : <Field type="date" name="dob" ></Field>
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

Color : <Field type="checkbox" name="color" value="red" ></Field>  Red 
&nbsp;<Field type="checkbox" name="color" value="green" ></Field> Green  
&nbsp;&nbsp; <Field type="checkbox" name="color" value="orange" ></Field> Orange 
<br></br>
<ErrorMessage  name="color"/>

</>

}

export default  FormBaiscDetails;