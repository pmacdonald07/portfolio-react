import { Container, Row, Col } from "reactstrap";

const About = () => {
  return (
    <Container>
      <Row className="mb-3">
        <Col>
          <h3>About Me</h3>
        </Col>
      </Row>
      <Row>
        <Col d-block-md>
          <img
            src={require(`../../assets/imgs/pfp.jpg`)}
            alt="professional-pic"
            className="img-thumbnail mb-3 m-auto-md"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            My name is Patrick MacDonald, and I am a full-stack developer from
            western North Carolina. My journey as a developer began with a
            six-month coding boot camp at UNC Chapel Hill. I am a versatile
            developer with a passion for collaboration and continued learning. I
            am constantly honing my skills and learning new technologies and am
            hungry to work on more projects using React. I intend to become as
            proficient as possible in both front-end and back-end development so
            that I can fit into any development team and help wherever possible.
            <br></br>
            <br></br>
            In my personal life, I am grateful every day for my wonderful wife,
            Molly, and our four cats. I am an avid reader and love video games.
            My favorite book is "Parable of the Sower" by Octavia Butler, and I
            am currently reading "The Book of Delights" by Ross Gay. My favorite
            game is Hades from Supergiant Games, and I dream of working with a
            team as talented and driven as Supergiant Games one day.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;