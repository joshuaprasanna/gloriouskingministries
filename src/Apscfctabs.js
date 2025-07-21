import { Button } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


export function  Apscfctabs()
{ 


    return( 
        
        <>
        <Tabs>
       
        
          <TabList style={{backgroundColor:"#0076bf",color:"white"}}>
          &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
        &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; 
        &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
        &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
          <Tab>STUDENT INFORMATION</Tab>
      <Tab>DASHBOARD</Tab>
      <Tab>ABOUT US</Tab>
      <Tab>LIST OF DISTRICT OFFICERS SC WELFARE DEPT.</Tab>
      <Tab>CONTACT US</Tab>
      &nbsp;&nbsp; &nbsp;
    </TabList>

    <TabPanel>
      <h2></h2>
    </TabPanel>
    <TabPanel>
      <h2></h2>
    </TabPanel>
    <TabPanel>
      <h2></h2>
    </TabPanel>
    <TabPanel>
      <h2></h2>
    </TabPanel>
    <TabPanel>
      <h2></h2>
    </TabPanel>
    
  </Tabs>
  </>
  )

};