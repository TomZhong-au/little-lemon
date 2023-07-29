import MenuCard from "./MenuCard/MenuCard";
import { menuData } from "../../../mock/menuData";
import { ROUTES } from "../../../pages/routes";
import { PrimaryNavButton } from "../../NavigationButton/NavigationButton";
import "./Special.css";

const Special = () => {
  return (
    <section className="special-section">
      <div className="container">
        <div className="special-title-row">
          <h1>This weeks special!</h1>
          <PrimaryNavButton href={ROUTES.menu.path}>
            Online Menu
          </PrimaryNavButton>
        </div>

        <div className="menucards-container">
          {menuData.map((menu) => (
            <MenuCard {...menu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Special;
