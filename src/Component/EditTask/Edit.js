import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editTask } from "../../Redux/Actions/Actions";


import * as Icon from 'react-bootstrap-icons';
import "../EditTask/Edit.css";

const Edit = ({ el }) => {
  const [changeModal, setchangeModal] = useState(el.task);

  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div >
      
     
      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Edit your task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
           className="edite"
            placeholder="Edit your task"
            onChange={(e) => setchangeModal(e.target.value)}
            value={changeModal}
          />
        </Modal.Body>
        <Modal.Footer>
      
          <Button
          className="save"
            variant="primary"
            onClick={() => {
              {
                if (changeModal) {
                  dispatch(editTask({ id: el.id, task: changeModal }));
                  setchangeModal("");
                }
                
                  else  {
                    alert ("cant add emty edit")
                  }
                
              }
              
            }}
          >
            Save Modification 
          </Button>
          <Button 
          className="exit"
          variant="primary"
          onClick={() => { handleClose();}}
          
          >Close</Button>
        </Modal.Footer>
      </Modal>
      <Button
       className="btnedit"
       variant="secondary"
       onClick={handleShow}
      >
      <Icon.PencilSquare color="white" width="1.5em" height="1.5em" variant="primary">  </Icon.PencilSquare>
      Edit task
      </Button>
    </div>
  );
};

export default Edit;
