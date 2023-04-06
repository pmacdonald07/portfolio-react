import Navigation from '../Navigation';

const Header = ({ currentPage, handlePageChange }) => {
  return (
    <header className="d-md-flex d-block flex-wrap justify-content-between px-1 m-3">
      <h2 className="text-center">Patrick MacDonald</h2>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </header>
  );
};

export default Header;
