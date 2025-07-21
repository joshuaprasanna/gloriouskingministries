import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import * as Yup from "yup";
const { useFormik, FormikProvider, yupToFormErrors } = require("formik");
const { TabOne } = require("./Tab1");
const { TabTwo } = require("./Tab2");
const { TabThree } = require("./Tab3");

function TabsForm()
{
    let tab1Validation=Yup.object().shape({
        firstname:Yup.string().required("FirstName is required"),
        lastname:Yup.string().required("LastName is required"),
    });

    let tab2Validation=Yup.object().shape({
        street1:Yup.string().required("street1 is required"),
        street2:Yup.string().required("street2 is required"),
    });

    let tab3Validation=Yup.object().shape({
        tenthMarks:Yup.string().required("tenthmarks is required"),
        interMarks:Yup.string().required("intermarks is required"),
    });

    const [tabInfo,setTabInfo] =useState({currentTab:'first',
    first:tab1Validation,second:tab2Validation,third:tab3Validation,
    firstInitialValues:{  firstname:'',
    lastname:''},
    secondInitialValues:{
        street1:'',
        street2:'',
    },
    thirdInitialValues:{
        tenthMarks:'',
        interMarks:''
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


return <>
{JSON.stringify(formik.values)}
      <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>

          <Tabs defaultActiveKey="first" onSelect={(event)=>
             setTabInfo({...tabInfo,currentTab:event}) } 
             activeKey={tabInfo.currentTab}  >
        <Tab eventKey="first" title="Basic Details" >
        <TabOne></TabOne>
       </Tab>
       <Tab eventKey="second" title="Address">
       <TabTwo></TabTwo>
       </Tab>

       <Tab eventKey="third" title="Qualification">
       <TabThree></TabThree>
       </Tab>


</Tabs>
           <br></br>
    <button type="submit" > Submit </button>       
           


              </form>  

          </FormikProvider>  


</>

}

export default TabsForm;
