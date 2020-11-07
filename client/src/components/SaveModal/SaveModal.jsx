import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const SaveModal = ({ showModal, toggleModal }) => {

  return (
    <Modal show={showModal} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Favorite</Modal.Title>
      </Modal.Header>
      <Modal.Body>Book saved to favorites!</Modal.Body>
      <Modal.Footer>
        <Button variant="info" onClick={toggleModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};


export default SaveModal;
