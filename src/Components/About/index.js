import { Container, Row, Col } from 'reactstrap';
// import Image from "../Image";

const About = () => {
  return (
    <Container className="my-3">
      <Row className="d-block d-md-flex align-items-center pt-3 content-height">
        <Col className="col col-md-3">
          <h3 className="text-center text-md-left">About Me</h3>
        </Col>
        <Col className="col col-md-9 pl-3 mb-3 page-content">
          <div className="text-center">
            <img
              src={require(`../../assets/imgs/pfp.jpg`)}
              alt="professional-pic"
              className="img-thumbnail mb-3 mx-auto pfp"
            />
          </div>
          <p>
            My name is Patrick MacDonald, and I am a full-stack developer from
            western North Carolina. I have a Bachelor of Arts in English from
            Furman University and recently obtained a certificate for full stack
            development from UNC Chapel Hill. I am a versatile developer with a
            passion for collaboration and continued learning. I enjoy creating
            and am skilled in developing mobile responsive web applications
            using JavaScript, HTML5, CSS, React, jQuery, MySQL, GraphQL,
            Express, and more. My passion and attentiveness make me adept at
            translating user needs into polished functionality. I am known by my
            colleagues for my determination, resourcefulness, and precision.
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
