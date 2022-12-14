import Project from "../Project";
import { Container, Row, Col } from "reactstrap";

const Portfolio = () => {
  return (
    <Container>
      <Row className="mb-3">
        <Col>
          <h3>Portfolio</h3>
        </Col>
      </Row>
      <Row>
        <Project></Project>
      </Row>
    </Container>
  );
};

export default Portfolio;
