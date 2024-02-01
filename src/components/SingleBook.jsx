import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  toggleSelected = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  render() {
    return (
      <Col key={this.props.Book.asin} xs={6} md={4} lg={2} className="g-3">
        <Card
          onClick={this.toggleSelected}
          className={`${
            this.state.selected ? "border border-danger border-5" : ""
          }`}
        >
          <Card.Img
            style={{ height: "200px" }}
            variant="top"
            src={this.props.Book.img}
          />
          <Card.Body>
            <Card.Title>{this.props.Book.title}</Card.Title>
          </Card.Body>
        </Card>
        {this.state.selected && (
          <Row>
            <Col className="mt-3">
              <CommentArea selectedBookId={this.props.Book.asin} />
            </Col>
          </Row>
        )}
      </Col>
    );
  }
}

export default SingleBook;
