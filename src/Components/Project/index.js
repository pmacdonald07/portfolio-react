import { Card, CardLink, Row, Col, CardImgOverlay } from 'reactstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Project = () => {
  const projectArray = [
    {
      name: 'Our Place',
      githubLink: 'https://github.com/awchen85/project-3',
      deployedLink: 'https://p3-our-place.herokuapp.com/',
      imageSrc: `../../assets/imgs/our-place.jpg`,
    },
    {
      name: 'Flashaholic',
      githubLink: 'https://github.com/pmacdonald07/Flashaholic',
      deployedLink: 'https://shielded-sea-30882.herokuapp.com/',
      imageSrc: '../../assets/imgs/Flashaholic-screenshot.png',
    },
    {
      name: 'Meal Maker',
      githubLink: 'https://github.com/pmacdonald07/Meal-Maker',
      deployedLink: 'https://pmacdonald07.github.io/Meal-Maker/',
      imageSrc: `../../assets/imgs/Meal-Maker-Final.png`,
    },
    {
      name: 'Tech Blog',
      githubLink: 'https://github.com/pmacdonald07/tech-blog-mvc',
      deployedLink: 'https://floating-cliffs-88153.herokuapp.com/',
      imageSrc: `../../assets/imgs/social-network-api.png`,
    },
    {
      name: 'Python Newsfeed',
      githubLink: 'https://github.com/pmacdonald07/python-newsfeed',
      deployedLink: 'https://python-newsfeed-23.herokuapp.com/',
      imageSrc: `../../assets/imgs/weather-dashboard.png`,
    },
    {
      name: 'Note Taker',
      githubLink: 'https://github.com/pmacdonald07/note-taker',
      deployedLink: 'https://fierce-sierra-21623.herokuapp.com/',
      imageSrc: `../../assets/imgs/note-taker.png`,
    },
  ];

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
    </Col>
  );
};

export default Project;
