import { FaPersonDigging } from "react-icons/fa6";
import { SecondaryNavButton } from "../Components/NavigationButton/NavigationButton";
import { ROUTES } from "./routes";
const UnderConstruction = () => {
  return (
    <div className=".section-content-wrapper under-construction">
      <div>
        <FaPersonDigging size="64px" />
      </div>
      <h2>Page under construction</h2>

      <div>
        <SecondaryNavButton href={ROUTES.home.path}>
          Back to Home
        </SecondaryNavButton>
      </div>
    </div>
  );
};

export default UnderConstruction;
