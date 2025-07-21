import { Button, Card, Col, Row } from "react-bootstrap";
import logo from "./aplogo.png";
import { IconName } from "react-icons/io";

export function Dindex() {
  const css = [
    {
      height: "100px",
      marginLeft: "60px",
      marginTop: "20px",

    },
    {
      color: "#0f0861",
      fontSize: "10px",
      fontFamily: "bold",
    },
    {
      backgroundColor: "#d14508",
      color: "white",
      width: "150px",
      border: "1px solid orange",

    },
    {
      backgroundColor: "#E3E3E3",
    },
  ];

  return (
    <>
      <div style={{ borderBlockEndColor: "yellow" }}>
        <Row style={{ backgroundColor: "#4b536e", height: "100px", marginLeft: "10px" }}>

          <h5 style={{ fontSize: "20px", padding: "10px", color: "#295eb3", justifyContent: "center", }}>
            <img
              src={logo}
              className="img-responsive"
              style={{
                marginRight: "10px",
                height: "80px"
              }}
            />

            <b style={{ color: "white", borderBlockColor: "1px" }}>DR.B.R.AMBEDKAR GURUKULAMS

              BRAGCET-2022 ADMISSIONS FOR 5TH CLASS</b>
            <br></br>
            <div style={{ marginLeft: "90px", marginTop: "-32px", color: "#f0adb2" }}><b>GOVERNMENT OF ANDHRA PRADESH</b>

              <a href="#"><b style={{ marginLeft: "450px", color: "white" }}> Home</b></a>
              <a href="#"><b style={{ marginLeft: "50px", color: "white" }}> About Us</b></a>
              <a href="#"><b style={{ marginLeft: "50px", color: "white" }}> Reports</b></a>
              {/* <button style={css[2]}>Department Login</button> */}


            </div>
            &nbsp;
            &nbsp;
          </h5>

        </Row>
        <br />
        <Row style={{ border: "1px solid orange" }}></Row>
      </div>
      <div class="container bg-white shadow-left-right">
        <div>
          <Row>
            <Col
              md={2}
              style={{
                color: "white",
                backgroundColor: "orange",
                height: "40px",
                justifyContent: "center",
              }}
            >
              {" "}
              <b> Message Board</b>
            </Col>
            <Col
              md={10}
              style={{
                backgroundColor: "#e1e1e6",
                height: "40px",
                color: "#943810",
              }}
            >
              <marquee direction="left">
                <b>DR.B.R.Ambedkar Gurukulams

                  BRAGCET-2022 Admissions for 5th and Intermediate Admissions</b>
              </marquee>
            </Col>
          </Row>
          <Row
            style={{
              backgroundColor: "white",
              height: "20px",
            }}
          ></Row>

          <Row
            style={{
              backgroundColor: "#126346",
              height: "40px",
              color: "white",
            }}
          >
            <Col md={10}>
              {/* <b>ANDRAPRADESH MODEL SCHOOL'S ADMISSIONS ::2022-23SS</b>APBRAG- 5th Class Admission-Notification 2022-2023 */}
              <b style={{ marginLeft: "80px" }}>APBRAG- 5th Class Admission-Notification 2022-2023</b>
            </Col>
            <Col md={2}>
              <b>IMPORTANT LINKS</b>

            </Col>
          </Row>
          <Row>
            <Card
              style={{
                height: "805px",
              }}
            >


              <Row>
                <Col md={8} style={{ paddingTop: "35px" }}>
                  <Card
                    class="container bg-white shadow-left-right"
                    style={{
                      backgroundColor: "white",
                      border: "1px solid white",
                    }}
                  >
                    <div
                      class="container-fluid"
                      style={{
                        justifyContent: "center",
                        backgroundColor: "#126346",
                        color: "white",
                        textAlign: "center",
                        height: "35px",
                      }}
                    >
                      <div class="jumbotron">
                        {/* <b>APMS VI (CLASS)</b>APBRAG- 5th Class Admission-Notification 2022-2023 */}
                        <b>APBRAG- 5th Class Admission-Notification 2022-2023</b>
                      </div>
                    </div>
                    <table class="table">
                      <tbody>
                        <tr>
                          <th style={css[3]} scope="col">
                            Notification
                          </th>
                          <td scope="col"><a href="https://apgpcet.apcfss.in/Notification/20225thNotificationnew.PDF" > <b className="BsFillArrowRightSquareFill" style={{ color: "black", }}>
                            Download</b>  </a></td>
                        </tr>
                        <tr>
                          <th style={css[3]}>
                            Online Application
                          </th>
                          <td><a href="http://localhost:3003/swfifthform"><b>Click Here</b></a></td>
                        </tr>
                        <tr>
                          <th style={css[3]}>Start Date</th>

                          <td><b>08/03/2022</b></td>
                        </tr>
                        <tr>
                          <th style={css[3]}>End Date</th>
                          <td>
                            {/* <button
                              style={{
                                backgroundColor: "orange",
                                border: "1px solid orange",
                              }}
                            >
                              click here to payment
                            </button> */}
                            <b>08/04/2022</b>
                          </td>
                        </tr>
                        <tr>
                          <th style={css[3]}>
                            Print Application
                          </th>
                          <td>-</td>
                        </tr>
                        <tr>
                          <th style={css[3]}>download Hallticket</th>
                          <td>

                            <a href="https://apgpcet.apcfss.in/PrintHallticket.aprjdc" > <b className="BsFillArrowRightSquareFill" style={{ color: "black", }}>
                            </b>
                              <b style={{ color: "blue" }}>Click Here</b></a>
                          </td>
                        </tr>
                        <tr>
                          <th style={css[3]}>Examination Date</th>
                          <td>
                            {/* <button
                              style={{
                                backgroundColor: "orange",
                                border: "1px solid orange",
                              }}
                            >
                              Sixth-Candidate Login
                            </button> */}
                            <b>24/04/2022</b>
                          </td>
                        </tr>



                        <tr>
                          <th style={css[3]}>Rank Results</th>
                          <td>-</td>
                        </tr>
                        {/* <tr>
                          <th style={css[3]}>Phase-II Results</th>
                          <td>click here</td>
                        </tr> */}
                      </tbody>
                    </table>

                    <div style={{ paddingTop: "10px" }}>
                      <div
                        class="container-fluid"
                        style={{
                          justifyContent: "center",
                          backgroundColor: "#126346",
                          color: "white",
                          textAlign: "center",
                          height: "35px",
                        }}
                      >
                        <div class="jumbotron">
                          <b>APBRAG- Intermediate Admission-Notification 2022-2023</b>
                        </div>
                      </div>
                      <table class="table">
                        <tbody>
                          <tr>
                            <th style={css[3]} scope="col">
                              Notification
                            </th>
                            <td scope="col"><a href="https://apgpcet.apcfss.in/Notification/20225thNotificationnew.PDF" > <b className="BsFillArrowRightSquareFill" style={{ color: "black", }}>
                              Download</b>  </a></td>
                          </tr>
                          <tr>
                            <th style={css[3]}>
                              Online Application
                            </th>
                            <td><a href="http://localhost:3003/swfifthform"><b>Click Here</b></a></td>
                          </tr>
                          <tr>
                            <th style={css[3]}>Start Date</th>

                            <td><b>08/03/2022</b></td>
                          </tr>
                          <tr>
                            <th style={css[3]}>End Date</th>
                            <td>
                              {/* <button
                              style={{
                                backgroundColor: "orange",
                                border: "1px solid orange",
                              }}
                            >
                              click here to payment
                            </button> */}
                              <b>08/04/2022</b>
                            </td>
                          </tr>
                          <tr>
                            <th style={css[3]}>
                              Print Application
                            </th>
                            <td>-</td>
                          </tr>
                          <tr>
                            <th style={css[3]}>download Hallticket</th>
                            <td>

                              <a href="https://apgpcet.apcfss.in/PrintHallticket.aprjdc" > <b className="BsFillArrowRightSquareFill" style={{ color: "black", }}>
                              </b>
                                <b style={{ color: "blue" }}>Click Here</b></a>
                            </td>
                          </tr>
                          <tr>
                            <th style={css[3]}>Examination Date</th>
                            <td>
                              {/* <button
                              style={{
                                backgroundColor: "orange",
                                border: "1px solid orange",
                              }}
                            >
                              Sixth-Candidate Login
                            </button> */}
                              <b>24/04/2022</b>
                            </td>
                          </tr>



                          <tr>
                            <th style={css[3]}>Rank Results</th>
                            <td>-</td>
                          </tr>
                          {/* <tr>
                            <th style={css[3]} scope="col">
                              Notification & Schedule
                            </th>
                            <td scope="col">click here</td>
                          </tr>

                          <tr>
                            <th style={css[3]}>Presse Note</th>

                            <td>click here</td>
                          </tr>
                          <tr>
                            <th style={css[3]}>Payment</th>
                            <td>
                              <button
                                style={{
                                  backgroundColor: "orange",
                                  border: "1px solid orange",
                                }}
                              >
                                click here to payment
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <th style={css[3]}>Application/Print Form</th>
                            <td>
                              {" "}
                              <button
                                style={{
                                  backgroundColor: "orange",
                                  border: "1px solid orange",
                                }}
                              >
                                Sixth-Candidate Login
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <th style={css[3]}>Forgot-candidate details</th>
                            <td>-</td>
                          </tr>
                          <tr>
                            <th style={css[3]}>
                              Payment Start Date | Payment End Date
                            </th>
                            <td>05.06.2022|16.06.2022</td>
                          </tr>
                          <tr>
                            <th style={css[3]}>
                              Application Start Date | Application End Date
                            </th>
                            <td>05.06.2022|17.06.2022</td>
                          </tr>
                          <tr>
                            <th style={css[3]}>User Manual</th>
                            <td>click here</td>
                          </tr> */}






                        </tbody>
                      </table>
                    </div>
                  </Card>
                </Col>
                <Col
                  md={4}
                  style={{ height: "785px", backgroundColor: "#e1e1e6" }}

                >
                  <Row md={2} style={{ backgroundColor: "#42bfdb", marginTop: "10px", color: "white", height: "30px" }}>
                    <b>  ANNEXURES</b>

                  </Row>
                  <br></br>
                  <Row>

                    <a href="https://apgpcet.apcfss.in/Notification/ANNEXURE_A_2022.pdf" > <b className="BsFillArrowRightSquareFill" style={{ color: "black", }}> ANNEXURE - A -AP Dr.B.R.Ambedkar Gurukalams</b>  </a>
                  </Row>
                  <br></br>
                  <Row>

                    <a href="https://apgpcet.apcfss.in/Notification/ANNEXURE_B_2022.pdf" > <b style={{ color: "black" }}>  ANNEXURE - B -Mobile No's of DCO's </b>  </a>
                  </Row>
                  <br></br>
                  <Row>

                    <a href="https://apgpcet.apcfss.in/Notification/ANNEXURE_C_2022.pdf" > <b style={{ color: "black" }}> ANNEXURE - C-Exam Pattern Details</b>  </a>
                  </Row>
                  <br></br>
                  <Row>

                    <a href="https://apgpcet.apcfss.in/Notification/5th_Question_Paper_and_KEY.pdf" > <b style={{ color: "red" }}> Question Paper and Answer key</b>  </a>
                  </Row>
                  <br></br>
                  <Row>

                    <a href="https://apgpcet.apcfss.in/Notification/BRAGCET_5th_final_key_2022.pdf" > <b style={{ color: "red" }}> Final Answer key</b>  </a>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Row>
          <Row
            style={{
              backgroundColor: "#126346",
              marginTop: "30ox",
              height: "40px",
              color: "white",
              textAlign: "center",
            }}
          >
            {" "}
            <span>
              {" "}
              Designed & developed by <a href="https://apcfss.in/" ><b style={{ color: "orange" }}>  APCFSS</b></a>
            </span>
          </Row>
        </div>
      </div>
    </>
  );
}
