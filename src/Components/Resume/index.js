import { Container, Row, Col, List } from "reactstrap";

const Resume = () => {
  return (
    <Container className="mb-4">
      <Row>
        <h3 className="text-center text-md-left">Resume</h3>
        <a
          href={require(`../../assets/Patrick_MacDonald_Resume.pdf`)}
          className="text-decoration-none mb-2 text-center text-md-left text-dark"
          download
          id="download-link"
        >
          Click To Download My Resume
        </a>
      </Row>
      <Row className="d-block d-md-flex">
        <Col className="col col-md-6 text-center text-md-left">
          <h4 className="text-center text-md-left">Front-End Proficiencies</h4>
          <List type="unstyled">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>responsive design</li>
            <li>React</li>
            <li>ReactStrap</li>
            <li>Bootstrap</li>
            <li>Bulma</li>
          </List>
        </Col>
        <Col className="col col-md-6 text-center text-md-left">
          <h4 className="text-center text-md-left">Back-End Proficiencies</h4>
          <List type="unstyled">
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL, Apollo</li>
          </List>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;
