import { BiError } from "react-icons/bi";
import { SecondaryNavButton } from "../Components/NavigationButton/NavigationButton";
import { ROUTES } from "./routes";

const NotFound = () => {
  return (
    <div className=".section-content-wrapper under-construction">
      <div>
        <BiError size="64px" />
      </div>
      <h2>Error. Page Do not exist.</h2>
      <div>
        <SecondaryNavButton href={ROUTES.home.path}>
          Back to Home
        </SecondaryNavButton>
      </div>
    </div>
  );
};

export default NotFound;
