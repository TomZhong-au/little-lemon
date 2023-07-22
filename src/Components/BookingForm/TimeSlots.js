import { useEffect, useReducer } from "react";

const TimeSlots = ({ date }) => {
  const [timeslots, dispatch] = useReducer(reducerFn, [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ]);

  useEffect(() => {
    // await fetching slots
    //setTimeslots()
  }, [date]);

  return (
    <>
      {timeslots.map((slot) => (
        <option key={slot}>{slot}</option>
      ))}
    </>
  );
};

export default TimeSlots;

function reducerFn(state, action) {
  if (action.type === "set") return action.payload;
  return state;
}
