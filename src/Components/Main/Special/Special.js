import MenuCard from "./MenuCard/MenuCard";
import { menuData } from "../../../mock/menuData";
import styles from "./Special.module.css";

const Special = () => {
  return (
    <section className="section-grid">
      <div className="section-content-wrapper" style={{ marginBottom: "3rem" }}>
        <div
          className="flex-container"
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <h1 className={styles.title}>This weeks special!</h1>
          <a href="/" className="hero-cta">
            Online Menu
          </a>
        </div>

        <div className={styles.menuCardsWrapper}>
          {menuData.map((menu) => (
            <MenuCard {...menu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Special;
