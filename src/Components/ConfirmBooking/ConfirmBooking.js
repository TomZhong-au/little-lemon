import BookingInfoTable from "./BookingInfoTable";
import { useEffect, useState } from "react";
import { SecondaryNavButton } from "../NavigationButton/NavigationButton";
import { ROUTES } from "../../pages/routes";

const ConfirmBooking = () => {
  const [bookingInfo, setBookingInfo] = useState({});
  useEffect(() => {
    const value = localStorage.getItem("confirmedBooking");
    if (value) setBookingInfo(JSON.parse(value));
  }, []);

  return (
    <>
      <h1 className="booking-title">Booking Success </h1>

      <h3>Your booking informaiton:</h3>
      <BookingInfoTable bookinginfo={bookingInfo} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "50%",
          marginTop: "5rem",
        }}
      >
        <SecondaryNavButton href={ROUTES.booking.path}>
          Another Booking
        </SecondaryNavButton>

        <SecondaryNavButton href={ROUTES.home.path}>
          Back to Home
        </SecondaryNavButton>
      </div>
    </>
  );
};

export default ConfirmBooking;
