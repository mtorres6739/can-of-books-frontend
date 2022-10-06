import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import BookModal from "./BookModal";
import BookFormUpdate from "./BookFormUpdate";
import BookCarousel from "./BookCarousel";
import BookModalUpdate from "./BookModalUpdate";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      selectedBook: {},
      showBookModal: false,
      showBookModalUpdate: false,
    };
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  getBooks = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/books`
      );
      this.setState({
        books: response.data,
      });
    } catch (error) {
      console.log("we have an error", error.message);
    }
  };

  // Create Books

  handleSubmit = (event) => {
    // event.preventDefault();
    this.handleBookCreate({
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.checked,
    });
  };
  handleBookCreate = async (book) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/books`,
        book
      );
      const newBook = response.data;
      this.setState({
        books: [...this.state.books, newBook],
      });
    } catch (error) {
      console.log("we have an error", error.message);
    }
  };

  // Delete Books
  handleDelete = async (bookToDelete) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/books/${bookToDelete._id}`
      );
      const newBooks = this.state.books.filter(
        (book) => book._id !== bookToDelete._id
      );
      this.setState({
        books: newBooks,
      });
    } catch (error) {
      console.log("we have an error", error.message);
    }
  };

  //Update Book

  handleUpdateSubmit = async (e) => {
    e.preventDefault();
    this.updateBook({
      title: e.target.title.value || this.state.selectedBook.title,
      // author: e.target.description.value || this.state.selectedBook.author,
      description:
        e.target.description.value || this.state.selectedBook.description,
      status: e.target.status.value || this.state.selectedBook.status,
      _id: this.state.selectedBook._id,
      __v: this.state.selectedBook.__v,
    });
  };

  updateBook = async (bookToUpdate) => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/books/${bookToUpdate._id}`;
      const response = await axios.put(url, bookToUpdate);
      const updatedBook = response.data;
      console.log(updatedBook);
      const updatedBookArr = this.state.books.map((book) => {
        return book._id === updatedBook.data._id ? updatedBook.data : book;
      });
      this.setState({
        books: updatedBookArr,
      });
    } catch (error) {
      console.log("we have an error: ", error.response);
    }
    this.componentDidMount();
    this.closeModalUpdate();
  };

  // Open Book Modal
  openModal = () => {
    this.setState({
      showBookModal: true,
    });
  };
  openModalUpdate = (books) => {
    this.setState({
      showBookModalUpdate: true,
      selectedBook: books,
    });
  };

  // Close Book Modal
  closeModal = () => {
    this.setState({
      showBookModal: false,
    });
  };

  closeModalUpdate = () => {
    this.setState({
      showBookModalUpdate: false,
    });
  };

  componentDidMount = () => {
    this.getBooks();
  };

  render() {
    /* TODO: render all the books in a Carousel */

    return (
      <>
        <Container>
          <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
          <Row>
            <Col>
              <div className="mt-2 mb-3">
                <Button onClick={this.openModal}>
                  Add a Book to the Collection
                </Button>
                <BookModal
                  state={this.state}
                  handleSubmit={this.handleSubmit}
                  closeModal={this.closeModal}
                />
              </div>
            </Col>
          </Row>
        </Container>
        {this.state.showBookModalUpdate && (
          <>
            <BookFormUpdate
              // handleUpdateSubmit={this.handleUpdateSubmit}
              // closeModalUpdate={this.closeModalUpdate}
              selectedBook={this.state.selectedBook}
            />
            <BookModalUpdate
              showBookModalUpdate={this.state.showBookModalUpdate}
              selectedBook={this.state.selectedBook}
              handleUpdateSubmit={this.handleUpdateSubmit}
              closeModalUpdate={this.closeModalUpdate}
            />
          </>
        )}
        {this.state.books.length ? (
          <BookCarousel
            books={this.state.books}
            handleDelete={this.handleDelete}
            openModalUpdate={this.openModalUpdate}
          />
        ) : (
          <p>There are no books in our Database.</p>
        )}
      </>
    );
  }
}

export default BestBooks;
