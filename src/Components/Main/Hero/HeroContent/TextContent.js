import { ROUTES } from "../../../../pages/routes";
import { PrimaryNavButton } from "../../../NavigationButton/NavigationButton";
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

      <PrimaryNavButton href={ROUTES.booking.path}>
        Reserve a Table
      </PrimaryNavButton>
    </div>
  );
};

export default TextContent;
