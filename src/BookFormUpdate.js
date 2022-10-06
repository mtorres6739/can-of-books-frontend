import React from "react";
import { Container, Form, Button } from "react-bootstrap";



class BookFormUpdate extends React.Component {

  render () {
    return (
      <>
      <Container>
        <Form onSubmit={this.props.handleUpdateSubmit}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Book Name</Form.Label>
            <Form.Control type="text" placeholder={this.props.selectedBook.title} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Book Description</Form.Label>
            <Form.Control type="text" placeholder={this.props.selectedBook.description} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="status">
            <Form.Label>Book Status</Form.Label>
            <Form.Check type="checkbox" placeholder="Enter Book Status" label="Check the box if you have read this book." />
          </Form.Group>
            <Button variant="primary" type="submit" >
            Update Book
          </Button>
        </Form>
      </Container>
      </>
    );
  }

}

export default BookFormUpdate;