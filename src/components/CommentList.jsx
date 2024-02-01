import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";

const CommentList = ({ comments }) => {
  return (
    <div>
      <Col>
        <ListGroup>
          {comments.map((comment, index) => (
            <ListGroup.Item key={index}>
              <strong>Rating:</strong> {comment.rate}, <strong>Comment:</strong>{" "}
              {comment.comment}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    </div>
  );
};

export default CommentList;
