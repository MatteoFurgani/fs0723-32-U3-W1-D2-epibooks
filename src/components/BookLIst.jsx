import SingleBook from "../components/SingleBook";
import Books from "../data/scifi.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const BookList = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <h1 className="text-center">SCIFI</h1>

          {Books.map((Book) => (
            <SingleBook key={Book.asin} Book={Book} />
          ))}
        </Row>
      </Container>
    </>
  );
};
export default BookList;
