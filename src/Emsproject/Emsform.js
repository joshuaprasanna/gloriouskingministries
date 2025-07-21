import { Col, Row } from "react-bootstrap";
import { RotateLoader } from "react-spinners";
import logo from "./download.jpg";
import logo1 from "./latestnews.JPG";
import { motion } from "framer-motion"
import { Emstabs } from "./Emstabs";
import SimpleImageSlider from "react-simple-image-slider";
import { Hover, Trigger,TriggerComponent,HoverComponent,optionsCursorTrueWithMargin,ReactHover } from "react-hover";
import { Framermotion } from "./Framermotion";
import { useDispatch } from "react-redux";
import { Emspopup } from "./Emspopup";


 export function Emsform()
{


    // function jblogin() {
    //     dispatch({ type: "SHOWPOPUP" });
    //     dispatch({
    //       type: "UPDATEMODALDATA",
    //       payload: {
    //         modalHeading: "Log In",
    //         body: [{ displayText: "username" }, { displayText: "password" }],
    //       },
    //     });
    //   }
    

    const images = [
        { url: "https://menglish.sakshi.com/sites/default/files/article_images/2021/08/19/seats_0.jpg" },
        { url: "https://images.newindianexpress.com/uploads/user/imagelibrary/2022/5/20/w900X450/nellore_government_schools.jpg?w=400&dpr=2.6" },
        {
          url: "https://brainfeedmagazine.com/wp-content/uploads/2019/12/pledge-resp.jpg",
        },
        { url: "https://studentinfo.ap.gov.in/images/slider4.jpg" },
        { url: "https://www.india.com/wp-content/uploads/2021/04/School_students_PTI_1200_10042021-compressed.jpg" }
      ];

return(

    <>
     <Row style={{backgroundColor:"white", height:"120px"}}>
     
            <h5 style={{fontSize:"20px", padding:"10px",color:"#295eb3",justifyContent:"center",marginLeft:"400px"}}>
            <img
            src={logo}
            className="img-responsive"
            style={{
               marginRight:"10px",
            height:"90px"
            }}
          />
        
            EDUCATION MANAGEMENT SYSTEM &nbsp;
DIRECTORATE OF SCHOOL EDUCATION
&nbsp;
&nbsp;<Emspopup></Emspopup>
</h5>

</Row>
    <Row style={{backgroundColor:"#e0afbe", height:"50px"}} >
<Emstabs>


         
</Emstabs> 
    </Row>

        <Col  md={12} style={{backgroundColor:"#f2f2f2", height:"800px"}}>
            <Col md={6} style={{backgroundColor:"white", height:"800px",marginLeft:"450px"}} > 
           
                  
<marquee direction="left">
                    <b
                      style={{
                        fontFamily: "sans-serif",
                      }}
                    >
                      <img src={logo1} style={{ height: "30px" }} />
                      &nbsp;DEAR HMs / PRINCIPALS CLASS 11 AND 12 STUDENTS DATA HAS TO BE ENTERED 
    IN https://jnanabhumi.ap.gov.in/ PORTAL ONLY. EDUCATION MANAGEMENT SYSTEM
                    </b>
                  </marquee>
  
                  <SimpleImageSlider
              width={860}
              height={300}
              images={images}
              showBullets={true}
              showNavs={true}
            />
           {/* <motion.ul>
      <motion.li  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} style={{ backgroundColor:"#f2e1e6",width:"200px",
      height:"200px",padding:'80px 50px 50px 45px', marginTop: '10px',border:"1px solid pink",
    }}>
      <a href="https://aplpcet.apcfss.in/" style={{color:"black" }}><p>AP LPCET </p> </a>
      {/* <button type="submit"><CourseOracle></CourseOracle></button> */}
      {/* </motion.li>
      <motion.li  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} style={{ backgroundColor:"#f2e1e6",width:"200px",
      height:"200px",padding:'80px 50px 50px 45px', marginTop: '10px',border:"1px solid pink",
    }}> */}
      {/* <a href="https://aplpcet.apcfss.in/" style={{color:"black" }}><p>AP LPCET </p> </a> */}
      {/* <button type="submit"><CourseOracle></CourseOracle></button> */}
      {/* </motion.li> */}
      
      
      {/* </motion.ul> */}
   
      <Framermotion></Framermotion>
            </Col>
           
         </Col>
         <Col md={12} style={{backgroundColor:"#37446e",height:"350px",}}>

            <h3 style={{color:"white",fontFamily:"unset",marginTop:"10px",textDecorationLine:"underline",}}> &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Related Links &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            &nbsp; &nbsp; &nbsp; &nbsp; 
            &nbsp; &nbsp; &nbsp; &nbsp;Contact Us</h3>
            <br></br>
            <Col style={{marginLeft:"450px",color:"white"}}>
            <li><i class="fa fa-chevron-circle-right" aria-hidden="true"></i>&nbsp;<a href="https://www.ap.gov.in/" target="blank"><b style={{color:"white"}}>Andhra Pradesh Portal</b></a></li>
          <li><i class="fa fa-chevron-circle-right" aria-hidden="true"></i>&nbsp;<a href="https://cse.ap.gov.in/MDM/" target="blank"><b style={{color:"white"}}>Mid Day Meal Scheme</b></a></li>
          <li><i class="fa fa-chevron-circle-right" aria-hidden="true"></i>&nbsp;<a href="http://bseap.org/" target="blank"><b style={{color:"white"}}>Directorate of Government Examinations</b></a></li>
          <li><i class="fa fa-chevron-circle-right" aria-hidden="true"></i>&nbsp;<a href="https://bie.ap.gov.in" target="blank"><b style={{color:"white"}}>Board of Intermediate Education</b></a></li>
          <li><i class="fa fa-chevron-circle-right" aria-hidden="true"></i>&nbsp;<a href="https://cfms.ap.gov.in" target="blank"><b style={{color:"white"}}>CFMS</b></a></li>
          <li><i class="fa fa-chevron-circle-right" aria-hidden="true"></i>&nbsp;<a href="https://www.spandana.ap.gov.in/" target="blank"><b style={{color:"white"}}>SPANDANA</b></a></li>
          
          <Col style={{marginLeft:"450px",color:"white",marginTop:"-150px"}}>

             <li><i class="fa fa-chevron-circle-right" aria-hidden="true"></i>&nbsp;<a href="https://apms.ap.gov.in/apms/" target="blank"><b style={{color:"white"}}>Model Schools</b></a></li>
          <li><i class="fa fa-chevron-circle-right" aria-hidden="true"></i>&nbsp;<a href="https://rmsa.ap.gov.in/RMSA/" target="blank"><b style={{color:"white"}}>RMSA</b></a></li>
		  <li><i class="fa fa-chevron-circle-right" aria-hidden="true"></i>&nbsp;<a href="http://aphermc.ap.gov.in/home.html" target="blank"><b style={{color:"white"}}>APHERMC</b></a></li>
          <li><i class="fa fa-chevron-circle-right" aria-hidden="true"></i>&nbsp;<a href="https://ssa.ap.gov.in/SSA/" target="blank"><b style={{color:"white"}}>Sarva Shiksha Abhiyan</b></a></li>
          <li><i class="fa fa-chevron-circle-right" aria-hidden="true"></i>&nbsp;<a href="https://mhrd.ap.gov.in/MHRD/login.do" target="blank"><b style={{color:"white"}}>Ministry of Human Resource Development</b> </a></li>
          <li><i class="fa fa-chevron-circle-right" aria-hidden="true"></i>&nbsp;<a href="https://sgf.ap.gov.in/SGF/" target="blank"><b style={{color:"white"}}>School Games Federation </b></a></li></Col>
     <br></br>     <br></br>
     <br></br>

<h6 style={{marginLeft:"350px"}}>Designed And Developed By</h6>
<h6 style={{marginLeft:"250px"}}><b>Andhra Pradesh Centre for Financial Systems and Services &nbsp;<a href="https://apcfss.in/" style={{color:"white"}}>(APCFSS)</a></b></h6>
<h6 style={{marginLeft:"350px"}}>Best viewed in all latest browsers</h6>

</Col>
          
         </Col>
         

         
    </>
)

}