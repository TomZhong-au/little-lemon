import Nav from "./Nav";

const Header = () => {
  return (
    <header className="section-grid">
      <div className="section-content-wrapper flex-container header-wrapper">
        <div>
          <img src="./assets/logo.svg" alt="logo" />
        </div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
