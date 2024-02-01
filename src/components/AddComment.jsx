import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

class AddComment extends Component {
  state = {
    comment: "",
    rate: "1",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { comment, rate } = this.state;
    const { selectedBookId, fetchComments } = this.props;

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiODlhYjViMjYxNTAwMTk4YTY5MmQiLCJpYXQiOjE3MDY3ODkyOTIsImV4cCI6MTcwNzk5ODg5Mn0.ZYggs7yUtVxNOAWvgrF-LvfxwnQmzL4vbWw4SxRdGwM",
      },
      body: JSON.stringify({ comment, rate, elementId: selectedBookId }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Comment added successfully");
          fetchComments();
        } else {
          throw new Error("Error adding comment");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    this.setState({ comment: "", rate: "1" });
  };

  render() {
    return (
      <Col xs={6} md={4} lg={8}>
        <h4 className="mt-2">Aggiungi Commento</h4>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="comment">
            <Form.Label>Comment:</Form.Label>
            <Form.Control
              as="textarea"
              name="comment"
              value={this.state.comment}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="rate">
            <Form.Label>Rating:</Form.Label>
            <Form.Control
              as="select"
              name="rate"
              value={this.state.rate}
              onChange={this.handleChange}
            >
              {[1, 2, 3, 4, 5].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <button className="my-2" type="submit">
            Aggiungi
          </button>
        </Form>
      </Col>
    );
  }
}

export default AddComment;
