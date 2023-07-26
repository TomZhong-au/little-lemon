import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <header className="section-grid header-section">
      <div className="section-content-wrapper flex-container header-wrapper">
        <div>
          <img src="./assets/logo.svg" alt="logo" />
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
