import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useLocation, Link } from "react-router-dom";
import { ROUTES, NAVLINKS } from "../../pages/routes";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const { pathname } = useLocation();
  const [isShown, setIsShown] = useState(false);
  const toggleMenu = () => setIsShown((value) => !value);

  return (
    <header>
      <div className="container nav-bar">
        <Link className="nav-bar-logo" to={ROUTES.home.path}>
          <img src="./assets/logo.svg" alt="logo" width={"250"} />
        </Link>

        <button
          className="nav-bar-hamburger"
          type="button"
          onClick={toggleMenu}
        >
          {isShown ? (
            <FontAwesomeIcon icon={faXmark} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="2x" />
          )}{" "}
        </button>
        {/* <Navbar /> */}
        <ul
          className={isShown ? "nav-bar-links expanded" : "nav-bar-links"}
          onClick={toggleMenu}
        >
          {NAVLINKS.map(({ text, path }) => (
            <li key={text}>
              <a
                href={path}
                className={pathname === path ? "current-page" : ""}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
