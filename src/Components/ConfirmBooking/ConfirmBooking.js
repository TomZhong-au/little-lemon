import BookingInfoTable from "./BookingInfoTable";
import { useEffect, useState } from "react";
import { ROUTES } from "../../pages/routes";
import { Link } from "react-router-dom";
import "./ConfirmBooking.css";

const ConfirmBooking = () => {
  const [bookingInfo, setBookingInfo] = useState({});
  useEffect(() => {
    const value = localStorage.getItem("confirmedBooking");
    if (value) setBookingInfo(JSON.parse(value));
  }, []);

  return (
    <>
      <h3 className="confirm-title">Your booking has been confirmed:</h3>

      <BookingInfoTable bookinginfo={bookingInfo} />

      <p className="confirm-msg">You will soon receive a confirmation email.</p>
      <div className="confirm-nav-wrapper">
        <Link to={ROUTES.booking.path} className="confirm-nav-button">
          {" "}
          Another Booking{" "}
        </Link>
        <Link to={ROUTES.home.path} className="confirm-nav-button">
          {" "}
          Back to Home{" "}
        </Link>
      </div>
    </>
  );
};

export default ConfirmBooking;
