import { Row } from "react-bootstrap";
// import logo from "./download.jpg";
import logo from "./aplogo.png";
import logo1 from "./APSCCFC_Logo.png";
import { NiasLatesttabs } from "./Nivas/NivasLatesttabs";
import { Apscfctabs } from "./Apscfctabs";

 export function Apscfcindex ()
{



return(

<>

<Row style={{ backgroundColor: "#edfbff", height: "120px" }}>

        <h5 style={{ fontSize: "20px", padding: "10px", color: "white", justifyContent: "center", }}>
          <img
            src={logo}
            className="img-responsive"
            style={{
              marginRight: "10px",
              height: "90px",
              marginLeft:"400px"
            }}
          /> 
  <img
            src={logo1}
            className="img-responsive"
            style={{
              marginRight: "10px",
              height: "90px",
              marginLeft:"960px"
            }}
          /> 
 <div>
<h5 style={{color:"black",fontStyle:"normal",marginLeft:"550px",marginTop:"-90px",fontVariant:"all-petite-caps",fontSize:"35px"}} >Andhra Pradesh Scheduled Castes<br/> Co-operative Finance Corporation Ltd, Tadepalli
        </h5></div> 
        </h5>
<Row md={12} style={{width:"10"}}>
        <Apscfctabs></Apscfctabs>
 

        </Row>

      </Row>


</>



)





}