import { useRef, useState } from "react";
import TimeSlots from "./TimeSlots";

const BookingForm = () => {
  const [date, setDate] = useState("");
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const values = new FormData(formRef.current);

    for (const value of values) {
      console.log(value);
    }
  };

  return (
    <form
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        onChange={(e) => setDate(e.target.value)}
        value={date}
        name="date"
      />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" name="time">
        <TimeSlots date={date} />
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        name="guests"
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" name="occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;

/**
 * Gets the current date in the format "dd/mm/yyyy".
 * @returns {string} The current date in the format "dd/mm/yyyy".
 */
function getTodayDateString() {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = date.getFullYear();

  // Concatenate the day, month, and year with "/" separator
  return `${year}-${month}-${day}`;
}
