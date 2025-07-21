import { Field, FieldArray, FormikProvider, useFormik } from "formik"
import { Col, Form, Row } from "react-bootstrap";
import logo from "./download (1).png";
import logo1 from "./nav1.png";
import logo2 from "./nav2.png";
import logo3 from "./nav3.png";
import logo4 from "./download (1).png";
import logo5 from "./download (1).png";
import SimpleImageSlider from "react-simple-image-slider";
import { AiFillCodepenCircle } from "react-icons/ai";

export function NationalportalofIndia (){

    const images = [
        { url: "https://cbpssubscriber.mygov.in/assets/uploads/flYHd7E7b2W2XRtP" },
        { url: "https://www.india.gov.in/sites/upload_files/npi/files/spotlights/pm-janmamn.jpg" },
        {
          url: "https://www.india.gov.in/sites/upload_files/npi/files/khelo-india-games-2023.jpg",
        },
        { url: "https://www.india.gov.in/sites/upload_files/npi/files/end-review23.jpg" },
        { url: "https://www.india.gov.in/sites/upload_files/npi/files/my-bharat.jpg" },
        { url:"https://www.india.gov.in/sites/upload_files/npi/files/pm_awards.jpg"}
      ];

return(
    <>
    <FormikProvider>
        <Row md={12} style={{backgroundColor:"#e1e3e1",height:"40px"}}>
        
  
        </Row>

        <Row md={12} style={{backgroundColor:"white",height:"120px"}}>
            <h1></h1>
            <img
            src={logo}
            className="img-responsive"
            style={{
                height:"100px",
                width:"350px",
                marginLeft:"400px",
                marginTop:"-00px",
              
            }}
          />
          
          <AiFillCodepenCircle  
          
          style={{height:"60px",marginTop:"-70px"}}/>
          
          {/* <<BsBoxFill />  
          
          style={{height:"60px",marginTop:"-70px",marginLeft:"70px"}}/>
          */}
           
        
        </Row>
        <Row md={12} style={{backgroundColor:"#6290d1",height:"70px"}}>
            
        </Row>
        <SimpleImageSlider
              width={1860}
              height={400}
              images={images}
              showBullets={true}
              showNavs={true}
            />
    <Row>
    <Col md={2} style={{marginLeft:"600px"}}>
        <h1 style={{fontStyle:"",fontSize:"18px"}}>News Highlights
</h1>
    </Col>
    <Col md={2} >
        <h1 style={{fontSize:"18px"}}>Most Requested Information & Forms
</h1>
    </Col>
    <Col md={2} >
        <h1 style={{fontSize:"18px"}}>Activities & Initiatives
</h1>
    </Col>
        
        
    </Row>
    <Row md={7}><h3 style={{backgroundColor:"#214c6b",height:"5px"}}></h3></Row>

    <Row >
 <Col md={2} style={{marginLeft:"600px"}}>
    
    <table border="1" style={{height:"300px",width:"280px"}}>
        <br></br><br></br>
   <b>*</b> <a href="https://pib.gov.in/PressReleaseIframePage.aspx?PRID=1999407 " target="_blank" title="External site that opens in a new window " class="ext-link-ajax">Prime Minister extends greetings on the occasion of National...</a>   

  <div><b>*</b> <a href="https://pib.gov.in/PressReleaseIframePage.aspx?PRID=1999400 " target="_blank" title="External site that opens in a new window " class="ext-link-ajax"> 1132 personnel of Police, Fire Service, Home Guard &amp; Civil...</a> </div>     
<div> <b>*</b><a href="https://pib.gov.in/PressReleaseIframePage.aspx?PRID=1999406 " target="_blank" title="External site that opens in a new window " class="ext-link-ajax">Prime Minister greets people of Himachal Pradesh on their...</a></div>
<table></table>
    </table>
 </Col><Col md={2}>
    <h1>hii</h1>
 </Col><Col md={2}>
    <h1>hii</h1>
 </Col>

    </Row>
    </FormikProvider>
    </>
)




}