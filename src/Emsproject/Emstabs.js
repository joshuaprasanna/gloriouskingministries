// import { Emstabone } from "./Emstabone";
// import { Emstabtwo } from "./Emstabtwo";
// import { Emstabthree } from "./Emstabthree";
// import { Emstabfour } from "./Emstabfour";
// import { Emstabfive } from "./Emstabfive";
// import { Emstabsix } from "./Emstabsix";
// import { Emstabseven } from "./Emstabseven";
// import { Col, Tab, Tabs } from "react-bootstrap";
// import { Navigate } from "react-router-dom";
// import { useState } from "react";
// //import { Tab, TabList, TabPanel, Tabs } from "react-tabs";



// export function Emstabs() {




//       //  function joshuafun()
//       //  {
//       //      Navigate("/Emstabone/");


//       //  }



//       const [showtablist, setTablist] = useState(false)
//       const [showtablist1, setTablist1] = useState(false)
//             const [showtablist2, setTablist2] = useState(false)
//             const [showtablist3, setTablist3] = useState(false)
//             const [showtablist4, setTablist4] = useState(false)


//       return (


//             <>
//                   {/* <Tabs defaultIndex={0}>
//                         <TabList >
//                               <Tab >First Year</Tab>
//                               <Tab >Second Year</Tab>
//                         </TabList>
//                         <TabPanel >
//                               <h1>FIRST TAB</h1>
//                                 <Emstabone></Emstabone> 
//                         </TabPanel>
//                         <TabPanel>
//                              <h1>SEcond TAB</h1>
//                                <Emstabtwo></Emstabtwo> 
//                         </TabPanel>
//                   </Tabs> */}
//                    <Col xs={12} sm={12} md={12} lg={12} xl={5} xxl={5}></Col>
//                   <Col xs={12} sm={12} md={12} lg={12} xl={1} xxl={1}>
//                         <span style={{  textAlign: "right",cursor:"pointer" }} className="nav-link-custome"
//                               onClick={(e) => { setTablist(true) }}><b>Home</b></span>
//                   </Col>

//                   <Col xs={12} sm={12} md={12} lg={12} xl={1} xxl={1}>
//                         <span style={{  textAlign: "right",cursor:"pointer" }}
//                               className="nav-link-custome"
//                               onClick={(e) => { setTablist(false); setTablist1(true) }}><b>History</b></span>
//                   </Col>
//                   <Col xs={12} sm={12} md={12} lg={12} xl={1} xxl={1}>
//                         <span style={{ textAlign: "right" ,cursor:"pointer"}} 
//                         className="nav-link-custome"
//                          onClick={(e) => { setTablist(false); setTablist1(false);setTablist2(true) }} ><b>Vision</b></span>
//                   </Col>

//                    <Col xs={12} sm={12} md={12} lg={12} xl={1} xxl={2}>
//                         <span style={{ textAlign: "right",cursor:"pointer" }} 
//                         className="nav-link-custome"
//                          onClick={(e) => { setTablist(false); setTablist1(false);setTablist2(false);setTablist3(true) }} ><b> FaithStatemet</b></span>
//                   </Col>

//                    <Col xs={12} sm={12} md={12} lg={12} xl={1} xxl={1}>
//                         <span style={{  textAlign: "right",cursor:"pointer" }} 
//                         className="nav-link-custome"
//                          onClick={(e) => { setTablist(false); setTablist1(false);setTablist2(false);setTablist3(false);setTablist4(true) }} ><b>Contact Us</b></span>
//                   </Col>
//                   {/* <Tabs style={{ backgroundColor: "#4F8355" }} className="nav-link-custome">

//                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


//                         <Tab title="Home" onClick={(e) => setTablist(true)} >


//                         </Tab>
//                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


//                         <Tab title="History ">
                              
//                         </Tab>

//                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                         <Tab title="Vision">
                              
//                         </Tab>

//                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                         <Tab title="FaithStatemet">
                              
//                         </Tab>
//                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                         <Tab title="Contact Us">
                              
//                         </Tab>




//                   </Tabs> */}
//                   {showtablist ? <Emstabone></Emstabone> : ""}
//                   {showtablist1 ? <Emstabtwo></Emstabtwo> : ""}
//                     {showtablist2 ? <Emstabthree></Emstabthree> : ""}
//                      {showtablist3 ? <Emstabfour></Emstabfour> : ""}
//                                              {showtablist4 ? <Emstabfive></Emstabfive> : ""}

                     


//             </>
//       )

// }

import { Emstabone } from "./Emstabone";
import { Emstabtwo } from "./Emstabtwo";
import { Emstabthree } from "./Emstabthree";
import { Emstabfour } from "./Emstabfour";
import { Emstabfive } from "./Emstabfive";
import { Emstabsix } from "./Emstabsix";
import { Emstabseven } from "./Emstabseven";
import { Col } from "react-bootstrap";
import { useState } from "react";

import { Link } from "react-router-dom"; // Use only if using React Router


export function Emstabs() {
  const [activeTab, setActiveTab] = useState("tab1");
    const [hoveredTab, setHoveredTab] = useState(null);

  const [hoveredItem, setHoveredItem] = useState(null);


   const tabs = [
  {
    id: "tab1",
    label: "Home",
    color: "#f06292"
  },
  
 
  {
    id: "about",
    label: "About Us",
    color: "#4db6ac",
    tooltipItems: [
      {
        label: "Overview",
        link: "/about/overview",
        subItems: [
          { label: "Team", link: "/about/overview/team" },
          { label: "Vision", link: "/about/overview/vision" }
        ]
      },
      {
        label: "History",
        link: "/about/history",
        subItems: [
          { label: "Timeline", link: "/about/history/timeline" },
          { label: "Founders", link: "/about/history/founders" }
        ]
      }
    ]
  },
   {
    id: "tab6",
    label: "Founder",
    color: "#f06292"
  },
   {
    id: "tab5",
    label: "Contact Us",
    color: "#f06292"
  },
  
];
  const renderTabContent = () => {
    switch (activeTab) {
      case "tab1":
        return <Emstabone />;
      case "tab2":
        return <Emstabtwo />;
      case "tab3":
        return <Emstabthree />;
      case "tab4":
        return <Emstabfour />;
      case "tab5":
        return <Emstabfive />;

        case "tab6":
        return <Emstabsix />;
     
     
      default:
        return null;
    }
  };

  return (
    <>
      {/* Navigation */}
     
  <div style={{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '15px',
      background: 'linear-gradient(to right, rgb(224, 224, 224), rgb(66, 7, 52))',
      padding: '20px',
      borderRadius: '20px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
      marginTop: "-35px"
    }}>
      {tabs.map(tab => (
        <div
          key={tab.id}
          style={{ position: "relative", display: "inline-block" }}
          onMouseEnter={() => setHoveredTab(tab.id)}
          onMouseLeave={() => {
            setHoveredTab(null);
            setHoveredItem(null);
          }}
        >
          <span
            onClick={() => setActiveTab(tab.id)}
            style={{
              cursor: "pointer",
              padding: "12px 20px",
              borderRadius: "30px",
              background: activeTab === tab.id ? tab.color : "#ffffff33",
              color: "#fff",
              fontWeight: "600",
              fontSize: "1rem",
              boxShadow: activeTab === tab.id
                ? `0 0 12px ${tab.color}, 0 0 25px ${tab.color}`
                : "0 2px 8px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease-in-out",
              userSelect: "none"
            }}
          >
            {tab.label}
          </span>

          {/* Tooltip (only if tooltipItems exist) */}
          {tab.tooltipItems && hoveredTab === tab.id && (
            <div style={{
              position: "absolute",
              top: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              background: "#000",
              padding: "10px",
              borderRadius: "10px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
              zIndex: 1000,
              display: "flex",
              gap: "15px",
              marginTop: "10px"
            }}>
              {tab.tooltipItems.map((item, i) => (
                <div
                  key={i}
                  style={{ position: "relative", display: "inline-block" }}
                  onMouseEnter={() => setHoveredItem(i)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* First-level link */}
                  <Link
                    to={item.link}
                    style={{
                      background: tab.color,
                      color: "#fff",
                      padding: "8px 12px",
                      borderRadius: "12px",
                      textDecoration: "none",
                      fontWeight: "600",
                      display: "inline-block",
                      whiteSpace: "nowrap"
                    }}
                  >
                    {item.label}
                  </Link>

                  {/* Sub-tooltip (inner links) */}
                  {hoveredItem === i && item.subItems && (
                    <div style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      marginTop: "10px",
                      background: "#222",
                      padding: "10px",
                      borderRadius: "10px",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      zIndex: 1001
                    }}>
                      {item.subItems.map((sub, j) => (
                        <Link
                          key={j}
                          to={sub.link}
                          style={{
                            color: "#fff",
                            background: tab.color,
                            padding: "6px 10px",
                            borderRadius: "8px",
                            textDecoration: "none",
                            fontSize: "0.85rem"
                          }}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
      

      {/* Tab Content */}
      {renderTabContent()}
    </>
  );
}
