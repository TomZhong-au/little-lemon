import { useReducer, useState } from "react";
import BookingForm from "../Components/BookingForm/BookingForm";
import { updateTimes } from "../Components/BookingForm/reducer";
import { initialzeTimes } from "../Components/BookingForm/reducer";
import ConfirmBooking from "../Components/ConfirmBooking/ConfirmBooking";
import { useNavigate } from "react-router-dom";

const initialvalue = {
  date: "",
  time: "",
  guests: 0,
  occasion: "",
};

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initialzeTimes());
  const [bookingSucess, setBookingSucess] = useState(false);
  const [bookingInfo, setBookingInfo] = useState();
  const navigate = useNavigate();

  const submitForm = (formData) => {
    setBookingInfo(formDataToObject(formData));
    setBookingSucess(submitAPI(formData)); //eslint-disable-line
    return;
  };

  const handleNewBooking = () => {
    setBookingSucess(false);
    setBookingInfo(initialvalue);
  };

  const directToHome = () => {
    navigate("/");
  };

  return (
    <main className="section-grid" style={{ backgroundColor: "#edefee" }}>
      <div className="section-content-wrapper flex-container booking-section">
        {bookingSucess ? (
          <ConfirmBooking
            bookingInfo={bookingInfo}
            handleNewBooking={handleNewBooking}
            directToHome={directToHome}
          />
        ) : (
          <BookingForm
            availableTimes={availableTimes}
            changeTimes={dispatch}
            submitForm={submitForm}
          />
        )}
      </div>
    </main>
  );
};

export default BookingPage;

function formDataToObject(formData) {
  const obj = {};
  formData.forEach((value, key) => {
    if (!obj.hasOwnProperty(key)) {
      obj[key] = value;
    } else {
      if (!Array.isArray(obj[key])) {
        obj[key] = [obj[key]];
      }
      obj[key].push(value);
    }
  });
  return obj;
}
