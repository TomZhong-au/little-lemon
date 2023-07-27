import { Link } from "react-router-dom";
import styles from "./NavigationButtom.module.css";

export const PrimaryNavButton = ({ href, children }) => {
  return (
    <Link to={href} className={styles.primary} aria-label="navigation button">
      {children}
    </Link>
  );
};

export const SecondaryNavButton = ({ href, children }) => {
  return (
    <Link to={href} className={styles.secondary} aria-label="navigation button">
      {children}
    </Link>
  );
};
