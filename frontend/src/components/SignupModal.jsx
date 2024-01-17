import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Signup from "../pages/Signup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignupModal = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  return (
    <div>
      <Modal show={show} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body className="custom_signup_class">
          <Signup />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SignupModal;
