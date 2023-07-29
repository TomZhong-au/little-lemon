import { useReducer } from "react";
import BookingForm from "../Components/BookingForm/BookingForm";
import { updateTimes } from "../Components/BookingForm/reducer";
import { initialzeTimes } from "../Components/BookingForm/reducer";
import { useNavigate } from "react-router-dom";
import "./BookingPage.css";

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initialzeTimes());
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const result = submitAPI(formData); //eslint-disable-line
    if (!result) return;
    localStorage.setItem("confirmedBooking", JSON.stringify(formData));
    navigate("/confirm");
    return;
  };

  return (
    <main style={{ backgroundColor: "#edefee" }}>
      <div className="booking-title">
        <h2>Book a Table</h2>
      </div>
      <div className="container flex-container booking-section">
        <BookingForm
          availableTimes={availableTimes}
          changeTimes={dispatch}
          submitForm={submitForm}
        />
      </div>
    </main>
  );
};

export default BookingPage;
