import { customerReviewData } from "../../../mock/customerReview";
import ReviewCard from "./ReviewCard";
import styles from "./Testimonial.module.css";

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className={`${styles.container} section-content-wrapper`}>
        <h2>What people say about us!</h2>
        {customerReviewData.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
