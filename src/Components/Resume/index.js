import { Container, Row, Col, List } from "reactstrap";

const Resume = () => {
  return (
    <div className="d-flex align-items-center">
      <Container className="mb-4 mt-3">
        <Row className="d-block d-md-flex align-items-center pt-3">
          <Col className="col col-md-3 small-text-center">
            <h3 className="text-center text-md-left">Resume</h3>
            <a
              href={require(`../../assets/Patrick_MacDonald_Resume.pdf`)}
              className="text-decoration-none mb-2 text-dark text-center text-md-left"
              download
              id="download-link"
            >
              Click To Download My Resume
            </a>
          </Col>

          <Col className="col col-md-9 pl-3 mb-3 page-content">
            <Row className="d-block d-md-flex">
              <Col className="col col-md-6 text-center text-md-left">
                <h4 className="text-center text-md-left">
                  Front-End Proficiencies
                </h4>
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
                <h4 className="text-center text-md-left">
                  Back-End Proficiencies
                </h4>
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Resume;
