import {
  Card,
  CardLink,
  Row,
  Col,
  CardImgOverlay,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';

const Project = () => {
  let text = [
    "OurPlace was developed to be a roommate finder for people that can not cover rent and need a way to vet potential roommates. Users can register, create profiles, search for other users' profiles that match what they want in a roommate, and save profiles that meet those criteria.",
    <br />,
    <br />,
    "OurPlace is a full MERN stack application, using MongoDb, Express.js, React, and Node.js. Our Place uses Apollo-Client to set an application-wide context for the current user and to cache information. The application uses GraphQL to query the database and run mutations for CRUD operations. React Router handles the application's routes and end points, and we save Json Web Tokens to local storage to handle sessions.",
  ];
  const projectArray = [
    {
      name: 'Our Place',
      githubLink: 'https://github.com/awchen85/project-3',
      deployedLink: 'https://p3-our-place.herokuapp.com/',
      imageSrc: `../../assets/imgs/our-place.jpg`,
      description: text,
    },
    {
      name: 'Flashaholic',
      githubLink: 'https://github.com/pmacdonald07/Flashaholic',
      deployedLink: 'https://shielded-sea-30882.herokuapp.com/',
      imageSrc: '../../assets/imgs/Flashaholic-screenshot.png',
      description:
        'Flashaholic is full stack application that allows users to create and view decks of flash cards for studying. The project uses Express, Express-Handlebars, Express-Session, MySQL2, Nodemon, Sequelize, Bootstrap, Validator, bcrypt, Connect-Session-Sequelize, dotenv, and GitHub.',
    },

    {
      name: 'Tech Blog',
      githubLink: 'https://github.com/pmacdonald07/tech-blog-mvc',
      deployedLink: 'https://floating-cliffs-88153.herokuapp.com/',
      imageSrc: `../../assets/imgs/social-network-api.png`,
      description:
        "Tech Blog is a full-stack application that serves as a blog-style website where users can post and comment on other user's posts. Tech Blog follows the MVC paradigm (Model, View, Controller). This project uses MySQL2, Sequelize, Connect-Session-Sequelize, Express, Express-Handlebars, Express-Session, bcrypt, and Dotenv.",
    },
    {
      name: 'Python Newsfeed',
      githubLink: 'https://github.com/pmacdonald07/python-newsfeed',
      deployedLink: 'https://python-newsfeed-23.herokuapp.com/',
      imageSrc: `../../assets/imgs/weather-dashboard.png`,
      description:
        'Python Newsfeed is an application written in Python. The application allows users to sign up, create, edit, and delete posts, comment on posts, and upvote posts. It uses MySQL, SQLAlchemy, Jinja, Flask, bcrypt, and Gunicorn.',
    },
    {
      name: 'Meal Maker',
      githubLink: 'https://github.com/pmacdonald07/Meal-Maker',
      deployedLink: 'https://pmacdonald07.github.io/Meal-Maker/',
      imageSrc: `../../assets/imgs/Meal-Maker-Final.png`,
      description:
        'Meal Maker is a front end web application that uses server side APIs to generate recipes based on user input and dietary restrictions. This project uses JQuery, JQuery UI, Bulma, Spoonacular API, TheCocktailDB API, and GitHub',
    },
    {
      name: 'Note Taker',
      githubLink: 'https://github.com/pmacdonald07/note-taker',
      deployedLink: 'https://fierce-sierra-21623.herokuapp.com/',
      imageSrc: `../../assets/imgs/note-taker.png`,
      description:
        'Note Taker allows a user to create notes on a webpage and save them to a server run with Express.js. The data for their notes is saved to a json file using fetch requests, api end points, and Express routes.',
    },
  ];

  const [modal, setModal] = useState({
    modalOpen: false,
    projectName: '',
    projectDescription: '',
  });

  const toggle = project =>
    setModal({
      modalOpen: !modal.modalOpen,
      projectName: project.name,
      projectDescription: project.description,
    });

  return (
    <Col className="col col-md-9 pl-3 page-content justify-content-between d-block">
      <Row>
        {projectArray.map((project, i) => (
          <Card
            className="col-12 col-sm-6 col-md-5 mb-3 p-0 mx-auto project-cards"
            key={project.name}
            inverse
          >
            <img
              alt={project.name}
              src={require(`../../assets/imgs/${i}.png`)}
              className="project-imgs"
            />
            <CardImgOverlay className="text-center border-top border-dark d-flex justify-content-center align-items-end">
              <CardLink>
                <i
                  class="bi bi-chat-square-dots hide card-icon"
                  onClick={() => toggle(project)}
                ></i>
              </CardLink>
              <CardLink href={project.githubLink}>
                <i className="bi bi-github mx-auto hide card-icon"></i>
              </CardLink>
              <CardLink href={project.deployedLink}>
                <i className="bi bi-app-indicator hide card-icon"></i>
              </CardLink>
            </CardImgOverlay>
          </Card>
        ))}
      </Row>
      <Modal isOpen={modal.modalOpen} toggle={toggle} centered={true}>
        <ModalHeader toggle={toggle}>{modal.projectName}</ModalHeader>
        <ModalBody>{modal.projectDescription}</ModalBody>
      </Modal>
    </Col>
  );
};

export default Project;
