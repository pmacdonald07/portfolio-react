import Project from "../Project";
import { Container, Row, Col } from "reactstrap";

const Portfolio = () => {
  return (
    <Container className="mb-3">
      <Row className="d-block d-md-flex align-items-center pt-3 pb-4">
        <Col className="col col-md-3">
          <h3 className="text-center text-md-left px-4">Portfolio</h3>
        </Col>
        <Project></Project>
      </Row>
    </Container>
  );
};

export default Portfolio;
