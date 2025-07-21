import { ErrorMessage, Field, FormikProvider, useFormik } from "formik"
import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { Step1 } from "./StepperForm/Step1";
import { Step2 } from "./StepperForm/Step2";
import { Step3 } from "./StepperForm/Step3";
import * as Yup from "yup";


export function StepperForm()
{
const tabInitDetails={ 
currentTab:'Step1',
initialValues:{ 
    Step1: {firstName:'',lastName:''},
   Step2:{address1:'',address2:''},
   Step3:{passName:'',center:''}
     },
validation:{
       Step1:Yup.object().shape({
        firstName: Yup.string().required("FirstName is required"),
        lastName: Yup.string().required("LastName is required"),
        }),
        Step2:Yup.object().shape({
            address1: Yup.string().required("address1 is required"),
            address2: Yup.string().required("address2 is required"),
        }),
        Step3:Yup.object().shape({
            passName: Yup.string().required("passName is required"),
            center: Yup.string().required("center is required"),
        })

    }
   
};


     

const [tabDetails,settabDetails]=useState(tabInitDetails);

       
function getinitialValues()
{
    return tabDetails.initialValues[tabDetails.currentTab];

}
function getValidation()
{
   
return tabDetails.validation[tabDetails.currentTab];    
}


         const formIk=useFormik({
                initialValues:getinitialValues(),
                enableReinitialize:true,
                onSubmit:values=>{
                 alert(JSON.stringify(values));
                    if(tabDetails.currentTab=='Step1')
                    {
                        settabDetails({...tabDetails,currentTab:"Step2"} );
                    }

                    if(tabDetails.currentTab=='Step2')
                    {
                        settabDetails({...tabDetails,currentTab:"Step3"} );
                    }
                },
                validationSchema:getValidation()

    });



return <> 
{JSON.stringify(tabDetails.currentTab)}
{JSON.stringify(formIk.errors)}
<br></br>
<br></br>

{JSON.stringify(formIk.values)}
<br></br>
<br></br>

<FormikProvider value={formIk} >
<form onSubmit={formIk.handleSubmit}>
<Tabs defaultActiveKey={tabDetails.currentTab} activeKey={tabDetails.currentTab} id="controlled-tab-example" className="mb-3"
 onSelect={(event)=> {return settabDetails( {...tabDetails,currentTab:event})} } >
  <Tab eventKey="Step1" title="Step1" disabled={()=>(tabDetails.currentTab=='Step1')}  >
    <Step1></Step1>
  </Tab>
  <Tab eventKey="Step2" title="Step2" disabled={()=>(tabDetails.currentTab=='Step2')}>
  { <Step2></Step2> }
  
      </Tab>
  <Tab eventKey="Step3" title="Step3" disabled={()=>(tabDetails.currentTab=='Step3')}>
  <Step3></Step3>
 
  </Tab>
</Tabs>   
<br></br>
<button type="submit">  Submit</button>
</form>
</FormikProvider>
 </>


}