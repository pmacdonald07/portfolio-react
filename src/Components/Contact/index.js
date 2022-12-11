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
    <Container>
      <Row>
        <h3>Contact</h3>
      </Row>
      <Form id="contact-form" onSubmit={handleSubmit}>
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
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default Contact;
