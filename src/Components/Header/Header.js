import Navbar from "../Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <div className="container flex-container header-wrapper">
        <div>
          <img src="./assets/logo.svg" alt="logo" />
          <button>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
