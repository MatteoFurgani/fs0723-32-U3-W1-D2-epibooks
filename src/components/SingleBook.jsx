import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Component } from "react";

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
          className={`h-100 ${
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
      </Col>
    );
  }
}
export default SingleBook;
