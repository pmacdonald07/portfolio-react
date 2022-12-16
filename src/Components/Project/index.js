import { Card, CardBody, CardTitle, CardLink, Row } from "reactstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const Project = () => {
  const projectArray = [
    {
      name: "Flashaholic",
      githubLink: "https://github.com/pmacdonald07/Flashaholic",
      deployedLink: "https://shielded-sea-30882.herokuapp.com/",
      imageSrc: "../../assets/imgs/Flashaholic-screenshot.png",
    },
    {
      name: "Meal Maker",
      githubLink: "https://github.com/pmacdonald07/Meal-Maker",
      deployedLink: "https://pmacdonald07.github.io/Meal-Maker/",
      imageSrc: `../../assets/imgs/Meal-Maker-Final.png`,
    },
    {
      name: "Note Taker",
      githubLink: "https://github.com/pmacdonald07/note-taker",
      deployedLink: "https://fierce-sierra-21623.herokuapp.com/",
      imageSrc: `../../assets/imgs/note-taker.png`,
    },
    {
      name: "Social Network API",
      githubLink: "https://github.com/pmacdonald07/social-network-api",
      deployedLink:
        "https://drive.google.com/file/d/1_qKEubWP7oLLxCirawkqJR2mBLepMPhU/view",
      imageSrc: `../../assets/imgs/social-network-api.png`,
    },
    {
      name: "Weather Dashboard",
      githubLink: "https://github.com/pmacdonald07/weather-dashboard",
      deployedLink: "https://pmacdonald07.github.io/weather-dashboard/",
      imageSrc: `../../assets/imgs/weather-dashboard.png`,
    },
    {
      name: "Team Profile Generator",
      githubLink: "https://github.com/pmacdonald07/team-profile-generator",
      deployedLink:
        "https://drive.google.com/file/d/14a8gd0CbEbUEP4ud7IB1Vn1KKTCH_00e/view",
      imageSrc: `../../assets/imgs/team-profile-generator.png`,
    },
  ];

  return (
    <Row className="justify-content-between d-block d-sm-flex">
      {projectArray.map((project, i) => (
        <Card
          className="col-12 col-sm-6 col-md-5 mb-3 p-0 mx-auto project-cards"
          key={project.name}
        >
          <img
            alt={project.name}
            src={require(`../../assets/imgs/${i}.png`)}
            className="project-imgs"
          />
          <CardBody className="text-center">
            <CardTitle tag="h5">{project.name}</CardTitle>
            <CardLink href={project.githubLink}>
              <i className="bi bi-github mx-auto"></i>
            </CardLink>
            <CardLink href={project.deployedLink}>
              <i className="bi bi-app-indicator"></i>
            </CardLink>
          </CardBody>
        </Card>
      ))}
    </Row>
  );
};

export default Project;
