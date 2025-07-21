import { Tab, Tabs } from "react-bootstrap";
import { Nivastabone } from "./Nivastabone";
import { Nivastabtwo } from "./Nivastabtwo";
import { Nivastabthree } from "./Nivastabthree";
import { Nivastabfour } from "./Nivastabfour";
import { Nivastabfive } from "./Nivastabfive";
import { Nivastabsix } from "./Nivastabsix";
import { Nivastabseven } from "./Nivastabseven";


export function Nivastabs()
{


return(


<>

<Tabs style={{backgroundColor:"#86b6e3",color:"black"}} className="nav-link-custome">


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


<Tab  title="Home" >
        
        <Nivastabone></Nivastabone>
        </Tab>
        <Tab  title="STUDENT INFORMATION" >
        
        <Nivastabtwo></Nivastabtwo>
        </Tab>
        <Tab  title="DASHBOARD" >
        
        <Nivastabthree></Nivastabthree>
        </Tab>
        <Tab  title="ABOUT US" >
        
        <Nivastabfour></Nivastabfour>
        </Tab>
        <Tab  title="LIST OF DISTRICT OFFICERS SC WELFARE DEPT." >
        
        <Nivastabfive></Nivastabfive>
        </Tab>
        <Tab  title="CONTACT US" >
        
        <Nivastabsix></Nivastabsix>
        </Tab>
        


</Tabs>

</>


)



}