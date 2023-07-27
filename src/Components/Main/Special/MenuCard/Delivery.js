import styles from "./MenuCard.module.css";
import { FaMotorcycle } from "react-icons/fa6";

export default function Delivery() {
  return (
    <button className={styles.deliveryBtn}>
      Order a delivery <FaMotorcycle size={"1.2rem"} className="react-icon" />
    </button>
  );
}
