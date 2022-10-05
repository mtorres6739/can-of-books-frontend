import React from "react";
import { Container, Modal, Button } from "react-bootstrap";
import BookForm from "./BookForm";

class BookModal extends React.Component {
  render() {
    return (
      <>
      <Container>
        <Modal show={this.props.state.showBookModal} onHide={this.props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <BookForm
              handleSubmit={this.props.handleSubmit}
              handleClose={this.props.closeModal}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
      </>
    );
  }
}

export default BookModal;