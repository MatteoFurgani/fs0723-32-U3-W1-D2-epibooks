import React, { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  fetchComments = () => {
    const { book } = this.props;

    if (!book) {
      // Se non c'è un libro selezionato, non fare il fetch dei commenti
      return;
    }

    fetch(`https://striveschool-api.herokuapp.com/api/comments/${book.asin}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiODlhYjViMjYxNTAwMTk4YTY5MmQiLCJpYXQiOjE3MDY3ODkyOTIsImV4cCI6MTcwNzk5ODg5Mn0.ZYggs7yUtVxNOAWvgrF-LvfxwnQmzL4vbWw4SxRdGwM",
      },
    })
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

  componentDidUpdate(prevProps) {
    // Controlla se il libro è stato cambiato
    if (this.props.book && this.props.book.asin !== prevProps.book?.asin) {
      // Se il libro è stato cambiato, fetch dei nuovi commenti
      this.fetchComments();
    }
  }

  render() {
    const { book } = this.props;
    const { comments } = this.state;

    return (
      <div>
        {book && (
          <div>
            <h3>Commenti</h3>
            <CommentList comments={comments} />
            <AddComment
              selectedBookId={book.asin}
              fetchComments={this.fetchComments}
            />
          </div>
        )}
      </div>
    );
  }
}

export default CommentArea;
