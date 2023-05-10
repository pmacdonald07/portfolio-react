// import { Container, Row, Col } from "reactstrap";
import { Row, Col, Container } from 'reactstrap';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="d-flex justify-content-center mb-3" id="footer">
      <Container>
        <Row className="d-block d-md-flex">
          <Col className="col-md-3"></Col>
          <Col className="col col-md-9 d-flex justify-content-center">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <a href="https://github.com/pmacdonald07">
                <i className="bi bi-github mx-1 footer-icon"></i>
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <a href="https://www.linkedin.com/in/patrick-macdonald-nc/">
                <i className="bi bi-linkedin mx-1 footer-icon"></i>
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <a href="https://www.instagram.com/pmacdonald89/?hl=en">
                <i className="bi bi-instagram mx-1 footer-icon"></i>
              </a>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
