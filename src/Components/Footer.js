import Contact from "./Footer/Contact";
import Navigation from "./Footer/Navigation";
import Social from "./Footer/Social";

const Footer = () => {
  return (
    <footer className="section-grid" style={{ backgroundColor: "bisque" }}>
      <div className="section-content-wrapper footer-grid">
        <div>
          <img src="./assets/logo.svg" alt="logo" />
        </div>
        <Navigation />
        <Contact />
        <Social />
      </div>
    </footer>
  );
};

export default Footer;
