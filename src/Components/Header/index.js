import Navigation from "../Navigation";

const Header = ({ currentPage, handlePageChange }) => {
  return (
    <header className="d-flex flex-wrap justify-content-between px-1 m-3">
      <h2>
        <a href="/" className="text-decoration-none text-reset">
          Patrick MacDonald
        </a>
      </h2>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </header>
  );
};

export default Header;
