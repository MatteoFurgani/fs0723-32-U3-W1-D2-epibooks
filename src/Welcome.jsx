import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Welcome = function () {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          {["danger"].map((variant) => (
            <Col xs={6} className="text-center">
              <Alert key={variant} variant={variant}>
                ATTENZIONE SHOP CHIUSO!
              </Alert>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default Welcome;
