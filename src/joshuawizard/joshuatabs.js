import { Joshone } from "./joshone";
import { Joshtwo } from "./joshtwo";
import { Joshthree } from "./joshthree";
import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import * as Yup from "yup";
const { useFormik, FormikProvider, yupToFormErrors } = require("formik");

export function Joshuatabs()
{
    
    let tab1Validation=Yup.object().shape({
        Messages:Yup.string().required("Messages is required"),
        Spam:Yup.string().required("Spam is required"),
    });

    let tab2Validation=Yup.object().shape({
        Outbox:Yup.string().required("Outbox is required"),
        Inbox:Yup.string().required("Inbox is required"),
    });

    let tab3Validation=Yup.object().shape({
        Templates:Yup.string().required("Templates is required"),
        Recieved:Yup.string().required("Recieved is required"),
    });
    const [tabInfo,setTabInfo] =useState({currentTab:'first',
    first:tab1Validation,second:tab2Validation,third:tab3Validation,
    firstInitialValues:{  Messages:'',
    Spam:''},
    secondInitialValues:{
        Outbox:'',
        Inbox:'',
    },
    thirdInitialValues:{
        Templates:'',
        Recieved:''
    }
});


function getInitialValues()
{
    let cTab=tabInfo.currentTab;
    cTab=cTab+"InitialValues";
    return tabInfo[cTab];
}
function getTabValidation()
{
let cTab=tabInfo.currentTab;
return tabInfo[cTab];
}

let formik=useFormik({

enableReinitialize:true,
initialValues:getInitialValues()  ,
onSubmit:(values)=>{

    alert(JSON.stringify(values) );
    if( tabInfo.currentTab =='first')
    {

 setTabInfo({...tabInfo,currentTab:'second'});
    }
    if( tabInfo.currentTab =='second')
    {

 setTabInfo({...tabInfo,currentTab:'third'});
    }

},
validationSchema: getTabValidation()

});




    return<>
   
    {/* {JSON.stringify(formik.values)} */}

      <FormikProvider value={formik}>

<form onSubmit={formik.handleSubmit} className="btn btn-dark">
   
    <Tabs defaultActiveKey="first" onSelect={(event)=>
             setTabInfo({...tabInfo,currentTab:event}) } 
             activeKey={tabInfo.currentTab}  >

        <Tab eventKey="first"   title="JOSHUA" >
            <Joshone></Joshone>
        </Tab>
      
        <Tab eventKey="second" title="PETER">
            <Joshtwo></Joshtwo>
        </Tab >
        <Tab eventKey="third" title="YOHAN">
            <Joshthree></Joshthree>
        </Tab>
    </Tabs>
   

    <br></br>
    <button type="submit" > Submit </button>       
           

    </form>
    
    </FormikProvider>
    </>
}