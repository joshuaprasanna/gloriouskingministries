import { Col, Row } from "react-bootstrap";
import logo from "./affi.png";
import logo1 from "./3.png";
import logo2 from "./93.png";
import logo3 from "./5.png";

export function Affliationhead()
{


    return(


        <>
        <Row style={{backgroundColor:"#15667d"}}>
        <Col xs={2} sm={2} md={2} lg={2}>
          {" "}
          <img
            src={logo}
            className="img-responsive"
            style={{
              padding: "10px",
              height: "90px",
              width: "auto",
              marginTop: "20px!important",
              marginLeft: "20px",
            }}
          />
        </Col>
      
        </Row><br></br>
       
        <div className="container" style={{border:"550px solid lightyellow",marginLeft:"-100px"}}>


             <div className="container" style={{border:"150px solid #f0f4f5", marginTop:"-500px",marginLeft:"-400px"}} >

             <img
            src={logo1}
            className="img-responsive"
            style={{
              padding: "10px",
              height: "140px",
              width: "auto",
              marginTop: "-100px",
              marginLeft: "-70px",
            }}></img>
              
            </div> 
            <div className="container" style={{border:"150px solid #f0f4f5", marginTop:"-340px",marginLeft:"-25px"}} >
          
            <img
            src={logo2}
            className="img-responsive"
            style={{
              padding: "10px",
              height: "140px",
              width: "auto",
              marginTop: "-100px",
              marginLeft: "-70px",
            }}></img>
          
          </div>
          <div className="container" style={{border:"150px solid #f0f4f5", marginTop:"-340px",marginLeft:"350px"}} >
           
          <img
            src={logo3}
            className="img-responsive"
            style={{
              padding: "10px",
              height: "140px",
              width: "auto",
              marginTop: "-100px",
              marginLeft: "-70px",
            }}></img>
            </div> 
         
        </div>
        </>
    )
}