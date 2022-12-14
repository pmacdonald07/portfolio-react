import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const determinePage = () => {
    if (currentPage === "About") {
      return <About />;
    } else if (currentPage === "Portfolio") {
      return <Portfolio />;
    } else if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App" id="page-container">
      <div id="content-wrap">
        <Header
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        ></Header>
        {determinePage()}
        <Footer />
      </div>
    </div>
  );
}

export default App;
