import { numberToArr } from "../../../../util/functions";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";

const Stars = ({ rating }) => {
  return (
    <span>
      {numberToArr(rating).map((number, index) => {
        return (
          <span key={index}>
            {number === 1 ? (
              <BsStarFill />
            ) : number === 0.5 ? (
              <BsStarHalf />
            ) : (
              <BsStar />
            )}
          </span>
        );
      })}
    </span>
  );
};

export default Stars;
