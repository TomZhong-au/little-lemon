import { ROUTES } from "../../../pages/routes";
import { PrimaryNavButton } from "../../NavigationButton/NavigationButton";

const TextContent = () => {
  return (
    <div
      style={{
        width: "50%",
        display: "flex",
        flexDirection: "column",
        paddingLeft: "1rem",
      }}
    >
      <h2 className="hero-title" aria-label="restaurant name">
        Little Lemon
      </h2>
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
