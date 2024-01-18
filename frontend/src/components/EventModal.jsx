import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Event from "../pages/Event";
import { useNavigate } from "react-router-dom";

const EventModal = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    navigate("/login");
  };

  const handleShow = () => setShow(true);

  return (
    <div>
      <Button className="modal_toggle" onClick={handleShow}>
        Book Event
      </Button>

      <Modal show={show} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Event />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EventModal;
