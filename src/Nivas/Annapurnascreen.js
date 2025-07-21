import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import logo from "./aplogo.png";
import logo1 from "./overflow - Copy.png";
import VideoPlayer from "react-background-video-player";

// import logo2 from "./1003.png";
// import logo3 from "./1005.png";
// import logo4 from "./1009.png";
// import logo5 from "./1012.png";
// import logo6 from "./1017.png";
// import logo7 from "./1093.png";
// import logo8 from "./1018.png";
// import logo9 from "./1074.png";
// import logo10 from "./1023.png";
// import logo11 from "./1077.png";
// import logo12 from "./1002.png";
// import logo13 from "./1083.png";
// import logo14 from "./1030.png";
// import logo15 from "./1031.png";
// import logo16 from "./1069.png";
// import logo17 from "./10105.png";
// import logo18 from "./1039.png";
// import logo19 from "./1007.png";
// import logo20 from "./1134.png";
// import logo21 from "./1050.png";
// import logo22 from "./1022.png";
// import logo23 from "./1075.png";
// import logo24 from "./1070.png";
// import logo25 from "./1055.png";
// import logo26 from "./1056.png";
// import logo27 from "./1057.png";
// import logo28 from "./1059.png";
// import logo29 from "./1076.png";
// import logo30 from "./1061.png";
// import logo31 from "./1064.png";
// import logo32 from "./1132.png";








export function Annapurnascreen()
{

  const [itemList, setitemList] = useState([])


function GetStudentDetails() {
      axios.get("http://10.10.0.17:8310/jnbnivas/getAvailableStock/?userId=0312-2402-006&ttDate=01-04-2022").then((response) => {
       // setHolidaysList(response.data.products);
       console.log("data", response.data)
       setitemList(response.data.StudentsData);//.filter((row)=>{return row.id<=3})
       
  
      });
    }
   
  
  
    useEffect(() => {
      GetStudentDetails()
    }, [])


return(




    <>
    
    <Row  style={{backgroundColor:"#3f51b5",height:"80px"}}>
    <h5 style={{ fontSize: "20px", padding: "10px", color: "white", justifyContent: "center",  }}>
    <img
            src={logo}
            className="img-responsive"
            style={{
                marginLeft:"80px",
              marginRight: "10px",
              height:"70px"
            }}
          />
            Jnanabhumi
       </h5>
    </Row>
    
    <Row md={2}>   

   
    {/* <img
            src={logo2}
            className="img-responsive"
            style={{
             
            //     marginLeft:"390px",
            // //   marginRight: "10px",
            //    marginTop:"90px",
            opacity:"1000px",
            width:"1600px",
              height:"1160px"
            }}
            
          /> */}
         <img
            src={logo1}
            className="img-responsive"
            style={{
                marginLeft:"390px",
            //   marginRight: "10px",
               marginTop:"90px",
            width:"100px",
              height:"60px"
            }}
            
          />
    <h4 style={{fontFamily:"serif",marginTop:"100px",}}><b>Daily Issues Quantity Used for</b></h4>
    </Row>


<Row md={2} style={{backgroundColor:"ButtonShadow",height:"2px"}}>


</Row>
<br></br>
<Row  style={{backgroundColor:"#e8b048",height:"25px",width:"400px",marginLeft:"400px",justifyContent:"left",color:"white",fontFamily:"sans-serif",}}>

<h6 style={{marginLeft:"60px"}}><b>Eligibility Amount As Per Attendance:</b></h6>
</Row>

<br></br><br></br>
<br></br>
<br></br>

<table   style={{marginLeft:"400px",marginBottom:"20px"}}>
            <thead style={{color:"black", fontWeight:"bold",color:"white", }}>
            <Row  >
            <Col  style={{border:"1px solid white", width:"150px",backgroundColor:"#b2def7",color:"black"}} >S no</Col> 
            <Col  style={{border:"1px solid white", width:"150px",backgroundColor:"#b2def7",color:"black"}} >Item Code</Col> 
              <Col style={{border:"1px solid white", width:"200px",backgroundColor:"#b2def7",color:"black"}} >Item Details</Col>
              <Col style={{border:"1px solid white", width:"150px",backgroundColor:"#b2def7",color:"black"}}>Quantity Available(price)</Col>
              <Col style={{border:"1px solid white", width:"150px",backgroundColor:"#b2def7",color:"black"}} >Total Quantity used</Col>
              <Col  style={{border:"1px solid white", width:"150px",backgroundColor:"#b2def7",color:"black"}}>Expenditure for the Total Quantity used</Col>
              <Col style={{border:"1px solid white", width:"150px",backgroundColor:"#b2def7",color:"black"}}>Closing Balance</Col>
              <Col  style={{border:"1px solid white", width:"150px",backgroundColor:"#b2def7",color:"black"}} >Balanced Amount</Col> 
              
            </Row>
            </thead>
            <tbody>
        <div className="posts">
        {itemList.map((post,i) => {
          
          return (
            <div key={post.id} className="post" >
{/* <img src="https://jnbnivas.apcfss.in/images/items/1005.png" height="100%" width="50%"/> */}
             <Row >         
             <Col  style={{border:"1px solid white", width:"150px",backgroundColor:"#f2e1fc"}}>{i+1}</Col>
             <Col  style={{border:"1px solid white", width:"150px",backgroundColor:"ButtonFace"}}>{post.item_code}</Col>  
             <Col  style={{border:"1px solid white", width:"150px",backgroundColor:"#c6f7ec"}}><img src={`https://jnbnivas.apcfss.in/images/items/${post.item_code}.png`}height="100%" width="50%"/>{post.item_name}</Col>
             <Col  style={{border:"1px solid white", width:"150px",backgroundColor:"#f4f7c6"}}>{post.item_measured_in}</Col>
             <Col  style={{border:"1px solid white", width:"150px",backgroundColor:"#fcd7e6"}}>{post.quantity_used}</Col>
             <Col  style={{border:"1px solid white", width:"150px",backgroundColor:"#d2dffa"}}>{post.quantity_used_amt}</Col>
             <Col  style={{border:"1px solid white", width:"150px",backgroundColor:"#fae9d2"}}>{post.balance_quantity}</Col>  
             <Col  style={{border:"1px solid white", width:"150px",backgroundColor:"#c6f7ec"}}>{post.balance_amount}</Col>
              
              </Row>

            </div>
            
          )
        })}
        </div>
        </tbody>
      </table>
{/* <div className="App">
      <table border={0} style={{marginRight:"500px",width:"1100px",marginLeft:"400px",height:"600px"}}> 
        <tr>
          <th style={{backgroundColor:"white",height:"10px"}}>Sno</th>
          <th></th>
          <th>Item Details</th>
          <th>Quantity Available(price)	</th>
          <th>Total Quantity used</th>
          <th>Expenditure for the Total Quantity used</th>
          <th>Closing Balance
</th>
        </tr>
      
        <tr style={{backgroundColor:"#b2dfed",height:"60px",}}>
          <td style={{width:"100px"}}>1</td>
            <td>
          <img
            src={logo2}
            className="img-responsive"
            style={{
                height:"40px",
                marginLeft:"-60px"
              
            }}
            
          /></td>
          <td ><b>Avalu-ఆవాలు</b></td>
          <td>Male</td>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <br></br>
        <tr style={{backgroundColor:"#f4e6f7",height:"60px"}}>
          <td>2</td>
         <td> <img
            src={logo3}
            className="img-responsive"
            style={{
                height:"40px",
                marginLeft:"-60px"
              
            }}
            
          /></td>
          <td><b>Bellam-బెల్లం</b></td>
          <td>Female</td>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <br></br>
        <tr style={{backgroundColor:"#abb3eb",height:"60px"}}>
          <td>3</td>
          <td> <img
            src={logo4}
            className="img-responsive"
            style={{
                height:"40px",
                marginLeft:"-60px"
              
            }}
            
          /></td>
          <td><b>BLACK GRAM (MINA PAPPU)-మినపపప్పు</b></td>
          <td>Male</td>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <br></br>
        <tr style={{backgroundColor:"#b2dfed",height:"60px"}}>
          <td>4</td>
          <td> <img
            src={logo5}
            className="img-responsive"
            style={{
                height:"40px",
                marginLeft:"-60px"
              
            }}
            
          /></td>
          <td><b>CHILLI POWDER-కారంపొడి</b></td>
          <td>Male</td>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <br></br>
        <tr style={{backgroundColor:"#f4e6f7",height:"60px"}}>
          <td>5</td>
          <td> <img
            src={logo6}
            className="img-responsive"
            style={{
                height:"40px",
                marginLeft:"-60px"
              
            }}
            
          /></td>
          <td><b>DALCHINA CHEKKA-దాల్చినచెక్క</b></td>
          <td>Male</td>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <br></br>
        <tr style={{backgroundColor:"#d3e4e8",height:"60px"}}>
          <td>6</td>
          <td> <img
            src={logo7}
            className="img-responsive"
            style={{
                height:"40px",
                marginLeft:"-60px"
              
            }}
            
          /></td>
          <td><b>DALDA-డాల్డా</b></td>
          <td>Male</td>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <br></br>
        <tr style={{backgroundColor:"#d1f0e6",height:"60px"}}>
          <td>7</td>
          <td> <img
            src={logo8}
            className="img-responsive"
            style={{
                height:"40px",
                marginLeft:"-60px"
              
            }}
            
          /></td>
          <td><b>DHANIYALU-ధనియాలు</b></td>
          <td>Male</td>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <br></br>
        <tr style={{backgroundColor:"#d2ebcc",height:"60px"}}>
          <td>8</td>
          <td> <img
            src={logo9}
            className="img-responsive"
            style={{
                height:"40px",
                marginLeft:"-60px"
              
            }}
            
          /></td>
          <td><b>EGG-గుడ్డు</b></td>
          <td>Male</td>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <br></br>
        <tr style={{backgroundColor:"#f4e6f7",height:"60px"}}>
          <td>9</td>
          <td> <img
            src={logo10}
            className="img-responsive"
            style={{
                height:"40px",
                marginLeft:"-60px"
              
            }}
            
          /></td>
          <td><b>GARLIC-వెల్లుల్లి</b></td>
          <td>Male</td>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <br></br>
        <tr style={{backgroundColor:"#eaedab",height:"60px"}}>
          <td>10</td>
          <td> <img
            src={logo11}
            className="img-responsive"
            style={{
                height:"40px",
                marginLeft:"-60px"
              
            }}
            
          /></td>
          <td><b>GAS CYLINDER-గ్యాస్ సిలిండర్</b></td>
          <td>Male</td>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr> 
        <br></br>
        <tr style={{backgroundColor:"#f4e6f7",height:"60px"}}>
          <td>11</td>
          <td> <img
            src={logo12}
            className="img-responsive"
            style={{
                height:"40px",
                marginLeft:"-60px"
              
            }}
            
          /></td>
          <td><b>GODHUMA PINDI-గోధుమపిండి</b></td>
          <td>Male</td>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <br></br>
        <tr style={{backgroundColor:"#abb3eb",height:"60px"}}>
          <td>12</td>
          <td> <img
            src={logo13}
            className="img-responsive"
            style={{
                height:"40px",
                marginLeft:"-60px"
              
            }}
            
          /></td>
          <td><b>GROUNDNUT CHIKKI</b></td>
          <td>Male</td>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <br></br>
        <tr style={{backgroundColor:"#f4e6f7",height:"60px"}}>
          <td>13</td>
          <td> <img
            src={logo14}
            className="img-responsive"
            style={{
                height:"40px",
                marginLeft:"-60px"
              
            }}
            
          /></td>
          <td><b>GROUNDNUT SEEDS-వేరుశెనగగుళ్ళు</b></td>
          <td>Male</td>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <br></br>
        <tr style={{backgroundColor:"#abb3eb",height:"60px"}}>
          <td>14</td>
          <td> <img
            src={logo15}
            className="img-responsive"
            style={{
                height:"40px",
                marginLeft:"-60px"
              
            }}
            
          /></td>
          <td><b>IDLY RAVVA-ఇడ్లీరవ్వ</b></td>
          <td>Male</td>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <br></br>
        <tr style={{backgroundColor:"#f4e6f7",height:"60px"}}>
          <td>15</td>
          <td> <img
            src={logo16}
            className="img-responsive"
            style={{
                height:"40px",
                marginLeft:"-60px"
              
            }}
            
          /></td>
          <td><b>JEELAKARRA-జీలకర్ర</b></td>
          <td>Male</td>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <br></br>
        <tr style={{backgroundColor:"#d1f0e6",height:"60px"}}>
          <td>16</td>
          <td> <img
            src={logo17}
            className="img-responsive"
            style={{
                height:"40px",
                marginLeft:"-60px"
              
            }}
            
          /></td>
          <td><b>KANDI PAPPU-కందిపప్పు</b></td>
          <td>Male</td>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <br></br>
        <tr style={{backgroundColor:"#f4e6f7",height:"60px"}}>
          <td>17</td>
          <td> <img
            src={logo18}
            className="img-responsive"
            style={{
                height:"40px",
                marginLeft:"-60px"
              
            }}
            
          /></td>
          <td><b>LAVANGA-లవంగాలు</b></td>
          <td>Male</td>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <br></br>
        <tr style={{backgroundColor:"#abb3eb",height:"60px"}}>
          <td>18</td>
          <td> <img
            src={logo19}
            className="img-responsive"
            style={{
                height:"40px",
                marginLeft:"-60px"
              
            }}
            
          /></td>
          <td><b>PACHI SENAGA PAPPU-పచ్చిశెనగపప్పు</b></td>
          <td>Male</td>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <br></br>
        <tr style={{backgroundColor:"#f4e6f7",height:"60px"}}>
          <td>19</td>
          <td> <img
            src={logo20}
            className="img-responsive"
            style={{
                height:"40px",
                marginLeft:"-60px"
              
            }}
            
          /></td>
          <td><b>PALAVU AKU-పలావఆకు</b></td>
          <td>Male</td>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <br></br>
        <tr style={{backgroundColor:"#eaedab",height:"60px"}}>
          <td>20</td>
          <td> <img
            src={logo21}
            className="img-responsive"
            style={{
                height:"40px",
                marginLeft:"-60px"
              
            }}
            
          /></td>
          <td><b>PALM OIL</b></td>
          <td>Male</td>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <br></br>
        <tr style={{backgroundColor:"#f4e6f7",height:"60px"}}>
          <td>21</td>
          <td> <img
            src={logo22}
            className="img-responsive"
            style={{
                height:"40px",
                marginLeft:"-60px"
              
            }}
            
          /></td>
          <td><b>PUTNALU-పుట్నాలు</b></td>
          <td>Male</td>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <br></br>
        <tr style={{backgroundColor:"#d2ebcc",height:"60px"}}>
          <td>22</td>
          <td> <img
            src={logo23}
            className="img-responsive"
            style={{
                height:"40px",
                marginLeft:"-60px"
              
            }}
            
          /></td>
          <td><b>RAGI PINDI-రాగిపిండి</b></td>
          <td>Male</td>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <br></br>
        <tr style={{backgroundColor:"#f4e6f7",height:"60px"}}>
          <td>23</td>
          <td> <img
            src={logo24}
            className="img-responsive"
            style={{
                height:"40px",
                marginLeft:"-60px"
              
            }}
            
          /></td>
          <td><b>RED CHILLIES-ఎండు ;మిరపకాయలు</b></td>
          <td>Male</td>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <br></br>
        <tr style={{backgroundColor:"#b2dfed",height:"60px"}}>
          <td>24</td>
          <td> <img
            src={logo25}
            className="img-responsive"
            style={{
                height:"40px",
                marginLeft:"-60px"
              
            }}
            
          /></td>
          <td><b>RICE-బియ్యం</b></td>
          <td>Male</td>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <br></br>
        <tr style={{backgroundColor:"#f4e6f7",height:"60px"}}>
          <td>25</td>
          <td> <img
            src={logo26}
            className="img-responsive"
            style={{
                height:"40px",
                marginLeft:"-60px"
              
            }}
            
          /></td>
          <td><b>SALT-ఉప్పు</b></td>
          <td>Male</td>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>  <br></br>
        <tr style={{backgroundColor:"#abb3eb",height:"60px"}}>
          <td>26</td>
          <td> <img
            src={logo27}
            className="img-responsive"
            style={{
                height:"40px",
                marginLeft:"-60px"
              
            }}
            
          /></td>
          <td><b>SAMBHAR POWDER-సాంబార్ పొడి</b></td>
          <td>Male</td>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <br></br>
        <tr style={{backgroundColor:"#f4e6f7",height:"60px"}}>
          <td>27</td>
          <td> <img
            src={logo28}
            className="img-responsive"
            style={{
                height:"40px",
                marginLeft:"-60px"
              
            }}
            
          /></td>
          <td><b>SENAGA PINDI-సెనగపిండి</b></td>
          <td>Male</td>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <br></br>
         <tr style={{backgroundColor:"#b2dfed",height:"60px"}}>
          <td>28</td>
          <td> <img
            src={logo29}
            className="img-responsive"
            style={{
                height:"40px",
                marginLeft:"-60px"
              
            }}
            
          /></td>
          <td><b>SUGAR-పంచదార</b></td>
          <td>Male</td>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr> 
        <br></br>
        <tr style={{backgroundColor:"#f4e6f7",height:"60px"}}>
          <td>29</td>
          <td> <img
            src={logo30}
            className="img-responsive"
            style={{
                height:"40px",
                marginLeft:"-60px"
              
            }}
            
          /></td>
          <td><b>TAMARIND-చింతపండు</b></td>
          <td>Male</td>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <br></br>
        <tr style={{backgroundColor:"#abb3eb",height:"60px"}}>
          <td>30</td>
          <td> <img
            src={logo31}
            className="img-responsive"
            style={{
                height:"40px",
                marginLeft:"-60px"
              
            }}
            
          /></td>
          <td><b>TURMERIC-పసుపు</b></td>
          <td>Male</td>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <br></br>
        <tr style={{backgroundColor:"#abb3eb",height:"60px"}}>
          <td>31</td>
          <td> <img
            src={logo32}
            className="img-responsive"
            style={{
                height:"40px",
                marginLeft:"-60px"
              
            }}
            
          /></td>
          <td><b>YALAKULU-యాలకులు</b></td>
          <td>Male</td>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>

      </table> 
    </div> */}
    </>
)



}