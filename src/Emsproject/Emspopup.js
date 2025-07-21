import React, { useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

export  function Emspopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShows = () => setShow(true);

  return (
    <>
      <button class="rounded-sm" onClick={handleShow} style={{backgroundColor:"#c2d9ff",}}>
       Dept Login
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><Row md={12}><b style={{backgroundColor:""}}>Department Login</b></Row></Modal.Title>
        </Modal.Header>
        {/* <Modal.Body></Modal.Body> */}
        <Modal.Footer>
     <Row> <b>Username:</b> &nbsp;&nbsp;<input type="text " name="name" key="name"></input>
      <b> Password:</b>&nbsp;&nbsp;<input type="text " name="name" key="name"></input></Row>

<button type="submit" style={{backgroundColor:"#eb9167"}}  onClick={handleShows} > Submit</button>
<br></br>
<br></br>

          <button onClick={handleClose} style={{backgroundColor:"#c2d9ff"}}>
            Close
          </button>
          
          {/* <button  onClick={handleClose}>
            Save Changes
          </button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

;