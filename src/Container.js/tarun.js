import logo from "./aplogo_new.png";
import { Button, Card, Col, Row, Container } from "react-bootstrap";
export function Tarun() {
  return (
    <>
      <Container>
        <Col>
          <h5 style={{ color: "skyblue", FontFamily: "bold" }}>
            <img src={logo} style={{ height: "50px" }} />
            &nbsp;&nbsp; SCHEDULED CASTES COMPONENTS
            <br />
            (SCHEDULED CASTES SUB - PLAN)
          </h5>
        </Col>
      </Container>
    </>
  );
}
