import { Nav, NavLink } from "reactstrap";

const Navigation = ({ currentPage, handlePageChange }) => {
  const determineIsActive = (tabName, currentPage) => {
    let linkClass = "";
    if (tabName === currentPage) {
      linkClass += " active";
    }
    return linkClass;
  };

  return (
    <Nav tabs justified className="text-reset">
      <NavLink
        href="#about"
        className={determineIsActive("About", currentPage)}
        onClick={() => handlePageChange("About")}
      >
        About
      </NavLink>
      <NavLink
        href="#portfolio"
        className={determineIsActive("Portfolio", currentPage)}
        onClick={() => handlePageChange("Portfolio")}
      >
        Portfolio
      </NavLink>
      <NavLink
        href="#resume"
        className={determineIsActive("Resume", currentPage)}
        onClick={() => handlePageChange("Resume")}
      >
        Resume
      </NavLink>
      <NavLink
        href="#contact"
        className={determineIsActive("Contact", currentPage)}
        onClick={() => handlePageChange("Contact")}
      >
        Contact
      </NavLink>
    </Nav>
  );
};

export default Navigation;
