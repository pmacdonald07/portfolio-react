import validator from "validator";
import { useState } from "react";
import {
  Container,
  Row,
  Button,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  Col,
} from "reactstrap";
import { capitalizeFirstLetter } from "../../utils/helpers";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validator.isEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage("Your email is invalid");
      } else {
        setErrorMessage("");
      }
    } else {
      const isEmpty = validator.isEmpty(e.target.value);
      if (isEmpty) {
        setErrorMessage(`${capitalizeFirstLetter(e.target.name)} is required`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <Container className="mt-3">
      <Row className="d-block d-md-flex align-items-center pt-3">
        <Col className="col col-md-3">
          <h3 className="text-center">Contact</h3>
        </Col>

        <Col className="col col-md-9 mb-3 page-content text-center text-md-left">
          <Form id="contact-form" className="mb-3" onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Name:</Label>
              <Input name="name" defaultValue={name} onBlur={handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email address:</Label>
              <Input name="email" defaultValue={email} onBlur={handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="message">Message:</Label>
              <Input
                name="message"
                type="textarea"
                rows="5"
                defaultValue={message}
                onBlur={handleChange}
              />
            </FormGroup>
            {errorMessage && (
              <FormGroup>
                <FormText className="error-text">{errorMessage}</FormText>
              </FormGroup>
            )}
            <Button type="submit" className="submit-btn">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
