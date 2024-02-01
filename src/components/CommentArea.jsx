import React, { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  fetchComments = () => {
    const { selectedBookId } = this.props;
    fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${selectedBookId}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiODlhYjViMjYxNTAwMTk4YTY5MmQiLCJpYXQiOjE3MDY3ODkyOTIsImV4cCI6MTcwNzk5ODg5Mn0.ZYggs7yUtVxNOAWvgrF-LvfxwnQmzL4vbWw4SxRdGwM",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella ricezione dati dal server");
        }
      })
      .then((data) => this.setState({ comments: data }))
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    return (
      <div>
        <h3>Commenti</h3>
        <CommentList comments={this.state.comments} />
        <AddComment
          selectedBookId={this.props.selectedBookId}
          fetchComments={this.fetchComments}
        />
      </div>
    );
  }
}

export default CommentArea;
