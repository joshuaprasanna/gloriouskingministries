import { Button } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Nivaspopup } from './nivaspopup';

export function  NiasLatesttabs()
{ 


    return( 
        
        <>
        <Tabs>
       
        
          <TabList style={{backgroundColor:"#3d7d5f",color:"white"}}>
          &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
        &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; 
        &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
        &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
          <Tab>STUDENT INFORMATION</Tab>
      <Tab>DASHBOARD</Tab>
      <Tab>ABOUT US</Tab>
      <Tab>LIST OF DISTRICT OFFICERS SC WELFARE DEPT.</Tab>
      <Tab>CONTACT US</Tab>
      &nbsp;&nbsp; &nbsp;<Nivaspopup></Nivaspopup>
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