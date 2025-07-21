import { Col, Row } from "react-bootstrap";
import download from "./download.jpg";

export function Jfooter() {
  return (
    <>
      <footer class="container-fluid" style={{ backgroundColor: "#c2d4f0" }}>
        <Row>
          {" "}
          <Col md={6}>
            {" "}
            <h3>
              <b style={{ color: "1px solid black" }}> Related Links</b>
            </h3>
          </Col>
          <Col md={6}>
            {" "}
            <h3>
              <b style={{ color: "1px solid black" }}> Contact Us</b>
            </h3>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <b>
              {" "}
              <a href="https://socialwelfare.apcfss.in/">
                {" "}
                Social Welfare Department
              </a>
            </b>

            <br></br>
            <b>
              {" "}
              <a href="https://jnanabhumi.ap.gov.in/nivas/">
                {" "}
                Residential School & Hostels
              </a>
            </b>
            <br></br>
            <b>
              {" "}
              <a href="https://scsp.apcfss.in/"> SCSP</a>
            </b>
            <br></br>
            <b>
              {" "}
              <a href="https://tsp.apcfss.in/"> TSP</a>
            </b>
            <br></br>
            <b>
              {" "}
              <a href="https://epass.apcfss.in/"> ePASS</a>
            </b>
            <br></br>
            <b>
              {" "}
              <a href="https://bie.ap.gov.in/"> BIEAP</a>
            </b>
          </Col>
          <Col md={4}>
            {" "}
            <b>
              {" "}
              <a href="https://www.ap.gov.in/"> AP State Portal</a>
            </b>{" "}
            <br></br>
            <b>
              {" "}
              <a href="https://www.apfinance.gov.in"> AP Finance Portal</a>
            </b>{" "}
            <br></br>
            <b>
              {" "}
              <a href="https://apgovhousing.apcfss.in/">
                {" "}
                AP Housing Corporation
              </a>
            </b>{" "}
            <br></br>
            <b>
              {" "}
              <a href="https://cfms.ap.gov.in/"> CFMS</a>
            </b>
            <br></br>
            <b>
              {" "}
              <a href="https://ysrpk.ap.gov.in">ysrpk.ap.gov.in</a>
            </b>{" "}
            <br></br>
            <b>
              {" "}
              <a href="https://apsrtcpass.in/"> apsrtcpass.in</a>
            </b>{" "}
            <br></br>
          </Col>

          <Col md={4}>
            <h5>jnanabhumi.jvdschemes@gmail.com</h5>
            <img src={download} />
          </Col>
        </Row>
      </footer>
    </>
  );
}
