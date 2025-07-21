import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function ModalPopups()
{

           const modalState= useSelector(state=>state.modalState);
                 const dispatch=useDispatch(); 
    //const [show, setShow] = useState(false);

    const handleClose = () => dispatch( {type:"HIDEPOPUP"}) ;
    const handleShow = () => dispatch( {type:"SHOWDEPT"}) ;

        function setValue(event)
        {
           // alert(event.target.getAttribute('data-value'));
            modalState.formik.formik.setFieldValue(modalState.modalData.fieldValue,event.target.getAttribute('data-value'));
            dispatch( {type:"HIDEPOPUP"});
        }

    return (
        <>
        
    
          <Modal show={modalState.showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{modalState.modalData.modalHeading} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <ul class="list-group">
                {
                   modalState.modalData.body.map(
                       (obj)=>{
                        return <li class="list-group-item" data-value={obj.displayText}
                         onClick={setValue} >{obj.displayText}</li>
                       }
                   ) 
                }
          
  
</ul>
                
                </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );

}

export default ModalPopups;