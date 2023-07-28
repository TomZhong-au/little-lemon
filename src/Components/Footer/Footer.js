import Contact from "./Contact";
import Navigation from "./Navigation";
import Social from "./Social";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className="section-content-wrapper footer-grid">
        <div className={styles.footerGrid}>
          <img src="./assets/logo.svg" alt="logo" className={styles.logo} />
          <Navigation />
          <Contact />
          <Social />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
