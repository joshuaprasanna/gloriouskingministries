import { Col, Row } from "react-bootstrap";
import logo from "./download.jpg";
import logo1 from "./new_icon_by_god_thesupreme_ddfwavf-fullview.png";
import logo2 from "./Screenshot 2022-12-15 131433.png";
import logo3 from "./Screenshot 2022-12-15 131501.png";
import { Nivastabs } from "./Nivastabs";
import SimpleImageSlider from "react-simple-image-slider";
import { Nivaspopup } from "./nivaspopup";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Useeffectuse } from "../Useeffectjoshua";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { NiasLatesttabs } from "./NivasLatesttabs";

export function Nivasform() {




  const images = [
    { url: "https://assets.thehansindia.com/h-upload/2021/10/26/1119022-iit-rankers.webp" },
    { url: "https://images.newindianexpress.com/uploads/user/imagelibrary/2021/10/27/w900X450/felicitates.jpg?w=400&dpr=2.6" },
    {
      url: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-tfvvjg605k774cc039o1ho82t5-20220616224620.Medi.jpeg",
    },
    { url: "https://cache.careers360.mobi/media/article_images/2022/7/5/ANDHRA_PRADESH_CHIEF_MINISTER_YS.jpg" }

  ];

  const List = [
    { url: "https://jnbnivas.apcfss.in/img/covid6.png" },
    { url: "https://jnbnivas.apcfss.in/img/covid4.png" },
    {
      url: "https://jnbnivas.apcfss.in/img/covid2.png",
    },
    { url: "https://jnbnivas.apcfss.in/img/covid3.png" }

  ];


  /**Boot strap table Api hit */
  const [getHolidaysList, setHolidaysList] = useState([])

  function GetStudentDetails() {
    axios.get("https://dummyjson.com/products").then((response) => {
     // setHolidaysList(response.data.products);
     setHolidaysList(response.data.products.filter((row)=>{return row.id<=10}));
      console.log("data", response.data.products)

    });
  }
 


  useEffect(() => {
    GetStudentDetails()
  }, [])
  return (


    <>


      <Row style={{ backgroundColor: "#29314a", height: "120px" }}>

        <h5 style={{ fontSize: "20px", padding: "10px", color: "white", justifyContent: "center", marginLeft: "400px" }}>
          <img
            src={logo}
            className="img-responsive"
            style={{
              marginRight: "10px",
              height: "90px"
            }}
          />

          ANDHRA PRADESH &nbsp;
          RESEDENTIAL SCHOOLS & HOSTELS
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             &nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;
          <Nivaspopup></Nivaspopup>
        </h5>



      </Row>
      <Row style={{ backgroundColor: "white", height: "50px" }} >
        <NiasLatesttabs></NiasLatesttabs>
      </Row>

      <Row md={12} style={{ backgroundColor: "#3b8edb", height: "50px", width: "1825px", marginLeft: "20px" }}>

        {/* <Row md={2} style={{backgroundColor:"white", height:"5px"}}></Row>         */}

        <marquee direction="left">
          <b
            style={{
              fontFamily: "sans-serif",
              color: "white"
            }}
          >
            {<img src={logo1} style={{ height: "30px" }} />}
            &nbsp;IMPORTANT NOTE: Hostel Biometric Attendance Should Be Marked Between 05:00 TO 09:00 (OR) 06:00 TO 09:00
          </b>
        </marquee>

      </Row>
      <br></br>
      <Row md={12} >
        
          {/* style={{ height:"50px",marginLeft:"20px",marginBottom:"10px"}} */}

          {/* { <img src={logo2} style={{ height: "350px" , width:"950px",marginRight:"20px"}} /> } */}
          <div className="App">
      
          <table   style={{marginLeft:"20px",marginBottom:"20px"}}>
            <thead style={{color:"black", fontWeight:"bold",color:"white", }}>
            <Row  >
              <Col  style={{border:"1px solid black", width:"150px",backgroundColor:"#373d78"}} >Dept</Col>
              <Col style={{border:"1px solid black", width:"150px",backgroundColor:"#373d78"}} >inst's</Col>
              <Col style={{border:"1px solid black", width:"150px",backgroundColor:"#373d78"}}>Total Students</Col>
              <Col style={{border:"1px solid black", width:"150px",backgroundColor:"#373d78"}} > Student Attendance</Col>
              <Col  style={{border:"1px solid black", width:"150px",backgroundColor:"#373d78"}}> Total Employees</Col>
              <Col style={{border:"1px solid black", width:"150px",backgroundColor:"#373d78"}}> Employee Attendance</Col>
              
            </Row>
            </thead>
        {/* <thead> */}
          {/* <tr></tr>
          <tr>
          <th>Dept</th>
            <th>inst's</th>
            <th>Total Number Of Students</th>
            <th>Student Attendance</th>
            <th>Total Num of Employees</th>
            <th>Total Num of Employees</th>
            <th>Employee Attendance</th>
            <th>Consumption Amount</th>
          </tr>
        </thead> */}
        <tbody>
        <div className="posts">
        {getHolidaysList.map((post) => {
          
          return (
            <div key={post.id} className="post" >

             <Row>              <Col  style={{border:"1px solid black", width:"150px",backgroundColor:"#a7a5d1"}}>{post.id}</Col>
              <Col  style={{border:"1px solid black", width:"150px",backgroundColor:"#f0c5cf"}}>{post.rating}</Col>
              <Col  style={{border:"1px solid black", width:"150px",backgroundColor:"#a9dff5"}}>{post.stock}</Col>
              <Col  style={{border:"1px solid black", width:"150px",backgroundColor:"#bed0fa"}}>{post.price}</Col>
              <Col  style={{border:"1px solid black", width:"150px",backgroundColor:"#f0c5cf"}}>{post.price}</Col>
              <Col  style={{border:"1px solid black", width:"150px",backgroundColor:"#ebad7a"}}>{post.price}</Col>  
              </Row>

            </div>
            
          )
        })}
        </div>
        </tbody>
      </table>
     
      <SimpleImageSlider
            width={930}
            height={330}
            images={List}
            showBullets={true}
            showNavs={true}
            style={{marginTop:"-330px",marginLeft:"930px"}}
          />

  {/* { <img src={logo3} style={{ height: "301px" , width:"920px",marginTop:"-390px",marginLeft: "880px"}} /> }   */}
    </div>
    </Row>
    <Row md={12} style={{ backgroundColor: "#537699", height: "50px", width: "1825px", marginLeft: "20px" }}>

{/* <Row md={2} style={{backgroundColor:"white", height:"5px"}}></Row>         */}

<marquee direction="left">
  <b
    style={{
      fontFamily: "sans-serif",
      color: "white"
    }}
  >
    {<img src={logo1} style={{ height: "30px" }} />}
    &nbsp; IMPORTANT NOTE: Hostel Biometric Attendance Should Be Marked Between 05:00 TO 09:00 (OR) 06:00 TO 09:00
  </b>
  <br></br><br></br><br></br>
</marquee>

</Row>
          {/* <BootstrapTable
            keyField="id"
            data={getHolidaysList}

            columns={columns}
            ss pagination={paginationFactory()}
            striped
            hover
          // bootstrap4
          /> */}
       
       

       
    
      <Row md={12} >
        <Col md={4} style={{ padding: "10px", }}>


          <SimpleImageSlider
            width={586}
            height={240}
            images={images}
            showBullets={true}
            showNavs={true}
          />

        </Col>

        <Col md={4}>

          <h4>Welcome To <b style={{ color: "#e0773a" }}>Residentials Schools & Hostels</b></h4>
          AP Government has introduced Jnana Bhumi AP Students scholarship to provide assistance for students

          seeking higher education. Students can register with the Jnana Bhumi official portal, jnanabhumi.ap.gov.in to avail the

          scholarship from the AP Government. Here we have given the complete information about Jnana Bhumi AP Students scholarship,

          registration process, contact numbers and other information.Jnana Bhumi AP Students Scholarship Application Renewal/ Fresh Web Portal @ jnanabhumi.ap.gov.in
        </Col>
        <Col md={4}>
          <h4 style={{ color: "#e0773a" }}>LATEST NOTIFICATIONS</h4>
          <Row md={4} style={{ backgroundColor: "#f5babe", height: "60px" }}>
            <p>  Resedential Schools  Hostels</p>

          </Row>
          <Row md={4} style={{ backgroundColor: "#6dd1a2", height: "60px" }}>
            <p>A Govt. Of Andra Pradesh Intiative </p>

          </Row><Row md={4} style={{ backgroundColor: "#7ed7f7", height: "60px" }}>
            <p>Resedential Schools  Hostels</p>

          </Row><Row md={4} style={{ backgroundColor: "#deaa62", height: "60px" }}>
            <p>A Govt. Of Andra Pradesh Intiative</p>

          </Row>

        </Col>

      </Row>
      
<Row md={2} style={{backgroundColor:"#29314a"}}> <h5 style={{marginLeft:"1510px",color:"white"}}>Desighned & Developed By <b style={{color:"#e39b59"}}>APCFSS</b></h5></Row>
    
     



    </>



  )


}