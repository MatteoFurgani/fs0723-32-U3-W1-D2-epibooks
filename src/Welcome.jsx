import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Welcome = function () {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={6} className="text-center mt-3">
            <Alert variant="danger">
              <Alert.Heading>ATTENZIONE SHOP CHIUSO!</Alert.Heading>
            </Alert>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Welcome;
