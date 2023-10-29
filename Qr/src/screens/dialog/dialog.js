import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './dialog.css';
import { useNavigate } from 'react-router-dom';


function DialogComponent() {
const [show, setShow] = useState(true);
const navigate=useNavigate();
const handleShow = () => navigate('/av');

  return (
<div className="App">
  <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
      </div>
      <Modal show={show}>
        <Modal.Body>
          <h6> Is your problem likely to be related to Audio Visual?</h6>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success"onClick={()=>handleShow()} >Yes</Button>
          <Button variant="danger"onClick={()=>setShow(false)} >No</Button>
        </Modal.Footer>
      </Modal>
 </div>


  );
}

export default DialogComponent;



// className='d-none'



