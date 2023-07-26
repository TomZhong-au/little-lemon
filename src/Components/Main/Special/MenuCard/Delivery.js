import styles from "./MenuCard.module.css";

export default function Delivery() {
  return (
    <button className={styles.deliveryBtn}>
      Order a delivery <img src="./assets/motorbike.svg" alt="motorbike" />
    </button>
  );
}
