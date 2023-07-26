import { NAVLINKS } from "../../pages/routes";
import style from "./Navbar.module.css";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav>
      <ul>
        {NAVLINKS.map(({ text, url }) => (
          <li
            key={text}
            className={`${style.navlist} ${
              pathname === url ? style.currentPage : ""
            }`}
          >
            <a href={url} className="nav-link">
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
