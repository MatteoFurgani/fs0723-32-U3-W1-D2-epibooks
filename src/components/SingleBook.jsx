import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  toggleSelected = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
    // Seleziona il libro
    this.props.selectBook(this.props.book);
  };

  render() {
    const { book } = this.props;

    return (
      <Col key={book.asin} xs={6} md={4} lg={2} className="g-3">
        <Card
          onClick={this.toggleSelected}
          className={`${
            this.state.selected ? "border border-danger border-5" : ""
          }`}
        >
          {book.img && (
            <Card.Img
              style={{ height: "200px" }}
              variant="top"
              src={book.img}
            />
          )}
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
