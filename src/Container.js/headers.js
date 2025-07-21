import { Row, Col, Card, FormGroup } from "react-bootstrap";
import logo from "./logo.png";

import { JbTabs } from "./jbtabs";
import { FormikProvider } from "formik";
import { Button } from "bootstrap";
import { Jblogin } from "./jbreducer";
import { useDispatch } from "react-redux";
import Jbody from "./Jbody";
import { Jbbody } from "./jbody2";
import { Jfooter } from "./jfooter";
import { Abc } from "./abc";

export function Jnanabhumi() {
  const dispatch = useDispatch();

  function jblogin() {
    dispatch({ type: "SHOWPOPUP" });
    dispatch({
      type: "UPDATEMODALDATA",
      payload: {
        modalHeading: "Log In",
        body: [{ displayText: "username" }, { displayText: "password" }],
      },
    });
  }

  return (
    <>
      <Row>
        <Col xs={2} sm={2} md={2} lg={2}>
          {" "}
          <img
            src={logo}
            className="img-responsive"
            style={{
              padding: "50px",
              height: "auto",
              width: "auto",
              marginTop: "10px!important",
              marginLeft: "-60px",
            }}
          />
        </Col>

        <Col
          style={{
            padding: "70px",
            marginTop: "100px!important",
            marginLeft: "1px",
          }}
        >
          <JbTabs></JbTabs>
        </Col>
        <Col
          style={{
            padding: "30px",
            marginTop: "10px!important",
            marginRight: "-900px",
          }}
        >
          <button
            type="button"
            style={{
              backgroundColor: "#e39836",
              border: "3px solid white",

              height: "40px",
              width: "100px",
            }}
            onClick={jblogin}
          >
            Log in
          </button>{" "}
          <button
            type="button"
            style={{
              border: "3px solid white",
              backgroundColor: "#e39836",
              height: "40px",
              width: "150px",
            }}
            onClick={jblogin}
          >
            Login For Nivas
          </button>
        </Col>
      </Row>
      <Jbbody></Jbbody>
      <Jfooter></Jfooter>
      <Abc></Abc>
    </>
  );
}
