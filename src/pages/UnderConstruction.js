import { FaPersonDigging } from "react-icons/fa6";

const UnderConstruction = () => {
  return (
    <div className=".section-content-wrapper under-construction">
      {/* <FontAwesomeIcon icon={faPersonDigging} size="3x" /> */}
      <div>
        <FaPersonDigging size="64px" />
      </div>
      <h2>Page under construction</h2>
    </div>
  );
};

export default UnderConstruction;
