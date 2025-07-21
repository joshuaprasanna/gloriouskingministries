import * as mdb from "mdb-ui-kit"; // lib
import { Input } from "mdb-ui-kit"; // module
import * as HERBUI from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Card, Col, Row } from "react-bootstrap";
import SimpleImageSlider from "react-simple-image-slider";
import { Tab } from "react-bootstrap";
import { useDispatch } from "react-redux";
import logo3 from "./new.png";
// import Name from "./abc";

export const Jbbody = () => {
  const css = [
    {
      border: "1px solid white",
      width: "auto",
      height: "auto",
    },
    {
      color: "white",
    },
  ];
  const dispatch = useDispatch();

  function socialwelfare() {
    dispatch({ type: "SHOWPOPUP" });
    dispatch({
      type: "UPDATEMODALDATA",
      payload: {
        modalHeading: <></>,

        body: [],
        fieldValue: "",
      },
    });
  }

  const images = [
    { url: "https://jnbnivas.apcfss.in/img/789.jpeg" },
    { url: "https://jnanabhumi.ap.gov.in/img/slide12.jpg" },
    {
      url: "https://jnanabhumi.ap.gov.in/img/denied1.png",
    },
    { url: "https://jnanabhumi.ap.gov.in/img_2_0/corporate.png" },
  ];

  return (
    <>
      <Card class="border border-dark">
        <Row>
          <Col md={10} class="h-100 d-inline-block">
            <SimpleImageSlider
              width={1590}
              height={500}
              images={images}
              showBullets={true}
              showNavs={true}
            />
            <Row>
              <Col md={6}>
                <Row>
                  <Col md={3} class="nav nav-pills">
                    <ul
                      class="nav nav-pills"
                      style={(css[0], { backgroundColor: "#ed5a6b" })}
                      onClick={socialwelfare}
                    >
                      <li class="nav-item">
                        {" "}
                        <b>Social Welfare</b>
                        <br></br> <br></br>
                        <b style={css[1]}>Students</b>
                        <br></br>
                        <b style={css[1]}>Amount(in cr)</b>
                      </li>
                    </ul>
                  </Col>
                  <Col md={3}>
                    <ul
                      class="nav nav-pills"
                      style={(css[0], { backgroundColor: "#368fb5" })}
                      onClick={socialwelfare}
                    >
                      <li class="nav-item">
                        <b>Tribal Welfare</b>
                        <br></br> <br></br>
                        <b style={css[1]}>Students</b>
                        <br></br>
                        <b style={css[1]}>Amount(in cr)</b>
                      </li>
                    </ul>
                  </Col>
                  <Col md={3}>
                    <ul
                      class="nav nav-pills"
                      style={(css[0], { backgroundColor: "#005366" })}
                      onClick={socialwelfare}
                    >
                      <li class="nav-item">
                        <b>BC Welfare</b>
                        <br></br> <br></br>
                        <b style={css[1]}>Students</b>
                        <br></br>
                        <b style={css[1]}>Amount(in cr)</b>
                      </li>
                    </ul>
                  </Col>
                  <Col md={3}>
                    <ul
                      class="nav nav-pills"
                      style={(css[0], { backgroundColor: "#368fb5" })}
                      onClick={socialwelfare}
                    >
                      <li class="nav-item">
                        <b>Minority Welfare</b>
                        <br></br> <br></br>
                        <b style={css[1]}>Students</b>
                        <br></br>
                        <b style={css[1]}>Amount(in cr)</b>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <Row>
                  <Col md={3}>
                    <ul
                      class="nav nav-pills"
                      style={(css[0], { backgroundColor: "#005366" })}
                      onClick={socialwelfare}
                    >
                      <li class="nav-item">
                        <b>Differently Abled </b>
                        <br></br> <br></br>
                        <b style={css[1]}>Students</b>
                        <br></br>
                        <b style={css[1]}>Amount(in cr)</b>
                      </li>
                    </ul>
                  </Col>
                  <Col md={3}>
                    <ul
                      class="nav nav-pills"
                      style={(css[0], { backgroundColor: "#cf9957" })}
                      onClick={socialwelfare}
                    >
                      <li class="nav-item">
                        <b>Kapu </b>
                        <br></br> <br></br>
                        <b style={css[1]}>Students</b>
                        <br></br>
                        <b style={css[1]}>Amount(in cr)</b>
                      </li>
                    </ul>
                  </Col>
                  <Col md={3}>
                    <ul
                      class="nav nav-pills"
                      style={(css[0], { backgroundColor: "#ed5a6b" })}
                      onClick={socialwelfare}
                    >
                      <li class="nav-item">
                        <b>EBC </b>
                        <br></br> <br></br>
                        <b style={css[1]}>Students</b>
                        <br></br>
                        <b style={css[1]}>Amount(in cr)</b>
                      </li>
                    </ul>
                  </Col>
                  <Col md={3}>
                    <ul
                      class="nav nav-pills"
                      style={(css[0], { backgroundColor: "#cf9957" })}
                      onClick={socialwelfare}
                    >
                      <li class="nav-item">
                        <b>Affliatring Authorities </b>
                        <br></br> <br></br>
                        <b style={css[1]}>Students</b>
                        <br></br>
                        <b style={css[1]}>Amount(in cr)</b>{" "}
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Row style={{ padding: "8px" }}>
                <Col
                  md={3}
                  style={{
                    border: "1px solid black",
                    height: "40px",
                    backgroundColor: "#005366",
                  }}
                >
                  <center>
                    <b
                      style={{
                        textAlign: "center",
                        color: "white",
                      }}
                    >
                      LATEST UPDATES
                    </b>
                  </center>
                </Col>
                <Col
                  md={9}
                  style={{
                    height: "40px",
                    backgroundColor: "#88d0fc",
                    border: "1px solid black",
                  }}
                >
                  {" "}
                  <marquee direction="left">
                    <b
                      style={{
                        fontFamily: "sans-serif",
                      }}
                    >
                      <img src={logo3} style={{ height: "30px" }} />
                      &nbsp; G.O Ms.No.35 SW Dept.dated 29-11-2022 is issued by
                      govt on mechanism after recieving from government
                    </b>
                  </marquee>{" "}
                </Col>
              </Row>
              <Row>
                <Col md={1}>
                  {" "}
                  <ul
                    class="nav nav-pills"
                    style={{
                      backgroundColor: "#78abde",
                      border: "3px solid white",
                      height: "100px",
                      width: "200px",
                    }}
                  >
                    <li class="nav-item">
                      {" "}
                      <p
                        style={{
                          color: "black",
                        }}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;Post-matric <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;Scholarship{" "}
                      </p>
                    </li>
                  </ul>
                </Col>
                <Col md={1}>
                  <ul
                    class="nav nav-pills"
                    style={{
                      backgroundColor: "#41e0e0",
                      border: "3px solid white",
                      height: "100px",
                      width: "200px",
                    }}
                  >
                    <li class="nav-item">
                      <p
                        style={{
                          color: "black",
                        }}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;Pre-matric <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;Scholarship{" "}
                      </p>
                    </li>
                  </ul>
                </Col>
                <Col md={1}>
                  <ul
                    class="nav nav-pills"
                    style={{
                      backgroundColor: "#41e0e0",
                      border: "3px solid white",
                      height: "100px",
                      width: "200px",
                    }}
                  >
                    <li class="nav-item">
                      <p
                        style={{
                          color: "black",
                        }}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;corporate <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;admissions{" "}
                      </p>
                    </li>
                  </ul>
                </Col>
                <Col md={1}>
                  <ul
                    class="nav nav-pills"
                    style={{
                      backgroundColor: "#41e0e0",
                      border: "3px solid white",
                      height: "100px",
                      width: "200px",
                    }}
                  >
                    <li class="nav-item">
                      <p
                        style={{
                          color: "black",
                        }}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;Best available <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;schools{" "}
                      </p>
                    </li>
                  </ul>
                </Col>
                <Col md={1}>
                  <ul
                    class="nav nav-pills"
                    style={{
                      backgroundColor: "#41e0e0",
                      border: "3px solid white",
                      height: "100px",
                      width: "200px",
                    }}
                  >
                    <li class="nav-item">
                      <p
                        style={{
                          color: "black",
                        }}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;YSR{" "}
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;vidyanmothi
                      </p>
                    </li>
                  </ul>
                </Col>
                <Col md={1}>
                  <ul
                    class="nav nav-pills"
                    style={{
                      backgroundColor: "#41e0e0",
                      border: "3px solid white",
                      height: "100px",
                      width: "200px",
                    }}
                  >
                    <li class="nav-item">
                      <p
                        style={{
                          color: "black",
                        }}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Overseas
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Education
                      </p>
                    </li>
                  </ul>
                </Col>
                <Col md={1}>
                  <ul
                    class="nav nav-pills"
                    style={{
                      backgroundColor: "#41e0e0",
                      border: "3px solid white",
                      height: "100px",
                      width: "200px",
                    }}
                  >
                    <li class="nav-item">
                      <p
                        style={{
                          color: "black",
                        }}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Skill
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Upgradation
                      </p>
                    </li>
                  </ul>
                </Col>
                <Col md={1}>
                  <ul
                    class="nav nav-pills"
                    style={{
                      backgroundColor: "#41e0e0",
                      border: "3px solid white",
                      height: "100px",
                      width: "200px",
                    }}
                  >
                    <li class="nav-item">
                      <p
                        style={{
                          color: "black",
                        }}
                      >
                        &nbsp;&nbsp; &nbsp;Residential
                        <br />
                        &nbsp;&nbsp;schools & Hostels
                      </p>
                    </li>
                  </ul>
                </Col>
                <Col md={1}>
                  <ul
                    class="nav nav-pills"
                    style={{
                      justifyContent: "center",
                      backgroundColor: "#41e0e0",
                      border: "3px solid white",
                      height: "100px",
                      width: "200px",
                    }}
                  >
                    <li class="nav-item">
                      <p
                        style={{
                          color: "black",
                        }}
                      >
                        {" "}
                        <b
                          style={{
                            color: "black",
                          }}
                        >
                          University/Board&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </b>
                        <br />
                        Examinations
                      </p>
                    </li>
                  </ul>
                </Col>
                <Col md={1}>
                  <ul
                    class="nav nav-pills"
                    style={{
                      justifyContent: "center",
                      backgroundColor: "#41e0e0",
                      border: "3px solid white",
                      height: "100px",
                      width: "200px",
                    }}
                  >
                    <li class="nav-item">
                      <p
                        style={{
                          color: "white",
                        }}
                      >
                        <p
                          style={{
                            color: "black",
                          }}
                        >
                          {" "}
                          <b
                            style={{
                              color: "black",
                            }}
                          >
                            University/Board
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </b>
                          <br />
                          Online Affliations
                        </p>
                      </p>
                    </li>
                  </ul>
                </Col>
                <Col md={1}>
                  <ul
                    class="nav nav-pills"
                    style={{
                      justifyContent: "center",
                      backgroundColor: "#41e0e0",
                      border: "3px solid white",
                      height: "100px",
                      width: "200px",
                    }}
                  >
                    <li class="nav-item">
                      <p
                        style={{
                          color: "white",
                        }}
                      >
                        {" "}
                        <p
                          style={{
                            color: "black",
                          }}
                        >
                          {" "}
                          <b
                            style={{
                              color: "black",
                            }}
                          >
                            University/Board&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </b>
                          <br /> <br />
                          <b
                            style={{
                              color: "red",
                            }}
                          >
                            &nbsp;&nbsp; Exam Results
                          </b>
                        </p>{" "}
                      </p>
                    </li>
                  </ul>
                </Col>
                <Col md={1}>
                  <ul
                    class="nav nav-pills"
                    style={{
                      justifyContent: "center",
                      backgroundColor: "#41e0e0",
                      border: "3px solid white",
                      height: "100px",
                      width: "143px",
                    }}
                  >
                    <li class="nav-item">
                      <p
                        style={{
                          color: "white",
                        }}
                      >
                        {" "}
                        <p
                          style={{
                            color: "black",
                          }}
                        >
                          {" "}
                          <b
                            style={{
                              color: "black",
                            }}
                          >
                            Welfare&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </b>
                          <br />
                          Recruitment
                        </p>{" "}
                      </p>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Row>
          </Col>

          <Col class="col-xs-12 col-sm-12 col-md-2 col-lg-2 notice_baord  font-inc-dec">
            <Row
              style={{
                backgroundColor: "#48997a",
                height: "1000px",
              }}
            >
              <HERBUI.Container
                style={{
                  border: "10px solid #125c45",
                }}
              >
                <HERBUI.Col>
                  <h4
                    style={{
                      color: "yellow",
                    }}
                  >
                    {" "}
                    Latest Notifications
                    <i
                      class="fas fa-car-side fa-3x"
                      data-mdb-toggle="animation"
                      data-mdb-animation-reset="true"
                      data-mdb-animation="slide-out-right"
                    ></i>
                  </h4>
                  <b
                    style={{
                      color: "white",
                    }}
                  >
                    App for Model Gr1 Interviewers
                  </b>
                  <br />
                  <a
                    href="https://jnanabhumi.ap.gov.in:443/APStudyCircleMockInterview.edu"
                    style={{
                      color: "#d0ea24",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    Click Here{" "}
                  </a>
                  <h6
                    style={{
                      color: "solid blue",
                    }}
                  >
                    <b>CSIR Innovation Award for School Children 2022 </b>
                  </h6>
                  <b
                    style={{
                      color: " white",
                    }}
                  >
                    CSIR Innovation Award for School Children 2022
                  </b>
                  <br></br>
                  <a
                    href="downloads/SHRESHTAscheme.pdf"
                    style={{
                      color: "#d0ea24",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    Advertisement{" "}
                  </a>
                  &nbsp; &nbsp;
                  <a
                    href="downloads/SHRESHTAscheme.pdf"
                    style={{
                      color: "#d0ea24",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    Guideline{" "}
                  </a>
                  <br></br> <br></br>
                  <h6
                    style={{
                      color: "solid blue",
                    }}
                  >
                    <b>National Overseas Scholarships Scheme</b>
                  </h6>
                  <b
                    style={{
                      color: " white",
                    }}
                  >
                    National Overseas Scholarships Scheme for SC
                  </b>
                  <br></br> <br></br>
                  <a
                    href="downloads/OVERSEAS.pdf"
                    style={{
                      color: "#d0ea24",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    ForInformation{" "}
                  </a>
                  &nbsp; &nbsp;
                  <a
                    href="http://www.nosmsje.gov.in/Register.aspx"
                    style={{
                      color: "#d0ea24",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    ForApplication{" "}
                  </a>
                </HERBUI.Col>
              </HERBUI.Container>
              <HERBUI.Container
                style={{
                  border: "10px solid #125c45",
                }}
              >
                <HERBUI.Col>
                  <h4
                    style={{
                      color: "yellow",
                    }}
                  >
                    {" "}
                    Results
                  </h4>
                  <br></br>
                  <h6
                    style={{
                      color: "solid blue",
                    }}
                  >
                    <b>CARE TAKERS SKILL TEST RESULTS </b>
                  </h6>
                  <b
                    style={{
                      color: " white",
                    }}
                  >
                    CARE TAKERS SKILL TEST RESULTS ANNOUNCED
                  </b>
                  <br></br>
                  <a
                    href="https://jnanabhumi.ap.gov.in:443/downloads/Skilltestresult2022.pdf"
                    style={{
                      color: "#d0ea24",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    Click Here{" "}
                  </a>
                  <br></br> <br></br>
                  <h6
                    style={{
                      color: "solid blue",
                    }}
                  >
                    <b>AP SWERIES </b>
                  </h6>
                  <a
                    href="https://apgpcet.apcfss.in/Inter/"
                    style={{
                      color: "#d0ea24",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    Click Here{" "}
                  </a>
                  <br></br>
                  <br></br> <br></br>
                  <h6
                    style={{
                      color: "solid blue",
                    }}
                  >
                    <b>Sri Krishna Devaraya University</b>
                  </h6>
                  <b
                    style={{
                      color: " white",
                    }}
                  >
                    Degree Revaluation Results Announced
                  </b>
                  <br></br>
                  <a
                    href="https://jnanabhumi.ap.gov.in:443/SK_Results_Degree_Revaluation.edu"
                    style={{
                      color: "#d0ea24",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    Click Here{" "}
                  </a>
                </HERBUI.Col>
              </HERBUI.Container>
            </Row>
            <div className="d-flex align-items-stretch"></div>
          </Col>
        </Row>
      </Card>
    </>
  );
};
