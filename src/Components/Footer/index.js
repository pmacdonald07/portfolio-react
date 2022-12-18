// import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="d-flex justify-content-center my-3" id="footer">
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        <a href="https://github.com/pmacdonald07">
          <i className="bi bi-github mx-auto mx-1 footer-icon"></i>
        </a>
      </motion.div>

      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        <a href="https://www.linkedin.com/in/patrick-macdonald-nc/">
          <i class="bi bi-linkedin mx-1 footer-icon"></i>
        </a>
      </motion.div>

      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        <a href="https://www.instagram.com/pmacdonald89/?hl=en">
          <i class="bi bi-instagram mx-1 footer-icon"></i>
        </a>
      </motion.div>
    </footer>
  );
};

export default Footer;
