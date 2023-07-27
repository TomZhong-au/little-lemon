import { NAVLINKS } from "../../pages/routes";
import style from "./Navbar.module.css";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav>
      <ul>
        {NAVLINKS.map(({ text, path }) => (
          <li key={text}>
            <a
              href={path}
              className={pathname === path ? style.currentPage : ""}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
