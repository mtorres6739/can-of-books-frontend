import React from "react";
import { Container, Form, Button } from "react-bootstrap";



class BookForm extends React.Component {

  render () {
    return (
      <>
      <Container>
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Book Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Book Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Book Description</Form.Label>
            <Form.Control type="text" placeholder="Enter Book Description" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="status">
            <Form.Label>Book Status</Form.Label>
            <Form.Check type="checkbox" placeholder="Enter Book Status" label="Check the box if you have read this book." />
          </Form.Group>
            <Button variant="primary" type="submit" onClick={this.props.closeModal}>
            Add Book
          </Button>
        </Form>
      </Container>
      </>
    );
  }

}

export default BookForm;