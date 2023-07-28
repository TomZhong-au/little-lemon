import { NAVLINKS } from "../../pages/routes";
import "./Navbar.css";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="header-nav">
      <ul>
        {NAVLINKS.map(({ text, path }) => (
          <li key={text}>
            <a href={path} className={pathname === path ? "current-page" : ""}>
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
