import { Component } from "react";
import SingleBook from "../components/SingleBook";
import Books from "../data/scifi.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    selectedBook: null,
  };

  selectBook = (book) => {
    this.setState({ selectedBook: book });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={8}>
            <Container>
              <Row className="justify-content-center">
                <h1 className="text-center">SCIFI</h1>
                {/* Renderizzo il componente SingleBook */}
                {Books.map((book) => (
                  <SingleBook
                    key={book.asin}
                    book={book}
                    selectBook={this.selectBook}
                  />
                ))}
              </Row>
            </Container>
          </Col>
          <Col md={4}>
            <Container>
              <Row className="justify-content-center">
                {/* Passa il libro selezionato al CommentArea */}
                <CommentArea book={this.state.selectedBook} />
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
