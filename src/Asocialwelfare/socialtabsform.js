import { Container, Tab, Tabs } from "react-bootstrap";
import { Socialtabone } from "./socialtab1";
import { Socialtabthree } from "./socialtab3";
import { Socialtabfour } from "./socialtab4";
import { Socialtabtwo } from "./socisltsb2";
import { Navigate, useHistory, useNavigate } from 'react-router-dom';

export function Socialtabsform()
{
    const navigate=useNavigate();


    function hello()
    {

        navigate("/https://socialwelfare.apcfss.in/index.html");   


    }
return(

    <>
    <Tabs style={{backgroundColor:"#ffffd6"}}>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

 <Tab  title="Home" onclick={hello} >						

        <Socialtabone> </Socialtabone>
       </Tab>    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


       <Tab  title="About Us">
       <Socialtabtwo></Socialtabtwo>
       </Tab>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


       <Tab  title="Education ">
       <Socialtabthree></Socialtabthree>
       </Tab>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


       <Tab  title="Our Team">
       <Socialtabfour></Socialtabfour>
       </Tab>

</Tabs>
    </>
)

}