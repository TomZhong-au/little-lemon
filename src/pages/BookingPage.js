import { useReducer } from "react";
import BookingForm from "../Components/BookingForm/BookingForm";
import { updateTimes } from "../Components/BookingForm/reducer";
import { initialzeTimes } from "../Components/BookingForm/reducer";

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initialzeTimes());

  return (
    <main className="section-grid" style={{ backgroundColor: "#edefee" }}>
      <div className="section-content-wrapper flex-container booking-section">
        <h1 className="booking-title">Book a Table</h1>
        <BookingForm availableTimes={availableTimes} changeTimes={dispatch} />
      </div>
    </main>
  );
};

export default BookingPage;
