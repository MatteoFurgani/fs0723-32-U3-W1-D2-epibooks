import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Container";
import Col from "react-bootstrap/Container";

const MyFooter = function () {
  return (
    <>
      <Container>
        <Row className="justify-content-cente">
          <Col xs={12} className="text-center mt-5">
            <i class="bi bi-facebook mx-5 fs-4"></i>
            <i class="bi bi-twitter mx-5 fs-4"></i>
            <i class="bi bi-whatsapp mx-5 fs-4"></i>
            <i class="bi bi-instagram mx-5 fs-4"></i>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyFooter;
