import Card from "react-bootstrap/Card";
import AllBooks from "../src/data/horror.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AllTheBooks = function () {
  return (
    <>
      <Container>
        <Row>
          {AllBooks.map((Book) => {
            return (
              <Col key={Book.asin} xs={12} md={4} lg={2} className="g-3">
                <Card className="h-100">
                  <Card.Img
                    style={{ height: "200px" }}
                    variant="top"
                    src={Book.img}
                  />
                  <Card.Body>
                    <Card.Title>{Book.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default AllTheBooks;
