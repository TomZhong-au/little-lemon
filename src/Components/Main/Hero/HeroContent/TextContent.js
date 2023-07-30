import { Link } from "react-router-dom";
import { ROUTES } from "../../../../pages/routes";
import "./TextContent.css";

const TextContent = () => {
  return (
    <div className="hero-text-content">
      <h1 className="hero-title" aria-label="restaurant name">
        Little Lemon
      </h1>
      <span className="hero-subtitle" aria-label="restaurant location">
        Chicago
      </span>
      <span className="hero-text" aria-label="restaurant description">
        We are a family owned Mediterranean restaurant, focused on traditional
        recipes served with a modern twist.
      </span>

      <Link to={ROUTES.booking.path} className="cta">
        Reserve a Table
      </Link>
    </div>
  );
};

export default TextContent;
