import React from "react";
import { Carousel, Container, Button } from "react-bootstrap";

class BookCarousel extends React.Component {
  render() {
    return (
      <Container>
        <Carousel className="mt-2 mb-3">
          {this.props.books.map((book , index) => {
            return (
              <Carousel.Item key={index}>
                <>
                  <img
                    className="d-block w-100"
                    src={
                      "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    }
                    alt={book.title}
                    height="700"
                  />
                </>
                <Carousel.Caption>
                  <>
                    <h3>{book.title}</h3>
                    <p>{book.description}</p>
                    <p>{book.status}</p>
                    <Button
                      variant="danger"
                      onClick={() => this.props.handleDelete(book)}
                    >
                      Delete Book
                    </Button>
                    <Button
                      onClick={() => this.props.openModalUpdate(book)}
                    >
                      Update Book
                    </Button>
                  </>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>
    );
  }
}

export default BookCarousel;
