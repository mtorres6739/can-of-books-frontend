import React from "react";
import { Container, Modal, Button } from "react-bootstrap";
import BookFormUpdate from "./BookFormUpdate";

class BookModalUpdate extends React.Component {
  render() {
    return (
      <>
      <Container>
        <Modal show={this.props.showBookModalUpdate} onHide={this.props.closeModalUpdate}>
          <Modal.Header closeButton>
            <Modal.Title>Update Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <BookFormUpdate
              selectedBook={this.props.selectedBook}
              handleUpdateSubmit={this.props.handleUpdateSubmit}
              closeModalUpdate={this.props.closeModalUpdate}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.closeModalUpdate}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
      </>
    );
  }
}

export default BookModalUpdate;