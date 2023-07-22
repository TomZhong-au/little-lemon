import { useRef, useState } from "react";
import { PrimaryButton } from "../Buttons";

const BookingForm = ({ availableTimes, changeTimes, submitForm }) => {
  const [date, setDate] = useState("");
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = new FormData(formRef.current);
    submitForm(values);
  };

  return (
    <>
      <h1 className="booking-title">Book a Table</h1>
      <form
        style={{
          // display: "grid",
          maxWidth: "350px",
          gap: "20px",
          marginBottom: "2rem",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          className="booking-input"
          type="date"
          id="res-date"
          value={date}
          name="date"
          onChange={(e) => {
            setDate(e.target.value);
            //change available times according to date value
            changeTimes({ payload: e.target.value });
          }}
        />

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" name="time" className="booking-input">
          {availableTimes.map((time) => (
            <option key={time} className="booking-input">
              {time}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          className="booking-input"
          type="number"
          min="1"
          max="10"
          id="guests"
          name="guests"
          defaultValue={1}
        />

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" name="occasion" className="booking-input">
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <PrimaryButton>Make Your reservation</PrimaryButton>
        </div>
      </form>
    </>
  );
};

export default BookingForm;
