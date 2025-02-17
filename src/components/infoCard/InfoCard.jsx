import styles from "./InfoCard.module.css";
import { GiScorpion } from "react-icons/gi";

function InfoCard({ title, description, img }) {
  return (
    <li style={{ backgroundImage: `url(/${img})` }} className={styles.listItem}>
      <div className={styles.titleContainer}>
        <GiScorpion color="white" style={{zIndex: "1000", fontSize: "20px"}}/>
        <strong>{title}</strong>
      </div>
      <p>{description}</p>
    </li>
  );
}

export default InfoCard;
