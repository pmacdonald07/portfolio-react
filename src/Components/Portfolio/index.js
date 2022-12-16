import Project from "../Project";
import { Container, Row, Col } from "reactstrap";

const Portfolio = () => {
  return (
    <Container>
      <Row className="mb-3">
        <Col className="px-4">
          <h3 className="text-center text-md-left px-4">Portfolio</h3>
        </Col>
      </Row>
      <Project></Project>
    </Container>
  );
};

export default Portfolio;
