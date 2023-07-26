import { NAVLINKS } from "../../pages/routes";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        {NAVLINKS.map(({ text, url }) => (
          <li key={text} className={`${style.navlist} ${style.currentPage}`}>
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
