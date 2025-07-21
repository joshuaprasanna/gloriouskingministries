import { motion } from "framer-motion"
import logo from "./user.jpg";
import logo1 from "./training.jpg";
import logo2 from "./feedback.jpg";

export  function Framermotion() {
  return (
    <div>
        
      <motion.div style={{float:'left',display:'inline-block',marginTop:"20px",}}>
      
        
     <motion.ul>
      <motion.li  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{ backgroundColor:"#f2e1e6",height:"200px",width:"200px"
      ,padding:'40px 50px 30px 35px', marginBottom: '5px',float:'left'
    }}>
        		 <img
            src={logo}
            className="img-responsive"
            style={{
               marginRight:"10px",
            height:"90px"
            }}/>				

      <a href="https://aplpcet.apcfss.in/" style={{color:"black",textDecoration:"none" }}><b>&nbsp;AP LPCET </b> </a>
     
      </motion.li>
      <motion.li  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{ backgroundColor:"#c7f2cf",height:"200px",width:"200px"
      ,padding:'40px 20px 20px 15px', marginBottom: '5px',float:'left'
    }}>

<img
            src={logo}
            className="img-responsive"
            style={{
              marginLeft:"40px",
            height:"90px"
            }}/>		
      <a href="https://apdeecet.apcfss.in/" style={{color:"black",textDecoration:"none"  }}><b><br></br>&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AP DEECET </b> </a>
     
      </motion.li>
      <motion.li  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{ backgroundColor:"#f7f4c8",height:"200px",width:"200px"
      ,padding:'40px 20px 20px 15px', marginBottom: '5px',float:'left'
    }}>
      <img
            src={logo}
            className="img-responsive"
            style={{
              marginLeft:"40px",
            height:"90px"
            }}/>		
      <a href="https://aptet.apcfss.in/" style={{color:"black",textDecoration:"none"  }}><b><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AP TET</b> </a>
     
      </motion.li>
      <motion.li  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{ backgroundColor:"#a4e5f5",height:"200px",width:"200px"
      ,padding:'40px 20px 20px 15px', marginBottom: '5px',float:'left'
    }}>
      <img
            src={logo}
            className="img-responsive"
            style={{
              marginLeft:"40px",
            height:"90px"
            }}/>		
      <a href="https://apdsc.apcfss.in/" style={{color:"black",textDecoration:"none" }}><b><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AP DSC </b> </a>
      
     
      </motion.li>
      <br></br>
      <motion.li  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{ backgroundColor:"#a4e5f5",height:"200px",width:"200px"
      ,padding:'40px 20px 20px 15px', marginBottom: '5px',float:'left'
    }}>
     <img
            src={logo1}
            className="img-responsive"
            style={{
              marginLeft:"40px",
            height:"90px"
            }}/>		
      <a href="https://apms.apcfss.in/" style={{color:"black",textDecoration:"none"  }}><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;APMS </b> </a>
     
      </motion.li>
      <motion.li  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{ backgroundColor:"#f7f4c8",height:"200px",width:"200px"
      ,padding:'40px 20px 20px 15px', marginBottom: '5px',float:'left'
    }}>
      <img
            src={logo1}
            className="img-responsive"
            style={{
              marginLeft:"40px",
            height:"90px"
            }}/>		
      <a href="https://apkgbv.apcfss.in/" style={{color:"black",textDecoration:"none" }}><b><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AP KGBV</b> </a>
     
      </motion.li>
      <motion.li  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{ backgroundColor:"#c7f2cf",height:"200px",width:"200px"
      ,padding:'40px 20px 20px 15px', marginBottom: '5px',float:'left'
    }}>
      <img
            src={logo2}
            className="img-responsive"
            style={{
              marginLeft:"30px",
            height:"90px"
            }}/>
      <a href="https://apdeecet.apcfss.in/" style={{color:"black",textDecoration:"none" }}><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;---</b> </a>
     
      </motion.li>

      <motion.li  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{ backgroundColor:"#f2e1e6",height:"200px",width:"200px"
      ,padding:'40px 50px 30px 35px', marginBottom: '5px',float:'left'
    }}>
       <img
            src={logo}
            className="img-responsive"
            style={{
              marginLeft:"30px",
            height:"90px"
            }}/>		
      <a href="https://aplpcet.apcfss.in/" style={{color:"black",textDecoration:"none" }}><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;---</b> </a>
     
      </motion.li>
     </motion.ul>
     </motion.div>


    </div>
  )
}