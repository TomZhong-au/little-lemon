import styles from "./ReviewCard.module.css";
import Stars from "./Stars";

const ReviewCard = ({ review }) => {
  const { name, avatar, rating, review: comment } = review;
  return (
    <article className={styles.cardWrapper}>
      <img src={`./assets/${avatar}`} alt="avatar" />
      <h4>{name}</h4>
      <Stars rating={rating} />
      <blockquote>
        <p>"{comment}"</p>
      </blockquote>
    </article>
  );
};

export default ReviewCard;
