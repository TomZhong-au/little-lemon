import MenuCard from "./MenuCard/MenuCard";
import { menuData } from "../../../mock/menuData";
import { ROUTES } from "../../../pages/routes";
import "./Special.css";

const Special = () => {
  return (
    <section className="special-section">
      <div className="container">
        <div className="special-title-row">
          <h1>This weeks special!</h1>
          <a
            href={ROUTES.menu.path}
            className="cta special-menu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Online Menu
          </a>
        </div>

        <div className="menucards-container">
          {menuData.map((menu) => (
            <MenuCard {...menu} key={menu.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Special;
