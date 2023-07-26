import Delivery from "./Delivery";
import styles from "./MenuCard.module.css";

export default function MenuCard({ name, price, description, photo }) {
  return (
    <div className={styles.cardWrapper}>
      <div
        aria-label="menu photo"
        // style={{ width: "265px", height: "175px", overflow: "hidden" }}
      >
        <img
          src={`./assets/${photo}`}
          alt="menu"
          width={265}
          className={styles.photo}
        />
      </div>

      <div style={{ padding: "1.5rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "2rem",
          }}
        >
          <div aria-label="menu name" className={styles.name}>
            {name}
          </div>

          <div className={styles.price}>{price.toFixed(2)}</div>
        </div>
        <div className={styles.description}>{description}</div>
        <div className={styles.deliveryBtnWrapper}>
          <Delivery />
        </div>
      </div>
    </div>
  );
}
