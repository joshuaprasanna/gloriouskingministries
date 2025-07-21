import { Col, Row } from "react-bootstrap";
import logo from "./AP-CM.jpg";
import logo1 from "./550-5507868_ap-government-new-logo-hd-png-download.png";

 export function Overseas()
{


return(

    <>
<Row md={2} style={{backgroundColor:"ButtonFace"}} >
    <Col md={12}> 
    <img
            src={logo}
            className="img-responsive"
            style={{
                padding:"10px",
                marginLeft:"200px",
             height:"190px"
            }}
          />
          <b style={{marginLeft:"120px"}}>JAGANANNA VIDESHI VIDHYA DHEEVENA</b>
<img
            src={logo1}
            className="img-responsive"
            style={{
                padding:"10px",
                marginLeft:"400px",
             height:"180px"
            }}
          />
    </Col>
</Row>

    </>
)


}