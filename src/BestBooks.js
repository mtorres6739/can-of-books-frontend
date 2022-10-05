import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Carousel, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
// import BookForm from './BookForm';
import BookModal from './BookModal';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showBookModal: false
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  getBooks = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/books`);
      this.setState({
        books: response.data
      })

    } catch (error) {
      console.log("we have an error", error.message);

    }
  }


  // Create Books



  handleSubmit = (event) => {
    event.preventDefault();
    this.handleBookCreate({
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.checked
    });
  }
  handleBookCreate = async (book) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/books`, book);
      const newBook = response.data;
      this.setState({
        books: [...this.state.books, newBook]
      })
    } catch (error) {
      console.log("we have an error", error.message);
    }
  }


  // Delete Books
  handleDelete = async (bookToDelete) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/books/${bookToDelete._id}`);
      const newBooks = this.state.books.filter(book => book._id !== bookToDelete._id);
      this.setState({
        books: newBooks
      })
    } catch (error) {
      console.log("we have an error", error.message);
    }
  }

  // Open Book Modal
  openModal = () => {
    this.setState({
      showBookModal: true
    })
  }

  // Close Book Modal
  closeModal = () => {
    this.setState({
      showBookModal: false
    })
  }




  componentDidMount = () => {
    this.getBooks();
    this.openModal();
    this.closeModal();
  }



  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <Container>
          <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

          <Row>
            <Col>
              <div className='mt-2 mb-3'>
                <Button onClick={this.openModal}>Add a Book to the Collection</Button>
                <BookModal
                  state={this.state}
                  handleSubmit={this.handleSubmit}
                  closeModal={this.closeModal}
                />
              </div>
            </Col>
          </Row>



          <Carousel>
            {this.state.books.length ? (
              this.state.books.map((book, idx) => {
                return (
                  <Carousel.Item key={idx}>
                    <img
                      className="d-block w-100"
                      src={"https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}
                      alt="First slide"
                      height="700"
                    />
                    <Carousel.Caption>
                      <h3>{book.title}</h3>
                      <p>{book.description}</p>
                      <p>{book.status}</p>
                      <Button onClick={() => this.handleDelete(book)}>Delete</Button>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
              })


            ) : (
              <p>loading...</p>
            )}
          </Carousel>
        </Container>
      </>
    )
  }
}







export default BestBooks;
